const KATEGORI = [
  { id: "posisi-matahari",    nama: "Posisi Matahari",        kode: "POS", lambda: "590 nm", warna: "#f0b429" },
  { id: "pembiasan-cahaya",   nama: "Pembiasan Cahaya",       kode: "PEM", lambda: "620 nm", warna: "#e0704a" },
  { id: "optik-atmosfer",     nama: "Optik & Atmosfer",       kode: "OPT", lambda: "510 nm", warna: "#9cc46e" },
  { id: "cahaya-langit",      nama: "Cahaya Langit Ekstrem",  kode: "CLY", lambda: "557 nm", warna: "#6fc7d4" },
  { id: "efek-awan",          nama: "Efek Awan & Partikel",   kode: "EFA", lambda: "450 nm", warna: "#7aa2e8" },
  { id: "cuaca-musiman",      nama: "Cuaca & Musiman",        kode: "CMS", lambda: "470 nm", warna: "#a9b8d6" },
  { id: "lanskap-eksotis",    nama: "Lanskap Eksotis",        kode: "LEX", lambda: "485 nm", warna: "#5ec0a8" },
];

const FENOMENA = [
  /* ---- Posisi Matahari ---- */
  {
    id: "golden-hour",
    judul: "Golden Hour",
    kategori: "posisi-matahari",
    gambar: "images/momen-berdasarkan-posisi-matahari/golden-hour.avif",
    ringkas: "Jam emas ketika matahari rendah dan cahaya menjadi hangat serta lembut.",
    panjang:
      "Golden hour adalah kurang lebih satu jam setelah matahari terbit dan sebelum matahari terbenam, ketika sang surya berada rendah di cakrawala. Cahaya harus menempuh jarak lebih panjang melalui atmosfer, sehingga cahaya biru tersaring dan yang tersisa adalah nuansa kuning–jingga yang hangat. Fotografer menyukainya karena bayangan menjadi panjang dan lembut, serta kulit dan lanskap terlihat bercahaya.",
  },
  {
    id: "blue-hour",
    judul: "Blue Hour",
    kategori: "posisi-matahari",
    gambar: "images/momen-berdasarkan-posisi-matahari/blue-hour.webp",
    ringkas: "Jendela singkat bernuansa biru dalam sebelum fajar dan sesudah senja.",
    panjang:
      "Blue hour terjadi ketika matahari cukup jauh di bawah cakrawala sehingga atmosfer hanya meneruskan cahaya biru pendek gelombangnya ke langit. Momennya singkat — biasanya 20–40 menit — dan menghasilkan langit biru pekat yang seimbang dengan lampu kota. Warna dinginnya membuat pemandangan kota, gunung, atau pantai terlihat tenang dan sinematik.",
  },
  {
    id: "civil-twilight",
    judul: "Civil Twilight",
    kategori: "posisi-matahari",
    gambar: "images/momen-berdasarkan-posisi-matahari/civil-twilight.webp",
    ringkas: "Tahap senja paling terang, 0–6 derajat di bawah cakrawala.",
    panjang:
      "Senja sipil dimulai saat matahari baru saja tenggelam hingga 6 derajat di bawah cakrawala. Pada tahap ini langit masih cukup terang untuk melakukan aktivitas luar ruangan tanpa lampu, dan cakrawala barat biasanya dihiasi gradasi jingga ke ungu. Istilah sipil merujuk pada penerangan yang memadai untuk urusan sipil — bahari zaman dahulu bahkan menamai fase ini “waktu navigasi biru”.",
  },
  {
    id: "nautical-twilight",
    judul: "Nautical Twilight",
    kategori: "posisi-matahari",
    gambar: "images/momen-berdasarkan-posisi-matahari/nautical-twilight.webp",
    ringkas: "Tahap senja 6–12 derajat, waktu pelaut menghitung bintang di cakrawala.",
    panjang:
      "Senja nautika berlangsung ketika matahari berada 6 hingga 12 derajat di bawah cakrawala. Namanya berasal dari pelaut yang memanfaatkan momen ini: cakrawala masih terlihat, tetapi bintang-bintang sudah cukup terang untuk dijadikan patokan navigasi. Langit memperlihatkan lapisan ungu, biru tua, dan sisa jingga yang menyempit di garis horizon.",
  },
  {
    id: "astronomical-twilight",
    judul: "Astronomical Twilight",
    kategori: "posisi-matahari",
    gambar: "images/momen-berdasarkan-posisi-matahari/astronomical-twilight.webp",
    ringkas: "Tahap senja terakhir, 12–18 derajat, menuju langit benar-benar gelap.",
    panjang:
      "Senja astronomis mencakup sudut 12 hingga 18 derajat di bawah cakrawala. Setelah matahari melewati batas 18 derajat, langit dianggap “gelap penuh” dan objek langit paling redup pun mulai terlihat. Bagi pengamat bintang, momen ini adalah penanda akhir kesibukan cakrawala dan awal dimulainya malam yang sesungguhnya.",
  },

  /* ---- Pembiasan Cahaya Matahari ---- */
  {
    id: "sun-dog",
    judul: "Sun Dog (Parhelion)",
    kategori: "pembiasan-cahaya",
    gambar: "images/fenomena-pembiasan-cahaya-matahari/sun-dog (parhelion).jpg",
    ringkas: "Bercak cahaya seperti matahari kembar di sisi kiri dan kanan matahari.",
    panjang:
      "Sun dog — “anjing matahari” — adalah bercak cahaya terang yang muncul di kiri dan kanan matahari, biasanya pada jarak sekitar 22 derajat. Fenomena ini disebabkan oleh pembiasan cahaya pada kristal es berbentuk pelat di awan cirrus rendah. Kadang terlihat seperti matahari kembar, lengkap dengan garis pelangi samar di tepinya.",
  },
  {
    id: "solar-halo",
    judul: "Solar Halo",
    kategori: "pembiasan-cahaya",
    gambar: "images/fenomena-pembiasan-cahaya-matahari/solar-halo.jpg",
    ringkas: "Lingkaran cahaya berdiameter ±22° yang mengelilingi matahari.",
    panjang:
      "Halo 22 derajat adalah lingkaran cahaya yang mengelilingi matahari akibat pembiasan cahaya pada kristal es heksagonal di awan cirus. Bagian dalam lingkaran cenderung kemerahan dan bagian luarnya kebiruan karena panjang gelombang warna dibiaskan dengan sudut berbeda. Pemandangan ini sering dianggap pertanda datangnya hujan, sebab cirrus sering mendahului sistem cuaca basah.",
  },
  {
    id: "cloud-iridescence",
    judul: "Cloud Iridescence",
    kategori: "pembiasan-cahaya",
    gambar: "images/fenomena-pembiasan-cahaya-matahari/cloud-iridescence.jpeg",
    ringkas: "Awan tipis berkilau warna-warni seperti minyak di air.",
    panjang:
      "Awan irasi — atau irisasi — menampakkan warna-warna pelangi yang lembut pada awan tipis, biasanya altocumulus atau lenticularis, yang berada dekat matahari. Warna terbentuk karena difraksi cahaya pada tetesan air atau kristal es yang ukurannya seragam. Tampilannya sering menyerupai minyak di atas air, dan paling jelas saat matahari tertutup sebagian oleh awan.",
  },

  /* ---- Optik & Atmosfer ---- */
  {
    id: "green-flash",
    judul: "Green Flash",
    kategori: "optik-atmosfer",
    gambar: "images/fenomena-optik-dan-atmosfer/green-flash.webp",
    ringkas: "Kilatan hijau sesaat di tepi matahari saat terbit atau terbenam.",
    panjang:
      "Green flash adalah kilatan berwarna hijau yang hanya berlangsung sedetik di tepi matahari ketika tepat di cakrawala. Atmosfer berperan seperti prisma raksasa: cahaya merah dibiaskan menjauh, sementara hijau sedikit terlambat dan tetap terlihat. Syaratnya tajam — udara bersih, cakrawala laut atau padang yang luas, dan matahari benar-benar mulus tenggelam.",
  },
  {
    id: "crepuscular-rays",
    judul: "Crepuscular Rays",
    kategori: "optik-atmosfer",
    gambar: "images/fenomena-optik-dan-atmosfer/crepuscular-rays.jpg",
    ringkas: "Berkas cahaya menyebar dari balik awan seperti kipas raksasa.",
    panjang:
      "Sinar crepuskular adalah berkas cahaya matahari yang menyebar ke segala arah dari balik awan, seolah-olah matahari memancarkan jari-jari cahaya. Sebenarnya sinar-sinar itu sejajar; yang membuatnya tampak menyebar hanyalah ilusi perspektif — sama seperti rel kereta yang tampak menyatu di kejauhan. Bayangan awan yang menghalangi membentuk lapisan gelap di antara berkas terang.",
  },
  {
    id: "belt-of-venus",
    judul: "Belt of Venus",
    kategori: "optik-atmosfer",
    gambar: "images/fenomena-optik-dan-atmosfer/belt-of-venus.webp",
    ringkas: "Pita merah muda di langit timur saat matahari terbenam.",
    panjang:
      "Belt of Venus — “sabuk Venus” — adalah pita warna merah muda yang muncul di langit timur beberapa menit setelah matahari terbenam, tepat di atas bayangan bumi sendiri. Di bawahnya terlihat lapisan biru keabu-abuan yang merupakan atmosfer dalam bayangan. Kontras antara pita merah muda dan bayangan biru inilah yang membuatnya mudah dikenali.",
  },
  {
    id: "alpenglow",
    judul: "Alpenglow",
    kategori: "optik-atmosfer",
    gambar: "images/fenomena-optik-dan-atmosfer/alpenglow.jpg",
    ringkas: "Puncak gunung bersinar merah keemasan setelah matahari tenggelam.",
    panjang:
      "Alpenglow adalah cahaya merah atau keemasan yang menyinari puncak pegunungan, biasanya setelah matahari terbenam atau sebelum terbit. Cahaya matahari dibiaskan oleh atmosfer dan memantul ke puncak yang masih terjangkau sinar lurus. Fenomena ini paling terkenal di pegunungan Alpen — tempat namanya berasal — namun dapat diamati di pegunungan mana pun dengan langit yang jernih.",
  },

  /* ---- Cahaya Langit Ekstrem ---- */
  {
    id: "aurora",
    judul: "Aurora",
    kategori: "cahaya-langit",
    gambar: "images/fenomena-cahaya-langit-ekstrem/aurora.webp",
    ringkas: "Tirai cahaya hijau–ungu yang menari di langit kutub.",
    panjang:
      "Aurora — dikenal juga sebagai lampu utara atau lampu selatan — terbentuk ketika partikel bermuatan dari Matahari menabrak gas di atmosfer bagian atas. Oksigen memancarkan hijau dan merah, nitrogen memberi ungu dan biru. Aurora paling sering terlihat di sekitar lingkaran kutub, namun pada badai geomagnet besar ia dapat turun hingga latitudang yang jauh lebih rendah.",
  },
  {
    id: "airglow",
    judul: "Airglow",
    kategori: "cahaya-langit",
    gambar: "images/fenomena-cahaya-langit-ekstrem/airglow.jpg",
    ringkas: "Pancaran redup alami atmosfer yang membuat langit malam tak pernah gelap total.",
    panjang:
      "Airglow adalah cahaya redup yang dipancarkan atmosfer itu sendiri akibat reaksi kimia — contohnya atom oksigen yang berekspresi setelah menyerap sinar ultraviolet siang hari. Berbeda dengan aurora, airglow terjadi di seluruh dunia dan sepanjang waktu, hanya saja sangat redup sehingga baru terekam jelas lewat eksposur panjang kamera. Dalam foto, ia tampak sebagai lapisan hijau samar di atas cakrawala.",
  },
  {
    id: "zodiacal-light",
    judul: "Zodiacal Light",
    kategori: "cahaya-langit",
    gambar: "images/fenomena-cahaya-langit-ekstrem/zodiac-light.jpg",
    ringkas: "Konus cahaya samar dari debu tata surya di sepanjang rasi bintang.",
    panjang:
      "Zodiacal light adalah konus cahaya segitiga yang membentang dari cakrawala, mengikuti jalur ekliptika — jalur yang sama dengan yang dilalui planet. Cahaya ini dipantulkan oleh debu sisa pembentukan tata surya yang tersebar di ruang antarplanet. Paling terlihat di daerah tropis saat senja musim semi atau fajar musim gugur, jauh dari polusi cahaya.",
  },

  /* ---- Efek Awan & Partikel ---- */
  {
    id: "light-pillars",
    judul: "Light Pillars",
    kategori: "efek-awan",
    gambar: "images/efek-optik-awan-dan-partikel/light-pillars.jpg",
    ringkas: " tiang cahaya vertikal dari lampu atau matahari memantul pada kristal es.",
    panjang:
      "Pilar cahaya terbentuk ketika kristal es berbentuk pelat melayang di udara dingin dan memantulkan cahaya dari sumber di bawah maupun di atas. Hasilnya adalah tiang-tiang cahaya vertikal seolah menjulang dari tanah atau turun dari langit. Sumbernya bisa lampu kota, bulan, bahkan matahari — pilir matahari disebut “sun pillar”.",
  },
  {
    id: "fire-rainbow",
    judul: "Fire Rainbow",
    kategori: "efek-awan",
    gambar: "images/efek-optik-awan-dan-partikel/fire-rainbow.jpg",
    ringkas: "Awan cirrus yang diwarnai pelangi, tampak seperti api di langit.",
    panjang:
      "Pelangi api — nama ilmiahnya circumhorizontal arc — adalah pita warna pelangi yang membentang horizontal pada awan cirrus. Namanya “api” hanya karena tampilannya yang merah menyala bagaikan lidah api, bukan karena panas. Syaratnya ketat: matahari harus tinggi di langit (lebih dari 58°) dan awan cirrus berisi kristal es pelat harus berada tepat di atas pengamat.",
  },

  /* ---- Cuaca & Musiman ---- */
  {
    id: "foggy-morning",
    judul: "Foggy Morning",
    kategori: "cuaca-musiman",
    gambar: "images/momen-cuaca-dan-musiman/foggy-morning.webp",
    ringkas: "Kabut rendah yang melembutkan cahaya pagi menjadi biru keperakan.",
    panjang:
      "Kabut terbentuk ketika udara lembap mendingin hingga titik embun, mengubah uap air menjadi tetesan mikro yang meneruskan cahaya ke segala arah. Cahaya matahari yang menembus kabut tersebar merata, menghasilkan pencahayaan lembut tanpa bayangan keras — hampir seperti softbox raksasa buatan alam. Kabut paling sering muncul dini hari di lembah, danau, atau pesisir.",
  },
  {
    id: "overcast-light",
    judul: "Overcast Light",
    kategori: "cuaca-musiman",
    gambar: "images/momen-cuaca-dan-musiman/overcast-light.webp",
    ringkas: "Langit tertutup yang mengubah seluruh lanskap menjadi warna kelabu lembut.",
    panjang:
      "Pada langit mendung, awan tebal menyaring cahaya matahari dan menyebarkannya merata ke seluruh langit. Hasilnya adalah pencahayaan tanpa arah: warna terlihat jujur, bayangan hilang, dan kontras menurun. Bagi fotografer lanskap, mendung bukan cuaca buruk — ia mengungkap warna tanaman, batu, dan air yang biasanya tenggelam oleh silau matahari.",
  },

  /* ---- Lanskap Eksotis ---- */
  {
    id: "bioluminesensi",
    judul: "Bioluminescent Night",
    kategori: "lanskap-eksotis",
    gambar: "images/momen-lanskap-eksotis/bioluminecent-night.webp",
    ringkas: "Laut yang bercahaya biru pekat akibat organisme mikroskopis.",
    panjang:
      "Bioluminesensi laut terjadi ketika organisme mikroskopis bernama dinoflagellata memancarkan cahaya biru ketika terganggu — misalnya oleh ombak, perahu, atau ikan yang berenang. Reaksi kimia di dalam tubuh mereka mengubah energi menjadi cahaya hampir tanpa panas. Fenomena ini bisa ditemui di banyak pesisir dunia, dan dalam jumlah besar membuat pantai tampak seperti lautan bintang.",
  },
];

