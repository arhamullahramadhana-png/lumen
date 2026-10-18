/* ============================================================
   LUMEN — Perilaku dashboard (dashboard.html)
   Kerangka halaman ada di HTML; skrip ini mengisinya dengan data
   pengguna dari localStorage (js/auth.js) dan katalog (js/data.js).
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const user = Auth.getSession();
  if (!requireLogin("dashboard.html")) return;

  document.getElementById("salam").textContent = "Halo, " + user.name.split(" ")[0] + ".";
  document.getElementById("avatar").textContent = user.name.charAt(0).toUpperCase();
  document.getElementById("p-nama").textContent = user.name;
  document.getElementById("p-username").textContent = "@" + user.username;
  document.getElementById("p-email").textContent = user.email;
  document.getElementById("p-gabung").textContent = fmtTanggal(user.joined);

  document.getElementById("btn-keluar").addEventListener("click", () => {
    Auth.logout();
    toast("Anda telah keluar.");
    location.href = "index.html";
  });

  const favIds = Auth.favs();
  document.getElementById("s-fav").textContent = favIds.length;
  const lf = document.getElementById("list-fav");
  if (!favIds.length) {
    lf.innerHTML = `<li class="mini-empty" style="border:0;background:none;padding:0">
      Belum ada pelat tersimpan. <a href="galeri.html">Buka galeri &rarr;</a></li>`;
  } else {
    favIds.forEach((id) => {
      const f = FENOMENA.find((x) => x.id === id);
      if (!f) return;
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${encodePath(f.gambar)}" alt="">
        <span class="mono" style="margin-right:4px">№${noPelat(f.id)}</span>
        <a href="galeri.html?foto=${encodeURIComponent(f.id)}">${esc(f.judul)}</a>`;
      lf.appendChild(li);
    });
  }

  const liked = Auth.likes();
  document.getElementById("s-like").textContent = liked.length;
  const ll = document.getElementById("list-like");
  if (!liked.length) {
    ll.innerHTML = `<li class="mini-empty" style="border:0;background:none;padding:0">
      Belum ada artikel disukai. <a href="news.html">Lihat artikel &rarr;</a></li>`;
  } else {
    liked.forEach((slug) => {
      const a = ARTIKEL.find((x) => x.slug === slug);
      if (!a) return;
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${encodePath(a.gambar)}" alt="">
        <a href="artikel.html?slug=${encodeURIComponent(a.slug)}">${esc(a.judul)}</a>`;
      ll.appendChild(li);
    });
  }
});
