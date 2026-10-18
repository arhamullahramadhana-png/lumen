/* ============================================================
   LUMEN — Perilaku halaman artikel (artikel.html)
   Keenam artikel ditulis lengkap di HTML; skrip ini menampilkan
   artikel yang cocok dengan ?slug= dan menangani tombol suka.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const slug = new URLSearchParams(location.search).get("slug");
  const semua = [...document.querySelectorAll("article[data-slug]")];
  const kosong = document.getElementById("tidak-ditemukan");
  const artikel = semua.find((a) => a.dataset.slug === slug);

  if (!artikel) {
    if (kosong) kosong.hidden = false;
    return;
  }

  artikel.hidden = false;
  document.title = artikel.querySelector("h1").textContent + " — Lumen";

  const btn = artikel.querySelector(".btn-suka");
  if (!btn) return;

  function terapkanTombol(aktif) {
    btn.className = "btn btn-suka " + (aktif ? "btn-primary" : "btn-line");
    btn.setAttribute("aria-pressed", String(aktif));
    btn.textContent = aktif ? "Disukai" : "Suka artikel ini";
  }

  /* Status awal mengikuti akun: tombol di HTML tampil apa adanya tanpa skrip */
  terapkanTombol(Auth.isLiked(artikel.dataset.slug));

  btn.addEventListener("click", () => {
    const r = Auth.toggleLike(artikel.dataset.slug);
    if (r.needLogin) {
      toast("Masuk dulu untuk menyukai artikel.");
      const kembali = "artikel.html?slug=" + encodeURIComponent(artikel.dataset.slug);
      setTimeout(() => (location.href = "login.html?next=" + encodeURIComponent(kembali)), 900);
      return;
    }
    terapkanTombol(r.active);
    toast(r.active ? "artikel ditandai disukai." : "Tanda suka dihapus.", "sukses");
  });
});
