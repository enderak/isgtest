// Bu satır standarttır, her dosyanın başında olmalı:
window.SoruHavuzu = window.SoruHavuzu || [];

// Soruları havuza ekle
window.SoruHavuzu = window.SoruHavuzu.concat([
    {
        category: "Hukuk",
        text: "1. 1982 Anayasası'na göre seçilme yeterliliği taşıyan bir kimseyi en az kaç seçmen cumhurbaşkanı adayı olarak gösterebilir?",
        options: ["50.000", "75.000", "100.000", "125.000", "150.000"],
        correct: 2,
        source: "2024-1-C",
        explanation: "1982 Anayasası'na göre en az 100.000 seçmen tarafından aday gösterilebilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "2. 4857 sayılı İş Kanunu'na göre belirsiz süreli iş sözleşmesiyle 2 yıldır aynı iş yerinde çalışan bir işçinin, iş sözleşmesini bildirimli olarak feshetmesi durumunda uyması gereken bildirim süresi, bildirimin diğer tarafa yapılmasından başlayarak kural olarak kaç haftadır?",
        options: ["2", "3", "4", "6", "8"],
        correct: 3,
        source: "2024-1-C",
        explanation: "İş Kanunu'na göre işi 1,5 yıldan 3 yıla kadar sürmüş olan işçiler için bildirim süresi 6 haftadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "3. 4857 sayılı İş Kanunu'na göre her bir saat fazla çalışma için verilecek fazla çalışma ücreti, normal çalışma ücretinin saat başına düşen miktarının kural olarak yüzde kaç yükseltilmesi suretiyle ödenir?",
        options: ["10", "20", "25", "50", "100"],
        correct: 3,
        source: "2024-1-C",
        explanation: "Fazla çalışma ücreti, normal çalışma ücretinin %50 yükseltilmesiyle ödenir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "4. Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik'e göre çok tehlikeli sınıfta yer alan bir iş yerinde verilen iş sağlığı ve güvenliği eğitimleri kural olarak en geç kaç yılda bir tekrarlanır?",
        options: ["1", "2", "3", "4", "5"],
        correct: 0,
        source: "2024-1-C",
        explanation: "Çok tehlikeli sınıfta eğitimler yılda en az bir kez tekrarlanır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "5. ILO ile imzalanan 13 sayılı Ek Anlaşma ile 1955'te Yakın ve Orta Doğu Çalışma Enstitüsü olarak kurulan ve beş yıllık uluslararası dönem ardından 1960 yılında Çalışma Bakanlığının bağlı kuruluşu hâline getirilen kurum aşağıdakilerden hangisidir?",
        options: ["Türkiye İş Kurumu (İŞKUR)", "Çalışma ve Sosyal Güvenlik Eğitim ve Araştırma Merkezi (ÇASGEM)", "İş Sağlığı ve Güvenliği Araştırma ve Geliştirme Enstitüsü Başkanlığı (İSGÜM)", "Türk Akreditasyon Kurumu (TÜRKAK)", "Çalışan Sağlığı Merkezi (ÇASMER)"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Bahsedilen kurum ÇASGEM'dir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "6. Kimyasal Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik'e göre tehlikeli kimyasal maddelerle çalışmalarda alınması gereken önlemlerle ilgili ifadelerinden hangileri doğrudur?\nI. Yeterli havalandırma sistemi kurulması gibi toplu koruma önlemleri uygulanır.\nII. Mümkün olan en çok sayıda çalışanla yapılır.\nIII. Çalışanların maruz kalacakları madde miktarlarının mümkün olan en az düzeyde olması sağlanır.",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Çalışmalar mümkün olan en az sayıda çalışanla yapılmalıdır, bu yüzden II yanlıştır. I ve III doğrudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "7. TS ISO 45001 Standardı'na göre yaralanmaya ve sağlığın bozulmasına neden olabilecek potansiyele sahip kaynağı ifade eden kavram aşağıdakilerden hangisidir?",
        options: ["Risk", "Proses", "Uygunsuzluk", "Tehlike", "Prosedür"],
        correct: 3,
        source: "2024-1-C",
        explanation: "Zarar verme potansiyeli 'Tehlike' olarak tanımlanır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "8. Büyük Endüstriyel Kazaların Önlenmesi ve Etkilerinin Azaltılması Hakkında Yönetmelik'e göre işletmecinin dâhili acil durum planlarına dair yükümlülükleriyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["Kuruluşun bulundurduğu tehlikeli madde miktarındaki değişiklik nedeniyle üst seviyeli bir kuruluş hâline gelmesi durumunda kapsama dâhil olduğu tarihi müteakiben 1 yıl içinde planı hazırlar.", "Planda belirtilen bilginin doğruluğundan ve kaza sonrası oluşabilecek çevre kirliliğinden kusuru oranında sorumludur.", "3 yılı aşmayan aralıklarla planı gözden geçirir, gerektiğinde günceller ve tatbik eder.", "İşletmeye yeni açılacak kuruluş faaliyete geçmeden önce planı hazırlar.", "Planın müdahalede yetersiz kaldığı durumlarda il afet ve acil durum müdürlüğüne bildirir."],
        correct: 1,
        source: "2024-1-C",
        explanation: "İşletmeci çevre kirliliğinden kusuru oranında değil, kusursuz sorumluluk ilkesi gereği sorumludur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "9. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre iş kazaları ve meslek hastalıklarının kayıt ve bildirimiyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["İşveren, bütün iş kazalarının kaydını tutar ve gerekli incelemeleri yaparak bunlarla ilgili raporları düzenler.", "İşveren, iş kazalarını kazadan sonraki 3 iş günü içinde Sosyal Güvenlik Kurumuna bildirir.", "İş yeri hekimleri meslek hastalığı ön tanısı koydukları vakaları, Sosyal Güvenlik Kurumu tarafından yetkilendirilen sağlık hizmeti sunucularına sevk eder.", "İş yerinde meydana gelen ancak yaralanma veya ölüme neden olmadığı hâlde iş ekipmanının zarara uğramasına yol açan olayları inceleyerek bunlarla ilgili raporları düzenler.", "Sağlık hizmeti sunucuları, meslek hastalığı ön tanısı konulan vakaları 3 iş günü içinde Sağlık Bakanlığına bildirir."],
        correct: 4,
        source: "2024-1-C",
        explanation: "Sağlık hizmeti sunucuları meslek hastalığı tanısı koydukları vakaları Sosyal Güvenlik Kurumu'na bildirir, Sağlık Bakanlığına değil (veya süre/prosedür farklıdır). Cevap anahtarı E.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "10. Çocuk ve Genç İşçilerin Çalıştırılma Usul ve Esasları Hakkında Yönetmelik'e göre çocuk ve genç işçilere verilecek yıllık ücretli izin süresi kaç günden az olamaz?",
        options: ["20", "24", "30", "35", "40"],
        correct: 0,
        source: "2024-1-C",
        explanation: "Çocuk ve genç işçilerde yıllık ücretli izin süresi 20 günden az olamaz.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "11. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre işin durdurulması kararından sonraki süreçle ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        options: ["Durdurulan işlerde izinsiz çalışma yaptıran işverene 3 yıldan 5 yıla kadar hapis cezası verilir.", "Kararın yerine getirildiği tarihten itibaren 7 iş günü içinde karara itiraz edilebilir.", "Mahkeme, işi durdurmaya ilişkin itirazı 15 iş günü içinde karara bağlar.", "İşveren, işin durdurulması sebebiyle işsiz kalan çalışanlara ücretlerini ödemekle veya başka bir iş vermekle yükümlü değildir.", "İş mahkemesi nezdinde yapılan itiraz, işin durdurulması kararının uygulanmasını durdurur."],
        correct: 0,
        source: "2024-1-C",
        explanation: "6331 sayılı Kanun’a göre işin durdurulması kararına rağmen izinsiz şekilde çalıştırmaya devam eden işverene hapis cezası öngörülmüştür. Ancak uygulamada bu soruda itirazlar genellikle itiraz süresi ve itirazın yürütmeyi durdurup durdurmadığı konularının karıştırılmasından kaynaklanmaktadır. Buna rağmen mevzuat metni esas alındığında sınav cevabı doğru kabul edilmektedir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "12. Sağlık Kuralları Bakımından Günde Azami Yedi Buçuk Saat veya Daha Az Çalışılması Gereken İşler Hakkında Yönetmelik'e göre aşağıdaki iş ve bu işte çalışılabilecek azami süre eşleştirmelerinden hangisi yanlıştır?",
        options: ["25-30 m derinlikte su altında basınçlı hava içinde çalışmayı gerektiren işler - 6 saat", "Cıva izabe fırınlarında görülen işler - 4 saat", "Kurşun izabe fırınlarının teksif odalarında biriken kuru tozları kaldırma işleri - 4 saat", "Karbon sülfürden etkilenme tehlikesi bulunan işler - 6 saat", "Karbamatlı ve organik fosforlu insektisitlerin yapımı ve paketlenmesi işleri - 6 saat"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Yönetmelikte cıva ile yapılan bazı işlerde azami çalışma süresi 6 saat olarak düzenlenmiştir. Bununla birlikte farklı kaynaklarda ve uygulamalarda cıva işlerinin alt başlıklarına göre süre farklılıkları yer alabildiğinden bu soru yoruma açık kabul edilmektedir. Ancak sınava göre yanlış cevap Cıva izabe fırınlarında görülen işler - 4 saat.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "13. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında çalışan sayısına göre görevlendirilmesi gereken çalışan temsilcisi sayısı aşağıdakilerin hangisinde doğru verilmiştir?",
        options: ["30 çalışanlı bir iş yeri için 2", "350 çalışanlı bir iş yeri için 3", "800 çalışanlı bir iş yeri için 5", "1.250 çalışanlı bir iş yeri için 7", "2.200 çalışanlı bir iş yeri için 8"],
        correct: 1,
        source: "2024-1-C",
        explanation: "101-500 arası çalışan için 3 temsilci görevlendirilir. 350 çalışan bu aralıktadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "14. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre iş sağlığı ve güvenliğiyle ilgili işverene bildirilen eksikliklerin acil durdurmayı gerektirmesine rağmen gerekli tedbirlerin alınmaması nedeniyle Bakanlığa bildirimde bulunan iş güvenliği uzmanının iş sözleşmesine son veren işveren hakkında hükmedilecek tazminat, en az ne kadar sürelik sözleşme ücreti tutarıdır?",
        options: ["3 ay", "6 ay", "1 yıl", "3 yıl", "5 yıl"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Bu durumda en az 1 yıllık sözleşme ücreti tutarında tazminata hükmedilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "15. Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik'e göre az tehlikeli iş yerlerinde verilecek temel eğitimler her çalışan için en az kaç saat olarak düzenlenir?",
        options: ["6", "8", "10", "12", "16"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Az tehlikeli sınıfta temel eğitim süresi en az 8 saattir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "16. İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik'e göre 100 çalışanı olan az tehlikeli sınıftaki bir iş yeri ile 150 çalışanı olan tehlikeli sınıftaki bir iş yerinde görev yapan bir iş güvenliği uzmanının toplam çalışma süresi ayda en az kaç dakikadır?",
        options: ["2.500", "4.000", "5.500", "6.000", "8.000"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Az tehlikeli: 100 x 10dk = 1000dk. Tehlikeli: 150 x 20dk = 3000dk. Toplam: 4000 dakika.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "17. İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği'ne göre tam süreli iş yeri hekimi ve iş güvenliği uzmanı görevlendirilmesi gerekmeyen, 55 çalışanı olan ve az tehlikeli sınıftaki bir iş yerinde iş sağlığı ve güvenliği hizmetlerinin yürütülmesi amacıyla işverenin sağlaması gereken asgari şartlarla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["İş yeri hekimi, diğer sağlık personeli ve iş güvenliği uzmanına toplam 2 oda temin eder.", "Acil durumlarda çalışanların en yakın sağlık birimine ulaştırılmasını sağlamak üzere uygun araç bulundurur.", "İş sağlığı ve güvenliği hizmetlerinin yürütülmesi için oluşturduğu birimlerin çalışanlar tarafından kolaylıkla görülebilecek şekilde işaretlenmesini sağlar.", "İş sağlığı ve güvenliği hizmetlerinin yürütülmesi için ayrılacak çalışma yerlerinin bölüm ve birimlerini aynı alan içerisinde bulundurmaya çalışır.", "Hizmet sunanlarla mutabık kalarak aynı sözleşme yılı içinde aylık hizmet sürelerini birleştirebilir veya hizmet sunumunu aralıklarla belirleyebilir."],
        correct: 4,
        source: "2024-1-C",
        explanation: "Hizmet sürelerinin birleştirilmesi veya aralıklarla belirlenmesi yönetmeliğe göre yanlıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "18. Organize sanayi bölgesinde faaliyet gösteren üç iş yeriyle ilgili bazı bilgiler şu şekildedir:\n• A İşletmesi: Az tehlikeli sınıftadır. En son 30.10.2015 tarihinde risk değerlendirmesini tamamen yenilemiştir.\n• B İşletmesi: Tehlikeli sınıftadır. 31.12.2016 tarihinde yaptırdığı risk değerlendirmesini, ölümlü bir iş kazası meydana gelmesi nedeniyle 30.11.2017 tarihinde tamamen yenilemiştir.\n• C İşletmesi: Çok tehlikeli sınıftadır. 01.01.2018 tarihinde yaptırdığı risk değerlendirmesini, aynı sanayi bölgesinde farklı bir adrese taşınmasından dolayı 30.11.2018 tarihinde tamamen yenilemiştir.\nBuna göre rutin risk değerlendirme yenileme zamanı ilk gelecek iş yerinden son gelecek iş yerine doğru sıralama aşağıdakilerden hangisidir?",
        options: ["B, C, A", "B, A, C", "A, B, C", "C, A, B", "C, B, A"],
        correct: 3,
        source: "2024-1-C",
        explanation: "A (Az Tehlikeli, 6 yıl): 2021 Ekim. B (Tehlikeli, 4 yıl): 2021 Kasım. C (Çok Tehlikeli, 2 yıl): 2020 Kasım. Sıralama: C, A, B.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "19. İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik'e göre sorumluluklarından hangileri iş yeri hekimine aittir?\nI. İş sağlığı ve güvenliği hizmetleri kapsamında çalışma ortamının gözetimiyle ilgili işverene rehberlik yapmak\nII. İş yerinde kaza, yangın veya patlamaların önlenmesi için yapılan hazırlık çalışmalarına katılmak\nIII. Sağlık gözetimi sonuçlarına göre iş güvenliği uzmanıyla iş birliği yaparak iş kazaları ve meslek hastalıklarıyla ilgili değerlendirme yapmak",
        options: ["Yalnız I", "I ve II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2024-1-C",
        explanation: "İş yeri hekiminin temel sorumlulukları arasında çalışma ortamının gözetimi ve sağlık gözetimi sonuçlarının değerlendirilmesi yer alır. Her ne kadar acil durum hazırlık çalışmalarına katılım bazı kaynaklarda ekip çalışması kapsamında ele alınsa da, sınavda doğrudan hekimin asli görevi olarak kabul edilmediği için II numaralı ifade doğru seçenekler arasında değerlendirilmemiştir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "20. Kişisel Koruyucu Donanım Yönetmeliği'ne göre solunum sisteminin korunması amacıyla kullanılan kişisel koruyucu donanımlarda bulunması gereken özelliklerle ilgili yargılarından hangileri doğrudur?\nI. Kirlenmiş ortam havasına maruz kalınması ve/veya ortamda yeterli miktarda oksijen olmaması durumunda, kullanıcıya solunabilir hava sağlayabilecek özellikte olmalıdır.\nII. Kullanıcıya sağlanan solunabilir hava; kirli havanın koruyucu alet veya cihazlarla filtre edilmesi veya temiz havanın bir kaynaktan sağlanması gibi uygun yöntemlerle elde edilmelidir.\nIII. Yapıldığı malzeme ve diğer elemanlar, öngörülen kullanım koşullarındaki giyilme süresinin en az üçte ikisi süresince, kullanıcıya yeterli hijyenik solunumu sağlayacak şekilde seçilmeli veya tasarlanmalı ve birleştirilmelidir.",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Solunum koruyucuların, oksijen yetersizliği veya kirli ortam havasında kullanıcıya solunabilir hava sağlayacak nitelikte olması gerekir. III. ifadede yer alan 'kullanım süresinin en az üçte ikisi' vurgusu, yönetmelikte bu şekilde açıkça tanımlanmadığından mevzuat metniyle birebir örtüşmemektedir. Bu nedenle sınav değerlendirmesinde III numaralı ifade doğru kabul edilmemiştir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "21. Tozla Mücadele Yönetmeliği'nde uzunluğu 5 mikrondan daha büyük, eni 3 mikrondan daha küçük ve boyu eninin 3 katından büyük olan parçacıkları ifade eden kavram aşağıdakilerden hangisidir?",
        options: ["İnert toz", "Lifsi toz", "Solunabilir toz", "İnorganik toz", "Organik toz"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Bu ölçüler 'Lifsi toz' tanımıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "22. Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik'e göre biyolojik etkenler enfeksiyon risk düzeyine göre dört grupta sınıflandırılır. Tabloda özellikleri verilen X ve Y biyolojik etkenlerinin enfeksiyon risk düzeyiyle ilgili hangisi doğrudur?\nX: İnsanda hastalık (+), Topluma yayılma (+), Tedavi (+)\nY: İnsanda hastalık (+), Topluma yayılma (+), Tedavi (-)",
        options: ["X biyolojik etkeni Grup 3'te yer alır.", "Y biyolojik etkeni Grup 2'de yer alır.", "X biyolojik etkeni Grup 1'de yer alır.", "X biyolojik etkeni Grup 4'te, Y biyolojik etkeni Grup 3'te yer alır.", "X biyolojik etkeni Grup 2'de, Y biyolojik etkeni Grup 1'de yer alır."],
        correct: 0,
        source: "2024-1-C",
        explanation: "İnsanda ağır hastalığa neden olan, topluma yayılma riski bulunan ancak tedavisi olan etkenler Grup 3'tür.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "23. Mesleki kanserlerden korunma yaklaşımlarından hangisi ikincil korunma kapsamındadır?",
        options: ["Çalışma ortamında risk değerlendirmesi yapılması", "Risklerin ortadan kaldırılması", "İşe giriş muayeneleri", "Tıbbi tarama testleri ile erken tanı çalışmaları", "Tedavisi sona erenler için gerektiğinde mesleki rehabilitasyon çalışmaları"],
        correct: 3,
        source: "2024-1-C",
        explanation: "Erken tanı ve tarama testleri ikincil korunma (erken teşhis) kapsamındadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "24. İlkyardım Yönetmeliği'ne göre standartlara uygun eğitim alarak ilk yardımcı belgesi almış bir kişinin bu belgesinin geçerlilik süresi kaç yıldır?",
        options: ["1", "2", "3", "4", "5"],
        correct: 2,
        source: "2024-1-C",
        explanation: "İlk yardımcı belgesinin geçerlilik süresi 3 yıldır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "25. Aşağıdakilerden hangisi mesleki mantar enfeksiyonlarındandır?",
        options: ["Salmonellozis", "Histoplazmozis", "Leptospirozis", "Tüberkülozis", "Brusellozis"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Histoplazmozis bir mantar enfeksiyonudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "26. Tozlarla oluşan hastalıklarla ilgili aşağıdaki etken-hastalık eşleştirmelerinden hangisi yanlıştır?",
        options: ["Pamuk tozu - Bisinozis", "Küflü şeker kamışı tozu - Bagasozis", "Küf mantarı tozu - Stannozis", "Berilyum tozu - Berilyozis", "Demir tozu - Siderozis"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Stannozis kalay tozundan kaynaklanır. Küf mantarı tozu stannozis yapmaz.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "27. İnhalasyon ateşleriyle ilgili yukarıdakilerden hangileri doğrudur?\nI. Metal dumanı ateşi belirtileri tipik olarak kaynak işlemine maruz kalımdan 48 saat sonra ortaya çıkar.\nII. Endotoksinlere maruz kalımda organik toz toksik sendromu gelişebilir.\nIII. Isıtılmış floropolimerlere maruz kalımda polimer dumanı ateşi gelişebilir.",
        options: ["Yalnız II", "I ve II", "I ve III", "II ve III", "I, II ve III"],
        correct: 3,
        source: "2024-1-C",
        explanation: "Metal dumanı ateşi belirtileri çok daha kısa sürede ortaya çıkar, 48 saat geçtir. II ve III doğrudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "28. Toza maruz kalımı olan çalışanların akciğer grafilerinin değerlendirilmesinde kullanılan Uluslararası Pnömokonyoz Radyografi Sınıflandırılması Rehberi aşağıdakilerin hangisi tarafından yayımlanmıştır?",
        options: ["Dünya Sağlık Örgütü", "Uluslararası İş Hijyenistleri Birliği", "Avrupa İş Sağlığı ve Güvenliği Ajansı", "Uluslararası Çalışma Örgütü (ILO)", "Uluslararası İş Sağlığı Komisyonu"],
        correct: 3,
        source: "2024-1-C",
        explanation: "Bu rehber ILO tarafından yayımlanmıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "29. Bir iş yerinde 30 aydır çalışan işçide silikozis geliştiği klinik olarak belirlenmiş ancak meslek hastalıkları listesindeki yükümlülük süresinin aşıldığı saptanmıştır. Bu işçide mevcut hastalığın meslek hastalığı olarak kabul edilebilmesi için aşağıdakilerden hangisinin kararı gerekir?",
        options: ["Sosyal Güvenlik Kurumu Sağlık Kurulu", "Vakıf üniversitesi hastanelerinin sağlık kurulları", "Devlet üniversitesi hastanelerinin sağlık kurulları", "Sağlık Bakanlığı eğitim ve araştırma hastanelerinin sağlık kurulları", "Sosyal Sigorta Yüksek Sağlık Kurulu"],
        correct: 4,
        source: "2024-1-C",
        explanation: "Yükümlülük süresi aşılmışsa Sosyal Sigorta Yüksek Sağlık Kurulu kararı gerekir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "30. Tarım çalışanlarında ve veterinerlerde görülebilen şarbon hastalığının etkeni aşağıdakilerden hangisidir?",
        options: ["Bacillus anthracis", "Borrelia recurrentis", "Clostridium botulinum", "Escherichia coli", "Helicobacter pylori"],
        correct: 0,
        source: "2024-1-C",
        explanation: "Şarbon etkeni Bacillus anthracis bakterisidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "31. Biyolojik risk etkenlerine maruz kalan çalışanlarda yukarıdakilerden hangileri görülebilir?\nI. Alerjik reaksiyonlar\nII. Enfeksiyon hastalıkları\nIII. Zoonotik hastalıklar",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 4,
        source: "2024-1-C",
        explanation: "Biyolojik etkenler alerji, enfeksiyon ve zoonotik hastalıklara yol açabilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "32. Çalışma yaşamında kronik maruz kalım sonucunda merkezi sinir sistemini etkileyerek parkinsonizm ile birlikte davranış değişimi ve psikoz benzeri tavırlara neden olabilen etken aşağıdakilerden hangisidir?",
        options: ["Manganez", "Kadmiyum", "Antimon", "Berilyum", "Krom"],
        correct: 0,
        source: "2024-1-C",
        explanation: "Manganez maruziyeti parkinsonizm tablosuna yol açabilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "33. Kadında üreme sağlığına; Rubella virüsü, kadmiyum, kurşun faktörlerinden hangilerinin olumsuz etkileri vardır?",
        options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "I, II ve III"],
        correct: 4,
        source: "2024-1-C",
        explanation: "Rubella, kadmiyum ve kurşun, üreme sağlığı üzerinde olumsuz etkilere sahiptir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "34. Lyme hastalığıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["Kene ısırması sonucunda insanlara bulaş meydana gelebilir.", "Lezyon eritemli bir makül olarak başlar, yavaş yavaş büyür ve büyük çaplara ulaşan lezyonlar görülebilir.", "Hastalık etkeni Trypanosoma cruzi'dir.", "Birden fazla sistemi etkileyebilir.", "Orman, peyzaj ve tarım işçileri riskli meslek gruplarındandır."],
        correct: 2,
        source: "2024-1-C",
        explanation: "Lyme hastalığının etkeni Borrelia burgdorferi bakterisidir, Trypanosoma cruzi değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "35. Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik'e göre herhangi bir enfeksiyona, alerjiye veya zehirlenmeye neden olabilen, genetik olarak değiştirilmiş olanlar da dâhil mikroorganizmalar, hücre kültürleri ve insan endoparazitleri aşağıdakilerden hangisiyle tanımlanmıştır?",
        options: ["Doku kültürleri", "Biyolojik etkenler", "Mantarlar", "Bakteriler", "Virüsler"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Tanım 'Biyolojik etkenler'e aittir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "36. Arsenik ve bileşikleri; deri, akciğer, mesane organlarının hangilerinde kanser gelişimine neden olabilir?",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 4,
        source: "2024-1-C",
        explanation: "Arsenik deri, akciğer ve mesane kanserine neden olabilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "37. Aşağıdakilerden hangisi el kol titreşimine maruz kalmayla ilişkilendirilmez?",
        options: ["Darbeli matkap", "Elektrikli testere", "Çim biçme makinesi", "Sterilizatör", "Yüksek basınçlı delme makineleri"],
        correct: 3,
        source: "2024-1-C",
        explanation: "Sterilizatör titreşim kaynağı değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "38. İşitme koruyucularıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["Gürültüye bağlı işitme kaybı gelişiminin önlenmesi için öncelikli yöntem olarak tercih edilmelidir.", "Gürültülü ortama girmeden önce temiz bir ortamda ve eller temizken takılmalıdır.", "Tekrar kullanılabilir özellikte olanlar her vardiyanın sonunda temizlenmelidir.", "Gürültüye maruz kalındığı süre boyunca sürekli olarak takılmalıdır.", "Kullanılacak koruyucu; çalışanların, çalışma ortamının, gürültü türünün ve işin özelliği dikkate alınarak seçilmelidir."],
        correct: 0,
        source: "2024-1-C",
        explanation: "KKD kullanımı öncelikli yöntem değildir; öncelik kaynağında ve ortamda koruma önlemleridir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "39. İyonizan radyasyon, kurşun ve formaldehit etkenlerinden hangileri lösemiye neden olan etkenlerdendir?",
        options: ["Yalnız III", "I ve II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Cevap anahtarına göre I ve III (İyonizan Radyasyon ve Formaldehit) lösemi etkenlerindendir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "40. Kapalı ortamda temizleyici olarak solvent kullanılan bir iş yerindeki çalışanın idrarında yüksek düzeyde fenol bulunmuştur. Bu çalışan aşağıdakilerden hangisine maruz kalmış olabilir?",
        options: ["Toluen", "Aseton", "Benzen", "Ksilen", "Arsenik"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Benzen metaboliti olarak idrarda fenol bakılır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "41. Vücuda alınan toksik etkenlerin vücut içinde dağılımıyla ilgili ifadelerinden hangileri doğrudur?\nI. Kan-beyin bariyeri, yağda çözünür etkenlerin merkezi sinir sistemine girişini etkilemez.\nII. Toksik etkenin vücut dokularındaki dağılımı doku pH'sından bağımsız olarak gerçekleşir.\nIII. Toksik etkenin plazma proteinlerine bağlanması vücutta dağılımını sınırlayıcı etki yapabilir.",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Kan-beyin bariyeri özellikle yağda çözünen maddelere karşı geçirgendir ve bu durum merkezi sinir sistemine geçişi kolaylaştırabilir. Ayrıca toksik maddelerin plazma proteinlerine bağlanması, dokulara dağılımını sınırlayıcı bir etki oluşturur. Doku pH’sının dağılım üzerinde etkili olduğu bilindiğinden II numaralı ifade sınav kapsamında doğru kabul edilmemiştir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "42. Çalışma yaşamı ve beslenme durumu arasındaki etkileşimle ilgili ifadelerden hangileri doğrudur?\nI. Beslenme durumu, çalışanların toksik ajanlara cevabındaki değişkenliğe etki eden faktörlerdendir.\nII. Beslenme durumu, sıcağa maruz kalan çalışanın aklimatizasyon kapasitesini etkileyebilir.\nIII. Beslenme durumunun değerlendirilmesinde antropometrik ölçümlerden yararlanılabilir.",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 4,
        source: "2024-1-C",
        explanation: "Beslenme durumu toksik yanıtı, adaptasyonu ve ölçümleri etkiler. Hepsi doğrudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "43. Kanada'da asbest madeni çalışanlarının sağlık muayeneleri 1960 yılından itibaren düzenli olarak yapılmış ve kayıtları saklanmıştır. 1995 yılında bir araştırmacı madende 1 Ocak 1975 yılından önceki dönemde en az 1 ay çalışmış olan erkek işçilerin 1 Aralık 1990 tarihine kadar olan sağlık kayıtlarını değerlendirmiştir. Bu grupta hastalık sıklığının daha fazla olduğunu saptamıştır. Bu epidemiyolojik araştırmanın türü aşağıdakilerden hangisidir?",
        options: ["Metodolojik", "Kesitsel", "Retrospektif kohort", "Tanımlayıcı", "Vaka-kontrol"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Geçmiş kayıtlara dayalı olarak, etkene maruz kalan bir grubun zaman içindeki durumunun geriye dönük incelenmesi 'Retrospektif kohort' çalışmasıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "44. Tren lokomotiflerinin düzenli bakımlarının yapıldığı bir fabrikada göreve yeni başlayan bir iş yeri hekimi, gürültüye maruz kalan işçilerin mevcut durumunu, işitme kayıplarını ve özelliklerini içeren bir rapor hazırlamıştır. İş yeri hekiminin hazırladığı bu rapor hangi epidemiyolojik araştırma türüyle uyumludur?",
        options: ["Tanımlayıcı", "Kesitsel", "Vaka-kontrol", "Prospektif kohort", "Müdahale"],
        correct: 0,
        source: "2024-1-C",
        explanation: "Mevcut durumu, kişi, yer ve zaman özelliklerine göre ortaya koyan çalışmalar tanımlayıcı araştırmalardır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "45. Akciğer kanseri ve sigara kullanımı ilişkisini değerlendirmek için yapılan vaka-kontrol çalışmasında; Sigara kullanan/Kanser olan: 80, Sigara kullanan/Kanser olmayan: 40, Sigara kullanmayan/Kanser olan: 20, Sigara kullanmayan/Kanser olmayan: 60 kişidir. Tahmini rölatif risk (Odds Oranı) kaçtır?",
        options: ["2", "4", "6", "8", "12"],
        correct: 2,
        source: "2024-1-C",
        explanation: "Odds Oranı = (a*d) / (b*c) = (80*60) / (40*20) = 4800 / 800 = 6.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "46. İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik'e göre iş yerinde yapılacak planlama ve tutulacak kayıtlarla ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["İş sağlığı ve güvenliği çalışmaları yıllık değerlendirme raporunu uzmanla hazırlamak hekimin görevidir.", "Yıllık çalışma planını uzmanla hazırlamak hekimin görevidir.", "İSG hizmetlerinin planlanmasında hekimle çalışmak diğer sağlık personelinin (DSP) görevidir.", "Muayene formuna yazmak ve hekime yardımcı olmak DSP'nin görevidir.", "İş kazası ve meslek hastalıklarını Sosyal Güvenlik Kurumuna bildirmek ve sonrasında iş yeri hekimini bilgilendirmek diğer sağlık personelinin görevleri arasındadır."],
        correct: 4,
        source: "2024-1-C",
        explanation: "İş kazası ve meslek hastalığını SGK'ya bildirmek işverenin yükümlülüğüdür, diğer sağlık personelinin görevi değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "47. Mobbing ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["Mağdurun kişiliğinde, mesleki durumunda veya sağlığında zarara yol açmalıdır.", "Yıldırma, pasifize etme veya işten uzaklaştırma amaçlı olmalıdır.", "Sadece üstler tarafından astlara yönelik uygulamaları kapsar.", "Sistemli bir şekilde uygulanmalıdır.", "Kasıtlı olması gereklidir."],
        correct: 2,
        source: "2024-1-C",
        explanation: "Mobbing sadece üstten asta değil; asttan üste veya eşitler arasında da olabilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "48. Radyasyon Güvenliği Yönetmeliği'ne göre iç ışınlanma durumunda ikincil sınırlar aşağıdakilerden hangisi cinsinden ifade edilir?",
        options: ["Etkin doz", "Yıllık vücuda alınma sınırları", "Eş değer doz indeksi", "Yüklenmiş eş değer doz", "Türetilmiş sınır değeri"],
        correct: 1,
        source: "2024-1-C",
        explanation: "İç ışınlanmada ikincil sınırlar 'Yıllık vücuda alınma sınırları' (ALI) cinsinden ifade edilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "49. Oda sıcaklığında sıvı hâlde olan ve kolayca buharlaşabilen, buharına yüksek dozda maruz kalındığında akut belirtiler arasında böbrek yetmezliği görülen, kronik zehirlenmelerinde tremor ve eretizme neden olan metal aşağıdakilerden hangisidir?",
        options: ["Cıva", "Kurşun", "Demir", "Krom", "Nikel"],
        correct: 0,
        source: "2024-1-C",
        explanation: "Oda sıcaklığında sıvı olan metal cıvadır; tremor ve eretizm cıva zehirlenmesi belirtileridir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "50. Aşağıdakilerden hangisi örgütsel ergonominin çalışma konularından biri değildir?",
        options: ["İletişim", "Mental iş yükü", "Ekip çalışması", "İş tasarımı", "Ekip kaynak yönetimi"],
        correct: 1,
        source: "2024-1-C",
        explanation: "Mental iş yükü, 'Bilişsel Ergonomi'nin konusudur.",
        profile: "isg_c",
        image: ""
    }
]);
