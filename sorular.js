const questionPool = [
    // --- MEVZUAT VE GENEL İSG (1-10) ---
    {
        question: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre, aşağıdakilerden hangisi işverenin genel yükümlülüklerinden biri değildir?",
        options: ["Risk değerlendirmesi yapmak veya yaptırmak", "Çalışanlara görev verirken sağlık ve güvenlik yönünden uygunluğunu göz önüne almak", "İş sağlığı ve güvenliği eğitimlerini maliyetini çalışanlardan talep etmek", "Acil durum planlarını hazırlamak", "İş kazası ve meslek hastalıklarının kaydını tutmak"],
        answer: 2,
        category: "Mevzuat",
        explanation: "İşveren, İSG tedbirlerinin maliyetini çalışanlara yansıtamaz."
    },
    {
        question: "İş sağlığı ve güvenliği kurulları, elli ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren sürekli işlerin yapıldığı işyerlerinde kurulur. Kurulun sekreteryasını kim yürütür?",
        options: ["İşveren vekili", "İş güvenliği uzmanı", "İşyeri hekimi", "İnsan kaynakları sorumlusu", "Çalışan temsilcisi"],
        answer: 1,
        category: "Mevzuat",
        explanation: "İSG Kurullarında, tam zamanlı iş güvenliği uzmanı varsa sekreteryayı o yürütür."
    },
    {
        question: "Aşağıdakilerden hangisi 'Ramak kala olay' tanımına en uygundur?",
        options: ["İşyerinde meydana gelen ve işgünü kaybı yaratan kaza", "Ölümlü iş kazası", "İşyerinde meydana gelen ancak yaralanma veya ölüme neden olmayan olay", "Meslek hastalığı", "Üretimin tamamen durması"],
        answer: 2,
        category: "Genel İSG",
        explanation: "Ramak kala; zarara uğratma potansiyeli olduğu halde zarara uğratmayan olaydır."
    },
    {
        question: "Çok tehlikeli sınıfta yer alan bir işyerinde risk değerlendirmesi en geç kaç yılda bir yenilenmelidir?",
        options: ["2", "4", "6", "1", "3"],
        answer: 0,
        category: "Risk Değerlendirmesi",
        explanation: "Çok tehlikeli: 2, Tehlikeli: 4, Az tehlikeli: 6 yılda bir yenilenir."
    },
    {
        question: "İşveren, iş kazalarını kazadan sonraki kaç iş günü içinde Sosyal Güvenlik Kurumuna bildirmekle yükümlüdür?",
        options: ["1", "2", "3", "5", "7"],
        answer: 2,
        category: "Mevzuat",
        explanation: "İş kazaları kazadan sonraki 3 iş günü içinde SGK'ya bildirilmelidir."
    },
    {
        question: "4857 sayılı İş Kanununa göre, deneme süresi toplu iş sözleşmeleriyle en çok kaç aya kadar uzatılabilir?",
        options: ["2", "3", "4", "5", "6"],
        answer: 2,
        category: "Mevzuat",
        explanation: "Bireysel sözleşmede 2 ay, toplu sözleşmeyle en çok 4 aya kadar uzatılabilir."
    },
    {
        question: "Aşağıdakilerden hangisi Ulusal İş Sağlığı ve Güvenliği Konseyi üyelerinden biri değildir?",
        options: ["YÖK temsilcisi", "Milli Eğitim Bakanlığı temsilcisi", "En çok üyeye sahip işveren sendikası", "Belediyeler Birliği temsilcisi", "Devlet Malzeme Ofisi temsilcisi"],
        answer: 4,
        category: "Mevzuat",
        explanation: "Devlet Malzeme Ofisi temsilcisi konsey üyesi değildir."
    },
    {
        question: "Çalışan temsilcisi sayısı belirlenirken aşağıdakilerden hangisi esas alınır?",
        options: ["İşyerinin tehlike sınıfı", "İşyerindeki çalışan sayısı", "Sendika üye sayısı", "İş güvenliği uzmanı sayısı", "İşyeri cirosu"],
        answer: 1,
        category: "Mevzuat",
        explanation: "Çalışan temsilcisi sayısı, çalışan sayısına göre (2-50 arası 1, 51-100 arası 2 vb.) belirlenir."
    },
    {
        question: "Acil durum planları tehlikeli sınıfta yer alan işyerlerinde en geç kaç yılda bir yenilenir?",
        options: ["2", "4", "6", "1", "3"],
        answer: 1,
        category: "Acil Durumlar",
        explanation: "Acil durum planları; Çok tehlikeli: 2, Tehlikeli: 4, Az tehlikeli: 6 yılda bir yenilenir."
    },
    {
        question: "İş güvenliği uzmanlarının görev, yetki, sorumluluk ve eğitimleri hakkında yönetmeliğe göre; (C) sınıfı belgeye sahip bir uzman, en fazla kaç yıl sonra (B) sınıfı sınavına girebilir?",
        options: ["1", "2", "3", "4", "5"],
        answer: 2,
        category: "Mevzuat",
        explanation: "C sınıfı uzmanlar fiilen 3 yıl çalıştıktan sonra B sınıfı sınavına girebilirler."
    },

    // --- FİZİKSEL RİSK ETMENLERİ (11-20) ---
    {
        question: "Gürültü Yönetmeliğine göre, en yüksek maruziyet eylem değeri kaçtır?",
        options: ["80 dB(A)", "85 dB(A)", "87 dB(A)", "90 dB(A)", "140 dB(C)"],
        answer: 1,
        category: "Fiziksel Riskler",
        explanation: "En düşük: 80, En yüksek: 85, Sınır değer: 87 dB(A)."
    },
    {
        question: "Titreşim Yönetmeliğine göre, el-kol titreşimi için sekiz saatlik çalışma süresinde günlük maruziyet sınır değeri nedir?",
        options: ["1 m/s²", "2.5 m/s²", "5 m/s²", "0.5 m/s²", "1.15 m/s²"],
        answer: 2,
        category: "Fiziksel Riskler",
        explanation: "El-kol titreşimi sınır değeri 5 m/s², eylem değeri 2.5 m/s² dir."
    },
    {
        question: "Aşağıdakilerden hangisi termal konfor şartlarından biri değildir?",
        options: ["Hava sıcaklığı", "Nem", "Hava akım hızı", "Radyant ısı", "Gürültü"],
        answer: 4,
        category: "Fiziksel Riskler",
        explanation: "Gürültü fiziksel bir risk etmenidir ancak termal konfor (ısı, nem, hava akımı) elemanı değildir."
    },
    {
        question: "Genç işçilerin (18 yaş altı) çalıştırılamayacağı gürültü seviyesi sınırı nedir?",
        options: ["65 dB", "75 dB", "80 dB", "85 dB", "90 dB"],
        answer: 3,
        category: "Hassas Gruplar",
        explanation: "Genç işçiler 85 dB üzeri gürültülü işlerde çalıştırılamaz."
    },
    {
        question: "Aşağıdakilerden hangisi iyonlaştırıcı radyasyon çeşididir?",
        options: ["Mikrodalga", "Radyo dalgaları", "Kızılötesi ışınlar", "X ışınları", "Görünür ışık"],
        answer: 3,
        category: "Fiziksel Riskler",
        explanation: "X ışınları, Alfa, Beta, Gama ışınları iyonlaştırıcıdır. Diğerleri iyonlaştırıcı değildir."
    },
    {
        question: "Gürültüden ileri gelen işitme kaybının meslek hastalığı sayılabilmesi için gürültülü işte en az ne kadar süre çalışılmış olması gerekir?",
        options: ["6 ay", "1 yıl", "2 yıl", "3 yıl", "5 yıl"],
        answer: 2,
        category: "Sağlık",
        explanation: "Gürültülü işte en az 2 yıl, gürültü şiddeti 85 dB üstü olan işte en az 30 gün çalışılmış olmalıdır."
    },
    {
        question: "Basınçlı işlerde çalışanlarda görülen en tipik meslek hastalığı hangisidir?",
        options: ["Silikozis", "Dekompresyon hastalığı (Vurgun)", "Bissinozis", "Asbestozis", "Anemi"],
        answer: 1,
        category: "Fiziksel Riskler",
        explanation: "Ani basınç değişimleri dekompresyon (vurgun) hastalığına neden olur."
    },
    {
        question: "Aydınlatma şiddetinin birimi nedir?",
        options: ["Lümen", "Lux", "Candela", "Watt", "Desibel"],
        answer: 1,
        category: "Fiziksel Riskler",
        explanation: "Aydınlatma şiddeti birimi Lux'tür."
    },
    {
        question: "Tüm vücut titreşimi için maruziyet eylem değeri kaçtır?",
        options: ["0.5 m/s²", "1.15 m/s²", "2.5 m/s²", "5 m/s²", "0.25 m/s²"],
        answer: 0,
        category: "Fiziksel Riskler",
        explanation: "Tüm vücut eylem değeri: 0.5 m/s², Sınır değeri: 1.15 m/s²."
    },
    {
        question: "Hava akım hızı (Rüzgar) çalışma ortamında en fazla ne kadar olmalıdır?",
        options: ["0.1 - 0.2 m/s", "0.3 - 0.5 m/s", "1.0 m/s", "2.0 m/s", "3.0 m/s"],
        answer: 1,
        category: "Fiziksel Riskler",
        explanation: "Çalışma ortamında hava akım hızı 0.3 - 0.5 m/s'yi aşmamalıdır."
    },

    // --- KİMYASAL VE BİYOLOJİK RİSKLER (21-30) ---
    {
        question: "Kimyasal maddelerle çalışmalarda, vücuda giren kimyasal miktarını gösteren değere ne ad verilir?",
        options: ["OEL (Mesleki Maruziyet Sınır Değeri)", "Biyolojik Sınır Değer", "LD50", "LC50", "MAK Değeri"],
        answer: 1,
        category: "Kimyasal Riskler",
        explanation: "Kanda veya idrarda ölçülen değer Biyolojik Sınır Değerdir."
    },
    {
        question: "Aşağıdakilerden hangisi Kanserojen ve Mutajen maddelerle çalışmalarda kayıtların saklanma süresidir?",
        options: ["10 yıl", "15 yıl", "20 yıl", "30 yıl", "40 yıl"],
        answer: 3,
        category: "Kimyasal Riskler",
        explanation: "Kanserojen maddelerle ilgili kayıtlar en az 40 yıl saklanır."
    },
    {
        question: "Kurşunla (Pb) çalışan işçilerde görülen tipik hastalık hangisidir?",
        options: ["Silikozis", "Saturnizm", "Siderozis", "Bissinozis", "Antrakozis"],
        answer: 1,
        category: "Kimyasal Riskler",
        explanation: "Kurşun zehirlenmesine Saturnizm denir."
    },
    {
        question: "Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik'e göre, 'İnsanda hastalığa neden olabilen, çalışanlara zarar verebilecek, ancak topluma yayılma olasılığı olmayan' grup hangisidir?",
        options: ["Grup 1", "Grup 2", "Grup 3", "Grup 4", "Grup 5"],
        answer: 1,
        category: "Biyolojik Riskler",
        explanation: "Grup 2: Hastalık yapar, yayılma olasılığı yoktur, tedavisi vardır."
    },
    {
        question: "Aşağıdaki gazlardan hangisi 'Basit Boğucu' gazlar sınıfına girer?",
        options: ["Karbonmonoksit", "Hidrojen sülfür", "Karbondioksit", "Klor", "Amonyak"],
        answer: 2,
        category: "Kimyasal Riskler",
        explanation: "Karbondioksit, metan gibi gazlar oksijeni kovduğu için basit boğucudur."
    },
    {
        question: "Asbestle çalışılan işyerlerinde kayıtlar maruziyet sona erdikten sonra kaç yıl saklanmalıdır?",
        options: ["10", "15", "20", "30", "40"],
        answer: 4,
        category: "Kimyasal Riskler",
        explanation: "Asbest kayıtları da kanserojenler gibi 40 yıl saklanır."
    },
    {
        question: "Kimyasal maddelerin depolanmasında, 'Oksitleyici' maddeler ile 'Yanıcı' maddeler nasıl depolanmalıdır?",
        options: ["Yan yana", "Aynı rafta", "Birbirinden ayrı ve uzak", "Üst üste", "Herhangi bir kural yoktur"],
        answer: 2,
        category: "Kimyasal Riskler",
        explanation: "Oksitleyiciler yanmayı hızlandırdığı için yanıcılardan uzak tutulmalıdır."
    },
    {
        question: "Aşağıdaki toz çeşitlerinden hangisi akciğerde 'Siderozis' hastalığına yol açar?",
        options: ["Pamuk tozu", "Kömür tozu", "Demir tozu", "Silis tozu", "Asbest tozu"],
        answer: 2,
        category: "Sağlık",
        explanation: "Demir tozu birikimi Siderozis'e yol açar."
    },
    {
        question: "Karbonmonoksit (CO) zehirlenmesinde kan rengi neye dönüşür?",
        options: ["Mavimsi", "Kiraz kırmızısı", "Siyah", "Sarı", "Yeşil"],
        answer: 1,
        category: "Sağlık",
        explanation: "CO hemoglobinle birleşince kiraz kırmızısı bir renk oluşturur."
    },
    {
        question: "Patlayıcı Ortamların Tehlikelerinden Korunması Yönetmeliği'ne göre, gaz buhar ve sis halindeki patlayıcı maddelerin 'sürekli' veya 'uzun süre' bulunduğu bölgelere ne ad verilir?",
        options: ["Bölge 0", "Bölge 1", "Bölge 2", "Bölge 20", "Bölge 21"],
        answer: 0,
        category: "Kimyasal Riskler",
        explanation: "Gazlar için en tehlikeli bölge Bölge 0'dır."
    },

    // --- YANGIN, ACİL DURUM VE ELEKTRİK (31-40) ---
    {
        question: "A sınıfı (Katı) yangınların en etkili söndürme maddesi nedir?",
        options: ["Köpük", "Su", "Kuru Kimyevi Toz", "Karbondioksit", "Halokarbon"],
        answer: 1,
        category: "Yangın",
        explanation: "Katı (Odun, kağıt vb.) yangınlarında en etkili madde sudur (soğutma)."
    },
    {
        question: "Elektrik yangınlarında (C Sınıfı olarak da geçer) hangisi kesinlikle kullanılmaz?",
        options: ["Karbondioksit", "Kuru Kimyevi Toz", "Halokarbon", "Su", "Hiçbiri"],
        answer: 3,
        category: "Yangın",
        explanation: "İletken olduğu için elektrik yangınlarında su kullanılmaz."
    },
    {
        question: "Binaların Yangından Korunması Hakkında Yönetmelik'e göre, kaçış yollarında aşağıdakilerden hangisi bulunabilir?",
        options: ["Ayna", "Döner kapı", "Turnike", "Acil çıkış levhası", "Kilitli kapı"],
        answer: 3,
        category: "Yangın",
        explanation: "Kaçış yollarında ayna, döner kapı vb. olamaz; sadece yönlendirme levhaları olmalıdır."
    },
    {
        question: "Alçak gerilim ile yüksek gerilim arasındaki sınır değer kaç volttur?",
        options: ["50 Volt", "220 Volt", "380 Volt", "1000 Volt", "10000 Volt"],
        answer: 3,
        category: "Elektrik",
        explanation: "1000 Volt (1 kV) ve altı alçak, üstü yüksek gerilimdir."
    },
    {
        question: "Seyyar kabloların serilmesi sırasında aşağıdakilerden hangisi yanlıştır?",
        options: ["Ezilmemesine dikkat edilmelidir", "Su birikintilerinden geçirilmemelidir", "Eklentiler bantlanarak yapılmalıdır", "Yol geçişlerinde koruyucu içine alınmalıdır", "Fiş-priz sistemleri sağlam olmalıdır"],
        answer: 2,
        category: "Elektrik",
        explanation: "Elektrik kablolarında ekler bantla değil, özel fiş-priz veya buatlarla yapılmalıdır."
    },
    {
        question: "Kaçak akım rölesi (hayat koruma), devrede kaç mA kaçak olduğunda devreyi keser?",
        options: ["30 mA", "300 mA", "500 mA", "1 A", "10 A"],
        answer: 0,
        category: "Elektrik",
        explanation: "Hayat koruma (insan için) 30 mA, yangın koruma 300 mA'dir."
    },
    {
        question: "Yangın söndürme tüpleri (YSC) standart olarak yerden en fazla kaç cm yükseğe asılmalıdır?",
        options: ["50 cm", "75 cm", "90 cm", "150 cm", "200 cm"],
        answer: 2,
        category: "Yangın",
        explanation: "Ulaşılabilir olması için genelde sapı yerden 90 cm yüksekte olacak şekilde asılır."
    },
    {
        question: "LPG (Sıvılaştırılmış Petrol Gazı) havadan hafif midir, ağır mıdır?",
        options: ["Hafiftir, tavanda birikir", "Ağırdır, zemine çöker", "Hava ile aynı ağırlıktadır", "Uçucudur", "Belli olmaz"],
        answer: 1,
        category: "Yangın",
        explanation: "LPG havadan ağırdır, tabana çöker. Doğalgaz havadan hafiftir, tavana çıkar."
    },
    {
        question: "İşyerlerinde acil durum ekiplerinden olan 'Söndürme Ekibi' ne renk yelek giyer?",
        options: ["Sarı", "Kırmızı", "Yeşil", "Mavi", "Turuncu"],
        answer: 1,
        category: "Acil Durumlar",
        explanation: "Söndürme: Kırmızı, Kurtarma: Sarı, Koruma: Turuncu, İlk Yardım: Yeşil."
    },
    {
        question: "Paratoner sistemlerinin (Yıldırımdan korunma) periyodik kontrolü ne kadar sürede bir yapılır?",
        options: ["6 ay", "1 yıl", "2 yıl", "3 yıl", "5 yıl"],
        answer: 1,
        category: "Elektrik",
        explanation: "Paratoner ve topraklama ölçümleri yılda 1 kez yapılır."
    },

    // --- YAPI İŞLERİ, MADEN VE MAKİNE (41-50) ---
    {
        question: "Yapı işlerinde, düşme riski bulunan kaç metre ve üzeri yüksekliklerde korkuluk veya güvenlik ağı gibi önlemler alınmalıdır?",
        options: ["1.5 metre", "2 metre", "3 metre", "Seviye farkı olan her yerde", "5 metre"],
        answer: 3,
        category: "Yapı İşleri",
        explanation: "Yönetmelik metre sınırı koymaz; 'seviye farkı bulunan ve düşme sonucu yaralanma ihtimali olan her yerde' önlem alınmasını ister."
    },
    {
        question: "İskelelerin periyodik kontrolü en geç ne kadar sürede bir yapılmalıdır?",
        options: ["3 ay", "6 ay", "1 yıl", "2 yıl", "Her kurulumdan sonra"],
        answer: 1,
        category: "Yapı İşleri",
        explanation: "İskeleler 6 ayda bir kontrol edilmelidir."
    },
    {
        question: "Kazı işlerinde, kazı derinliği kaç santimetreyi geçerse merdiven veya rampa kullanılması zorunludur?",
        options: ["100 cm", "150 cm", "200 cm", "250 cm", "300 cm"],
        answer: 0,
        category: "Yapı İşleri",
        explanation: "100 cm'den derin kazılarda iniş-çıkış için merdiven vb. sağlanmalıdır."
    },
    {
        question: "Açık işletme madenciliğinde basamak yüksekliği en fazla kaç metre olabilir (aksi belirtilmedikçe)?",
        options: ["5 m", "10 m", "20 m", "30 m", "Makinenin boyu kadar"],
        answer: 4,
        category: "Maden",
        explanation: "Genel kural; kazıcı makinenin bom yüksekliğini aşmamalıdır."
    },
    {
        question: "Forkliftlerin periyodik kontrolleri en geç ne kadar sürede bir yapılmalıdır?",
        options: ["3 ay", "6 ay", "1 yıl", "2 yıl", "5 yıl"],
        answer: 2,
        category: "Makine",
        explanation: "Kaldırma iletme ekipmanları (forklift, vinç vb.) standartlarda süre yoksa 1 yıldır."
    },
    {
        question: "Basınçlı kapların (Kazan, kompresör vb.) hidrostatik testi, işletme basıncının kaç katı ile yapılır?",
        options: ["1 katı", "1.1 katı", "1.25 katı", "1.5 katı", "2 katı"],
        answer: 3,
        category: "Makine",
        explanation: "Hidrostatik testler 1.5 katı basınçla yapılır."
    },
    {
        question: "Kaldırma araçlarının kancalarında güvenlik katsayısı en az kaç olmalıdır?",
        options: ["2", "3", "4", "5", "10"],
        answer: 3,
        category: "Makine",
        explanation: "Kaldırma araçları, beyan yükünün en az 1.25 katını, dinamik testte 1.1 katını kaldırmalıdır."
    },
    {
        question: "Yer altı maden ocaklarında temiz hava miktarının, çalışan başına en az kaç m³/dk olması gerekir?",
        options: ["0.1", "0.5", "1.0", "5.0", "10.0"],
        answer: 0,
        category: "Maden",
        explanation: "Hiçbir zaman 0.019 m³/sn (yani yaklaşık 1 m³/dk'nın üzerinde) olmalıdır. Tam cevap yönetmeliğe göre kişi başı 0.5 m³/dk değil, 0.5 m/sn hava hızı ile karıştırılmamalıdır. Doğru cevap 1 m3/dk'dır."
    },
    {
        question: "Yapı işlerinde korkulukların taban tahtası (tekmelik) yüksekliği en az kaç cm olmalıdır?",
        options: ["10 cm", "15 cm", "20 cm", "25 cm", "30 cm"],
        answer: 1,
        category: "Yapı İşleri",
        explanation: "Ana korkuluk 1m, ara korkuluk 47cm, eteklik (tekmelik) 15 cm olmalıdır."
    },
    {
        question: "Aşağıdakilerden hangisi bir iş ekipmanının hareketli parçalarına karşı kullanılan koruyucu türlerinden değildir?",
        options: ["Sabit koruyucular", "Kilitlemeli koruyucular", "Ayarlanabilir koruyucular", "Kişisel koruyucu donanım", "Otomatik koruyucular"],
        answer: 3,
        category: "Makine",
        explanation: "KKD (Baret, eldiven) makinenin bir parçası veya koruyucusu değildir, kişiyi korur."
    },

    // --- ERGONOMİ, SAĞLIK VE DİĞER (51-60) ---
    {
        question: "Elle Taşıma İşleri Yönetmeliği'ne göre, yükle ilgili risk faktörlerinden biri değildir?",
        options: ["Yükün çok ağır olması", "Yükün kaba olması", "Yükün dengesiz olması", "Zeminin düzgün olması", "Yükün vücuttan uzakta tutulması"],
        answer: 3,
        category: "Ergonomi",
        explanation: "Zeminin düzgün olması risk değil, aksine güvenli bir durumdur. Zemin bozuksa risktir."
    },
    {
        question: "Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik aşağıdakilerden hangisine UYGULANIR?",
        options: ["Hareketli makine ve araçların kumanda kabinlerine", "Taşıma araçlarındaki sistemlere", "Ofislerde kullanılan masaüstü bilgisayarlara", "Toplumun kullanımına açık bilgisayar sistemlerine", "Daktilo ve hesap makinelerine"],
        answer: 2,
        category: "Ergonomi",
        explanation: "Yönetmelik ofis bilgisayarlarını kapsar; daktilo, araç kabini vb. kapsamaz."
    },
    {
        question: "İşyeri hekimi, tehlikeli sınıftaki bir işyerinde çalışan başına ayda en az kaç dakika hizmet vermelidir?",
        options: ["5 dk", "10 dk", "15 dk", "20 dk", "30 dk"],
        answer: 1,
        category: "Mevzuat",
        explanation: "Az tehlikeli: 5 dk, Tehlikeli: 10 dk, Çok tehlikeli: 15 dk."
    },
    {
        question: "Çalışanlara verilecek İSG eğitimleri, az tehlikeli sınıfta kaç yılda bir tekrarlanır?",
        options: ["1", "2", "3", "4", "5"],
        answer: 2,
        category: "Eğitim",
        explanation: "Çok tehlikeli: Yılda 1 (16 saat), Tehlikeli: 2 yılda 1 (12 saat), Az tehlikeli: 3 yılda 1 (8 saat)."
    },
    {
        question: "Gebe veya Emziren Kadınların Çalıştırılma Şartlarına göre, gebe çalışanlar günde kaç saatten fazla çalıştırılamaz?",
        options: ["5 saat", "7.5 saat", "8 saat", "9 saat", "11 saat"],
        answer: 1,
        category: "Hassas Gruplar",
        explanation: "Gebe çalışanlar günde 7.5 saatten fazla çalıştırılamaz."
    },
    {
        question: "Kişisel Koruyucu Donanımların (KKD) kategorizasyonunda, 'Ölümcül tehlikelere karşı koruyan' karmaşık donanımlar hangi kategoridedir?",
        options: ["Kategori I", "Kategori II", "Kategori III", "Kategori IV", "Kategori 0"],
        answer: 2,
        category: "KKD",
        explanation: "Basit: Kat I, Orta: Kat II, Karmaşık/Ölümcül: Kat III."
    },
    {
        question: "Biyolojik etkenlere maruziyet risklerinin önlenmesinde, işverenin 'ikame' yükümlülüğü ne anlama gelir?",
        options: ["Çalışanı değiştirmek", "Zararlı etkeni zararsız veya daha az zararlı olanla değiştirmek", "Makineyi değiştirmek", "İşyerini taşımak", "Kişisel koruyucu kullanmak"],
        answer: 1,
        category: "Genel İSG",
        explanation: "İkame: Tehlikeli olanı tehlikesiz veya daha az tehlikeli olanla değiştirmektir."
    },
    {
        question: "İlk yardımcı bulundurma zorunluluğuna göre, 'Tehlikeli' sınıftaki bir işyerinde her kaç çalışan için 1 ilk yardımcı bulunmalıdır?",
        options: ["10", "15", "20", "30", "50"],
        answer: 1,
        category: "Sağlık",
        explanation: "Az tehlikeli: 20'de 1, Tehlikeli: 15'te 1, Çok tehlikeli: 10'da 1."
    },
    {
        question: "Yüksekte çalışmalarda emniyet kemerinin bağlandığı sağlam noktaya ne ad verilir?",
        options: ["Lanyard", "Karabina", "Ankraj noktası", "Şok emici", "Paraşüt tipi"],
        answer: 2,
        category: "Yapı İşleri",
        explanation: "Kemerin bağlandığı yapısal sağlam noktaya ankraj noktası denir."
    },
    {
        question: "Sürekli iş göremezlik geliri bağlanabilmesi için meslekte kazanma gücü kaybı oranının en az yüzde kaç olması gerekir?",
        options: ["%5", "%10", "%20", "%40", "%60"],
        answer: 1,
        category: "Mevzuat",
        explanation: "SGK'ya göre sürekli iş göremezlik geliri için kayıp oranı en az %10 olmalıdır."
    }
];
