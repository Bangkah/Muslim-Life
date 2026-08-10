<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <br>
  <img src="https://img.shields.io/badge/Al--Qur'an-00A040?style=for-the-badge&logo=open-book&logoColor=white" />
  <img src="https://img.shields.io/badge/Jadwal-Shalat-FFD700?style=for-the-badge&logo=clock&logoColor=black" />
  <img src="https://img.shields.io/badge/Kiblat-0078D4?style=for-the-badge&logo=compass&logoColor=white" />
  <br>
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/Bangkah/Muslim-Life?style=for-the-badge&color=00A040&labelColor=20232A" />
  <img alt="GitHub license" src="https://img.shields.io/github/license/Bangkah/Muslim-Life?style=for-the-badge&color=FFD700&labelColor=20232A" />
</p>

# 🕌 Muslim Life — Aplikasi Islami Modern, Ringan, dan Bermanfaat

**Muslim Life** adalah aplikasi web Islami berbasis React.js yang membantu umat Muslim dalam menjalani ibadah harian dengan lebih mudah, cepat, dan praktis.  
Tanpa instalasi, tanpa akun — cukup buka di browser dan manfaatkan semua fiturnya!

---

## 🌟 Fitur Utama Muslim Life

### 📖 Al-Qur’an Digital Lengkap
- Semua surah dan ayat lengkap dari API Qur'an
- Menampilkan teks Arab, latin, dan terjemahan bahasa Indonesia
- Navigasi mudah dan tampilan bersih
- Data diambil dari **[equran.id API](https://equran.id/apidev)**

### 🕌 Jadwal Shalat Otomatis
- Menyesuaikan lokasi pengguna secara otomatis (dengan **Geolocation API**)
- Tampil responsif dan real-time
- Format waktu lokal
- Data dari **[MyQuran API](https://api.myquran.com/v1/sholat/jadwal)**

### 🧭 Penunjuk Arah Kiblat
- Menampilkan arah kiblat berdasarkan lokasi pengguna
- Menggunakan API berbasis kompas kiblat: **[API Ninjas — Kiblat API](https://api.api-ninjas.com/v1/qibla)**

### ✍️ Artikel Islami (Tanpa API, Statis Sementara)
- Berisi artikel inspiratif tentang ibadah dan kehidupan Islami
- Topik seperti: keutamaan shalat, membaca Al-Qur’an, dan bersedekah
- Akan terhubung dengan API pribadi di masa depan

### 📚 Doa Harian
- Kumpulan doa harian lengkap sesuai sunnah
- Untuk aktivitas sehari-hari: bangun tidur, masuk rumah, makan, dan lainnya

### 🌟 Asmaul Husna
- 99 nama Allah dengan arti dan tampilan yang rapi
- Interaktif dan responsif

### 💬 Pengingat Harian Islami
- Hadis dan kata-kata Islami yang memperkuat hati
- Diacak dan berubah setiap hari secara otomatis

---

## 🌓 Dark Mode — Default untuk Kenyamanan

Desain gelap digunakan secara default untuk kenyamanan mata dan efisiensi baterai, terutama di malam hari.

---

## ⚙️ Teknologi yang Digunakan

| Teknologi | Keterangan |
| :--- | :--- |
| **React.js** | Library utama untuk membangun antarmuka UI |
| **Capacitor JS** | Pembungkus (*cross-platform wrapper*) untuk kompilasi ke Android & iOS |
| **Tailwind CSS** | Styling modern, responsif, dan fleksibel |
| **React Router DOM** | Manajemen navigasi halaman SPA |
| **Axios** | Client HTTP untuk komunikasi dengan REST API |
| **MyQuran API v2** | Provider data Al-Qur'an dan jadwal shalat harian |
| **API Ninjas — Qibla API** | Kalkulasi arah kiblat berbasis koordinat geolokasi |
| **React Icons** | Provider ikon antarmuka modern |

---

## 📱 Dukungan Perangkat & Kompilasi Mobile

Muslim Life dapat berjalan di:
- ✅ **Web Browser:** Responsive di Android, iOS, Windows, macOS, Linux
- ✅ **Aplikasi Mobile Native:** Didukung penuh oleh Capacitor JS (`android/` & `ios/`)

### Cara Menjalankan untuk Pengembangan Mobile

```bash
# Clone repositori
git clone [https://github.com/Bangkah/Muslim-Life.git](https://github.com/Bangkah/Muslim-Life.git)
cd Muslim-Life

# Install dependensi
npm install

# Build web asset
npm run build

# Sinkronkan ke projek native Capacitor
npx cap sync

# Buka projek Android di Android Studio
npx cap open android

---

## 🙌 Dukung Kami

Suka dengan Muslim Life?  
Bantu pengembangan lebih lanjut:  
☕ [Belikan saya secangkir kopi](https://saweria.co/mdhyaulatha)

---

🛠️ Rencana Fitur Mendatang
[ ] Integrasi backend API pribadi untuk artikel Islami

[ ] Bookmark surah/ayat favorit

[ ] Fitur Tasbih Digital

[ ] Notifikasi pengingat waktu shalat (Native Push Notification)

[ ] Dukungan Mode Offline penuh (PWA & Local Database Storage)

---

## 💬 Muslim Life — Teman Ibadah Harianmu

Terinspirasi dari kebutuhan harian umat Muslim, Muslim Life hadir sebagai teman ibadah yang ringan, modern, dan menenangkan.  
> _“Jadikan setiap hari lebih bermakna bersama Muslim Life.”_

---
@Bangkah 2025
