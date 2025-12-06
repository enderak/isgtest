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
    },
    // ==========================================
    // KAYNAK: 2025-1C (6331 Sayılı Kanun Soruları)
    // ==========================================
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre işveren, çalışanları ve çalışan temsilcilerini hangi konularda bilgilendirir? I-Sağlık ve güvenlik riskleri II-Yasal hak ve sorumluluklar III-İlk yardım ve acil durum ekipleri",
        options: ["I, II ve III", "I ve II", "II ve III", "I ve III", "Yalnız I"],
        correct: 0,
        source: "2025-1C",
        explanation: "İşveren; riskler, tedbirler, haklar, sorumluluklar ve acil durum ekipleri konularında çalışanları bilgilendirmek zorundadır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanuna göre aşağıdakilerden hangisi destek elemanının asli görevinin yanında İSG ile ilgili görevlerinden değildir?",
        options: ["Önleme", "Koruma", "Tahliye", "Çalışmaları denetleme", "Yangınla mücadele"],
        correct: 3,
        source: "2025-1C",
        explanation: "Destek elemanının görevi önleme, koruma, tahliye, yangınla mücadele ve ilk yardımdır. Denetleme yetkisi yoktur.",
        profile: "igu"
    },
    {
        category: "Hukuk",
        text: "6331 sayılı Kanun yürürlüğe girmeden önce işçilerin taraf olduğu özel hukuk uyuşmazlıklarında hangi kanunlara başvurulmaktaydı?",
        options: ["Borçlar Kanunu-Ticaret Kanunu", "Ceza Kanunu-Ticaret Kanunu", "İş Kanunu- Ticaret Kanunu", "Borçlar Kanunu-İş Kanunu", "Anayasa-Medeni Kanun"],
        correct: 3,
        source: "2025-1C",
        explanation: "6331 öncesinde İş Kanunu (4857) ve Borçlar Kanunu (6098) esas alınıyordu.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı Kanuna göre işveren acil durumlarla ilgili aşağıdakilerden hangisini yapmak zorunda değildir?",
        options: ["Ölçüm ve değerlendirmeleri yapar.", "Acil durumları önceden değerlendirir.", "Önleyici ve sınırlandırıcı tedbirleri alır.", "Afet planı hazırlayıp Bakanlıktan onay alır.", "Acil durum planlarını hazırlar."],
        correct: 3,
        source: "2025-1C",
        explanation: "İşverenin afet planı hazırlayıp Bakanlıktan onay alma zorunluluğu yoktur; acil durum planı hazırlaması yeterlidir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı Kanuna göre çalışan temsilcisi ile ilgili hangisi yanlıştır?",
        options: ["Çalışanları temsil etmeye yetkilidir.", "Tehlike anında komple işi durdurma yetkisi vardır.", "Sendika temsilcileri çalışan temsilcisi olabilir.", "Kurul kararları kendisine bildirilir.", "Özel olarak eğitilir."],
        correct: 1,
        source: "2025-1C",
        explanation: "Çalışan temsilcisinin işi komple durdurma yetkisi yoktur; tedbir alınmasını isteme yetkisi vardır.",
        profile: "igu"
    },
    {
        category: "Sağlık",
        text: "6331 Sayılı Kanuna göre kimler Diğer Sağlık Personeli (DSP) olamaz?",
        options: ["Acil tıp teknisyeni", "Hemşire", "Sağlık Memuru", "Acil Tıp Teknikeri", "Biyolog"],
        correct: 4,
        source: "2025-1C",
        explanation: "Hemşire, sağlık memuru, ATT ve çevre sağlığı teknisyenleri DSP olabilir ancak Biyologlar olamaz.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı Kanuna göre aşağıdakilerden hangisi çalışanların haklarından birisi değildir?",
        options: ["Meslek hastalığı bilgisi alma", "Çalışmaktan kaçınma", "Sağlık gözetimi", "Kurula görüş bildirme", "Eğitimlerden kaçınma"],
        correct: 4,
        source: "2025-1C",
        explanation: "Çalışanların eğitim alma hakkı ve yükümlülüğü vardır, eğitimden kaçınma bir hak değildir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı Kanuna göre sağlık gözetimi maliyetleri ile ilgili hangisi doğrudur?",
        options: ["Tamamı çalışanlarca karşılanır.", "Sendika tarafından karşılanır.", "Yarısı çalışanlarca karşılanır.", "Ekstra maliyetler çalışanca karşılanır.", "Tamamı işveren tarafından karşılanır."],
        correct: 4,
        source: "2025-1C",
        explanation: "Sağlık gözetiminden doğan maliyet ve ek maliyetler işverence karşılanır, çalışana yansıtılamaz.",
        profile: "igu"
    },
    {
        category: "Sağlık",
        text: "6331 Sayılı Kanuna göre çalışanların sağlık muayenesi zorunluluğu hangi durumda yoktur?",
        options: ["İşe girişlerinde", "İş değişikliğinde", "İş kazası sonrası işe dönüşte (talep halinde)", "Düzenli aralıklarla", "Yıllık izin dönüşünde"],
        correct: 4,
        source: "2025-1C",
        explanation: "Yıllık izin dönüşü rutin bir sağlık muayenesi zorunluluğu kanunda tanımlanmamıştır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı Kanuna göre 'bilgi yenileme eğitimi' kime verilir?",
        options: ["6 aydan fazla işten uzak kalanlara", "Her yıl tüm çalışanlara", "Sadece çalışan temsilcisine", "Mesleki yeterlilik için", "Sadece iş kazası geçirenlere"],
        correct: 0,
        source: "2025-1C",
        explanation: "Herhangi bir sebeple 6 aydan fazla süreyle işten uzak kalanlara, tekrar işe başlatılmadan önce bilgi yenileme eğitimi verilir.",
        profile: "igu"
    },
    {
        category: "Hukuk",
        text: "İşin durdurulması kararına karşı işveren yetkili mahkemeye kaç iş günü içinde itiraz edebilir?",
        options: ["3 gün", "5 gün", "6 gün", "15 gün", "30 gün"],
        correct: 2,
        source: "2025-1C",
        explanation: "İşveren, kararın yerine getirildiği tarihten itibaren 6 iş günü içinde yerel iş mahkemesine itiraz edebilir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanuna göre çalışanların eğitimi maliyeti kime aittir?",
        options: ["Çalışana", "Devlete", "İşverene", "Sendikaya", "Ortak karşılanır"],
        correct: 2,
        source: "2025-1C",
        explanation: "Eğitim maliyetleri işveren tarafından karşılanır, çalışana yansıtılamaz ve eğitim süresi çalışmadan sayılır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanun'a göre hangisi 'iş kazası' tanımı kapsamındadır? I-İşin yürütümü nedeniyle oluşması II-Ölüme veya engelliliğe neden olması III-Sadece çevreye zarar vermesi",
        options: ["Yalnız I", "Yalnız II", "I ve II", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2025-1C",
        explanation: "6331'e göre iş kazası; işyerinde veya işin yürütümü nedeniyle meydana gelen, ölüme veya bedensel/ruhsal engelliliğe (insana) zarar veren olaydır.",
        profile: "igu"
    },
    {
        category: "Hukuk",
        text: "Sosyal Güvenlik Kurumunca uygulanan idari para cezalarına tebliğ tarihinden itibaren kaç gün içinde itiraz edilebilir?",
        options: ["3 gün", "7 gün", "15 gün", "30 gün", "45 gün"],
        correct: 2,
        source: "2025-1C",
        explanation: "İdari para cezalarına tebliğ tarihinden itibaren 15 gün içinde Kuruma itiraz edilebilir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "İş kazası tanımının 'işyerinde veya işin yürütümü nedeniyle meydana gelen...' şeklinde yapıldığı kanun hangisidir?",
        options: ["4857 İş Kanunu", "6331 İSG Kanunu", "3308 Mesleki Eğitim", "5510 SSGSS", "6098 Borçlar Kanunu"],
        correct: 1,
        source: "2025-1C",
        explanation: "Bu tanım 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'nda yer alır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanun'a göre 'Risk' kavramının tanımı hangisidir?",
        options: ["Belirsizlik içeren unsur", "Tehlikeden kaynaklanacak kayıp/yaralanma ihtimali", "Tehlikeli bir olayın kendisi", "Potansiyel zarar kaynağı", "Sadece maddi hasar"],
        correct: 1,
        source: "2025-1C",
        explanation: "Risk: Tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimalidir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "Sigortasız işçi çalıştırdığı tespit edilen işverenler, sağlanan destekten kaç yıl süreyle faydalanamaz?",
        options: ["1", "2", "3", "5", "6"],
        correct: 2,
        source: "2025-1C",
        explanation: "Kayıt dışı istihdam tespit edilen işverenler, sağlanan destekten 3 yıl süreyle faydalanamaz.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "Hayati tehlike arz eden durumlarda bildirim yapmayan iş güvenliği uzmanının belgesi, tekrarı halinde ne kadar süreyle askıya alınır?",
        options: ["3 ay", "6 ay", "9 ay", "1 yıl", "2 yıl"],
        correct: 1,
        source: "2025-1C",
        explanation: "Bildirim yapmama cezası ilkinde 3 ay, tekrarında ise 6 ay belge askıya alınmasıdır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "İşyeri tehlike sınıflarının tespitinde aşağıdakilerden hangisi esas alınır?",
        options: ["Asıl iş", "Üretilen ürün", "Kullanılan hammadde", "Çalışan sayısı", "İşyeri büyüklüğü"],
        correct: 0,
        source: "2025-1C",
        explanation: "Tehlike sınıfı tespitinde, o işyerinde yapılan asıl iş dikkate alınır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "Ciddi ve yakın tehlike ile karşılaşan çalışanlar durumun tespiti için öncelikle kime başvurur?",
        options: ["Sendikaya", "Çalışan temsilcisine", "İş güvenliği uzmanına", "Sadece işverene", "Kurula (yoksa işverene)"],
        correct: 4,
        source: "2025-1C",
        explanation: "Çalışanlar Kurula, kurulun bulunmadığı işyerlerinde ise işverene başvurarak durumun tespit edilmesini talep eder.",
        profile: "igu"
    }
];

