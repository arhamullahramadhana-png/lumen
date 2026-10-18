/* ============================================================
   LUMEN — Perilaku halaman daftar (daftar.html)
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  if (Auth.getSession()) {
    location.href = "dashboard.html";
    return;
  }

  const errBox = document.getElementById("errors");
  document.getElementById("form-daftar").addEventListener("submit", (e) => {
    e.preventDefault();
    const r = Auth.register({
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
    if (!r.ok) {
      errBox.innerHTML = r.errors.map(esc).join("<br>");
      errBox.classList.add("show");
      return;
    }
    toast("Akun dibuat. Selamat datang, " + r.user.name.split(" ")[0] + ".", "sukses");
    location.href = "dashboard.html";
  });
});
