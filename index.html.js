(function () {
  const APP_KEY = "ruang_cerita_demo_v1";
  const DEFAULT_STATE = {
    wa_number: "6287874611038",
    entries: [
      {
        id_jawaban: "CONTOH-1",
        tanggal: "2026-11-17",
        nama: "Bunga",
        id_kategori: "K5",
        id_pertanyaan: "K5-P3",
        pertanyaan: "Ada teman yang sering mengejek atau mengganggu aku.",
        jawaban: "Ya",
        tanda_bahaya: "Ya",
        status: "Baru",
        catatan: "Contoh data demo"
      }
    ]
  };

  const KATEGORI_DATA = [
    { id: "K1", nama_menu: "Cerita Aktivitas & Karier", kategori_resmi: "Akademik & Pengembangan Diri", deskripsi: "Cerita tentang aktivitas / materi dan cara beraktivitas & berkembangmu.", ikon: "📚" },
    { id: "K2", nama_menu: "Cerita Perasaan", kategori_resmi: "Nonakademik", deskripsi: "Cerita tentang perasaan dan kebiasaan sehari-harimu.", ikon: "💛" },
    { id: "K3", nama_menu: "Cerita Minat", kategori_resmi: "Minat dan Bakat", deskripsi: "Cerita tentang kegiatan yang kamu suka dan ingin kamu coba.", ikon: "🎨" },
    { id: "K4", nama_menu: "Cerita Relasi Otoritas", kategori_resmi: "Relasi dengan Mentor / Atasan", deskripsi: "Cerita tentang bagaimana kamu dan pembimbing / atasan / rekan seniormu berkomunikasi.", ikon: "🍎" },
    { id: "K5", nama_menu: "Cerita Teman", kategori_resmi: "Teman Sebaya", deskripsi: "Cerita tentang teman-temanmu dan rasa aman dalam keseharianmu.", ikon: "🤝" },
    { id: "K6", nama_menu: "Cerita di Rumah", kategori_resmi: "Keluarga", deskripsi: "Cerita tentang suasana dan dukungan di rumah.", ikon: "🏠" }
  ];

  const PERTANYAAN_DATA = [
    { id: "K1-T1", id_kategori: "K1", jenis: "Terbuka", teks: "Aktivitas / pekerjaan apa yang paling kamu sukai dalam keseharianmu?", tanda_bahaya: "Tidak" },
    { id: "K1-T2", id_kategori: "K1", jenis: "Terbuka", teks: "Aktivitas / pekerjaan apa yang terasa paling sulit buatmu?", tanda_bahaya: "Tidak" },
    { id: "K1-P1", id_kategori: "K1", jenis: "Tertutup", teks: "Aku semangat berangkat ke lingkunganmu.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },
    { id: "K1-P2", id_kategori: "K1", jenis: "Tertutup", teks: "Aku bisa mengerjakan tugas sampai selesai.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },

    { id: "K2-T1", id_kategori: "K2", jenis: "Terbuka", teks: "Bagaimana perasaanmu hari ini? Ceritakan jika kamu mau.", tanda_bahaya: "Tidak" },
    { id: "K2-T2", id_kategori: "K2", jenis: "Terbuka", teks: "Apa yang biasanya kamu lakukan saat sedang sedih atau marah?", tanda_bahaya: "Tidak" },
    { id: "K2-P1", id_kategori: "K2", jenis: "Tertutup", teks: "Aku merasa senang pada sebagian besar hari.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },
    { id: "K2-P2", id_kategori: "K2", jenis: "Tertutup", teks: "Aku bisa tidur nyenyak di malam hari.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },

    { id: "K3-T1", id_kategori: "K3", jenis: "Terbuka", teks: "Kegiatan apa yang paling kamu sukai? (olahraga, menggambar, musik, menari, dll)", tanda_bahaya: "Tidak" },
    { id: "K3-T2", id_kategori: "K3", jenis: "Terbuka", teks: "Hal baru apa yang ingin kamu pelajari atau coba?", tanda_bahaya: "Tidak" },
    { id: "K3-P1", id_kategori: "K3", jenis: "Tertutup", teks: "Aku tahu kegiatan yang aku sukai.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },
    { id: "K3-P2", id_kategori: "K3", jenis: "Tertutup", teks: "Aku punya kesempatan melakukan kegiatan yang aku sukai.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },

    { id: "K4-T1", id_kategori: "K4", jenis: "Terbuka", teks: "Ceritakan tentang pembimbing / atasan / rekan senior yang paling kamu sukai.", tanda_bahaya: "Tidak" },
    { id: "K4-T2", id_kategori: "K4", jenis: "Terbuka", teks: "Apa yang kamu lakukan saat ingin bertanya kepada pembimbing / atasan / rekan senior?", tanda_bahaya: "Tidak" },
    { id: "K4-P1", id_kategori: "K4", jenis: "Tertutup", teks: "Aku berani bertanya kepada pembimbing / atasan / rekan senior.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },
    { id: "K4-P2", id_kategori: "K4", jenis: "Tertutup", teks: "Aku merasa takut ketika berada di dekat figur otoritas / atasan / pembimbing tertentu.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Ya" },

    { id: "K5-T1", id_kategori: "K5", jenis: "Terbuka", teks: "Siapa teman yang paling sering bersosialisasi denganmu? Apa yang kalian lakukan?", tanda_bahaya: "Tidak" },
    { id: "K5-T2", id_kategori: "K5", jenis: "Terbuka", teks: "Adakah kejadian dengan teman yang membuatmu tidak nyaman? Ceritakan jika kamu mau.", tanda_bahaya: "Tidak" },
    { id: "K5-P1", id_kategori: "K5", jenis: "Tertutup", teks: "Aku punya teman untuk bersosialisasi bersama.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },
    { id: "K5-P2", id_kategori: "K5", jenis: "Tertutup", teks: "Ada teman yang sering mengejek atau mengganggu aku.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Ya" },

    { id: "K6-T1", id_kategori: "K6", jenis: "Terbuka", teks: "Ceritakan tentang orang-orang yang tinggal bersamamu di rumah.", tanda_bahaya: "Tidak" },
    { id: "K6-T2", id_kategori: "K6", jenis: "Terbuka", teks: "Apa yang membuatmu kurang nyaman di rumah akhir-akhir ini?", tanda_bahaya: "Tidak" },
    { id: "K6-P1", id_kategori: "K6", jenis: "Tertutup", teks: "Aku merasa disayangi oleh keluargaku.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Tidak" },
    { id: "K6-P2", id_kategori: "K6", jenis: "Tertutup", teks: "Aku sering merasa sedih karena suasana di rumah.", pilihan: "Ya; Kadang-kadang; Tidak; Aku tidak mau menjawab", tanda_bahaya: "Ya" }
  ];

  const INFO_BANTUAN_DATA = [
    { id: "B1", judul: "Tips Pengembangan Diri", kelompok: "Pengembangan Diri", isi: "Coba 15 menit fokus lalu istirahat sebentar." },
    { id: "B2", judul: "Cara Menenangkan Diri", kelompok: "Perasaan", isi: "Tarik napas 4-4-6, ulangi 5 kali." },
    { id: "B3", judul: "Cara Meminta Tolong", kelompok: "Bantuan", isi: "Cari orang dewasa yang kamu percaya dan bilang: 'Aku butuh teman bicara sebentar.'" },
    { id: "B4", judul: "Periksa Keamanan", kelompok: "Darurat", isi: "Jika merasa tidak aman, segera hubungi guru, orang dewasa tepercaya, atau nomor darurat." }
  ];

  function readState() {
    const raw = localStorage.getItem(APP_KEY);
    if (!raw) {
      localStorage.setItem(APP_KEY, JSON.stringify(DEFAULT_STATE));
      return structuredClone(DEFAULT_STATE);
    }
    try {
      return JSON.parse(raw);
    } catch {
      localStorage.setItem(APP_KEY, JSON.stringify(DEFAULT_STATE));
      return structuredClone(DEFAULT_STATE);
    }
  }

  function writeState(state) {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }

  function getEntries() {
    return readState().entries || [];
  }

  function setEntries(entries) {
    const state = readState();
    state.entries = entries;
    writeState(state);
  }

  function getWaNumber() {
    return readState().wa_number || "6281234567890";
  }

  function setWaNumber(value) {
    const state = readState();
    state.wa_number = value;
    writeState(state);
  }

  function addEntry(entry) {
    const state = readState();
    state.entries.unshift(entry);
    writeState(state);
  }

  function updateEntry(index, patch) {
    const state = readState();
    if (!state.entries[index]) return;
    state.entries[index] = { ...state.entries[index], ...patch };
    writeState(state);
  }

  window.RuangCeritaShared = {
    APP_KEY,
    KATEGORI_DATA,
    PERTANYAAN_DATA,
    INFO_BANTUAN_DATA,
    getEntries,
    setEntries,
    addEntry,
    updateEntry,
    getWaNumber,
    setWaNumber,
    readState,
    writeState
  };
})();