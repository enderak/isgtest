// --- İSG SINAV ÖĞRENCELİĞİ SORU HAVUZU ---
// DİKKAT: index.html bu listedeki 'category' ve 'source' alanlarına göre filtreleme yapar.
// Yazım hatası yapmamaya özen gösterin (Örn: 'Teknik' yerine 'teknik' yazmayın).

const questionPool = [

    // --- ÖRNEK 1: 2023-1 Sınavı / TEKNİK Konusu / İGU Profili ---
    {
        question: "Aşağıdakilerden hangisi kapalı alan çalışmalarında dikkat edilmesi gereken hususlardan biridir?",
        options: [
            "Yalnız çalışılmalıdır.", 
            "Havalandırma yapılmasına gerek yoktur.", 
            "Gözcü bulundurulmalıdır.", 
            "Maske kullanımı yasaktır.", 
            "Aydınlatma kapatılmalıdır."
        ],
        answer: 2, // Doğru şık C (İndeksler: A=0, B=1, C=2, D=3, E=4)
        category: "Teknik", // Seçenekler: Teknik, Mevzuat, Sağlık, Hukuk, Genel İSG Konuları
        profile: "igu",     // Seçenekler: igu, hekim, dsp
        source: "2023-1",   // Ekranda görünecek kaynak ismi
        explanation: "Kapalı alanlarda dışarıda mutlaka bir gözcü bulunmalıdır."
    },

    // --- ÖRNEK 2: 2023-1 Sınavı / MEVZUAT Konusu / İGU Profili ---
    {
        question: "6331 Sayılı Kanuna göre işveren, çalışanların iş sağlığı ve güvenliği eğitimlerini ne zaman vermelidir?",
        options: ["İşe başlamadan önce", "İşten ayrılırken", "Yıllık izinde", "Emekli olunca", "Hiçbiri"],
        answer: 0,
        category: "Mevzuat",
        profile: "igu",
        source: "2023-1",
        explanation: "Eğitimler işe başlama, iş değişikliği gibi durumlarda verilir."
    },

    // --- ÖRNEK 3: 2023-2 Sınavı / SAĞLIK Konusu / İŞYERİ HEKİMİ Profili ---
    {
        question: "Pnömokonyoz riski olan işyerlerinde periyodik muayenede en önemli tetkik hangisidir?",
        options: ["Tam kan", "Akciğer grafisi", "İdrar tahlili", "EKG", "Göz muayenesi"],
        answer: 1,
        category: "Sağlık",
        profile: "hekim",
        source: "2023-2",
        explanation: "Tozlu işlerde akciğer grafisi temel tarama yöntemidir."
    },

    // --- ÖRNEK 4: Deneme Sınavı / HUKUK Konusu / DSP Profili ---
    {
        question: "İş kazası sonucu oluşan maddi tazminat davaları hangi mahkemede görülür?",
        options: ["Sulh Ceza", "Asliye Ceza", "İş Mahkemesi", "Aile Mahkemesi", "Vergi Mahkemesi"],
        answer: 2,
        category: "Hukuk",
        profile: "dsp",
        source: "Deneme Sınavı",
        explanation: "İşçi-İşveren uyuşmazlıkları İş Mahkemelerinde görülür."
    },

    // --- ÖRNEK 5: 2023-1 Sınavı / GENEL İSG Konusu / Ortak Soru ---
    {
        question: "İş sağlığı ve güvenliği kültürünün temel amacı nedir?",
        options: ["Ceza yazmak", "Üretimi durdurmak", "Güvenli davranış kazandırmak", "Maliyeti artırmak", "Yönetimi zorlamak"],
        answer: 2,
        category: "Genel İSG Konuları",
        profile: "igu",
        source: "2023-1",
        explanation: "Güvenlik kültürü, davranış değişikliği ve farkındalık yaratmayı amaçlar."
    },
    
    // NOT: Bu örnekleri kopyalayıp çoğaltarak kendi sorularınızı ekleyebilirsiniz.
    // DİKKAT: Her sınav türü için (Örn: İGU) tablodaki sayıları tamamlayacak kadar (Örn: 20 Teknik soru) veri girmelisiniz.
];
