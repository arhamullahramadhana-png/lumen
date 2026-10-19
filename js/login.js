document.addEventListener("DOMContentLoaded", () => {
  if (Auth.getSession()) {
    location.href = "dashboard.html";
    return;
  }

  const errBox = document.getElementById("errors");
  document.getElementById("form-login").addEventListener("submit", (e) => {
    e.preventDefault();
    const r = Auth.login(
      document.getElementById("username").value,
      document.getElementById("password").value
    );
    if (!r.ok) {
      errBox.innerHTML = r.errors.map(esc).join("<br>");
      errBox.classList.add("show");
      return;
    }
    const next = new URLSearchParams(location.search).get("next");
    const aman = next && !next.startsWith("http") && !next.startsWith("//") && !next.includes("..");
    toast("Masuk berhasil. Selamat datang, " + r.user.name.split(" ")[0] + ".", "sukses");
    location.href = aman ? next : "dashboard.html";
  });
});
