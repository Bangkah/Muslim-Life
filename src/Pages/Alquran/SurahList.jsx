import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { CiDark, CiLight } from 'react-icons/ci';
import { IoHome } from 'react-icons/io5';

export default function SurahList() {
  const [surahs, setSurahs] = useState([]);
  const [search, setSearch] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lastRead, setLastRead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const ayatParam = searchParams.get('ayat');

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get('https://api.myquran.com/v2/quran/surat/semua');
        console.log('Response MyQuran:', res.data);

        // API MyQuran: { status: true, request: {...}, data: [...] }
        const dataSurah = res.data?.data || [];

        setSurahs(dataSurah);
      } catch (err) {
        console.error('Gagal mengambil surah:', err);
        setError('Gagal memuat daftar surah. Periksa koneksi internet Anda.');
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();

    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) setIsDarkMode(savedMode === 'true');

    const savedLastRead = localStorage.getItem('lastRead');
    if (savedLastRead) {
      try {
        const parsed = JSON.parse(savedLastRead);
        if (parsed && parsed.surah && parsed.ayat) {
          setLastRead(parsed);
        }
      } catch (e) {
        console.error('Gagal membaca lastRead:', e);
      }
    }

    const scroll = localStorage.getItem('scrollToAyat');
    if (scroll === 'true' && ayatParam) {
      const target = document.getElementById(`ayat-${ayatParam}`);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
      }
      localStorage.removeItem('scrollToAyat');
    }
  }, [ayatParam]);

  const toggleMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode.toString());
      return newMode;
    });
  };

  // Pencarian berdasarkan nama latin (name_id) atau nama english (name_en)
  const filtered = surahs.filter((surah) => {
    const namaLatin = surah.name_id || surah.name_en || '';
    return namaLatin.toLowerCase().includes(search.toLowerCase());
  });

  const modeClass = isDarkMode ? 'dark bg-gray-900 text-white' : 'light bg-white text-black';

  return (
    <div className={`min-h-screen ${modeClass}`}>
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 shadow-md bg-opacity-80 backdrop-blur-md sticky top-0 z-10">
        <Link to="/" title="Kembali ke Beranda">
          <IoHome className="text-2xl opacity-70 hover:opacity-100 transition-opacity" />
        </Link>
        <h1 className="text-lg font-semibold">Daftar Surah</h1>
        <button onClick={toggleMode} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
          {isDarkMode ? <CiLight className="text-2xl text-yellow-400" /> : <CiDark className="text-2xl" />}
        </button>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        {/* Notifikasi Terakhir Dibaca */}
        {lastRead && lastRead.surah && lastRead.ayat && (
          <div className="mb-6 p-4 rounded-xl bg-yellow-100 dark:bg-yellow-900/50 border border-yellow-300 dark:border-yellow-600 text-sm flex items-center justify-between shadow">
            <div>
              📌 <strong>Terakhir dibaca:</strong> Surah {lastRead.nama} ayat {lastRead.ayat}
            </div>
            <Link
              to={`/surah/${lastRead.surah}?ayat=${lastRead.ayat}`}
              className="ml-4 text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-800"
              onClick={() => localStorage.setItem('scrollToAyat', 'true')}
            >
              Lanjutkan membaca
            </Link>
          </div>
        )}

        {/* Input Pencarian */}
        <input
          className="w-full px-4 py-3 rounded-xl mb-6 border focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-gray-800 dark:border-gray-700 shadow-sm transition-all"
          type="text"
          placeholder="Cari surah (misal: Al-Fatihah)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Status Loading & Error */}
        {loading && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-emerald-500 rounded-full mb-2"></div>
            <p>Memuat daftar surah...</p>
          </div>
        )}

        {error && (
          <div className="p-4 rounded-xl bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 text-center my-4">
            {error}
          </div>
        )}

        {/* Daftar Surah */}
        {!loading && !error && (
          <ul className="space-y-3">
            {filtered.length > 0 ? (
              filtered.map((surah, index) => {
                // Mapping field sesuai response API MyQuran
                const nomorSurah = surah.nomor || index + 1;
                const namaLatin = surah.name_id || surah.name_en;
                const namaArab = surah.name_long || surah.name_short;
                // API endpoint /surat/semua tidak mengirim arti & jumlah ayat
                // Jika butuh, fetch dari /surat/{nomor} atau gunakan data statis
                const jumlahAyat = surah.jumlah_ayat || surah.number_of_ayah || null;

                return (
                  <li key={nomorSurah}>
                    <Link
                      to={`/surah/${nomorSurah}`}
                      className="block p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-emerald-50/50 dark:bg-gray-800/80 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-500 transition-all"
                      onClick={() => {
                        const currentLast = JSON.parse(localStorage.getItem('lastRead') || '{}');
                        if (currentLast?.surah === nomorSurah) {
                          localStorage.removeItem('lastRead');
                        } else {
                          localStorage.setItem(
                            'lastRead',
                            JSON.stringify({
                              surah: nomorSurah,
                              ayat: 1,
                              nama: namaLatin,
                            })
                          );
                        }
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                          {nomorSurah}. {namaLatin}
                        </span>
                        {/* Teks Arab Surah */}
                        <span className="font-arabic text-2xl text-emerald-900 dark:text-emerald-200" dir="rtl">
                          {namaArab}
                        </span>
                      </div>
                      {jumlahAyat && (
                        <p className="text-sm opacity-75 mt-1 text-gray-700 dark:text-gray-300">
                          {jumlahAyat} Ayat
                        </p>
                      )}
                    </Link>
                  </li>
                );
              })
            ) : (
              <p className="text-center py-8 text-gray-500">Surah tidak ditemukan.</p>
            )}
          </ul>
        )}

        {/* Tombol Navigasi */}
        <Link
          to="/"
          className="block mt-8 text-center text-blue-500 hover:text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          ← Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}