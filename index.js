const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const express = require('express');

// Firebase yapılandırma bilgisi
const firebaseConfig = {
  apiKey: "AIzaSyBuvllPikzPN6TycT4hHiSt5wNNqFjcBP0",
  authDomain: "fir-not-app.firebaseapp.com",
  projectId: "fir-not-app",
  storageBucket: "fir-not-app.firebasestorage.app",
  messagingSenderId: "720230791485",
  appId: "1:720230791485:web:e46c32295e83018e1cad54"
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
  const zaman = new Date().toLocaleString(); // Zaman bilgisini al

  // Firestore'a veri ekleyelim
  try {
    const docRef = await addDoc(collection(db, "mesajlar"), { // "mesajlar" koleksiyonuna veri ekliyoruz
      ad: ad,
      mesaj: mesaj,
      zaman: zaman
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
