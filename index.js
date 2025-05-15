require('dotenv').config();

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const express = require('express');
const moment = require('moment-timezone'); // Moment.js ve timezone'u aynı anda dahil ettik

// Firebase yapılandırma bilgisi
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig); // Firebase için app

// Firestore'u başlat
const db = getFirestore(app);

// Express için app
const expressApp = express();
const port = process.env.PORT || 3000;

// Statik dosyaları public klasöründen sunmak için
expressApp.use(express.static('public'));

// Form verisini alabilmek için bu satır önemli!
expressApp.use(express.urlencoded({ extended: true }));

// Anasayfa: Formun gösterileceği HTML
expressApp.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

// Formdan gelen verileri yakala ve Firestore'a ekle
expressApp.post('/gonder', async (req, res) => {
  const ad = req.body.ad; // Formdan "ad" verisini al
  const mesaj = req.body.mesaj; // Formdan "mesaj" verisini al
  const zaman = moment().tz("Europe/Istanbul").format('MM/DD/YYYY, hh:mm A'); // Moment.js ile İstanbul saatine göre tarihi formatlıyoruz

  // Firestore'a veri ekleyelim
  try {
    const docRef = await addDoc(collection(db, "mesajlar"), { // "mesajlar" koleksiyonuna veri ekliyoruz
      ad: ad,
      mesaj: mesaj,
      zaman: zaman // Zamanı burada gönderiyoruz
    });
    console.log("Mesaj Firestore'a kaydedildi, ID:", docRef.id);
  } catch (e) {
    console.error("Hata oluştu:", e);
  }

  // Kullanıcıya cevap gönder
  res.send(`Teşekkürler, ${ad}! Mesajın alındı.`);
});

// Sunucuyu başlat
expressApp.listen(port, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
