# 🌸 Firebase İletişim Formu 🌸

Bu proje, **Root & Ray** şirketi için yapılmış bir **İletişim Formu** uygulamasıdır. Kullanıcılar, formu doldurup gönderdiklerinde mesajları **Firebase Firestore** veritabanında depolanır. Ayrıca, bir soru ile kullanıcıya **Evet** ya da **Hayır** olarak yanıt verme seçeneği sunulur. 🎉

**Canlı Demo:**  
[Firebase İletişim Formu Uygulaması](https://firebase-form-app.onrender.com)

⚠️ **Not:** Render, ücretsiz planda belirli bir süre aktif kullanılmazsa sunucuyu uyku moduna alır. Bu nedenle bağlantıya tıkladığınızda sayfa hemen yüklenmeyebilir. Lütfen birkaç saniye (10-15sn) bekleyin. 🙂

---

## 🚀 Sunucu ve Çalışma Şekli

Bu proje, **Node.js** ve **Express.js** kullanılarak geliştirilmiş bir backend uygulamasıdır. Sunucu **Render** platformunda barındırılmakta ve **Firestore** veritabanı ile tüm veri depolama işlemleri yapılmaktadır. Form verisi kullanıcılardan alındıktan sonra Firebase Firestore'a kaydedilir.
İletişim formunu bir web sunucusu üzerinde çalıştırmamın en büyük nedeni, verilerin güvenli bir şekilde işlenmesi, kullanıcı etkileşiminin sağlanması ve uygulamanın ölçeklenebilmesidir.
Örneğin, web sitesi sadece içerik sunmakla sınırlıdır. Ancak bir sunucu, gelen verileri doğrulamak ve filtrelemek için programlamaya imkan tanır. Ayrıca formda zorunlu alanların doldurulup doldurulmadığını kontrol edebilir, zararlı verileri filtreleyebilir veya verileri doğru formatta işleyebiliriz. 
Özellikle bu formu sunucuda çalıştırmamın diğer bir avantajı bir web sunucu, kullanıcılara otomatik yanıtlar gönderebilir. Örneğin, iletişim formu gönderildiğinde, kullanıcıya otomatik olarak teşekkür mesajı veya onay e-postası gönderilebilir ama web sitesi ise statik kalır ve böyle bir işlem için sunucu gereklidir.

---

## 💾 Firebase ile Veri Depolama

Firebase Firestore, projedeki mesajları güvenli bir şekilde depolar. Her gelen mesaj, kullanıcının adı, mesajı ve gönderilme zamanını içerir. Bu sayede veriler her zaman güvenli ve kolayca erişilebilir olur.

---

## ⚙️ Kullanılan Teknolojiler

- **Node.js** ve **Express.js:** Sunucu tarafında kullanılan JavaScript teknolojileri.
- **Firebase:** Veritabanı olarak Firestore kullanılmıştır.
- **HTML/CSS:** Kullanıcı arayüzü için basit ve şık bir tasarım yapılmıştır.

---

## 📚 Öğrendiklerim

- **Firebase ve Firestore:** Firebase'i projeye entegre etmeyi ve Firestore'u kullanarak verileri nasıl depolayacağımı öğrendim.
- **Express.js:** Web uygulamalarını hızlıca oluşturmak için Express.js'i kullanmayı öğrendim.
- **Sunucu Yayınlama:** Render platformunda projeyi canlıya almayı ve sunucuyu yönlendirmeyi öğrendim.
- **Moment.js:** Zaman bilgisini İstanbul saatine göre almak için Moment.js kullandım ve veriyi formatladım.

---
