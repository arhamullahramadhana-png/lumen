const Auth = (() => {
  const K_USERS = "lumen_users";
  const K_SESSION = "lumen_session";

  const keyFav = (u) => `lumen_fav_${u}`;
  const keyLike = (u) => `lumen_like_${u}`;

  const read = (k, fallback) => {
    try {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : fallback;
    } catch {
      return fallback;
    }
  };
  const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  function users() {
    return read(K_USERS, []);
  }

  function currentUser() {
    const u = localStorage.getItem(K_SESSION);
    return u || null;
  }

  function getSession() {
    const username = currentUser();
    if (!username) return null;
    const user = users().find((x) => x.username === username);
    if (!user) {
      localStorage.removeItem(K_SESSION);
      return null;
    }
    return user;
  }

  function register({ name, username, email, password }) {
    const list = users();
    const errs = [];
    if (!name || name.trim().length < 2) errs.push("Nama minimal 2 karakter.");
    if (!/^[a-z0-9_]{3,20}$/i.test(username || ""))
      errs.push("Username 3–20 karakter, hanya huruf, angka, dan garis bawah.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || ""))
      errs.push("Format email tidak valid.");
    if (!password || password.length < 6)
      errs.push("Password minimal 6 karakter.");
    if (list.some((u) => u.username.toLowerCase() === (username || "").toLowerCase()))
      errs.push("Username sudah terdaftar.");
    if (list.some((u) => u.email.toLowerCase() === (email || "").toLowerCase()))
      errs.push("Email sudah terdaftar.");
    if (errs.length) return { ok: false, errors: errs };

    const user = {
      name: name.trim(),
      username: username.trim(),
      email: email.trim(),
      password,
      joined: new Date().toISOString(),
    };
    list.push(user);
    write(K_USERS, list);
    localStorage.setItem(K_SESSION, user.username);
    return { ok: true, user };
  }

  function login(username, password) {
    const user = users().find(
      (u) => u.username.toLowerCase() === (username || "").trim().toLowerCase()
    );
    if (!user) return { ok: false, errors: ["Username belum terdaftar."] };
    if (user.password !== password) return { ok: false, errors: ["Password salah."] };
    localStorage.setItem(K_SESSION, user.username);
    return { ok: true, user };
  }

  function logout() {
    localStorage.removeItem(K_SESSION);
  }

  /* ---- Favorit foto & artikel disukai ---- */
  function favs() {
    const u = currentUser();
    return u ? read(keyFav(u), []) : [];
  }
  function likes() {
    const u = currentUser();
    return u ? read(keyLike(u), []) : [];
  }
  function isFav(id) {
    return favs().includes(id);
  }
  function isLiked(slug) {
    return likes().includes(slug);
  }
  function toggleFav(id) {
    if (!currentUser()) return { ok: false, needLogin: true };
    const list = favs();
    const i = list.indexOf(id);
    if (i >= 0) list.splice(i, 1);
    else list.push(id);
    write(keyFav(currentUser()), list);
    return { ok: true, active: i < 0 };
  }
  function toggleLike(slug) {
    if (!currentUser()) return { ok: false, needLogin: true };
    const list = likes();
    const i = list.indexOf(slug);
    if (i >= 0) list.splice(i, 1);
    else list.push(slug);
    write(keyLike(currentUser()), list);
    return { ok: true, active: i < 0 };
  }

  return {
    register, login, logout,
    currentUser, getSession,
    favs, likes, isFav, isLiked, toggleFav, toggleLike,
  };
})();
