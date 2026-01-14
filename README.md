# İSG Sınavmatik 🚧✅

**İş Sağlığı ve Güvenliği (İSG)** sınavlarına hazırlanan adaylar (İGU A/B/C, İşyeri Hekimliği, DSP) için geliştirilmiş; yapay zeka destekli özelliklere sahip, kişiselleştirilebilir ve modern bir sınav çalışma asistanıdır.

---

## 🌟 Öne Çıkan Özellikler

### 🧠 Sorumatik (Akıllı Test Oluşturucu)
Klasik denemelerin ötesine geçin!
- **🎯 Konu Tarama:** Sadece eksik olduğunuz konulardan (Örn: *Mevzuat*, *Risk Analizi*) özel test oluşturun.
- **❌ Yanlışlarım (Hata Telafi):** Daha önce yanlış cevapladığınız sorular akıllı hafızaya kaydedilir. Bu mod ile sadece hatalarınızdan oluşan bir "telafi sınavı" olabilirsiniz.
- **🔀 Şık Karıştırma:** Ezberlemeyi önlemek için resimsiz sorularda **şıkların yeri (A-B-C-D-E) her seferinde rastgele değişir**. Resimli sorular ise bozulmaz.

### 📱 Modern ve Kullanıcı Dostu Arayüz
- **PWA Desteği:** Uygulamayı telefonunuza indirip **internet yokken bile (Offline)** kullanabilirsiniz.
- **Touch & Swipe:** Sorular arasında parmağınızla kaydırarak gezinin.
- **Karanlık Mod 🌙:** Göz dostu koyu tema.
- **Minimal Tasarım:** Gereksiz detaylardan arındırılmış, odaklanmayı sağlayan arayüz.

### 📊 Eğitim ve Analiz
- **Anında Geri Bildirim:** Eğitim modunda cevabı işaretler işaretlemez açıklamayı görün.
- **Detaylı Analiz:** Sınav sonunda hangi konuda ne kadar başarılı olduğunuzu grafiklerle görün.
- **🚩 Hata Bildirimi:** Şüpheli gördüğünüz soruları tek tıkla e-posta yoluyla geliştiriciye bildirin.

### 🥚 Sürpriz Yumurta (Easter Egg)
- **🕺 Disko Modu:** Başlık çubuğundaki **İSG SINAVMATİK** yazısına **1.5 saniye** basılı tutarsanız ne olacağını görün! (Gizli özellik).

---

## 🛠️ Teknik Özellikler
- **Teknoloji:** HTML5, Tailwind CSS, Vanilla JavaScript.
- **Veri Yapısı:** JSON tabanlı soru havuzu sistemi. Multi-file desteği ile binlerce soru eklenebilir.
- **Kurulumsuz:** Build step gerektirmez. Direkt `index.html` ile çalışır.

## 🚀 Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/enderak/isgtest.git
   ```
2. Klasöre girin ve `index.html` dosyasını tarayıcınızda açın.
   *(Not: JSON dosyalarının sorunsuz yüklenmesi için Live Server vb. bir yerel sunucu kullanmanız önerilir.)*

## 📝 Soru Ekleme Rehberi
`sorular/_SABLON.jsonc` dosyasındaki formata uygun olarak hazırladığınız `.json` dosyalarını `sorular/` klasörüne atıp, `sorular/index.json` listesine ekleyerek sistemi büyütebilirsiniz.

---
*Geliştirici: Ender AK*
