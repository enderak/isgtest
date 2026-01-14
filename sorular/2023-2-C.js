// Bu satır standarttır, her dosyanın başında olmalı:
window.SoruHavuzu = window.SoruHavuzu || [];

// Soruları havuza ekle
window.SoruHavuzu = window.SoruHavuzu.concat([
    {
        category: "Hukuk",
        text: "1. 1982 Anayasası'na göre Anayasa Mahkemesi siyasi partilerin mali denetimini yaparken aşağıdakilerin hangisinden yardım sağlar?",
        options: ["Yargıtay", "Hazine ve Maliye Bakanlığı", "Sayıştay", "Yüksek Seçim Kurulu", "Türkiye Büyük Millet Meclisi"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Anayasa'nın 69. maddesine göre Anayasa Mahkemesi, siyasi partilerin mali denetimini yaparken Sayıştay'dan yardım sağlar.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "2. 4857 sayılı İş Kanunu'na göre iş sözleşmesinden kaynaklanmak kaydıyla hangi kanuna tabi olursa olsun kötü niyet tazminatının zaman aşımı süresi kaç yıldır?",
        options: ["1", "2", "3", "5", "10"],
        correct: 3,
        source: "2023-2-C",
        explanation: "4857 sayılı İş Kanunu'na (ve 7036 sayılı İş Mahkemeleri Kanunu'na) göre yıllık izin ücreti ve aşağıda belirtilen tazminatların (kıdem, ihbar, kötü niyet vb.) zamanaşımı süresi 5 yıldır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "3. Murat'ın işveren olduğu özel sektöre ait bir iş yerinde 100 belirli süreli iş sözleşmesi ve 200 belirsiz süreli iş sözleşmesiyle olmak üzere engelli veya eski hükümlü olmayan toplam 300 işçi çalışmaktadır. 4857 sayılı İş Kanunu'na göre Murat, en az kaç engelli işçi çalıştırmak zorundadır?",
        options: ["3", "4", "6", "9", "12"],
        correct: 3,
        source: "2023-2-C",
        explanation: "Özel sektör işyerlerinde %3 engelli çalıştırma zorunluluğu vardır. 300 x %3 = 9 engelli işçi.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "4. Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik'te eğitim programında yer alan konulara göre uzmanlık alanları dikkate alınmak kaydıyla çalışanlara iş sağlığı ve güvenliği eğitimleri verebilecekler arasında aşağıdakilerden hangisi sayılmamıştır?",
        options: ["İş yerinde görevli iş güvenliği uzmanı", "İş yerinde görevli iş yeri hekimi", "İş yerinde görevli diğer sağlık personeli", "Kamu kuruluşlarının eğitim birimleri", "Üniversiteler"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Yönetmeliğe göre DSP (Diğer Sağlık Personeli) eğitim verebilecek kişi ve kurumlar arasında sayılmamıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "5. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre iş yerinde var olan veya dışarıdan gelebilecek, çalışanı veya iş yerini etkileyebilecek zarar veya hasar verme potansiyelini ifade eden kavram aşağıdakilerden hangisidir?",
        options: ["Tehlike", "Risk", "Kaza", "Risk yönetimi", "Ramak kala olay"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Zarar veya hasar verme potansiyeli 'Tehlike' olarak tanımlanır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "6. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'na göre güvenlik raporu hazırlama yükümlülüğü bulunan işverenin iş yerini işletmeye açabilmesi için hazırladığı güvenlik raporlarının içerik ve yeterlilikleri aşağıdakilerin hangisi tarafından incelenir?",
        options: ["Çalışma ve Sosyal Güvenlik Bakanlığı", "Ticaret Bakanlığı", "Türkiye İş Kurumu", "Sosyal Güvenlik Kurumu", "Belediye meclisi"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Güvenlik raporlarının içerik ve yeterliliği Çalışma ve Sosyal Güvenlik Bakanlığı tarafından incelenir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "7. Aşağıdakilerden hangisi yüksekte çalışmalarda çalışanların güvenliğini sağlamak amacıyla kullanılan toplu koruma tedbirlerinden biri değildir?",
        options: ["Bariyerler", "Kapaklar", "Hava yastıkları", "Düşmeyi önleyici platformlar", "Tam vücut kemer sistemleri"],
        correct: 4,
        source: "2023-2-C",
        explanation: "Tam vücut kemer sistemleri, toplu koruma değil, kişisel koruyucu donanımdır (KKD).",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "8. I. Nem\nII. Renk sıcaklığı\nIII. Hava akım hızı\nYukarıdakilerden hangileri iş yerlerindeki efektif sıcaklığı doğrudan etkiler?",
        options: ["Yalnız II", "Yalnız III", "I ve II", "I ve III", "II ve III"],
        correct: 3,
        source: "2023-2-C",
        explanation: "Efektif sıcaklık (hissedilen sıcaklık); ortam sıcaklığı, nem (I) ve hava akım hızı (III) faktörlerinden etkilenir. Renk sıcaklığı aydınlatma ile ilgilidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "9. Bir iş yerinde yüksek risk taşıyan etkenin tehlikesiz veya daha az tehlikeli olanla değiştirilmesi aşağıdaki risk önleme yöntemlerinden hangisidir?",
        options: ["Eleme", "Yerine koyma", "İzolasyon", "Mühendislik kontrolü", "İşaretleme"],
        correct: 1,
        source: "2023-2-C",
        explanation: "Tehlikeli olanı daha az tehlikeliyle değiştirmek 'Yerine koyma' (İkame) prensibidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "10. Çocuk ve Genç İşçilerin Çalıştırılma Usul ve Esasları Hakkında Yönetmelik'e göre mesleki ve teknik eğitim okul ve kurumları öğrencilerine verilen işletmede mesleki eğitim uygulama alanına alınacak işleri aşağıdakilerden hangisi belirler?",
        options: ["Aile ve Sosyal Hizmetler Bakanlığı", "Milli Eğitim Bakanlığı", "Çalışma ve Sosyal Güvenlik Bakanlığı", "Cumhurbaşkanlığı Eğitim ve Öğretim Politikaları Kurulu", "Cumhurbaşkanlığı Sosyal Politikalar Kurulu"],
        correct: 1,
        source: "2023-2-C",
        explanation: "Yönetmeliğe göre bu kapsamdaki işleri Milli Eğitim Bakanlığı belirler.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "11. İşyerlerinde İşin Durdurulmasına Dair Yönetmelik'e göre işin durdurulması kararını vermeye yetkili heyetle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        options: ["3 müfettişten oluşur.", "Gerekli görüldüğü takdirde karara konu iş yerinde inceleme yapabilir.", "Kurul Başkanlığı birden fazla heyet oluşturabilir.", "Oy birliğiyle karar alır.", "İşverenin, mühürlerin geçici olarak sökülmesi taleplerini değerlendirir."],
        correct: 3,
        source: "2023-2-C",
        explanation: "Heyet kararlarını oy birliğiyle değil, oy çokluğuyla alır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "12. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'nda işverenin iş sağlığı ve güvenliğiyle ilgili genel yükümlülükleri arasında aşağıdakilerden hangisi sayılmamıştır?",
        options: ["Görev verirken çalışanın sağlık ve güvenlik yönünden işe uygun olup olmadığını dikkate almak", "Risk değerlendirmesi yapmak veya yaptırmak", "Çalışanın sosyal yaşamındaki güvenlik koşullarını iyileştirmek", "Mesleki risklerin önlenmesi için çalışmalar yapmak", "İş sağlığı ve güvenliği tedbirlerine uyulup uyulmadığını izlemek"],
        correct: 2,
        source: "2023-2-C",
        explanation: "İşverenin yükümlülüğü işyeri ve yapılan iş ile sınırlıdır; çalışanın sosyal yaşamını iyileştirmek genel yükümlülükler arasında değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "13. Bir matbaada risk değerlendirmesi sonucu tespit edilen;\nI. uzun süre aynı pozisyonda çalışma gereksinimi,\nII. işlerin psikolojik baskı altında olmadan uygun süre ve hızda gerçekleştirilmesi,\nIII. çok uzak mesafelere uzanarak çalışılması\nhususlarından hangileri çalışanların ergonomisine yönelik riskler içerir?",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Statik duruş (I) ve aşırı uzanma (III) ergonomik risklerdir. II. öncül olumlu bir durumdur, risk değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "14. İş Sağlığı ve Güvenliği Risk Değerlendirmesi Yönetmeliği'ne göre çok tehlikeli sınıfta yer alan iş yerlerinde risk değerlendirmesi kural olarak en geç kaç yılda bir yenilenir?",
        options: ["1", "2", "3", "4", "6"],
        correct: 1,
        source: "2023-2-C",
        explanation: "Çok tehlikeli sınıfta risk değerlendirmesi en geç 2 yılda bir yenilenir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "15. Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre esnek ve yatay yaşam hatlarında aşağıdakilerin hangileri kullanılır?\nI. Ray\nII. Dokuma şerit\nIII. Sentetik lifli halat",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 3,
        source: "2023-2-C",
        explanation: "Esnek yatay yaşam hatlarında dokuma şerit (II) ve sentetik lifli halat (III) kullanılır. Raylar rijit sistemlerde kullanılır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "16. Türkiye'deki mevzuata göre yürüyen merdivenlerle ilgili;\nI. Gerekli güvenlik donanımlarının bulunması sağlanır.\nII. Kolay fark edilir ve kolay ulaşılır acil durdurma tertibatı bulundurulur.\nIII. Standartların öngördüğü süreler saklı kalmak koşuluyla periyodik kontrolleri 6 ayda bir yapılır.\nifadelerinden hangileri doğrudur?",
        options: ["Yalnız I", "I ve II", "I ve III", "II ve III", "I, II ve III"],
        correct: 1,
        source: "2023-2-C",
        explanation: "Yürüyen merdivenlerin periyodik kontrol süresi standartlarda aksi belirtilmedikçe 1 yıldır. Dolayısıyla I ve II doğrudur, III yanlıştır.",
        profile: "isg_c",
        image: ""
    },
{
    category: "Teknik",
    text: "17. Maden İşyerlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre;\nI. Sıcaklığın 5 derecede sabitlenmesi\nII. Depoya ana yoldan 90 derecelik iki dirsek oluşturan bir yolla girilmesi\nIII. Patlayıcı maddenin deponun orta kısmına konulması\nyukarıdakilerden hangileri madencilik sektöründe faaliyet gösteren bir iş yerinin 75 kg patlayıcı bulunan yer altı patlayıcı madde deposunda alınması gereken tedbirler arasındadır?",
    options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "I, II ve III"],
    correct: 1,
    source: "2023-2-C",
    explanation: "Yönetmeliğe göre sıcaklık 8-30 derece olmalıdır (I yanlış). 50 kg'dan fazla (75 kg) patlayıcı bulunan depolarda giriş yolu 90 derecelik iki dirsek yapmalıdır (II doğru). Patlayıcılar deponun en son kısmına konulur (III yanlış).",
    profile: "isg_c",
    image: ""
},
    {
        category: "Genel İSG Konuları",
        text: "18. Elle Taşıma İşleri Yönetmeliği Uygulama Rehberi'nde aşağıdakilerden hangisi elle taşıma işlerine özel kullanılan risk değerlendirme yöntemleri arasında sayılmamıştır?",
        options: ["Amerikan Endüstriyel Hijyenistler Konferansı Yük Kaldırma Eşiği", "Snook Tabloları", "Mital ve Arkadaşları Tabloları", "Anahtar Gösterge Yöntemi", "Hata Modu ve Etkileri Analizi"],
        correct: 4,
        source: "2023-2-C",
        explanation: "Hata Modu ve Etkileri Analizi (FMEA), genel bir risk değerlendirme yöntemidir, sadece elle taşımaya özgü değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "19. Aşağıdaki faaliyetlerden hangisi Elle Taşıma İşleri Yönetmeliği kapsamına girer?",
        options: ["Ev hizmetleri", "Balıkçı gemilerinde yapılan balıkçılık işleri", "Afet ve acil durum birimlerinin müdahale faaliyetleri", "Çalışan istihdam etmeksizin kendi nam ve hesabına mal üretimi", "Fabrika, bakım merkezi, dikimevi ve benzeri iş yerlerindekiler hariç genel kolluk kuvvetleri faaliyetleri"],
        correct: 1,
        source: "2023-2-C",
        explanation: "Balıkçı gemilerindeki işler 6331 kapsamındadır ve Elle Taşıma Yönetmeliği uygulanır. Diğer şıklar genellikle istisna kapsamındadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "20. İşyerlerinde Acil Durumlar Hakkında Yönetmelik'e göre az tehlikeli sınıfta yer alan ve 600 çalışanı olan bir iş yerinde söndürme ekibi için en az kaç çalışan destek elemanı olarak görevlendirilir?",
        options: ["6", "10", "12", "15", "20"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Az tehlikeli sınıfta her 50 çalışan için 1 söndürme personeli gerekir. 600 / 50 = 12.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "21. İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği'nde üzerinde çalışan bulunan forkliftlerin devrilmesinden kaynaklanan risklerin azaltılması için sayılan alternatifler arasında aşağıdakilerden hangisi yoktur?",
        options: ["Sürücü için kabin bulunur.", "Forklift devrilmeyecek yapıda olur.", "Devrilmesi hâlinde yer ile forkliftin belirli kısımları arasında taşınan çalışanlar için yeterli açıklık kalmasını sağlayacak yapıda olur.", "Devrilmesi hâlinde sürücünün forkliftin parçaları tarafından ezilmesini önleyecek yapıda olur.", "Devrilmesi halinde uzaktan algılama sağlayacak bir uyarı sistemi olur."],
        correct: 4,
        source: "2023-2-C",
        explanation: "Uzaktan algılama sağlayacak uyarı sistemi yönetmelikte sayılan zorunlu devrilme tedbirlerinden biri değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "22. İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği'ne göre aşağıdakilerden hangisi, yetkili olması koşuluyla, iskeleler hariç kaldırma ve iletme ekipmanlarının periyodik kontrollerini yapabilecekler arasında sayılmamıştır?",
        options: ["Makine mühendisi", "İnşaat mühendisi", "Metal eğitimi bölümü mezunu teknik öğretmen", "Mekatronik mühendisi", "Makine teknikeri"],
        correct: 1,
        source: "2023-2-C",
        explanation: "İnşaat mühendisleri kaldırma iletme ekipmanlarının değil, iskelelerin periyodik kontrollerini yapmaya yetkilidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "23. Radyasyon Güvenliği Yönetmeliği'ne göre yer altı maden ocakları ve benzeri çalışma ortamlarında, ortamdaki radon konsantrasyonunun kaç Bq/m³'ü aşması durumunda havalandırma sistemlerinin kurulması ve etkin çalıştırılması gerekir?",
        options: ["250", "500", "750", "1000", "1500"],
        correct: 3,
        source: "2023-2-C",
        explanation: "Radon konsantrasyonu 1000 Bq/m³'ü aşarsa havalandırma zorunludur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "24. Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik'e göre zaman ağırlıklı ortalama değerinin (ZAOD-TWA) 0,1 lif/cm³'ü geçmemesi sağlanır. Buna göre aşağıdakilerden hangisi ZAOD-TWA sınır değerinin aşılmaması için alınan önlemlerden biri değildir?",
        options: ["Yönetmelik kapsamına giren çalışmalar mümkün olan en az sayıda çalışan ile yapılır.", "Çalışma sistemi asbest tozu çıkarmayacak şekilde tecrit edilecek, bu mümkün değilse çıkan tozun ortama yayılması önlenecek şekilde tasarlanır.", "Asbeste maruziyet riski olan çalışmaların yapıldığı yerlerin ve kullanılan ekipmanın temizlik ve bakım işlerinin düzenli ve etkili şekilde yapılması sağlanır.", "Asbest veya toz çıkaran asbestli malzemeler, sızdırmaz uygun paketler içerisinde taşınır ve diğer malzemelerden ayrı olarak depolanır.", "Çalışanlara koruyucu giysi, solunum cihazları gibi yapılan işe uygun kişisel koruyucu donanım verilir."],
        correct: 4,
        source: "2023-2-C",
        explanation: "KKD verilmesi ortamdaki asbest lif konsantrasyonunu düşürmez, çalışanı korur. Soru, sınır değerin aşılmaması (ortam önlemi) ile ilgilidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "25. Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik'e göre işverenler grup 3 ve/veya grup 4 biyolojik etkenlere maruz kalan çalışanların listesini ve kayıtları tutar. Aşağıdakilerden hangisi bu kayıtların bilinen son maruziyetten sonra en az 40 yıl boyunca saklanması gereken durumlardan biri değildir?",
        options: ["Akut ciddi etkilenmeye neden olan tüm enfeksiyonlar", "Eldeki bilgi ve verilere göre, seneler sonra hastalığın ortaya çıkmasına kadar teşhis edilemeyen enfeksiyonlara sebep olan biyolojik etkenlere maruziyet", "Hastalığın gelişmesinden önce uzun kuluçka dönemi olan enfeksiyonlara sebep olan biyolojik etkenlere maruziyet", "Tedaviye rağmen uzun süreler boyunca tekrarlayan enfeksiyonlar", "Ciddi arızalar bırakabilen enfeksiyonlar"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Akut enfeksiyonlar genellikle kısa sürede sonuçlanır, 40 yıl saklama şartı kalıcı, gizli veya uzun kuluçka dönemli hastalıklar içindir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "26. İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik'e göre aşağıdakilerden hangisi iş yeri hekiminin sağlık gözetimi kapsamındaki görevlerinden biri değildir?",
        options: ["Sağlık gözetimi kapsamında yapılacak işe giriş ve periyodik muayeneler ve tetkikler ile ilgili olarak çalışanları bilgilendirmek ve onların rızasını almak", "Bulaşıcı hastalıkların kontrolü için yayılmayı önleme ve bağışıklama çalışmaları yapmak", "İş yerinde iş sağlığı ve güvenliği konularında bilgi ve eğitim sağlanması için ilgili taraflarla iş birliği yapmak", "Çalışanların sağlık nedeniyle tekrarlanan işten uzaklaşmalarından sonra işe dönüşlerinde talep etmeleri hâlinde işe dönüş muayenesi yapmak", "Gece postaları da dâhil olmak üzere çalışanların sağlık gözetimini yapmak"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Eğitim ve bilgilendirme çalışmaları sağlık gözetimi başlığı altında değil, 'Eğitim, Bilgilendirme ve Kayıt' başlığı altında yer alır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "27. İş Sağlığı ve Güvenliği Hizmetleri Yönetmeliği'ne göre işverenin sağlık ve güvenlik kayıtları ve onaylı deftere ilişkin yükümlülükleriyle ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["İşveren, işten ayrılma tarihinden itibaren en az 15 yıl süreyle çalışanların kişisel sağlık dosyalarını saklar.", "Onaylı deftere yazılan tespit ve öneriler işverene tebliğ edilmiş sayılır.", "Onaylı defter, yapılan tespitlere göre iş güvenliği uzmanı, iş yeri hekimi ile işveren tarafından birlikte veya ayrı ayrı imzalanır.", "Onaylı defterin asıl sureti iş yeri hekimi, diğer suretleri ise iş güvenliği uzmanı ve işveren tarafından saklanır.", "Defterin imzalanması ve düzenli tutulmasından işveren sorumludur."],
        correct: 3,
        source: "2023-2-C",
        explanation: "Onaylı defterin asıl sureti işveren tarafından saklanır, kopyaları uzman ve hekimde kalır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "28. Çalışma Gücü ve Meslekte Kazanma Gücü Kaybı Oranı Tespit İşlemleri Yönetmeliği ekinde yer alan meslek hastalıkları listesine göre aşağıdakilerden hangisi 'pnömokonyozlar ve diğer mesleki solunum sistemi hastalıkları' içinde yer almaz?",
        options: ["Silikotüberküloz", "Asbestoz", "Mesleki bronşiyal astım", "Sinüzit", "Sideroz"],
        correct: 3,
        source: "2023-2-C",
        explanation: "Sinüzit mesleki solunum sistemi hastalıkları grubunda listelenmemiştir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "29. Pamuk tozlarına maruz kalım sonucu görülebilen bisinozis hastalığı, Uluslararası Çalışma Örgütünün (ILO) kullandığı meslek hastalıkları listesine göre aşağıdaki başlıkların hangisinde yer alır?",
        options: ["Solunum sistemi hastalıkları", "Biyolojik ajanlar ve bulaşıcı veya paraziter hastalıklar", "Deri hastalıkları", "Kas-iskelet sistemi hastalıkları", "Kimyasal etkenlere bağlı hastalıklar"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Bisinozis, organik tozlara bağlı mesleki solunum sistemi hastalığıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "30. Aşağıdakilerden hangisi bir otomotiv fabrikası çalışanlarına yönelik yapılacak eğitim programının özelliklerinden biri değildir?",
        options: ["Çalışanların ihtiyaçlarına uygun olmalıdır.", "Çalışanların eğitim sürecine katılımını sağlamalıdır.", "Uygun araç ve tekniklerin kullanılması gereklidir.", "Soyut bilgilerden somut gerçeklere doğru gitmelidir.", "Çalışanların kişisel özellikleri ve öğrenme hızları dikkate alınmalıdır."],
        correct: 3,
        source: "2023-2-C",
        explanation: "Yetişkin eğitiminde ilke 'Somuttan soyuta' doğru gitmektir, tersi değil.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Sağlık",
        text: "31. Çalışanların koku alma sinirlerinde duyarsızlaşmaya neden olan çürük yumurta kokulu, yüksek derecede yanıcı ve patlayıcı olan silo, lağım, gübre çukuru gibi yerlerde birikebilen kimyasal asfiktan aşağıdakilerden hangisidir?",
        options: ["Hidrojen sülfür", "Metan", "Argon", "Helyum", "Asetilen"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Çürük yumurta kokusu ve koku yorgunluğu (duyarsızlaşma) Hidrojen Sülfürün (H2S) tipik özelliğidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "32. Elektrik İç Tesisleri Yönetmeliği'ne göre tarımsal işletme yerlerindeki elektrik tesisleriyle ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["Priz ve fişlerin gövdeleri yalıtkan maddeden yapılmalıdır.", "Dolaylı olarak dokunmaya karşı korunma yapılmalıdır.", "İletken ve kabloların aşırı ısınmaya karşı korunması sağlanmalıdır.", "Kullanılacak yer altı kablolarının kesiti bakır için 1.5 mm² olmalıdır.", "Kullanılacak aydınlatma aygıtları koruyucu yalıtmalı tipte olmalıdır."],
        correct: 3,
        source: "2023-2-C",
        explanation: "Tarımsal işletmelerde mekanik zorlanmalar nedeniyle asgari kesitler daha yüksek tutulur (genellikle en az 2.5 mm² veya 4 mm² duruma göre).",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "33. Radyasyon Güvenliği Yönetmeliği'ne göre hamile veya emzirme dönemindeki radyasyon görevlileriyle ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["Hamileliği belirlenmiş kadın çalışan, çalışma şartlarının yeniden düzenlenebilmesi amacıyla yönetimi haberdar eder.", "Hamileliğin bildirilmesi kadın çalışanın çalışmasına engel teşkil etmez.", "Doğacak çocuğun alacağı dozun mümkün olduğu kadar düşük düzeyde tutulması sağlanır.", "Emzirme dönemindeki kadın çalışanlar, radyoaktif kontaminasyon riski taşıyan işlerde çalıştırılmaz.", "Hamileliği belirlenmiş kadın çalışanlarda radyasyon görevlileri için belirlenen doz sınırlarına uyulur."],
        correct: 4,
        source: "2023-2-C",
        explanation: "Hamileliği belirlenmiş kadın çalışanlarda fetüsün korunması için doz sınırları halk için belirlenen sınırlara (daha düşük) çekilir, normal radyasyon görevlisi sınırları uygulanmaz.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "34. Maden İşyerlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre yer altı patlayıcı madde depolarında sağlanması gereken sıcaklık için alt ve üst sınır değerleri derece cinsinden sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?",
        options: ["8-30", "10-25", "5-30", "8-35", "5-35"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Yer altı patlayıcı madde depolarında sıcaklık 8 dereceden az, 30 dereceden çok olamaz.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "35. Aşağıdakilerin hangisi oksi-gaz kaynağında kullanılan asetilen gazının elde edildiği karpitler için doğru bir ifadedir?",
        options: ["Karpitin su ile temasında asetilen gazı ortaya çıkar.", "Karpitin üzerine mazot dökülerek toz hâle gelmesi sağlanır.", "Karpit nemli bir ortamda bekletilerek karpitin taşlaşması önlenir.", "Donmuş karpitlerin ısıtılarak çözülmesi sağlanır.", "İçinde karpit bulunan variller patlamalara karşı belirli aralıklarla havalandırılmalıdır."],
        correct: 0,
        source: "2023-2-C",
        explanation: "Asetilen (C2H2), kalsiyum karbürün (karpit) su ile tepkimesi sonucu elde edilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "36. Elektrik Tesislerinde Topraklamalar Yönetmeliği'ne göre insanları tehlikeli dokunma gerilimlerine karşı korumak için işletme akım devresinde bulunmayan iletken bir bölümün topraklanması aşağıdakilerden hangisiyle tanımlanır?",
        options: ["Dirençsiz işletme topraklaması", "Fonksiyon topraklaması", "Dirençli işletme topraklaması", "Koruma topraklaması", "Düşük gürültülü topraklama"],
        correct: 3,
        source: "2023-2-C",
        explanation: "İnsanları korumak amacıyla yapılan, aktif olmayan metal kısımların topraklanmasına 'Koruma Topraklaması' denir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "37. Makina Emniyeti Yönetmeliği'ne göre aşağıdakilerden hangisi her bir kaldırma aksesuarı veya ticari olarak bölünemeyen her parti kaldırma aksesuarı ile birlikte verilmesi gereken talimatlarda asgari olarak bulunması gereken bilgilerden biri değildir?",
        options: ["Kullanım amacı", "Montaj, kullanım ve bakım talimatları", "Kullanılan statik deney katsayısı", "Kullanılan dinamik deney katsayısı", "Kullanım sınırları"],
        correct: 3,
        source: "2023-2-C",
        explanation: "Yönetmeliğe göre dinamik deney katsayısı talimatlarda bulunması zorunlu asgari bilgiler arasında sayılmamıştır.",
        profile: "isg_c",
        image: ""
    },
  {
        category: "Mevzuat",
        text: "38. Makina Emniyeti Yönetmeliği'ne göre kişileri kaldırmaya yönelik kaldırma zincirlerinde yeterli güvenlik düzeyi sağlamak amacıyla seçilecek çalışma katsayısı genel bir kural olarak kaçtır?",
        options: ["4", "5", "7", "8", "10"],
        correct: 3,
        source: "2023-2-C",
        explanation: "Makina Emniyeti Yönetmeliği'ne göre kaldırma zincirlerinin çalışma katsayısı genel kural olarak 4'tür. Ancak kişileri kaldırmak için kullanılan makinelerde bu katsayılar genellikle iki katına çıkarılır (4 x 2 = 8).",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "39. Elektrik Kuvvetli Akım Tesisleri Yönetmeliği'ne göre elektrik donanımlarının aşırı akımlara karşı korunması için;\nI. Sigortalar, minyatür kesiciler ve kesiciler bulundukları yerde ulaşılabilecek en büyük kısa devre akımını güvenlikle kesebilecek değerde seçilmelidir.\nII. Üzerine tel sarılarak köprülenmiş sigortalar kullanılmalıdır.\nIII. Aşırı akımlara karşı koruma düzeni, arıza olduğunda tehlike altında kalan iletkenlerin akımının kesilmesini sağlayacak biçimde yerleştirilmelidir.\nyargılarından hangileri doğrudur?",
        options: ["Yalnız I", "Yalnız II", "I ve III", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Tel sarılarak köprülenmiş sigorta kullanmak yasak ve tehlikelidir. I ve III doğrudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "40. X kabı: Çelikten yapılmıştır ve azami çalışma sıcaklığı 350°C'dir.\nY kabı: Alüminyumdan yapılmıştır ve azami çalışma sıcaklığı 150°C'dir.\nZ kabı: Alüminyum alaşımlı malzemeden yapılmıştır ve azami çalışma sıcaklığı 80°C'dir.\nBu bilgilere göre verilen kaplardan hangileri Basit Basınçlı Kaplar Yönetmeliği kapsamında değerlendirilemez?",
        options: ["Yalnız X", "Yalnız Z", "X ve Y", "Y ve Z", "X, Y ve Z"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Basit Basınçlı Kaplar Yönetmeliği'ne göre çelik kaplar için azami sıcaklık 300°C, alüminyum/alaşım için 100°C'dir. X (350>300) ve Y (150>100) kapsam dışıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "41. Aşağıdakilerden hangisi bir pestisit türü olarak sınıflandırılmaz?",
        options: ["Organofosfatlar", "Karbamatlar", "Organoklorlar", "Piretroitler", "Zeolitler"],
        correct: 4,
        source: "2023-2-C",
        explanation: "Zeolitler doğal minerallerdir ve pestisit (böcek ilacı) sınıfında değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "42. Asbest, liflerinin fiziksel yapısı bakımından başlıca serpantin ve amfibol olmak üzere iki gruba ayrılır. Buna göre antofilit, krosidolit ve krizotil asbest türlerinin ait olduğu gruplar aşağıdakilerin hangisinde doğru verilmiştir?",
        options: ["Amfibol - Serpantin - Amfibol", "Amfibol - Amfibol - Serpantin", "Serpantin - Amfibol - Amfibol", "Serpantin - Amfibol - Serpantin", "Serpantin - Serpantin - Serpantin"],
        correct: 1,
        source: "2023-2-C",
        explanation: "Krizotil (beyaz asbest) Serpantin grubundadır. Antofilit ve Krosidolit (mavi asbest) Amfibol grubundadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "43. Basınçlı gaz tüplerinin depolanmasıyla ilgili aşağıdakilerden hangisi yanlıştır?",
        options: ["H2 gazı içeren tüpler oksitleyicilerden uzakta depolanmalıdır.", "O2 gazı içeren tüpler tutuşabilen gaz içeren tüplerden uzakta depolanmalıdır.", "Tüpler; çarpma, düşme, kesilme gibi mekanik etkilere maruz kalmamalıdır.", "Tüpler doğrudan gün ışığı alan yerlerde depolanmamalıdır.", "Dolu ve boş tüpler bir arada depolanmalıdır."],
        correct: 4,
        source: "2023-2-C",
        explanation: "Dolu ve boş tüpler ayrı yerlerde depolanmalı ve karışıklığa yol açılmamalıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "44. Cıva ile çalışmalarda maruziyet riskini azaltmak için aşağıdakilerden hangisi yapılması gerekenlerden biri değildir?",
        options: ["Cıva buharının asetilen gazı gönderilerek ortamdan uzaklaştırılması", "Cıva dökülen yere kükürt tozu dökülerek etkisinin giderilmesi", "Dökülen cıvanın vakumla toplanması", "Cıvanın ağzı kapalı kaplarda muhafaza edilmesi", "Cıva atıklarının uygun toplama kaplarında biriktirilmesi"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Asetilen gazı ile cıvanın etkileşimi patlayıcı bileşikler oluşturabilir, bu nedenle kesinlikle yapılmamalıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "45. Binaların Yangından Korunması Hakkında Yönetmelik'e göre aşağıdakilerden hangisi 2022 yılında yapılan bir binanın çatı inşasında dikkat edilmesi gereken hususlardan biri değildir?",
        options: ["Çatı kaplamaları BROOF Sınıfı malzemelerden yapılmalıdır.", "Çatının altında ve içinde yangının yayılması ihtimali göz önünde bulundurulmalıdır.", "Çatı kaplaması yüzeyinin tutuşması ihtimali göz önünde bulundurulmalıdır.", "Yüksek binalarda ve bitişik nizam yapılarda çatıların oturdukları döşemelerin yatay yangın kesici niteliğinde olması gerekir.", "Çatıya yangın güvenlik holünden bir kapı ile ayrılan hol, koridor veya lobiden geçilerek ulaşılmalıdır."],
        correct: 4,
        source: "2023-2-C",
        explanation: "Yönetmelikte çatıya ulaşım için yangın güvenlik holü şartı değil, genel güvenli erişim şartları aranır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "46. I. Gaz kullanılan kapalı bölümlerde, gaz kaçağına karşı doğal veya mekanik havalandırma sağlanması gerekir.\nII. Sayaçların kazan dairesi dışına yerleştirilmesi gerekir.\nIII. Doğalgaz tesisatlı kazan dairesi tavanında gaz sızıntısı hâlinde gazın birikeceği ceplerin bulunması gerekir.\nHükümlerinden hangileri uygulanır?",
        options: ["Yalnız I", "Yalnız II", "I ve II", "II ve III", "I, II ve III"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Gaz birikecek ceplerin bulunması tehlikelidir, tavan düz olmalı ve gazın tahliyesi sağlanmalıdır. I ve II doğrudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "47. Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği'ne göre yapı işlerinde kullanılan sütunlu çalışma platformlarının yapı yüzeyi ile arasındaki açıklık 35 cm ise korkuluk en az kaç cm yüksekliğinde olmalıdır?",
        options: ["30", "40", "50", "60", "70"],
        correct: 4,
        source: "2023-2-C",
        explanation: "TS EN 1495 standardına göre platform ile yapı yüzeyi arası açıklık belirli bir mesafeyi geçerse korkuluk gereklidir. Açıklık 35 cm ise 70 cm korkuluk istenir.",
        profile: "isg_c",
        image: ""
    },
   {
        category: "Mevzuat",
        text: "48. Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik'e göre HEPA (High Efficiency Particulate Air) filtrenin büyüklüğü 0,3 mikron olan aerosolları 1,52 metre/dakika hava akım hızında tutabilme oranı en az yüzde kaçtır?",
        options: ["59,97", "69,97", "79,97", "89,97", "99,97"],
        correct: 4,
        source: "2023-2-C",
        explanation: "Yönetmeliğe göre HEPA filtreler, 0,3 mikronluk aerosolları %99,97 oranında tutabilmelidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "49. I. Fiziksel Ergonomi\nII. Bilişsel Ergonomi\nIII. Örgütsel Ergonomi\nYukarıdakilerden hangileri yoğun çalışma dönemlerinde verimlilik ve kaliteyi azaltmadan vardiyalı çalışmalarda vardiyaların optimum şekilde düzenlenmesiyle ilgilenir?",
        options: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve III", "II ve III"],
        correct: 2,
        source: "2023-2-C",
        explanation: "Vardiya düzenlemeleri, iş organizasyonu ve planlaması 'Örgütsel Ergonomi'nin konusudur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "50. Aşağıdakilerden hangisi çalışma istasyonu tasarımında rahat bir vücut konumu elde etmek için dikkat edilmesi gereken hususlar arasında yer almaz?",
        options: ["Kontrol panellerinin omuzla baş hizası arasında bulunması", "Kullanılan materyalin kol uzanımı sınırları içine yerleştirilmesi", "Materyallerin yerleşim yakınlığının kullanım sıklığına göre ayarlanması", "Bacaklarda ayarlanabilir ayak desteklerinin sağlanması", "Sandalyenin tezgâh yüksekliği ve bacak uzunluğuna göre ayarlanabilmesi"],
        correct: 0,
        source: "2023-2-C",
        explanation: "Ergonomik tasarımda sık kullanılan kontrol panelleri omuz ile bel arasında (rahat ulaşılabilir bölgede) olmalıdır, omuz-baş hizası yorucudur.",
        profile: "isg_c",
        image: ""
    }
]);