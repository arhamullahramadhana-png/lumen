document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const box = document.getElementById("filters");
  const kosong = document.getElementById("kosong");
  const params = new URLSearchParams(location.search);
  const kartu = grid ? [...grid.querySelectorAll(".plate[data-foto]")] : [];
  let aktifKat = params.get("kat") || "semua";

  /* --- Saring: sembunyikan kartu yang tidak cocok kategori --- */
  function saring() {
    let tampil = 0;
    kartu.forEach((el) => {
      const cocok = aktifKat === "semua" || el.dataset.kat === aktifKat;
      el.hidden = !cocok;
      if (cocok) tampil++;
    });
    if (kosong) kosong.hidden = tampil > 0;
    box.querySelectorAll(".filter-btn").forEach((b) => {
      const on = b.dataset.kat === aktifKat;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }

  box.querySelectorAll(".filter-btn").forEach((b) => {
    b.addEventListener("click", () => {
      aktifKat = b.dataset.kat;
      saring();
    });
  });

  /* --- Lightbox: potongan keras, isinya dibaca dari kartu yang diklik --- */
  const lb = document.getElementById("lightbox");
  const lbGambar = document.getElementById("lb-img");
  const lbBody = document.getElementById("lb-body");

  function bukaLightbox(el) {
    const gambar = el.querySelector(".plate-media img");
    lbGambar.src = gambar ? gambar.src : "";
    lbGambar.alt = el.dataset.judul || "";
    lbGambar.hidden = false;
    lbBody.style.setProperty("--cat", el.dataset.warna);
    document.getElementById("lb-judul").textContent = el.dataset.judul || "";
    const panjang = el.querySelector(".plate-panjang");
    document.getElementById("lb-teks").textContent = panjang ? panjang.textContent : "";
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
    document.getElementById("lb-close").focus();
  }

  function tutupLightbox() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }

  kartu.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.closest(".fav")) return;
      bukaLightbox(el);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") bukaLightbox(el);
    });
  });

  document.getElementById("lb-close").addEventListener("click", tutupLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) tutupLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("open")) tutupLightbox();
  });

  saring();
  pasangKlikFav(grid);

  /* Tautan dari halaman lain: galeri.html?foto=<id> langsung membuka pelat */
  const fotoParam = params.get("foto");
  if (fotoParam) {
    const f = kartu.find((x) => x.dataset.foto === fotoParam);
    if (f) bukaLightbox(f);
  }
});
