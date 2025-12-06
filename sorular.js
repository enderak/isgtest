// --- İSG SINAV ÖĞRENCELİĞİ SORU HAVUZU ---
// Son Güncelleme: Tekrarlar temizlendi, 2025-1C ve Örnekler birleştirildi.

const questionPool = [

    // ==========================================
    // 1. BÖLÜM: ÖRNEK ESKİ SORULAR (Manuel Eklenenler)
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
    // 2. BÖLÜM: 2025-1C KAYNAĞI (Temizlenmiş Tam Liste)
    // ==========================================
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre işveren, çalışanları ve çalışan temsilcilerini hangi konularda bilgilendirir? I-İşyerinde karşılaşılabilecek sağlık ve güvenlik riskleri, koruyucu ve önleyici tedbirler. II-Kendileri ile ilgili yasal hak ve sorumluluklar. III-İlk yardım, olağan dışı durumlar, afetler ve yangınla mücadele ve tahliye işleri konusunda görevlendirilen kişiler.",
        options: ["I, II ve III", "I ve II", "II ve III", "I ve III", "Yalnız I"],
        correct: 0,
        source: "2025-1C",
        explanation: "İşveren; riskler, tedbirler, haklar, sorumluluklar ve acil durum ekipleri konularında çalışanları bilgilendirmek zorundadır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı iş sağlığı ve güvenliği kanunu göre aşağıdakilerden hangisi destek elemanının asli görevinin yanında iş sağlığı ve güvenliği ile ilgili görevlerinden değildir?",
        options: ["Önleme", "Koruma", "Tahliye", "Çalışmaları denetleme", "Yangınla mücadele"],
        correct: 3,
        source: "2025-1C",
        explanation: "Destek elemanının görevi önleme, koruma, tahliye, yangınla mücadele ve ilk yardımdır. Denetleme yetkisi yoktur.",
        profile: "igu"
    },
    {
        category: "Hukuk",
        text: "6331 sayılı Kanun yürürlüğe girmeden önceki dönemde işçilerin taraf olduğu iş sağlığı ve güvenliği ile ilgili özel hukuk uyuşmazlıklarında hangi kanunlara başvurulmaktaydı?",
        options: ["Borçlar Kanunu-Ticaret Kanunu", "Ceza Kanunu-Ticaret Kanunu", "İş Kanunu- Ticaret Kanunu", "Borçlar Kanunu-İş Kanunu", "Anayasa-Medeni Kanun"],
        correct: 3,
        source: "2025-1C",
        explanation: "6331 öncesinde 4857 sayılı İş Kanunu ve 6098 sayılı Borçlar Kanunu esas alınıyordu.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre bir işveren iş yerindeki acil durum planları, yangınla mücadele ve il yardım faaliyetleri ile ilgili olarak aşağıdakilerden hangisini yapmak zorunda değildir?",
        options: ["Acil durumların olumsuz etkilerinden korunmak üzere gerekli ölçüm ve değerlendirmeleri yapar.", "Çalışma ortamı, kullanılan maddeler, iş ekipmanı ile çevre şartlarını dikkate alarak meydana gelebilecek acil durumları önceden değerlendir.", "Muhtemel acil durumları belirler ve bunların olumsuz etkilerini önleyici ve sınırlandırıcı tedbirleri alır.", "Afet planı hazırlar ve Çalışma ve Sosyal Güvenlik Bakanlığından onay alır.", "Acil durum planlarını hazırlar."],
        correct: 3,
        source: "2025-1C",
        explanation: "İşverenin afet planı hazırlayıp Bakanlıktan onay alma zorunluluğu yoktur; acil durum planı hazırlaması yeterlidir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre çalışan temsilcisi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["Çalışan temsilcisi, iş sağlığı ve güvenliği ile ilgili çalışmalara katılma, çalışmaları izleme, tedbir alınmasını isteme, tekliflerde bulunma ve benzeri konularda çalışanları temsil etmeye yetkili çalışanı ifade etmektedir.", "Tehlike anında komple işi durdurma yetkisi vardır.", "İşyerinde yetkili sendika bulunması hâlinde, işyeri sendika temsilcileri çalışan temsilcisi olarak da görev yapar.", "Ciddi ve yakın tehlike ile ilgili kurulun verdiği karar çalışana ve çalışan temsilcisine yazılı olarak bildirilir.", "Çalışan temsilcileri özel olarak eğitilir."],
        correct: 1,
        source: "2025-1C",
        explanation: "Çalışan temsilcisinin işi komple durdurma yetkisi yoktur.",
        profile: "igu"
    },
    {
        category: "Sağlık",
        text: "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre; kimler Diğer Sağlık Personeli olamaz?",
        options: ["Acil tıp teknisyeni", "Hemşire", "Sağlık Memuru", "Acil Tıp Teknikeri", "Biyolog"],
        correct: 4,
        source: "2025-1C",
        explanation: "Bakanlıkça yetkilendirilmiş ebe, hemşire, sağlık memuru, ATT vb. olabilir ancak Biyolog olamaz.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "Aşağıdakilerden hangisi 6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre iş sağlığı ve güvenliğinin korunması amacıyla çalışanlara sağlanan haklardan birisi değildir?",
        options: ["Meslek hastalıkları ile ilgili bilgi alma", "Çalışmaktan kaçınma", "Sağlık gözetiminden yararlanma", "Kurula görüş bildirme", "Eğitimlerden kaçınma"],
        correct: 4,
        source: "2025-1C",
        explanation: "Çalışanların eğitim alma hakkı olduğu gibi yükümlülüğü de vardır, kaçınma bir hak değildir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre yapılacak sağlık gözetimlerinden doğan maliyetlerin karşılanması ile ilgili verilenlerden hangisi doğrudur?",
        options: ["Tamamı çalışanlar tarafından karşılanır.", "Çalışan sendikası tarafından karşılanır.", "Yarısı çalışanlar tarafından karşılanır.", "Ekstra maliyetler çalışanlar tarafından karşılanır.", "İşveren tarafından karşılanır."],
        correct: 4,
        source: "2025-1C",
        explanation: "Sağlık gözetiminden doğan maliyet ve bu gözetimden kaynaklı her türlü ek maliyet işverence karşılanır, çalışana yansıtılamaz.",
        profile: "igu"
    },
    {
        category: "Sağlık",
        text: "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre çalışanların sağlık muayenelerinin yapılmasını sağlamak zorunda olunan durumlarda hangisi yoktur?",
        options: ["İşe girişlerinde", "İş değişikliğinde", "İş kazası, meslek hastalığı veya sağlık nedeniyle tekrarlanan işten uzaklaşmalarından sonra işe dönüşlerinde talep etmeleri hâlinde", "İşin devamı süresince, çalışanın ve işin niteliği ile işyerinin tehlike sınıfına göre Bakanlıkça belirlenen düzenli aralıklarla", "Yıllık izin dönüşünde"],
        correct: 4,
        source: "2025-1C",
        explanation: "Yıllık izin dönüşü rutin bir sağlık muayenesi zorunluluğu kanunda tanımlanmamıştır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre bilgi yenileme eğitimi aşağıdakilerden hangisidir?",
        options: ["Herhangi bir sebeple altı aydan fazla süreyle işten uzak kalanlara, tekrar işe başlatılmadan önce verilen eğitimdir.", "Çalışanların her yıl aldıkları eğitimdir.", "Çalışan temsilcisinin belirli periyotlarda aldığı eğitimdir.", "Mesleki yeterlilik sertifikası için verilen eğitimdir.", "İş kazası sonrasında çalışanlara işe başlamadan önce verilen eğitimdir."],
        correct: 0,
        source: "2025-1C",
        explanation: "Herhangi bir sebeple altı aydan fazla süreyle işten uzak kalanlara, tekrar işe başlatılmadan önce bilgi yenileme eğitimi verilir.",
        profile: "igu"
    },
    {
        category: "Hukuk",
        text: "6331 Sayılı İş Sağlığı ve Güvenliği Kanununa göre işin durdurulmasına yapılan itirazlarla ile ilgili verilenlerden hangisi yanlıştır?",
        options: ["İşveren, yerine getirildiği tarihten itibaren altı iş günü içinde işin durdurulması kararına itiraz edebilir.", "İtiraz, işin durdurulması kararının uygulanmasını etkilemez.", "Mahkeme itirazı öncelikle görüşür ve altı iş günü içinde karara bağlar.", "Mahkeme kararı kesindir.", "İşveren Yargıtay'a işin durdurulması kararına itiraz edebilir."],
        correct: 4,
        source: "2025-1C",
        explanation: "İş mahkemesi kararı kesindir, Yargıtay'a itiraz yolu kapalıdır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre çalışanların eğitimi ile ilgili verilenlerden hangisi yanlıştır?",
        options: ["Mesleki eğitim alma zorunluluğu bulunan tehlikeli ve çok tehlikeli sınıfta yer alan işlerde, yapacağı işle ilgili mesleki eğitim aldığını belgeleyemeyenler çalıştırılamaz.", "Tehlikeli ve çok tehlikeli sınıfta yer alan işyerlerinde; yapılacak işlerde karşılaşılacak sağlık ve güvenlik riskleri ile ilgili yeterli bilgi ve talimatları içeren eğitimin alındığına dair belge olmaksızın, başka işyerlerinden çalışmak üzere gelen çalışanlar işe başlatılamaz.", "Eğitimin maliyeti çalışanlardan karşılanır ve eğitimlerde geçen süre çalışma süresinden sayılır.", "Geçici iş ilişkisi kurulan işveren, iş sağlığı ve güvenliği risklerine karşı çalışana gerekli eğitimin verilmesini sağlar.", "Eğitim sürelerinin haftalık çalışma süresinin üzerinde olması hâlinde, bu süreler fazla sürelerle çalışma veya fazla çalışma olarak değerlendirilir"],
        correct: 2,
        source: "2025-1C",
        explanation: "Eğitimin maliyeti çalışanlardan karşılanmaz, işverene aittir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre I-İşyerinde veya işin yürütümü nedeniyle meydana gelmesi II-Ölüme sebebiyet vermesi veya vücut bütünlüğünü ruhen ya da bedenen engelli hâle getirmesi III-Kullanılan ekipman,malzeme ve çevreye zarar vermesi. Hangileri iş kazası kapsamındadır?",
        options: ["Yalnız I", "Yalnız II", "I ve II", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2025-1C",
        explanation: "İş kazası tanımı insana (çalışana) gelen zararı kapsar. Ekipman/çevre zararı iş kazası tanımında doğrudan yer almaz (ancak ramak kala veya kazaya bağlı hasar olabilir).",
        profile: "igu"
    },
    {
        category: "Hukuk",
        text: "6331 sayılı Kanuna göre Sosyal Güvenlik Kurumunca uygulanıp tebliğ edilen idari para cezalarına kaç gün içinde itiraz edilebilir?",
        options: ["3 gün", "7 gün", "15 gün", "30 gün", "45 gün"],
        correct: 2,
        source: "2025-1C",
        explanation: "Tebliğ tarihinden itibaren 15 gün içerisinde Kuruma itiraz edilebilir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "İşyerinde veya işin yürütümü nedeniyle meydana gelen, ölüme sebebiyet veren veya vücut bütünlüğünü ruhen ya da bedenen engelli hâle getiren olayın iş kazası olarak tanımlandığı kanun aşağıdakilerden hangisidir?",
        options: ["4857 İş Kanunu", "6331 İş Sağlığı ve Güvenliği Kanunu", "3308 Mesleki Eğitim Kanunu", "5510 Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu", "6098 Türk Borçlar Kanunu"],
        correct: 1,
        source: "2025-1C",
        explanation: "Bu tanım 6331 sayılı kanunun 3. maddesinde yer alır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre; I-Zarar, kayıp, tehlike veya hasar olmasına yönelik belirsizlik içeren unsur, etken veya gidişattır. II-Belirlenmiş tehlikeli bir olayın oluşma ve olasılığı ve sonuçlarının kombinasyonudur. III-Tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimalidir. Riskin tanımı hangisi/hangileridir?",
        options: ["Yalnız II", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 1,
        source: "2025-1C",
        explanation: "Kanundaki Risk tanımı: Tehlikeden kaynaklanacak kayıp, yaralanma ya da başka zararlı sonuç meydana gelme ihtimalidir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre yapılan kontrol ve denetimlerde; istihdam ettiği kişilerin sigortalılık bildiriminde bulunmadığı tespit edilen işverenler, sağlanan destekten kaç yıl süreyle faydalanamaz?",
        options: ["1", "2", "3", "5", "6"],
        correct: 2,
        source: "2025-1C",
        explanation: "Kayıt dışı istihdam durumunda 3 yıl süreyle destekten men edilirler.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre bildirilen eksiklik ve aksaklıkların acil durdurmayı gerektirmesi... Bildirim yapmadığı tespit edilen işyeri hekimi ve iş güvenliği uzmanının belgesi tekrarında ise ...... süreyle askıya alınır. Boşluklara sırasıyla hangisi gelmelidir?",
        options: ["2 ay-4 ay", "3 ay-6 ay", "4 ay-8 ay", "5 ay-10 ay", "6 ay-12 ay"],
        correct: 1,
        source: "2025-1C",
        explanation: "İlk tespitte 3 ay, tekrarında 6 ay süreyle askıya alınır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre; işyeri tehlike sınıflarının tespitinde hangisi dikkate alınır?",
        options: ["Asıl iş", "Üretilen ürün", "Kullanılan hammadde", "Çalışan sayısı", "İş yeri büyüklüğü"],
        correct: 0,
        source: "2025-1C",
        explanation: "Tehlike sınıflarının tespitinde o işyerinde yapılan asıl iş esas alınır.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 İş Sağlığı ve Güvenliği Kanunu'na göre ciddi ve yakın tehlike ile karşı karşıya kalan çalışanlar durumun tespit edilmesini ve gerekli tedbirlerin alınmasına karar verilmesini talep edebilir. Çalışanların başvuruları ile ilgili hangisi doğdurur?",
        options: ["Varsa sendika temsilcisine, yoksa işverene", "Varsa çalışan temsilcisine, yoksa işverene", "İşverene ve iş güvenliği uzmanına", "Sadece işverene", "Varsa kurula, kurulun bulunmadığı işyerlerinde ise işverene"],
        correct: 4,
        source: "2025-1C",
        explanation: "Önce kurula, kurul yoksa işverene başvurulur.",
        profile: "igu"
    },
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
        explanation: "Ekipmanın menşei ülkesi bir güvenlik kriteri değildir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanun'a göre eğitim maliyetleri ile ilgili doğru ifade hangisidir?",
        options: ["Çalışanlardan kesilir", "Devlet karşılar", "Sendikalar karşılar", "İşveren tarafından karşılanır", "İşsizlik fonundan karşılanır"],
        correct: 3,
        source: "2025-1C",
        explanation: "Eğitim maliyetleri tamamen işverene aittir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "6331 sayılı Kanun'a göre, İSGB'nin (İşyeri Sağlık ve Güvenlik Birimi) şartlarından biri değildir?",
        options: ["Giriş katında olması esastır", "En az bir hekim ve bir uzman görevlendirilir", "8'er metrekarelik odalar bulunur", "12 metrekarelik ilkyardım odası bulunur", "Kolay ulaşılabilir konumda olur"],
        correct: 2,
        source: "2025-1C",
        explanation: "Yönetmeliğe göre İSGB'de hekim odası en az 10 metrekare, uzman odası en az 8 metrekare olmalıdır. İkisi de 8 değildir.",
        profile: "igu"
    },
    {
        category: "Mevzuat",
        text: "İşveren, iş kazasını ve meslek hastalığını en geç kaç iş günü içinde SGK'ya bildirmelidir?",
        options: ["1", "2", "3", "5", "7"],
        correct: 2,
        source: "2025-1C",
        explanation: "Bildirim süresi kazadan sonraki 3 iş günüdür.",
        profile: "igu"
    }
];
