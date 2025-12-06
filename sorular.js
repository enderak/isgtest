const questionPool = [
    // =================================================================
    // KAYNAK: 2025-1C (Bu kaynak seçilirse buradaki 50 soru gelir)
    // =================================================================
    {
        category: "Mevzuat",
        text: "1- 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre işveren, çalışanları ve temsilcilerini hangi konularda bilgilendirir? I-Riskler II-Haklar III-Acil Durum Ekipleri",
        options: ["I, II ve III", "I ve II", "II ve III", "I ve III", "Yalnız I"],
        correct: 0,
        source: "2025-1C",
        explanation: "İşveren; riskler, tedbirler, haklar ve acil durum ekipleri konularında bilgilendirme yapar.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "2- Destek elemanının asli görevinin yanında İSG ile ilgili görevlerinden hangisi yoktur?",
        options: ["Önleme", "Koruma", "Tahliye", "Çalışmaları denetleme", "Yangınla mücadele"],
        correct: 3,
        source: "2025-1C",
        explanation: "Destek elemanının denetleme yetkisi yoktur.",
        profile: "igu"
    },
    {
        category: "Hukuk",
        text: "3- 6331 öncesinde İSG ile ilgili özel hukuk uyuşmazlıklarında hangi kanunlara başvurulmaktaydı?",
        options: ["Borçlar-Ticaret", "Ceza-Ticaret", "İş-Ticaret", "Borçlar Kanunu-İş Kanunu", "Anayasa-Medeni"],
        correct: 3,
        source: "2025-1C",
        explanation: "4857 İş Kanunu ve 6098 Borçlar Kanunu.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "4- İşveren acil durumlarla ilgili aşağıdakilerden hangisini yapmak zorunda değildir?",
        options: ["Ölçüm yapmak", "Acil durumları değerlendirmek", "Önleyici tedbir almak", "Bakanlıktan onaylı afet planı hazırlamak", "Acil durum planı hazırlamak"],
        correct: 3,
        source: "2025-1C",
        explanation: "Afet planı için Bakanlık onayı şartı 6331'de yoktur.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "5- Çalışan temsilcisi ile ilgili hangisi yanlıştır?",
        options: ["Çalışanları temsil eder", "Tehlike anında işi durdurma yetkisi vardır", "Sendika temsilcisi bu görevi yapabilir", "Kurul kararları bildirilir", "Özel eğitilir"],
        correct: 1,
        source: "2025-1C",
        explanation: "Çalışan temsilcisinin işi durdurma yetkisi yoktur, talep etme yetkisi vardır.",
        profile: "igu"
    },
    // ... (2025-1C için 6-50 arası soruları buraya doldurarak devam eder) ...
    // Sistemin 50 soruyu görüp çalışması için buraya "yer tutucu" 45 soru daha ekliyorum.
    // Sen gerçek soruları girdikçe bunları silersin.
    ...Array.from({length: 45}, (_, i) => ({
        category: "Mevzuat", // Veya Teknik, Sağlık vb.
        text: `${i+6}- (2025-1C Sınav Sorusu) Bu alana PDF'teki diğer sorular eklenecek.`,
        options: ["A Şıkkı", "B Şıkkı", "C Şıkkı", "D Şıkkı", "E Şıkkı"],
        correct: 0,
        source: "2025-1C",
        explanation: "Bu soru henüz girilmedi.",
        profile: "igu"
    })),


    // =================================================================
    // KAYNAK: DENEME SINAVI (Buradan algoritma ile 50 tane seçilecek)
    // =================================================================
    
    // --- TEKNİK (Havuzda 30 tane olsun, 20 tane seçecek) ---
    ...Array.from({length: 30}, (_, i) => ({
        category: "Teknik",
        text: `[Deneme Teknik-${i+1}] Aşağıdakilerden hangisi fiziksel risk etmenidir?`,
        options: ["Gürültü", "Virüs", "Silika Tozu", "Benzen", "Ergonomi"],
        correct: 0,
        source: "Deneme",
        explanation: "Gürültü, titreşim, aydınlatma fiziksel risktir.",
        profile: "ortak"
    })),

    // --- MEVZUAT (Havuzda 20 tane olsun, 15 tane seçecek) ---
    ...Array.from({length: 20}, (_, i) => ({
        category: "Mevzuat",
        text: `[Deneme Mevzuat-${i+1}] Kurul kaç ayda bir toplanır?`,
        options: ["1", "2", "3", "6", "12"],
        correct: 0,
        source: "Deneme",
        explanation: "Tehlike sınıfına göre değişir ancak standart en az ayda 1'dir.",
        profile: "ortak"
    })),

    // --- SAĞLIK (Havuzda 10 tane olsun, 5 tane seçecek) ---
    ...Array.from({length: 10}, (_, i) => ({
        category: "Sağlık",
        text: `[Deneme Sağlık-${i+1}] Pnömokonyoz hangi organda görülür?`,
        options: ["Deri", "Akciğer", "Karaciğer", "Böbrek", "Kalp"],
        correct: 1,
        source: "Deneme",
        explanation: "Akciğer toz hastalığıdır.",
        profile: "ortak"
    })),

    // --- GENEL İSG (Havuzda 10 tane olsun, 7 tane seçecek) ---
    ...Array.from({length: 10}, (_, i) => ({
        category: "Genel İSG Konuları",
        text: `[Deneme Genel-${i+1}] İSG Kültürünün temeli nedir?`,
        options: ["Ceza", "Denetim", "Güvenlik Önceliği", "Üretim", "Maliyet"],
        correct: 2,
        source: "Deneme",
        explanation: "Güvenlik önceliği esastır.",
        profile: "ortak"
    })),

    // --- HUKUK (Havuzda 5 tane olsun, 3 tane seçecek) ---
    ...Array.from({length: 5}, (_, i) => ({
        category: "Hukuk",
        text: `[Deneme Hukuk-${i+1}] İdari para cezasına itiraz süresi?`,
        options: ["7", "15", "30", "60", "90"],
        correct: 1,
        source: "Deneme",
        explanation: "15 gün içinde itiraz edilir.",
        profile: "ortak"
    })),
].flat();
