/* ============================================================
   LUMEN — Skrip bersama (dunia Pelat Spektrum)
   ============================================================ */

/* DUNIA: Pelat Spektrum (seed 4a66d831) — arsip pelat cahaya.
   THESIS: setiap fenomena adalah pelat terukur (nomor, kode, λ); menolak hero gradasi + kartu glass template AI.
   OWN-WORLD: ground emulsi #0d1118, pelat #151b26, amber #f0b429, sian #6fc7d4, mawar #d97a9e; Archivo/Public Sans/Spline Sans Mono (mono hanya untuk data); sudut tegas, garis 1px.
   STORY: pengunjung menelusuri arsip cahaya, membaca kausalitasnya, lalu menyimpan pilihan pribadi setelah mendaftar.
   FIRST VIEWPORT: sampul foto aurora full-bleed + masthead LUMEN + baris mono "20 PELAT · 7 KATEGORI", aksi utama amber persegi.
   FORM: katalog pelat ilmiah; pita spektrum berlabel teks (bukan warna sendirian); lightbox potongan keras.
   FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function encodePath(p) {
  return p.split("/").map(encodeURIComponent).join("/");
}

function fmtTanggal(iso) {
  const b = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const d = new Date(iso);
  return `${d.getDate()} ${b[d.getMonth()]} ${d.getFullYear()}`;
}

function noPelat(id) {
  const i = FENOMENA.findIndex((x) => x.id === id);
  return String(i + 1).padStart(2, "0");
}

/* --- Favorit: tombol hati berada di HTML, skrip hanya menyinkronkan
   statusnya dengan akun yang sedang masuk dan memasang kliknya. --- */
function sinkronFav(root = document) {
  const favs = Auth.favs();
  root.querySelectorAll("[data-foto] .fav").forEach((btn) => {
    const on = favs.includes(btn.closest("[data-foto]").dataset.foto);
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", String(on));
  });
}

function pasangKlikFav(root = document) {
  root.querySelectorAll("[data-foto] .fav").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.closest("[data-foto]").dataset.foto;
      const r = Auth.toggleFav(id);
      if (r.needLogin) {
        toast("Masuk dulu untuk menyimpan pelat.");
        const kembali = location.pathname.split("/").pop() || "index.html";
        setTimeout(() => (location.href = "login.html?next=" + encodeURIComponent(kembali)), 900);
        return;
      }
      btn.classList.toggle("on", r.active);
      btn.setAttribute("aria-pressed", String(r.active));
      toast(r.active ? "Pelat disimpan." : "Pelat dihapus dari simpanan.", "sukses");
    });
  });
  sinkronFav(root);
}

function toast(pesan, jenis = "info") {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.textContent = pesan;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 2600);
}

function requireLogin(redirect) {
  if (!Auth.getSession()) {
    location.href = "login.html?next=" + encodeURIComponent(redirect || location.pathname.split("/").pop());
    return false;
  }
  return true;
}

/* --- Navigasi --- */
function renderNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const user = Auth.getSession();
  const halaman = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const aktif = (n) => (halaman === n ? ' aria-current="page" class="nav-link active"' : ' class="nav-link"');

  const areaUser = user
    ? `<a href="dashboard.html"${aktif("dashboard.html")}>Dashboard</a>
       <span class="nav-user">
         <span class="nav-avatar" aria-hidden="true">${esc(user.name.charAt(0).toUpperCase())}</span>
         <span>${esc(user.name.split(" ")[0])}</span>
       </span>
       <button type="button" class="btn btn-line btn-sm" id="btn-logout">Keluar</button>`
    : `<a href="login.html" class="btn btn-line btn-sm">Masuk</a>
       <a href="daftar.html" class="btn btn-primary btn-sm">Daftar</a>`;

  nav.innerHTML = `
    <div class="container nav-inner">
      <a class="brand" href="index.html" aria-label="Lumen — sampul">
        <span class="brand-name">LUMEN</span>
        <span class="brand-sub">Katalog Pelat Cahaya</span>
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Buka menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-menu" id="nav-menu">
        <a href="index.html"${aktif("index.html")}>Home</a>
        <a href="galeri.html"${aktif("galeri.html")}>Galeri</a>
        <a href="news.html"${aktif("news.html")}>News</a>
        <a href="about.html"${aktif("about.html")}>About</a>
        <div class="nav-auth">${areaUser}</div>
      </div>
    </div>`;

  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    const buka = menu.classList.toggle("open");
    toggle.classList.toggle("open", buka);
    toggle.setAttribute("aria-expanded", buka);
  });

  const btnOut = document.getElementById("btn-logout");
  if (btnOut) {
    btnOut.addEventListener("click", () => {
      Auth.logout();
      toast("Anda telah keluar.");
      location.href = "index.html";
    });
  }
}

/* --- Footer --- */
function renderFooter() {
  const f = document.getElementById("footer");
  if (!f) return;
  f.innerHTML = `
    <div class="container footer-inner">
      <div>
        <span class="brand-name">LUMEN</span>
        <p class="footer-tag">Arsip pelat fenomena cahaya alam — dari garis senja sampai aurora.</p>
      </div>
      <nav class="footer-nav" aria-label="Navigasi footer">
        <a href="index.html">Home</a>
        <a href="galeri.html">Galeri</a>
        <a href="news.html">News</a>
        <a href="about.html">About</a>
      </nav>
      <p class="footer-copy">&copy; ${new Date().getFullYear()} Lumen · M. Arhamullah Ramadhan</p>
    </div>`;
}

/* --- Reveal: pelat "proses" sekali --- */
function initReveal() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const els = document.querySelectorAll(".reveal:not(.revealed)");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  initReveal();
});