const ARTIKEL = [
  {
    slug: "mengapa-senja-berwarna-jingga",
    judul: "Mengapa Langit Senja Berwarna Jingga?",
    ringkas:
      "Jawaban singkatnya ada di panjang gelombang cahaya dan cara atmosfer menyaringnya. Begini penjelasan lengkapnya.",
    gambar: "images/momen-berdasarkan-posisi-matahari/golden-hour.avif",
    tanggal: "2026-09-12",
    menitBaca: 4,
    isi: [
      { t: "p", teks: "Setiap sore, langit memberikan pertunjukan warna yang sepintas terasa sederhana: jingga di barat, ungu di atasnya, lalu biru yang menggelap. Padahal di baliknya ada fisika yang elegan — cahaya Matahari berinteraksi dengan atmosfer Bumi berdasarkan panjang gelombangnya." },
      { t: "h2", teks: "Cahaya putih bukan satu warna" },
      { t: "p", teks: "Cahaya Matahari terlihat putih, padahal sebenarnya merupakan gabungan seluruh warna pelangi, masing-masing dengan panjang gelombang berbeda. Biru dan ungu memiliki gelombang pendek, sedangkan jingga dan merah memiliki gelombang panjang." },
      { t: "h2", teks: "Atmosfer sebagai saringan" },
      { t: "p", teks: "Ketika Matahari tinggi, cahaya menempuh jalur pendek melalui atmosfer dan sebagian besar warna sampai ke mata kita. Saat Matahari rendah — pagi dan sore — cahaya harus menempuh jarak jauh hingga sepuluh kali lebih panjang. Partikel nitrogen dan oksigen menyebarkan (menganaskan) cahaya gelombang pendek ke segala arah, sehingga yang tersisa di jalur lurus adalah jingga dan merah yang kita lihat di cakrawala." },
      { t: "h2", teks: "Mengapa bagian langit lain tetap biru?" },
      { t: "p", teks: "Cahaya biru yang tersaring tadi tidak hilang — ia tersebar ke seluruh langit. Itulah sebabnya bagian langit yang jauh dari Matahari tetap biru, sementara daerah di sekitar Matahari yang rendah membara jingga. Warna ungu muncul sebagai perpaduan sisa cahaya merah langsung dengan cahaya biru yang tersebar." },
      { t: "p", teks: "Kabut, polusi, dan partikel debu membuat penyebaran ini lebih kuat — salah satu alasan senja di kota besar atau setelah kebakaran hutan tampak lebih merah dramatis dibanding senja di langit yang bersih." },
    ],
  },
  {
    slug: "aurora-partikel-matahari",
    judul: "Aurora: Ketika Partikel Matahari Menari di Kutub",
    ringkas:
      "Tirai cahaya hijau dan ungu di langit kutub lahir dari badai surya jutaan kilometer jauhnya.",
    gambar: "images/fenomena-cahaya-langit-ekstrem/aurora.webp",
    tanggal: "2026-09-28",
    menitBaca: 5,
    isi: [
      { t: "p", teks: "Aurora bukan sekadar pemandangan indah — ia adalah tanda langsung bahwa Bumi sedang dilanda partikel bermuatan dari Matahari. Setiap kilatan hijau di langit kutub adalah laporan cuaca luar angkasa yang sedang berlangsung." },
      { t: "h2", teks: "Asal-usul badai surya" },
      { t: "p", teks: "Sesekali Matahari melepaskan ledakan besar berupa awan plasma yang disebut lontaran massa korona. Jika awan tersebut mengarah ke Bumi, ia tiba dalam 1–3 hari membawa miliaran partikel bermuatan. Inilah yang disebut badai geomagnet." },
      { t: "h2", teks: "Magnet Bumi sebagai perisai" },
      { t: "p", teks: "Medan magnet Bumi menangkap partikel-partikel itu dan mengarahkannya ke kutub utara dan selatan. Di sana, partikel jatuh ke atmosfer bagian atas dan menabrak atom gas. Oksigen memancarkan cahaya hijau pada ketinggian ±100 km dan merah di ketinggian lebih tinggi; nitrogen menambahkan kilau ungu dan biru." },
      { t: "h2", teks: "Kapan aurora bisa dilihat?" },
      { t: "p", teks: "Secara rutin, aurora terlihat di sekitar lingkaran kutub — Norwegia, Islandia, Kanada utara, Alaska. Namun pada badai besar (kadar Kp tinggi), tirai cahaya dapat turun hingga negara-negara beriklim sedang. Di Indonesia yang berada dekat khatulistiwa, aurora sangat jarang — hampir mustahil kecuali badai geomagnet luar biasa ekstrem." },
    ],
  },
  {
    slug: "green-flash-yang-jarang",
    judul: "Green Flash: Kilatan Hijau yang Jarang Terekam",
    ringkas:
      "Bertahan hanya sepersekian detik, namun fisikanya menceritakan seluruh atmosfer Bumi.",
    gambar: "images/fenomena-optik-dan-atmosfer/green-flash.webp",
    tanggal: "2026-10-02",
    menitBaca: 4,
    isi: [
      { t: "p", teks: "Ribuan orang menyaksikan matahari terbenam setiap hari, tetapi hanya sedikit yang pernah melihat green flash. Bukan karena fenomena itu langka secara fisika — melainkan karena syarat melihatnya sangat ketat dan momennya sangat singkat." },
      { t: "h2", teks: "Atmosfer sebagai prisma" },
      { t: "p", teks: "Saat matahari berada tepat di cakrawala, atmosfer berperilaku seperti prisma tebal. Cahaya merah dibiaskan paling kecil dan “tertinggal” di atas, sementara hijau dibiaskan lebih kuat sehingga sedikit di bawah merah. Ketika piringan matahari hampir seluruhnya tenggelam, hijau adalah warna terakhir yang tersisa di tepi puncak." },
      { t: "h2", teks: "Mengapa jarang terlihat?" },
      { t: "p", teks: "Kabut, polusi, awan di cakrawala, atau patah optik udara karena panas permukaan laut dapat menghapus kilatan hijau sepenuhnya. Syarat terbaik: memandang dari tempat tinggi ke arah laut atau dataran luas, dengan udara sangat bersih setelah hujan. Sebagian pilot melaporkan melihatnya dari ketinggian — versi paling jernih dari fenomena ini." },
      { t: "p", teks: "Meski berkilau hijau, sesungguhnya flash ini adalah sisa cahaya matahari utuh yang warnanya telah diuraikan atmosfer — kembang api optik penutup hari yang hanya diberikan kepada pengamat yang sabar." },
    ],
  },
  {
    slug: "halo-dan-sun-dog",
    judul: "Halo dan Sun Dog: Cerminan Es di Awan Cirrus",
    ringkas:
      "Lingkaran 22 derajat dan matahari kembar — dua wajah dari kristal es di langit tinggi.",
    gambar: "images/fenomena-pembiasan-cahaya-matahari/solar-halo.jpg",
    tanggal: "2026-10-08",
    menitBaca: 4,
    isi: [
      { t: "p", teks: "Jika suatu hari Anda melihat lingkaran cahaya mengelilingi matahari, jangan langsung menyalakan kacamata hitam — perhatikan baik-baik. Anda sedang menyaksikan halo 22 derajat, salah satu optik atmosfer paling umum di dunia." },
      { t: "h2", teks: "Kristal es heksagonal" },
      { t: "p", teks: "Awan cirrus setinggi 6–12 km tersusun dari kristal es berbentuk heksagon. Ketika cahaya matahari memasuki sisi kristal, ia dibiaskan dengan sudut minimum sekitar 22 derajat — batas inilah yang membentuk tepi dalam lingkaran halo. Warnanya bergradasi: merah di bagian dalam, kebiruan di bagian luar." },
      { t: "h2", teks: "Ketika kristal berbaris rapi" },
      { t: "p", teks: "Sun dog terjadi ketika kristal es pelat berbaris mendatar saat jatuh, bertindak seperti jutaan cermin kecil yang membiaskan cahaya ke sisi kiri dan kanan matahari. Karena itu sun dog selalu berada pada ketinggian yang sama dengan matahari, tidak naik-turun mengikutinya." },
      { t: "p", teks: "Pengamatah kuno menjuluki kemunculan halo sebagai pertanda hujan — dan tidak sepenuhnya salah. Awan cirrus sering menjadi pengunjung pertama dari sistem badai yang tiba 24–48 jam kemudian." },
    ],
  },
  {
    slug: "laut-yang-bercahaya",
    judul: "Bioluminesensi: Laut yang Bercahaya di Malam Hari",
    ringkas:
      "Ombak biru pekat di pantai lahir dari reaksi kimia organisme sekecil pasir.",
    gambar: "images/momen-lanskap-eksotis/bioluminecent-night.webp",
    tanggal: "2026-10-14",
    menitBaca: 5,
    isi: [
      { t: "p", teks: "Berjalan di pantai pada malam gelap dan melihat ombak membara biru adalah pengalaman yang mengubah cara seseorang memandang laut. Namun cahaya itu bukan sihir — ia adalah pekerjaan jutaan makhluk mikroskopis yang tak terlihat mata." },
      { t: "h2", teks: "Si penyala: dinoflagellata" },
      { t: "p", teks: "Organisme utama di balik “laut bercahaya” adalah dinoflagellata, sejenis fitoplankton. Di dalam selnya terdapat molekul luciferin dan enzim luciferase. Ketika sel terganggu — oleh ombak, perahu, atau ikan — reaksi kimia menghasilkan cahaya biru dengan efisiensi luar biasa: hampir tidak ada energi yang terbuang sebagai panas." },
      { t: "h2", teks: "Mengapa biru?" },
      { t: "p", teks: "Cahaya biru adalah warna yang paling efisien merambat di air laut. Banyak organisme dalam yang bercahaya memilih frekuensi yang sama, seperti kesepakatan tak tertulis jutaan tahun lalu. Bagi dinoflagellata sendiri, kilau diyakini berfungsi menakuti predator — mirip “lampu peringatan” organik." },
      { t: "p", teks: "Indonesia sendiri memiliki beberapa lokasi langka untuk menyaksikannya, seperti di Teluk Weda, Maluku, dan perairan tertentu di Bali dan Lombok. Kuncinya: langit gelap, air tenang, dan gangguan fisik pada air — goyangkan air dengan tangan, dan kilau akan mengikuti gerakan Anda." },
    ],
  },
  {
    slug: "cahaya-dari-debu-tata-surya",
    judul: "Zodiacal Light: Cahaya Misterius dari Debu Tata Surya",
    ringkas:
      "Konus cahaya samar di ekliptika adalah pantulan dari sisa pembentukan tata surya kita.",
    gambar: "images/fenomena-cahaya-langit-ekstrem/zodiac-light.jpg",
    tanggal: "2026-10-18",
    menitBaca: 4,
    isi: [
      { t: "p", teks: "Di langit yang sangat gelap, tepat di atas cakrawala setelah senja, terkadang terlihat konus cahaya samar yang membentang ke atas mengikuti jalur zodiak. Cahaya ini bukan awan, bukan polusi cahaya — ia adalah debu tata surya kita sendiri." },
      { t: "h2", teks: "Sisa pembentukan planet" },
      { t: "p", teks: "Triliunan partikel debu tersebar di bidang ekliptika, sisa-sisa ketika Matahari dan planet terbentuk 4,6 miliar tahun lalu. Partikel-partikel ini memantulkan sinar Matahari ke arah kita — sama seperti bulan memantulkan cahaya, hanya saja debu-debu ini begitu kecil sehingga cahayanya tampak kabur dan berbentuk konus." },
      { t: "h2", teks: "Kapan dan di mana melihatnya?" },
      { t: "p", teks: "Zodiacal light paling terlihat di daerah dekat khatulistiwa — Indonesia termasuk lokasi ideal — pada senja musim semi atau fajar musim gugur, ketika ekliptika berdiri tegak terhadap cakrawala. Syarat mutlaknya adalah langit yang benar-benar gelap: jauh dari kota, di ketinggian, dan tanpa bulan purnama." },
      { t: "p", teks: "Pada dasarnya, setiap malam zodiacal light tetap ada di sana. Yang berubah hanyalah apakah langit kita cukup gelap untuk mau menunjukkannya." },
    ],
  },
];
