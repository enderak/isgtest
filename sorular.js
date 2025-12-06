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
    },
    // ==========================================
    // KAYNAK: 2025-1C (Devamı - 25-50. Sorular)
    // ==========================================
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, birden fazla işyerinin bulunduğu iş merkezleri, iş hanları, sanayi bölgeleri veya siteleri gibi yerlerde, iş sağlığı ve güvenliği konusundaki koordinasyon yönetim tarafından sağlanır. Yönetim, işyerlerinde iş sağlığı ve güvenliği yönünden diğer işyerlerini etkileyecek tehlikeler hususunda gerekli tedbirleri almaları için işverenleri uyarır. Bu uyarılara uymayan işverenleri nereye bildirir?",
        options: ["Sosyal Güvenlik Kurumu", "Çalışma ve Sosyal Güvenlik Bakanlığı", "Sağlık Bakanlığı", "İçişleri Bakanlığı", "Valilik"],
        correct: 1,
        source: "2025-1C",
        explanation: "Yönetim, uyarılara uymayan işverenleri Çalışma ve Sosyal Güvenlik Bakanlığına bildirir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işveren, işyerinde kullanılan iş ekipmanının, yapılacak işe uygun olması ve bu ekipmanın çalışanlara sağlık ve güvenlik yönünden zarar vermemesi için gerekli tüm tedbirleri alır. İşveren, iş ekipmanını seçerken aşağıdakilerden hangisini dikkate almak zorunda değildir?",
        options: ["İşyerindeki özel çalışma şartlarını", "Sağlık ve güvenlik yönünden tehlikeleri", "Ekipmanın menşei ülkesini", "İşyerindeki mevcut tehlikeleri", "Ekipmanın kullanımından kaynaklanabilecek yeni tehlikeleri"],
        correct: 2,
        source: "2025-1C",
        explanation: "Ekipmanın menşei (hangi ülkede üretildiği) teknik bir zorunluluk veya güvenlik kriteri değildir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işveren, çalışanların iş sağlığı ve güvenliği eğitimlerini almasını sağlar. Bu eğitimler özellikle; işe başlamadan önce, çalışma yeri veya iş değişikliğinde, iş ekipmanının değişmesi hâlinde veya yeni teknoloji uygulanması hâlinde verilir. Eğitimler, değişen ve ortaya çıkan yeni risklere uygun olarak yenilenir, gerektiğinde ve düzenli aralıklarla tekrarlanır. Aşağıdakilerden hangisi eğitim maliyetleri ile ilgili doğru bir ifadedir?",
        options: ["Eğitim maliyetleri çalışanlardan kesilir.", "Eğitim maliyetleri devlet tarafından karşılanır.", "Eğitim maliyetleri sendikalar tarafından karşılanır.", "Eğitim maliyetleri işveren tarafından karşılanır.", "Eğitim maliyetleri işsizlik sigortası fonundan karşılanır."],
        correct: 3,
        source: "2025-1C",
        explanation: "Eğitim maliyetleri işveren tarafından karşılanır, çalışanlara yansıtılamaz.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işyeri hekimi ve iş güvenliği uzmanının tam süreli görevlendirilmesi gereken durumlarda; işveren, işyeri sağlık ve güvenlik birimi kurar. Aşağıdakilerden hangisi İSGB'nin şartlarından biri değildir?",
        options: ["İşyerinin giriş katında kurulması esastır.", "En az bir işyeri hekimi ile işyerinin tehlike sınıfına uygun belgesi olan en az bir iş güvenliği uzmanı görevlendirilir.", "İSGB'de, 8'er metrekareden az olmamak üzere iş güvenliği uzmanı ile işyeri hekimi için çalışma odaları bulunur.", "İSGB'de, 12 metrekareden az olmamak üzere ilkyardım ve acil müdahale odası bulunur.", "İSGB'nin bölümleri aynı alanda bulunur ve bu alan çalışanların kolaylıkla ulaşabileceği konumda olur."],
        correct: 2,
        source: "2025-1C",
        explanation: "Yönetmeliğe göre İSGB'de en az 8 metrekarelik iş güvenliği uzmanı odası, en az 10 metrekarelik işyeri hekimi muayene odası bulunmalıdır. (Hekim odası 8 değil 10 m² olmalıdır).",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işveren, işyerinde meydana gelen iş kazasını ve tespit edildikten sonra meslek hastalığını en geç kaç iş günü içinde Sosyal Güvenlik Kurumuna bildirmelidir?",
        options: ["1", "2", "3", "5", "7"],
        correct: 2,
        source: "2025-1C",
        explanation: "İş kazaları ve meslek hastalıkları en geç 3 iş günü içinde SGK'ya bildirilmelidir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işverenin iş sağlığı ve güvenliği konusundaki yükümlülükleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["Mesleki risklerin önlenmesi için gerekli tedbirleri alır.", "Risk değerlendirmesi yapar veya yaptırır.", "Çalışana görev verirken, çalışanın sağlık ve güvenlik yönünden işe uygunluğunu göz önüne alır.", "İş sağlığı ve güvenliği hizmetlerini sadece kendi personeli ile yürütmek zorundadır.", "Hayati ve özel tehlike bulunan yerlere sadece yeterli bilgi ve talimat verilen çalışanların girmesini sağlar."],
        correct: 3,
        source: "2025-1C",
        explanation: "İşveren bu hizmetleri kendi personeliyle yürütebileceği gibi, OSGB'lerden (dışarıdan) hizmet alarak da yerine getirebilir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işveren, çalışanların işyerinde maruz kalacakları sağlık ve güvenlik risklerini dikkate alarak sağlık gözetimine tabi tutulmalarını sağlar. Aşağıdaki hallerden hangisinde çalışanların sağlık muayenelerinin yapılması zorunlu değildir?",
        options: ["İşe girişlerinde", "İş değişikliğinde", "İş kazası, meslek hastalığı veya sağlık nedeniyle tekrarlanan işten uzaklaşmalarından sonra işe dönüşlerinde talep etmeleri hâlinde", "Yıllık izin dönüşlerinde", "İşin devamı süresince, çalışanın ve işin niteliği ile işyerinin tehlike sınıfına göre Bakanlıkça belirlenen düzenli aralıklarla"],
        correct: 3,
        source: "2025-1C",
        explanation: "Yıllık izin dönüşü rutin bir sağlık muayenesi zorunluluğu kanunda yer almaz.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, çok tehlikeli sınıfta yer alan işyerlerinde risk değerlendirmesi en geç kaç yılda bir yenilenir?",
        options: ["2", "3", "4", "5", "6"],
        correct: 0,
        source: "2025-1C",
        explanation: "Çok Tehlikeli: 2 yıl, Tehlikeli: 4 yıl, Az Tehlikeli: 6 yıl.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işverenin çalışan temsilcisi görevlendirme yükümlülüğü ile ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["İşyerinde yetkili sendika bulunması hâlinde, işyeri sendika temsilcileri çalışan temsilcisi olarak da görev yapar.", "Çalışan temsilcileri, çalışanlar arasından seçimle belirlenir.", "Seçimle belirlenemediği durumda işveren tarafından atama yapılır.", "Çalışan temsilcisi sayısı, işyerindeki çalışan sayısına göre belirlenir.", "Çalışan temsilcisinin görev süresi 1 yıldır."],
        correct: 4,
        source: "2025-1C",
        explanation: "Çalışan temsilcisinin yetki süresi 5 yıldır (1 yıl değildir).",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işyerinde hayati tehlike arz eden bir durumun tespiti halinde, bu tehlike giderilinceye kadar işyerinin tamamında veya bir bölümünde işin durdurulmasına karar veren kurul aşağıdakilerden hangisidir?",
        options: ["İş Sağlığı ve Güvenliği Kurulu", "Risk Değerlendirme Ekibi", "İşyerindeki bina ve eklentilerde alınacak sağlık ve güvenlik önlemlerine ilişkin yönetmelikte belirtilen kurul", "Üç iş müfettişinden oluşan heyet", "İşveren ve iş güvenliği uzmanından oluşan komisyon"],
        correct: 3,
        source: "2025-1C",
        explanation: "İşin durdurulması kararı, üç iş müfettişinden oluşan bir heyet tarafından verilir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, 50 ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren sürekli işlerin yapıldığı işyerlerinde işveren, iş sağlığı ve güvenliği ile ilgili çalışmalarda bulunmak üzere aşağıdakilerden hangisini oluşturur?",
        options: ["Risk Değerlendirme Ekibi", "Acil Durum Ekibi", "İş Sağlığı ve Güvenliği Kurulu", "İşyeri Sağlık ve Güvenlik Birimi", "Çalışan Temsilciliği"],
        correct: 2,
        source: "2025-1C",
        explanation: "50+ çalışan ve 6 aydan uzun işlerde İSG Kurulu kurulması zorunludur.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, aşağıdakilerden hangisi işverenin iş sağlığı ve güvenliği hizmetleri ile ilgili yükümlülüklerinden biri değildir?",
        options: ["Çalışanların sağlık ve güvenliğini sağlamak için gerekli tedbirleri almak", "Risk değerlendirmesi yapmak veya yaptırmak", "Çalışanlara görev verirken, çalışanın sağlık ve güvenlik yönünden işe uygunluğunu göz önüne almak", "İş kazası ve meslek hastalıklarının kayıtlarını tutmak", "İş sağlığı ve güvenliği hizmetlerinin maliyetini çalışanlara yansıtmak"],
        correct: 4,
        source: "2025-1C",
        explanation: "Maliyetler işverene aittir, çalışanlara yansıtılamaz.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, aşağıdakilerden hangisi 'genç çalışan' tanımına uyar?",
        options: ["15 yaşını bitirmiş ancak 18 yaşını doldurmamış çalışan", "14 yaşını bitirmiş ve ilköğretimini tamamlamış çalışan", "16 yaşını doldurmamış çalışan", "18 yaşını doldurmuş ancak mesleki eğitim almamış çalışan", "20 yaşını doldurmamış çalışan"],
        correct: 0,
        source: "2025-1C",
        explanation: "Genç çalışan: 15 yaşını tamamlamış ancak 18 yaşını tamamlamamış kişidir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işyerinde teknik bir eksiklik veya aksaklığın acil durdurmayı gerektirmesi halinde, iş güvenliği uzmanı durumu kime bildirir?",
        options: ["Sadece işverene", "Çalışma ve Sosyal Güvenlik Bakanlığına", "İşverene, bulunmaması halinde Bakanlığa", "Önce işverene, işveren tarafından gerekli tedbirin alınmaması halinde Bakanlığa", "Sadece çalışan temsilcisine"],
        correct: 3,
        source: "2025-1C",
        explanation: "Önce işverene bildirilir. İşveren tedbir almazsa (acil durumlarda) Bakanlığa bildirilir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, aşağıdakilerden hangisi iş kazası sayılmaz?",
        options: ["İşyerinde bulunduğu sırada meydana gelen kazalar", "İşveren tarafından yürütülmekte olan iş nedeniyle meydana gelen kazalar", "İşverence sağlanan bir taşıtla işin yapıldığı yere gidiş geliş sırasında meydana gelen kazalar", "Emziren kadın sigortalının iş mevzuatı gereğince çocuğuna süt vermek için ayrılan zamanlarda meydana gelen kazalar", "Çalışanın işyeri dışında, izinli olduğu gün kendi özel işini yaparken geçirdiği kaza"],
        correct: 4,
        source: "2025-1C",
        explanation: "İşyeri dışında, izin gününde ve özel iş sırasında geçirilen kaza iş kazası değildir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, ulusal iş sağlığı ve güvenliği konseyi yılda kaç kez toplanır?",
        options: ["1", "2", "3", "4", "6"],
        correct: 1,
        source: "2025-1C",
        [cite_start]explanation: "Konsey yılda iki defa olağan toplanır[cite: 7].",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, aşağıdakilerden hangisi işverenin genel yükümlülüklerinden biri değildir?",
        options: ["Mesleki risklerin önlenmesi", "Eğitim ve bilgi verilmesi", "Her türlü önlemin alınması", "Risk değerlendirmesi yapılması", "Çalışanların kendi kişisel koruyucu donanımlarını temin etmesi"],
        correct: 4,
        source: "2025-1C",
        explanation: "KKD'leri temin etmek işverenin yükümlülüğüdür, çalışanın değil.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, işyerinde iş sağlığı ve güvenliği risklerine karşı yürütülecek her türlü çalışmayı koordine etmek kimin görevidir?",
        options: ["İşyeri Hekimi", "İş Güvenliği Uzmanı", "Çalışan Temsilcisi", "İşveren veya İşveren Vekili", "Destek Elemanı"],
        correct: 3,
        source: "2025-1C",
        explanation: "Her türlü çalışmayı koordine etmek ve denetlemek nihai olarak İşverenin sorumluluğundadır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamına girmeyen faaliyet aşağıdakilerden hangisidir?",
        options: ["Özel güvenlik hizmetleri", "Mesleki eğitim merkezleri", "Ev hizmetleri", "Tarım işletmeleri", "Kamu kurumları"],
        correct: 2,
        source: "2025-1C",
        explanation: "Ev hizmetleri 6331 sayılı kanun kapsamı dışındadır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, tehlikeli sınıfta yer alan bir işyerinde iş güvenliği uzmanı çalışan başına ayda en az kaç dakika hizmet vermelidir?",
        options: ["10", "20", "40", "60", "80"],
        correct: 1,
        source: "2025-1C",
        explanation: "Az tehlikeli: 10dk, Tehlikeli: 20dk, Çok Tehlikeli: 40dk.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, çalışan temsilcisi seçimle belirlenemediği durumda nasıl belirlenir?",
        options: ["İşveren tarafından atanır.", "Sendika tarafından atanır.", "Bakanlık tarafından atanır.", "Kura ile belirlenir.", "En kıdemli çalışan otomatik olarak seçilir."],
        correct: 0,
        source: "2025-1C",
        [cite_start]explanation: "Seçimle belirlenememesi halinde işveren tarafından atama yapılır[cite: 17].",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, acil durum planları tehlikeli sınıftaki işyerlerinde en geç kaç yılda bir yenilenir?",
        options: ["2", "4", "6", "8", "10"],
        correct: 1,
        source: "2025-1C",
        explanation: "Acil durum planları; Çok Tehlikeli: 2, Tehlikeli: 4, Az Tehlikeli: 6 yılda bir yenilenir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, iş kazası sonucu ölümlerde işverenin kusuru varsa, ölenin yakınlarına ödenecek tazminat türü hangisidir?",
        options: ["Kıdem tazminatı", "İhbar tazminatı", "Destekten yoksun kalma tazminatı", "İşsizlik ödeneği", "Emeklilik ikramiyesi"],
        correct: 2,
        source: "2025-1C",
        explanation: "Ölümlü kazalarda geride kalanlara 'Destekten Yoksun Kalma Tazminatı' ödenir (Hukuki sorumluluk).",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanuna göre, çalışanların iş sağlığı ve güvenliği eğitimleri belgelendirilir. Bu belgeler nerede saklanır?",
        options: ["Çalışanın kendisinde", "Bakanlıkta", "İşverenin özlük dosyasında", "Sendikada", "SGK kayıtlarında"],
        correct: 2,
        source: "2025-1C",
        explanation: "Eğitim belgeleri çalışanın özlük dosyasında saklanır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanun gereği, hayati tehlike nedeniyle işin durdurulması kararını hangi makam uygular (mühürleme işlemini yapar)?",
        options: ["İş Müfettişleri", "Mülki İdare Amiri (Valilik/Kaymakamlık) kolluk kuvvetleri marifetiyle", "Belediye Zabıtası", "SGK Müfettişleri", "İş Mahkemesi"],
        correct: 1,
        source: "2025-1C",
        explanation: "Kararı müfettişler verir, uygulamayı (mühürlemeyi) Mülki İdare Amiri kolluk kuvvetleriyle yapar.",
        profile: "igu"
    }
];


