# İSG Sınav Öğrencisi V18

İş Sağlığı ve Güvenliği (İSG) sınavlarına hazırlanan adaylar (İGU A/B/C, İşyeri Hekimliği, DSP) için geliştirilmiş; mobil uyumlu, modern ve kullanıcı dostu bir web tabanlı sınav uygulamasıdır.

![Ekran Görüntüsü](img/logo.png) <!-- Varsa logo veya ekran görüntüsü -->

## 🚀 Özellikler

### 🎯 Akıllı Sınav Sistemi
- **Branş Bazlı Filtreleme:** İGU A, B, C, İşyeri Hekimliği ve DSP için özelleştirilmiş soru havuzları.
- **Dinamik Soru Yükleme:** JSON ve JS dosyalarından soruları otomatik olarak yükler ve kategorize eder.
- **Gerçekçi Sınav Dağılımı:** ÖSYM müfredatına uygun konu ağırlıkları (Mevzuat, Teknik, Sağlık vb.).

### 📱 Mobil & Tablet Uyumu
- **Responsive Tasarım:** Telefon ve tabletlerde kusursuz görünüm.
- **Dokunmatik Kontroller:** Sola/sağa kaydırarak (swipe) soru değiştirme.
- **PWA Desteği:** Ana ekrana eklenebilir ve tam ekran çalışır.

### 💡 Eğitim Modu
- **Anında Geri Bildirim:** Cevabı işaretlediğiniz an doğru/yanlış durumu ve detaylı açıklamayı görün.
- **Konu Analizi:** Sınav sonunda her ders kategorisi için detaylı başarı grafikleri (Örn: Hukuk %80, Teknik %40).

### ⚙️ Kişiselleştirme
- **Karanlık Mod (Dark Mode):** Göz yormayan gece modu.
- **Font Boyutu:** Yazı boyutunu (A+/A-) isteğinize göre ayarlayın.
- **Süre Kontrolü:** İsteğe bağlı 75 dakikalık sınav sayacı.

## 🛠️ Kurulum ve Çalıştırma

Bu proje **HTML, Tailwind CSS (CDN) ve Vanilla JavaScript** ile geliştirilmiştir. Herhangi bir derleme (build) işlemi gerektirmez.

1. **Projeyi İndirin:**
   ```bash
   git clone https://github.com/enderak/isgtest.git
   ```
2. **Çalıştırın:**
   `index.html` dosyasını tarayıcınızda açmanız yeterlidir.
   *(Not: JSON dosyalarının okunabilmesi için yerel bir sunucuda (Live Server vb.) çalıştırmanız önerilir.)*

## 📂 Dosya Yapısı

- `index.html`: Uygulamanın ana giriş noktası ve tüm mantığı barındıran dosya.
- `sorular/`: Soru havuzlarının bulunduğu klasör (JSON formatında).
  - `index.json`: Yüklenecek soru dosyalarının listesi.
  - `_SABLON.jsonc`: Yeni soru eklemek için şablon dosyası.
- `img/`: Görsel dosyaları.

## 📝 Soru Ekleme

Yeni bir soru paketi eklemek için:
1. `sorular/_SABLON.jsonc` dosyasındaki formatı inceleyin.
2. Yeni bir `.json` dosyası oluşturun (örn: `2025-Deneme-1.json`).
3. Dosya adını `sorular/index.json` listesine ekleyin.
4. (Opsiyonel) Sorular JS formatında da (`window.SoruHavuzu`) eklenebilir.

## 🤝 Katkıda Bulunma

Hataları bildirmek veya özellik önermek için lütfen "Issues" kısmını kullanın.

---
*Geliştirici: Ender AK*
