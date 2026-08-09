import { Link } from 'react-router-dom';

const artikelList = [
  {
    id: 1,
    judul: 'Keutamaan Shalat dalam Islam',
    ringkasan: 'Shalat adalah tiang agama dan kewajiban utama bagi setiap Muslim.',
  },
  {
    id: 2,
    judul: 'Membaca Al-Qur\'an Setiap Hari',
    ringkasan: 'Al-Qur\'an adalah petunjuk hidup. Membacanya memberikan ketenangan dan pahala.',
  },
  {
    id: 3,
    judul: 'Manfaat dan Keutamaan Bersedekah',
    ringkasan: 'Shadaqah membuka pintu rezeki dan mendatangkan keberkahan dalam hidup.',
  },
  {
    id: 4,
    judul: 'Keberkahan Bulan Ramadhan',
    ringkasan: 'Ramadhan adalah bulan penuh rahmat, di mana pintu surga dibuka dan amal dilipatgandakan.',
  },
];

export default function ArtikelList() {
  return (
    <div className="p-4 text-gray-800 dark:text-white bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Artikel Islami</h1>
      <div className="space-y-4">
        {artikelList.map((artikel) => (
          <Link
            key={artikel.id}
            to={`/artikel/${artikel.id}`}
            className="block p-4 bg-gray-100 dark:bg-gray-800 rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <h2 className="text-lg font-semibold">{artikel.judul}</h2>
            <p className="text-sm">{artikel.ringkasan}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}