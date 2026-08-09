// src/Pages/artikelislami/ArtikelDetail.jsx
import { useParams, Link } from 'react-router-dom';

const artikelData = {
  1: {
    judul: 'Keutamaan Shalat dalam Islam',
    isi: `
Shalat adalah tiang agama yang menjadi pembeda antara keimanan dan kekufuran. 
Allah mewajibkan shalat lima waktu kepada umat Islam sebagai bentuk ibadah harian yang menghubungkan hamba dengan Rabb-nya.

Keutamaan shalat sangat banyak, di antaranya:
- Menghapus dosa-dosa kecil
- Mencegah perbuatan keji dan mungkar
- Sebagai sarana untuk mengingat Allah

Sebagaimana dalam Al-Qur'an: 
_“Sesungguhnya shalat itu mencegah dari (perbuatan-perbuatan) keji dan mungkar.”_ (QS. Al-Ankabut: 45)

Mari jaga shalat kita sebagai bentuk ketaatan kepada Allah SWT.
    `,
  },
  2: {
    judul: 'Membaca Al-Qur\'an Setiap Hari',
    isi: `
Al-Qur’an adalah kalamullah yang menjadi petunjuk hidup bagi umat Islam. 
Dengan membacanya secara rutin, seorang Muslim akan memperoleh pahala dan ketenangan jiwa.

Keutamaan membaca Al-Qur’an:
- Setiap huruf mendapatkan pahala
- Menjadi syafaat di hari kiamat
- Mendekatkan diri kepada Allah

Rasulullah ﷺ bersabda:
_"Barangsiapa membaca satu huruf dari Kitabullah, maka baginya satu kebaikan."_

Mari biasakan membaca Al-Qur’an setiap hari, walau hanya beberapa ayat.
    `,
  },
  3: {
    judul: 'Manfaat dan Keutamaan Bersedekah',
    isi: `
Shadaqah adalah pemberian yang dilakukan dengan ikhlas karena Allah, baik berupa harta, tenaga, maupun ilmu. 
Allah menjanjikan pahala besar dan keberkahan bagi orang yang gemar bersedekah.

Manfaat shadaqah antara lain:
- Membersihkan harta
- Menyembuhkan penyakit
- Membuka pintu rezeki

Allah berfirman:
_"Perumpamaan (nafkah yang dikeluarkan oleh) orang-orang yang menafkahkan hartanya di jalan Allah seperti sebutir benih."_ (QS. Al-Baqarah: 261)

Mari kita jadikan sedekah sebagai kebiasaan harian.
    `,
  },
  4: {
    judul: 'Keberkahan Bulan Ramadhan',
    isi: `
Ramadhan adalah bulan yang sangat istimewa bagi umat Islam, di mana Al-Qur'an pertama kali diturunkan. 
Di bulan ini, Allah membuka pintu-pintu rahmat, menggandakan pahala amal shaleh, dan menurunkan Lailatul Qadar yang lebih baik dari seribu bulan.

Keutamaan bulan Ramadhan:
- Puasa Ramadhan adalah rukun Islam keempat
- Pahala amal dilipatgandakan
- Pintu surga dibuka dan pintu neraka ditutup
- Setiap malam ada kesempatan untuk mendapatkan Lailatul Qadar

Rasulullah ﷺ bersabda:
_"Apabila datang bulan Ramadhan, maka pintu-pintu surga dibuka, pintu-pintu neraka ditutup, dan setan-setan dibelenggu."_ (HR. Bukhari & Muslim)

Mari sambut Ramadhan dengan persiapan yang matang: memperbanyak taubat, membaca Al-Qur'an, bersedekah, dan memperbaiki kualitas ibadah kita.
    `,
  },
};

export default function ArtikelDetail() {
  const { id } = useParams();
  const artikel = artikelData[id];

  if (!artikel) {
    return (
      <div className="p-4 text-gray-800 dark:text-white bg-white dark:bg-gray-900 min-h-screen">
        <h1 className="text-xl font-bold">Artikel tidak ditemukan.</h1>
        <Link to="/artikel" className="text-blue-500">← Kembali ke daftar artikel</Link>
      </div>
    );
  }

  return (
    <div className="p-4 text-gray-800 dark:text-white bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{artikel.judul}</h1>
      <pre className="whitespace-pre-wrap font-sans">{artikel.isi}</pre>
      <div className="mt-4">
        <Link to="/artikel" className="text-blue-500">← Kembali ke daftar artikel</Link>
      </div>
    </div>
  );
}