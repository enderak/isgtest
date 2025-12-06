const questionPool = [
    // ==========================================
    // KAYNAK: 2023-1
    // ==========================================
    {
        category: "Hukuk",
        text: "[2023-1] 4857 sayılı İş Kanunu'na göre deneme süresi toplu iş sözleşmeleriyle en çok ne kadar olabilir?",
        options: ["2 ay", "3 ay", "4 ay", "6 ay", "1 yıl"],
        correct: 2,
        source: "2023-1",
        explanation: "Normalde 2 aydır, ancak toplu iş sözleşmesiyle 4 aya kadar uzatılabilir.",
        profile: "ortak"
    },
    {
        category: "Genel İSG Konuları",
        text: "[2023-1] Aşağıdakilerden hangisi İSG kültürünün özelliklerinden biri değildir?",
        options: ["Güvenlik önceliği", "Suçlayıcı yaklaşım", "Katılımcılık", "Sürekli iyileştirme", "İletişim"],
        correct: 1,
        source: "2023-1",
        explanation: "Suçlayıcı değil, önleyici ve geliştirici yaklaşım esastır.",
        profile: "ortak"
    },
    {
        category: "Mevzuat",
        text: "[2023-1] Risk Değerlendirmesi Yönetmeliği'ne göre 'Tehlikeli' sınıfta risk analizi kaç yılda bir yenilenir?",
        options: ["2 yıl", "4 yıl", "6 yıl", "1 yıl", "3 yıl"],
        correct: 1,
        source: "2023-1",
        explanation: "Çok tehlikeli: 2, Tehlikeli: 4, Az tehlikeli: 6 yılda bir yenilenir.",
        profile: "ortak"
    },
    {
        category: "Sağlık",
        text: "[2023-1] Aşağıdakilerden hangisi işle ilgili kas-iskelet sistemi hastalıkları risk faktörlerinden değildir?",
        options: ["Tekrarlayan hareketler", "Aşırı güç kullanımı", "Uygun aydınlatma", "Kötü duruş", "Titreşim"],
        correct: 2,
        source: "2023-1",
        explanation: "Uygun aydınlatma bir risk faktörü değil, iyileştirici bir unsurdur.",
        profile: "ortak"
    },
    {
        category: "Teknik",
        text: "[2023-1] Kapalı alanlarda çalışmalarda oksijen seviyesi en az yüzde kaç olmalıdır?",
        options: ["%15", "%18", "%19.5", "%21", "%23"],
        correct: 2,
        source: "2023-1",
        explanation: "Oksijen seviyesinin %19.5'in altına düşmesi tehlikelidir.",
        profile: "ortak"
    },

    // ==========================================
    // KAYNAK: 2023-2
    // ==========================================
    {
        category: "Hukuk",
        text: "[2023-2] 6331 sayılı Kanun'a göre işverenin genel yükümlülükleri arasında hangisi yoktur?",
        options: ["Risk değerlendirmesi yapmak", "Çalışanlara eğitim vermek", "Üretim hedeflerini tutturmak", "Sağlık gözetimi yapmak", "Önlemleri almak"],
        correct: 2,
        source: "2023-2",
        explanation: "Üretim hedefleri İSG kanununun konusu değildir.",
        profile: "ortak"
    },
    {
        category: "Genel İSG Konuları",
        text: "[2023-2] Ramak kala olay nedir?",
        options: ["Ölümlü kaza", "Yaralanmalı kaza", "Zarar vermeyen tehlikeli olay", "Meslek hastalığı", "İş kazası"],
        correct: 2,
        source: "2023-2",
        explanation: "Olay gerçekleşmiş ancak zarar meydana gelmemiştir.",
        profile: "ortak"
    },
    {
        category: "Mevzuat",
        text: "[2023-2] İşyeri Hekimi ve Dİğer Sağlık Personeli Yönetmeliği'ne göre az tehlikeli sınıfta çalışan başına hekim süresi nedir?",
        options: ["5 dk", "10 dk", "15 dk", "20 dk", "25 dk"],
        correct: 0,
        source: "2023-2",
        explanation: "Az tehlikeli: 5dk, Tehlikeli: 10dk, Çok Tehlikeli: 15dk.",
        profile: "ortak"
    },
    {
        category: "Sağlık",
        text: "[2023-2] Pnömokonyoz hangi organda meydana gelen bir meslek hastalığıdır?",
        options: ["Karaciğer", "Böbrek", "Akciğer", "Kalp", "Mide"],
        correct: 2,
        source: "2023-2",
        explanation: "Tozların akciğerde birikmesi sonucu oluşur.",
        profile: "ortak"
    },
    {
        category: "Teknik",
        text: "[2023-2] Elektrik yangınlarında hangi söndürücü KULLANILMAZ?",
        options: ["Kuru Kimyevi Toz", "Karbondioksit", "Su", "Halokarbon", "Köpük (İletken olmayan)"],
        correct: 2,
        source: "2023-2",
        explanation: "Su iletkendir, elektrik yangınlarında çarpılma riski yaratır.",
        profile: "ortak"
    },

    // ==========================================
    // KAYNAK: Deneme
    // ==========================================
    {
        category: "Hukuk",
        text: "[Deneme] İş kazası ve meslek hastalığı bildirim süresi SGK'ya en geç kaç iş günüdür?",
        options: ["1", "2", "3", "5", "10"],
        correct: 2,
        source: "Deneme",
        explanation: "Kazadan sonraki 3 iş günü içinde bildirilmelidir.",
        profile: "ortak"
    },
    {
        category: "Genel İSG Konuları",
        text: "[Deneme] Aşağıdakilerden hangisi KKD kullanımının öncelik sırasındaki yeridir?",
        options: ["En son çare", "İlk çare", "Maliyete göre", "Çalışan isteğine göre", "Her zaman ilk"],
        correct: 0,
        source: "Deneme",
        explanation: "Önce kaynağında koruma, sonra ortamda, en son kişisel koruyucu.",
        profile: "ortak"
    },
    {
        category: "Mevzuat",
        text: "[Deneme] Acil Durumlar Yönetmeliği'ne göre tatbikatlar en az ne kadar sürede bir yapılır?",
        options: ["6 ay", "1 yıl", "2 yıl", "3 yıl", "5 yıl"],
        correct: 1,
        source: "Deneme",
        explanation: "Yılda en az bir kez tatbikat zorunludur.",
        profile: "ortak"
    },
    {
        category: "Sağlık",
        text: "[Deneme] Gürültüye bağlı işitme kaybı hangi frekanslarda başlar?",
        options: ["500 Hz", "1000 Hz", "2000 Hz", "4000 Hz", "8000 Hz"],
        correct: 3,
        source: "Deneme",
        explanation: "Genellikle 4000 Hz civarında çentikleşme ile başlar.",
        profile: "ortak"
    },
    {
        category: "Teknik",
        text: "[Deneme] İskelelerde korkuluk yüksekliği en az kaç cm olmalıdır?",
        options: ["80 cm", "90 cm", "100 cm", "110 cm", "120 cm"],
        correct: 2,
        source: "Deneme",
        explanation: "Ana korkuluk 100 cm, ara korkuluk 50 cm, topuk levhası 15 cm olmalıdır.",
        profile: "ortak"
    }
];
