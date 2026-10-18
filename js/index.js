/* ============================================================
   LUMEN — Perilaku halaman depan (index.html)
   Konten pelat, teaser artikel, dan panel lemari ditulis langsung
   di HTML; skrip ini hanya menangani klik kartu, tombol simpan,
   dan memilih versi panel sesuai status masuk.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  /* --- Dinding pelat: klik membuka pelat di galeri, hati menyimpan --- */
  const dinding = document.getElementById("dinding");
  if (dinding) {
    dinding.querySelectorAll(".plate[data-foto]").forEach((el) => {
      const buka = () => {
        location.href = "galeri.html?foto=" + encodeURIComponent(el.dataset.foto);
      };
      el.addEventListener("click", (e) => {
        if (e.target.closest(".fav")) return;
        buka();
      });
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") buka();
      });
    });

    pasangKlikFav(dinding);
  }

  /* --- Panel lemari: tamu diajak mendaftar, anggota diarahkan ke dashboard --- */
  const masuk = !!Auth.getSession();
  document.querySelectorAll("[data-saat]").forEach((el) => {
    el.hidden = el.dataset.saat !== (masuk ? "anggota" : "tamu");
  });
});
