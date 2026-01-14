// Bu satır standarttır, her dosyanın başında olmalı:
window.SoruHavuzu = window.SoruHavuzu || [];

// Soruları havuza ekle
window.SoruHavuzu = window.SoruHavuzu.concat([
    {
        category: "Mevzuat",
        text: "1. İşyeri Bina ve Eklentilerinde Alınacak Sağlık ve Güvenlik Önlemlerine İlişkin Yönetmelik hükümlerine göre, dinlenme yerleri için aşağıdakilerden hangileri doğrudur?\n\nI. İş aralarında uygun dinlenme imkânı bulunan büro ve benzeri iş yerlerinde, ayrıca dinlenme yeri bulunması gerekmez.\nII. Gerekli şartlar sağlansa bile, yemek yeme yerlerinin dinlenme yeri olarak kullanılması uygun değildir.\nIII. 10 ve daha fazla çalışanın bulunduğu iş yerlerinde dinlenme yeri bulunmalıdır.",
        options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "II ve III"],
        correct: 2,
        source: "2025-1-C",
        explanation: "Yönetmeliğe göre; I ve II doğrudur. 10 ve daha fazla çalışan için dinlenme yeri zorunluluğu yoktur, yanlıştır.",
        profile: "isg_c",
        image: "" // <--- DÜZELTİLDİ: Virgül eklendi
    },
    {
        category: "Mevzuat",
        text: "2. 6331 sayılı Kanun’a göre iş yerinde veya işin yürütümü nedeniyle meydana gelen, ölüme sebebiyet veren veya vücut bütünlüğünü ruhen ya da bedenen engelli hâle getiren olaydır. Yukarıdaki tanım, aşağıdakilerden hangisine aittir?",
        options: ["Acil durum", "İş kazası", "Risk", "Ramak kala olay", "Tehlike"],
        correct: 1,
        source: "2025-1-C",
        explanation: "Tanım, 6331 sayılı İş Sağlığı ve Güvenliği Kanunu'nda 'iş kazası' olarak tanımlanmıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "3. Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik’e göre, çalışanların bilgilendirilmesi ve eğitimi; hangi konuları içermektedir?\n\nI. Ekranlı araçlarla çalışmalarda riskler ve korunma yolları\nII. Gözleri en az yoran yazı karakterleri ve renkler\nIII. Ara dinlenmeleri ve egzersizler",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 4,
        source: "2025-1-C",
        explanation: "Yönetmeliğe göre bilgilendirme ve eğitim tüm bu konuları (I, II ve III) kapsar.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "4. Kişisel Koruyucu Donanımların İşyerlerinde Kullanılması Hakkında Yönetmelik’e göre, aşağıdakilerden hangisi yanlıştır?",
        options: ["Çalışan tarafından ücreti karşılığında alınır.", "Hijyenik şartlarda muhafaza edilir ve kullanıma hazır bulundurulur.", "İşveren, kişisel koruyucu donanımları hangi risklere karşı kullanacağı konusunda çalışanı bilgilendirir.", "Kullanım kılavuzuna uygun olarak bakım, onarım ve periyodik kontrolleri yapılır.", "Kullananın ergonomik gereksinimlerine ve sağlık durumuna uygun olmalıdır."],
        correct: 0,
        source: "2025-1-C",
        explanation: "KKD'ler işveren tarafından ücretsiz olarak sağlanır, çalışan tarafından ücret karşılığı alınmaz.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "5. Kadın Çalışanların Gece Postalarında Çalıştırılma Koşulları Hakkında Yönetmelik’e göre aşağıdakilerden hangisi yanlıştır?",
        options: ["Belediye sınırları dışındaki her türlü iş yeri işverenleri, gece postalarında çalıştıracakları kadın çalışanları, sağlayacakları uygun araçlarla, ikametgâhlarına en yakın merkezden iş yerine götürüp getirmekle yükümlüdür.", "İşveren, gece postalarında çalıştırılan kadın çalışanların, işin devamı süresince özel durumunu ve iş yerinde maruz kalınan sağlık ve güvenlik risklerini dikkate alarak -iş yeri hekimince belirlenen düzenli aralıklarla- sağlık muayenelerinin yapılmasını sağlar.", "Kadın çalışanların gece postalarında çalıştırılabilmeleri için, işe başlamadan önce, gece postalarında çalıştırılmalarında sakınca olmadığına ilişkin sağlık raporu alınmalıdır.", "Kadın çalışanın kocası da işin postalar hâlinde yürütüldüğü aynı veya ayrı bir iş yerinde çalışıyor ise, kadın çalışanın görüşü dikkate alınmaksızın, çalışma saatlerini işveren düzenler.", "Turizm, özel güvenlik ve sağlık hizmeti yürütülen işlerde ve bu işlerin yürütüldüğü iş yerlerinde faaliyet gösteren alt işveren tarafından yürütülen işlerde, kadın çalışanın yazılı onayının alınması şartıyla, kadın çalışanlara yedi buçuk saatin üzerinde gece çalışması yaptırılabilir."],
        correct: 3,
        source: "2025-1-C",
        explanation: "Kadın çalışanın kocası da gece postasında çalışıyorsa, kadın çalışanın görüşü dikkate alınarak çalışma saatleri düzenlenir. Görüşü dikkate alınmaksızın düzenlenmesi yanlıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "6. Asbestle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik’e göre, aşağıdakilerden hangisi işverenin, çalışmalara başlamadan önce iş planı hazırlamak ve iş yerinin bağlı bulunduğu Çalışma ve İş Kurumu il müdürlüğüne iş planı ile birlikte bildirimde bulunmak ile yükümlü olduğu bilgilerden biri değildir?",
        options: ["Risk değerlendirme sonuçları", "Yapılacak işler ve işlemler", "Çalışan sayısı", "İşe başlama tarihi ve işin tahmini süresi", "Sökümü yapılacak asbestin türü ve miktarı"],
        correct: 0,
        source: "2025-1-C",
        explanation: "Risk değerlendirme sonuçları bildirimde bulunulması zorunlu bilgiler arasında yer almaz. Diğerleri (B, C, D, E) zorunludur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "7. 4857 sayılı İş Kanunu’na göre, aynı iş yerinde hizmet süresi 5 yıldan fazla 15 yıldan az olan 35 yaşında bir işçinin yıllık izin süresi kaç günden az olamaz?",
        options: ["14", "15", "20", "26", "30"],
        correct: 2,
        source: "2025-1-C",
        explanation: "5 yıldan fazla 15 yıldan az hizmet süresi olan işçinin yıllık izni 20 gündür (18 yaşını doldurmamış veya 50 yaşını geçmiş işçiler için + fazladan günler ayrıca eklenir).",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "8. 4857 sayılı İş Kanunu’na göre, tarafların anlaşması ile haftalık normal çalışma süresi, iş yerlerinde haftanın çalışılan günlerine dağıtılabilir. Bunun için, günlük çalışma süresinin kanunen kaç saati aşmaması gerekir?",
        options: ["8", "9", "11", "12", "14"],
        correct: 2,
        source: "2025-1-C",
        explanation: "Haftalık 45 saatlik süre, günde 11 saati aşmamak koşuluyla haftanın çalışılan günlerine dağıtılabilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "9. Ahmet, 25 yaşında bir işçidir. Bir tekstil fabrikasında ilk kez çalışmaya başlamıştır. Ahmet iş yerinde 7 ay süreyle aralıksız çalışmıştır. İş sözleşmesi sona erdikten 3 ay sonra ikinci kez aynı iş yerinde çalışmaya başlayan Ahmet, bu kez 6 ay aralıksız çalışmıştır. Buna göre;\n\nI. Ahmet yıllık izne hak kazanmıştır.\nII. Ahmet’in yıllık izin süresi yirmi günden az olamaz.\nIII. İşveren, Ahmet’e yıllık izin hakkını kullandırmak yerine yıllık izin süresine ilişkin ücretini ödeyebilir.\n\n4857 sayılı İş Kanunu’na göre Ahmet’in yıllık izin hakkıyla ilgili olarak aşağıdakilerden hangisi doğrudur?",
        options: ["Yalnız I", "Yalnız III", "I ve II", "II ve III", "I, II ve III"],
        correct: 0,
        source: "2025-1-C",
        explanation: "Ahmet, ilk çalışmasında 7 ay, ikincisinde 6 ay çalışmıştır. Yıllık izin için en az 1 yıl (12 ay) kıdemi gereklidir. Toplamda 13 ay çalışmış gibi görünse de, iş sözleşmesi sona erip 3 ay ara verdikten sonra tekrar başladığı için kıdem süresi ikinci işe girişten itibaren yeniden başlar. 6 ay çalıştığı için henüz yıllık izin hakkı kazanmamıştır (en az 1 yıl). Bu nedenle yalnız I doğru olabilir gibi görünse de, aslında hiçbiri doğru değildir. Ancak cevap şıklarına göre 'Yalnız I' işaretlenmiş, bu da soruda yıllık izin hakkı kazanıldığı varsayımıyla hazırlanmış olabilir (pratikte kıdem birleşmez). Soruya göre en uygun cevap A (Yalnız I) olarak alınmıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "10. 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu kapsamında aşağıdakilerden hangisi iş kazası sayılmaz?",
        options: ["Emzirme odasında çocuğunu emziren kadın işçinin oturduğu koltuğun kırılması sonucu kolunu kırması", "İşçinin, iş yerinin avlusunda kayarak düşmesi ve bacağını kırması", "İşçinin tamir hizmeti vermek için müşterinin evine gitmesi ve burada tamir işini yürütürken işçinin elektrik akımına kapılması", "İşçinin, işveren tarafından tahsilat amacıyla gönderildiği müşterinin iş yerinde darp edilmesi", "İşçinin kendi aracıyla iş yerine giderken trafik kazası geçirmesi ve kaburgalarında kıralar meydana gelmesi"],
        correct: 0,
        source: "2025-1-C",
        explanation: "Emzirme odasında çocuğunu emzirirken meydana gelen kaza, iş kazası kapsamında değerlendirilmez, çünkü işle doğrudan ilgili bir faaliyet değildir. Diğerleri iş kazası sayılır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "11. İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik’e göre eğitim kurumları, katılımcı kaydı yapabilmek ve eğitime başlayabilmek için aşağıdaki işlemlerden hangisini yapmak zorundadır?",
        options: ["Genel müdürlükçe düzenlenen yetki belgesini almak", "Genel müdürlük ile sözleşme yapmak", "İl müdürlüklerince düzenlenen yetki belgesini almak", "İl müdürlükleri ile sözleşme yapmak", "Valilik ile sözleşme yapmak"],
        correct: 1,
        source: "2025-1-C",
        explanation: "Eğitim kurumları, Çalışma ve Sosyal Güvenlik Bakanlığı İş Sağlığı ve Güvenliği Genel Müdürlüğü ile sözleşme yapmak zorundadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "12. İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik’e göre, çok tehlikeli sınıfta yer alan 1000 çalışanlı bir iş yerinde tam gün çalışacak en az kaç iş güvenliği uzmanı görevlendirilmelidir?",
        options: ["1", "2", "3", "4", "5"],
        correct: 1,
        source: "2025-1-C",
        explanation: "Çok tehlikeli sınıfta, her 1000 çalışan için tam gün çalışacak en az 1 iş güvenliği uzmanı görevlendirilir. 1000 çalışan için 1 uzman yeterlidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "13. Coşkun, 2025 yılında iş güvenliği uzmanı olmak için teorik kısmı 180 saat ve uygulama kısmı 40 saat olan, iş güvenliği uzmanlığına yönelik bir eğitim programına katılacaktır. İş Güvenliği Uzmanlarının Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik’e göre, bu eğitim programı içerisinde yer alan teorik eğitimin en fazla kaç saati uzaktan eğitim ile verilebilir?",
        options: ["80", "90", "100", "110", "120"],
        correct: 1,
        source: "2025-1-C",
        explanation: "Teorik eğitimin en fazla yarısı (180 saat / 2 = 90 saat) uzaktan eğitim ile verilebilir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "14. Bir çalışanın maruz kaldığı kaza sonucu ortaya çıkan durumlardan hangisinin şiddeti en yüksektir?",
        options: ["Ayakta tedavi gerektiren", "İncinme nedeniyle tedavi gerektiren", "Temel ilk yardım gerektiren", "Üç gün istirahat raporu gerektiren", "Uzuv kaybı nedeniyle tedavi gerektiren"],
        correct: 4,
        source: "2025-1-C",
        explanation: "Uzuv kaybı, diğer seçeneklere göre çok daha ciddi ve şiddeti yüksek bir sonuçtur.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "15. İş Güvenliği Analizi (JSA) ile ilgili olarak aşağıdakilerden hangisi doğrudur?",
        options: ["Çalışanların bireysel performanslarını ölçmek için geliştirilmiştir.", "İş süreçleri adım adım analiz edilerek her aşamada potansiyel tehlikeler belirlenir.", "İş kazaları gerçekleştikten sonra uygulanır.", "Risk değerlendirme sürecinde kullanılmaz.", "Sadece büyük ölçekli işletmelerde kullanılır."],
        correct: 1,
        source: "2025-1-C",
        explanation: "JSA, işi adımlara ayırıp her adımdaki tehlikeleri belirlemeye yönelik proaktif bir risk değerlendirme yöntemidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Genel İSG Konuları",
        text: "16. Bir iş yerinde L tipi matris yöntemine göre yapılan risk değerlendirmesi sonucunda olasılık ve şiddet puanları sırasıyla 4 ve 5 olarak belirlenmiştir. Buna göre, risk skoru kaçtır ve hangi önlem alınmalıdır?",
        options: ["Risk skoru 9’dur, izleme yapılmalıdır.", "Risk skoru 9’dur, tüm faaliyetler durdurulmalıdır.", "Risk skoru 16’dur, periyodik kontroller yapılmalıdır.", "Risk skoru 20’dir, acil önlem alınmalıdır.", "Risk skoru 20’dir, kabul edilebilir seviyededir."],
        correct: 3,
        source: "2025-1-C",
        explanation: "L tipi matriste risk skoru = Olasılık x Şiddet = 4 x 5 = 20'dir. Yüksek risk skorları için acil önlem alınması gerekir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "17. İş Ekipmanlarının Kullanımında Sağlık ve Güvenlik Şartları Yönetmeliği’ne göre, standartlarda süre belirtilmemiş ise tezgâhlara uygulanacak periyodik kontrol dönemi azami süresi, aşağıdakilerin hangisinde doğru olarak belirtilmiştir?",
        options: ["3 ay", "6 ay", "12 ay", "18 ay", "24 ay"],
        correct: 2,
        source: "2025-1-C",
        explanation: "Tezgâhlar için periyodik kontrol azami süresi 12 aydır (1 yıl).",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "18. Aşağıdakilerden hangileri hakkında 6331 sayılı İş Sağlığı ve Güvenliği Kanunu hükümleri uygulanmaz?\n\nI. Çıraklar ve stajyerler\nII. Ev hizmetleri\nIII. Hükümlü ve tutuklulara yönelik infaz hizmetleri sırasında yapılan meslek edindirme faaliyetleri\nIV. Kara Kuvvetleri Komutanlığı Dikimevi’nde yapılan faaliyetler",
        options: ["I ve IV", "II ve III", "II ve IV", "III ve IV", "I, II ve III"],
        correct: 1,
        source: "2025-1-C",
        explanation: "6331 sayılı Kanun, ev hizmetleri (II) ve hükümlü/tutuklulara yönelik meslek edindirme faaliyetlerinde (III) uygulanmaz.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "19. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında, işveren vekili ve işveren vekilinin sorumluluğu ile ilgili olarak aşağıdakilerden hangileri doğrudur?\n\nI. İşveren vekilinin, işveren vekili sıfatıyla yaptığı işlemlerden doğan cezai sorumluluk, temsil ilişkisi gereği, işverene aittir.\nII. İşveren adına hareket eden, işin ve iş yerinin yönetiminde görev alan işveren vekilleri, 6331 sayılı Kanun’un uygulanması bakımından işveren sayılır.\nIII. İşveren vekillerinin, yükümlülüklerini yerine getirmemesi dolayısıyla cezai sorumlulukları gündeme gelebilir.",
        options: ["Yalnız I", "Yalnız II", "Yalnız III", "I ve II", "II ve III"],
        correct: 4,
        source: "2025-1-C",
        explanation: "I ve II doğrudur. İşveren vekilleri İSG Kanunu açısından işveren sayılır, ancak cezai sorumluluk işverene aittir. III ifadesi ise doğru değildir çünkü cezai sorumluluk işverene aittir, vekile değil.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "20. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu’na göre “genç çalışan” aşağıdakilerden hangisi ile tanımlanır?",
        options: ["On beş yaşını bitirmiş ancak on sekiz yaşını doldurmamış çalışan", "On dört yaşını bitirmiş ancak on yedi yaşını doldurmamış çalışan", "On sekiz yaşını bitirmiş ancak yirmi yaşını doldurmamış çalışan", "On altı yaşını bitirmiş ancak on sekiz yaşını doldurmamış çalışan", "On sekiz yaşını bitirmiş ancak yirmi iki yaşını doldurmamış çalışan"],
        correct: 0,
        source: "2025-1-C",
        explanation: "6331 sayılı Kanun’a göre genç çalışan; 15 yaşını bitirmiş, 18 yaşını doldurmamış çalışandır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "21. 6331 sayılı İş Sağlığı ve Güvenliği Kanunu kapsamında aşağıdakilerden hangisi çalışanların yükümlülükleri arasında sayılmamıştır?",
        options: ["İş yerindeki makine, cihaz, araç, gereç, tehlikeli madde, taşıma ekipmanı ve diğer üretim araçlarını kurallara uygun şekilde kullanmak", "İş yerindeki makine, cihaz, araç, gereç, tesis ve binalarda sağlık ve güvenlik yönünden ciddi ve yakın bir tehlike ile karşılaştıklarında ve koruma tedbirlerinde bir eksiklik gördüklerinde işverene veya çalışan temsilcisine derhâl haber vermek", "İş yerinde alınan iş sağlığı ve güvenliği tedbirlerine uyulup uyulmadığını izlemek, denetlemek ve uygunsuzlukların giderilmesini sağlamak", "Kendilerinin ve hareketlerinden veya yaptıkları işten etkilenen diğer çalışanların sağlık ve güvenliklerini tehlikeye düşürmemek", "Teftişe yetkili makam tarafından iş yerinde tespit edilen noksanlık ve mevzuata aykırılıkların giderilmesi konusunda işveren ve çalışan temsilcisi ile iş birliği yapmak"],
        correct: 2,
        source: "2025-1-C",
        explanation: "İş yerinde alınan tedbirlerin izlenmesi, denetlenmesi ve uygunsuzlukların giderilmesini sağlamak çalışanların değil, işveren ve iş güvenliği uzmanı gibi görevlilerin sorumluluğundadır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "22. İş Sağlığı ve Güvenliği Kurulları Hakkında Yönetmelik’in kapsadığı iş yerleri ile ilgili olarak aşağıdakilerden hangisi doğrudur?",
        options: ["Yönetmelik, elli ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren sürekli işlerin yapıldığı iş yerlerini kapsar.", "Yönetmelik, yirmi ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren sürekli işlerin yapıldığı iş yerlerini kapsar.", "Yönetmelik, elli ve daha fazla çalışanın bulunduğu ve üç aydan fazla süren sürekli işlerin yapıldığı iş yerlerini kapsar.", "Yönetmelik, otuz ve daha fazla çalışanın bulunduğu ve altı aydan fazla süren sürekli işlerin yapıldığı iş yerlerini kapsar.", "Yönetmelik, otuz ve daha fazla çalışanın bulunduğu ve bir yıldan fazla süren sürekli işlerin yapıldığı iş yerlerini kapsar."],
        correct: 0,
        source: "2025-1-C",
        explanation: "İSG Kurulları Yönetmeliği, 50 ve daha fazla çalışanı olan ve 6 aydan fazla süren sürekli işlerin yapıldığı iş yerlerini kapsar.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Hukuk",
        text: "23. 1982 Anayasası’nın “Toplu iş sözleşmesi, grev hakkı ve lokavt” başlıklı hükümleri kapsamında aşağıdakilerden hangisi yanlıştır?",
        options: ["Grev ve lokavtın yasaklandığı hâllerde veya ertelendiği durumlarda ertelemenin sonunda, uyuşmazlık Yüksek Hakem Kurulunca çözülür.", "Grev hakkı ve lokavt; iyi niyet kurallarına aykırı tarzda, toplum zararına ve millî serveti tahrip edecek şekilde kullanılamaz.", "İşçiler ve işverenler, karşılıklı olarak ekonomik ve sosyal durumlarını ve çalışma şartlarını düzenlemek amacıyla toplu iş sözleşmesi yapma hakkına sahiptir.", "Memurlar ve diğer kamu görevlileri, toplu sözleşme yapma hakkına sahiptir.", "Toplu iş sözleşmesinin yapılması sırasında uyuşmazlık çıkması hâlinde işçiler ve memurlar grev hakkına sahiptir."],
        correct: 4,
        source: "2025-1-C",
        explanation: "Memurlar ve kamu görevlileri grev hakkına sahip değildir. Grev hakkı sadece işçiler için tanınmıştır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "24. Yapı İşlerinde İş Sağlığı ve Güvenliği Yönetmeliği hükümlerine göre, aşağıdakilerden hangisi kazı işlerinde uyulması gereken kurallar bakımından yanlıştır?",
        options: ["Açıkta yapılan 150 cm’den daha derin kazı işlerinde, yan yüzeylerin altını şerit gibi kazarak yukarıdan çökertmek suretiyle kazı yapılmaz.", "Kazının bitişik yapıları etkileme ihtimali mevcut ise kazı başlamadan önce gerekli tedbirler alınır.", "Kazı yan yüzeyi her vardiyadan önce kontrol edilir.", "Meskûn mahallerde, kazı alanının çevresine uyarı şeritleri çekilerek ikaz levhaları asılır.", "Yağış sırasında, kazı işlerinde çalışma yapılmaz."],
        correct: 0,
        source: "2025-1-C",
        explanation: "Yönetmeliğe göre; 120 cm'den daha derin kazılarda (150 cm değil) şerit kazı yöntemi yasaktır. 150 cm yanlış bir rakamdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "25. Çalışanların Titreşimle İlgili Risklerden Korunmalarına Dair Yönetmelik’e göre, çalışanların el-kol titreşimine maruz kalmaları durumunda, sekiz saatlik çalışma süresi için günlük maruziyet sınır değeri kaç m/s²dir?",
        options: ["1,15", "2", "2,5", "4", "5"],
        correct: 4,
        source: "2025-1-C",
        explanation: "El-kol titreşimi için günlük maruziyet sınır değeri (ELV) 5 m/s²'dir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "26. Çalışanların İş Sağlığı ve Güvenliği Eğitimlerinin Usul ve Esasları Hakkında Yönetmelik’e göre, çalışanlara verilecek iş sağlığı ve güvenliği eğitimlerinde işverenin sorumluluğuyla ilgili olarak aşağıdakilerden hangisi yanlıştır?",
        options: ["Asıl işveren-alt işveren ilişkisi kurulan iş yerlerinde, alt işverene ait çalışanların eğitimlerinden asıl işveren, alt işverenle birlikte sorumludur.", "Geçici iş ilişkisi kurulan işveren, geçici iş ilişkisi ile çalışanlara gerekli eğitimi vermekle yükümlüdür.", "İşveren, çalışanların iş sağlığı ve güvenliği eğitimlerine katılmak zorundadır.", "İşverenler, çalışanlarına, iş sözleşmesinin türüne bakılmaksızın, gerekli eğitimi vermekle yükümlüdür.", "İşveren, çalışanların iş sağlığı ve güvenliği eğitimleri ile ilgili olarak programların hazırlanması ve uygulanmasını sağlar."],
        correct: 2,
        source: "2025-1-C",
        explanation: "İşverenin eğitimlere katılma zorunluluğu yoktur. İşveren, eğitimlerin organizasyonu ve verilmesinden sorumludur, ancak bizzat katılmak zorunda değildir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "27. Sağlık ve Güvenlik İşaretleri Yönetmeliği’ne göre, uyarı işaretlerinin temel nitelikleri ile ilgili olarak aşağıdakilerden hangisi doğrudur?",
        options: ["Beyaz zemin üzerine siyah piktogram", "Kırmızı zemin üzerine beyaz piktogram", "Mavi zemin üzerine beyaz piktogram", "Sarı zemin üzerine siyah piktogram", "Yeşil zemin üzerine beyaz piktogram"],
        correct: 3,
        source: "2025-1-C",
        explanation: "Uyarı işaretleri sarı zemin üzerine siyah piktogram ve siyah çerçevelidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "28. Sağlık ve Güvenlik İşaretleri Yönetmeliği’ne göre yukarıdaki işaret (Mavi daire içinde beyaz musluk), hangi işaret levhası kategorisinde yer alır?",
        options: ["Acil çıkış ve ilk yardım", "Emredici", "Uyarı", "Yangınla mücadele", "Yasaklayıcı"],
        correct: 1,
        source: "2025-1-C",
        explanation: "Mavi daire içinde beyaz piktogram, emredici işarettir (örneğin 'göz koruyucu kullan', 'elle yıkama' gibi).",
        profile: "isg_c",
        image: "img/eldiven.jpg"
    },
    {
        category: "Teknik",
        text: "29. Sağlık ve Güvenlik İşaretleri Yönetmeliği’ne göre; daire biçimindeki yasaklayıcı işaretlerde, beyaz zemin üzerine çerçeve ve diyagonal çizgiden oluşan kırmızı kısımlar, işaret alanının en az yüzde kaçını kapsar?",
        options: ["%25", "%30", "%35", "%45", "%50"],
        correct: 2,
        source: "2025-1-C",
        explanation: "Yasak işaretlerinde kırmızı kısımlar (çerçeve ve çapraz çizgi) işaret alanının en az %35'ini kapsamalıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "30. Elektrik Tesislerinde Topraklamalar Yönetmeliği’ne göre, etkin değeri alçak gerilimde 50 voltun üzerinde olan ve yüksek gerilimde hata süresine bağlı olarak değişen gerilim, aşağıdakilerden hangisidir?",
        options: ["Çalışma gerilimi", "Hata gerilimi", "Sınır gerilim", "Tehlikeli gerilim", "Zayıf gerilim"],
        correct: 3,
        source: "2025-1-C",
        explanation: "Tanım, 'Tehlikeli gerilim' kavramına aittir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "31. İşyerlerinde Acil Durumlar Hakkında Yönetmelik’e göre, az tehlikeli sınıfta yer alan ve 90 çalışanı olan bir iş yerinde, uygun donanıma sahip ve özel eğitimli en az kaç söndürme ekibi, destek elemanı olarak görevlendirilir?",
        options: ["1", "2", "3", "4", "5"],
        correct: 0,
        source: "2025-1-C",
        explanation: "Az tehlikeli sınıfta, iş yerinde 90 çalışan olsa bile en az 1 söndürme ekibi yeterlidir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "32. İşyerlerinde Acil Durumlar Hakkında Yönetmelik’e göre, iş yerinde acil durumları etkileyebilecek veya yeni acil durumların ortaya çıkmasına neden olacak değişikliklerin meydana gelmesi dışında, az tehlikeli iş yerlerinde acil durum planı en geç kaç yılda bir yenilenir?",
        options: ["1", "2", "4", "5", "6"],
        correct: 4,
        source: "2025-1-C",
        explanation: "Az tehlikeli iş yerlerinde acil durum planı en geç 6 yılda bir yenilenir.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "33. Basit Basınçlı Kaplar Yönetmeliği; kaynaklı, ………. bar’dan daha yüksek iç basınca tabi tutulması amaçlanan, hava ve azot gazı içeren ve yakma amacı dışında kullanılan kapları kapsar. Yukarıdaki boşluğa, aşağıdakilerden hangisi getirilmelidir?",
        options: ["0,5", "1", "1,25", "2", "2,5"],
        correct: 0,
        source: "2025-1-C",
        explanation: "Boşluk 0,5 bar olmalıdır. Yönetmelik 0,5 bar üzeri basınçlı kapları kapsar.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Mevzuat",
        text: "34. Binaların Yangından Korunması Hakkında Yönetmelik’e göre, acil çıkış kapıları için aşağıdakilerden hangisi yanlıştır?",
        options: ["Çalışanların hemen ve kolayca açabilecekleri şekilde yapılmalıdır.", "Doğrudan, güvenli bir alana yönlendirmelidir.", "Kaçış istikametine doğru açılmalıdır.", "Raylı veya döner kapı olmalıdır.", "Yanmaya dayanıklı malzemeden imal edilmelidir."],
        correct: 3,
        source: "2025-1-C",
        explanation: "Acil çıkış kapıları raylı veya döner kapı olmamalıdır. Panik barlı, dışarıya doğru kolayca açılabilen kapılar olmalıdır.",
        profile: "isg_c",
        image: ""
    },
    {
        category: "Teknik",
        text: "35. Yangın dumanında bulunan aşağıdaki gazlardan hangisinin toksik etkisi vardır?",
        options: ["Azot", "Karbonmonoksit", "Metan", "Oksijen", "Su buharı"],
        correct: 1,
        source: "2025-1-C",
        explanation: "Karbonmonoksit (CO) renksiz, kokusuz, zehirli bir gazdır. Yangınlarda ölümlerin başlıca nedenidir.",
        profile: "isg_c"
    },
    {
        category: "Teknik",
        text: "36. Binaların Yangından Korunması Hakkında Yönetmelik’e göre, aşağıdaki “yanıcı madde - yangın sınıfı” eşleştirmelerinden hangisi yanlıştır?",
        options: ["Akaryakıt–B", "Asetilen–C", "Doğal gaz–A", "Magnezyum–D", "Odun–A"],
        correct: 2,
        source: "2025-1-C",
        explanation: "Doğal gaz, yanıcı gaz olduğu için yangın sınıfı C'dir, A değil. A sınıfı katı madde yangınlarıdır.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "37. Biyolojik Etkenlere Maruziyet Risklerinin Önlenmesi Hakkında Yönetmelik’e göre aşağıdakilerden hangisi, iş yerinde biyolojik etkenlere maruziyet riskinin azaltılması için alınması gereken önlemlerden biri değildir?",
        options: ["Biyolojik etkenleri içeren kazaların önlenmesine yönelik plan hazırlanmalıdır.", "Biyolojik etkenlerin çalışma yerlerinden kazara dışarıya taşınmasını önlemek için hijyen önlemleri alınmalıdır.", "Çalışanların maruziyetini önlemek için çalışma prosesleri ve teknik kontrol önlemleri uygulanmalıdır.", "Çalışanların biyolojik etkenlere karşı doğal bağışıklık kazanması için düzenli olarak maruziyet sağlanmalıdır.", "Maruziyetin başka yollarla önlenmediği durumlarda kişisel korunma yöntemleri uygulanmalıdır."],
        correct: 3,
        source: "2025-1-C",
        explanation: "Çalışanların doğal bağışıklık kazanması için kasıtlı maruziyet sağlanması kesinlikle yasaktır ve önlem değildir.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "38. Çalışanların Gürültü ile İlgili Risklerden Korunmalarına Dair Yönetmelik’e göre gürültünün en düşük maruziyet eylem değeri (LEX, 8 saat) aşağıdakilerden hangisidir?",
        options: ["70 dB(A)", "75 dB(A)", "80 dB(A)", "85 dB(A)", "87 dB(A)"],
        correct: 2,
        source: "2025-1-C",
        explanation: "En düşük maruziyet eylem değeri (Lower Exposure Action Value - LEX,8h) 80 dB(A)'dır.",
        profile: "isg_c"
    },
    {
        category: "Teknik",
        text: "39. Kapalı bir ortamda, aynı yerde 85 dB(A) ve 85 dB(A) gürültü ile çalışan iki cihazın toplam gürültü değeri kaç dB(A)’dır?",
        options: ["85", "87", "88", "95", "170"],
        correct: 2,
        source: "2025-1-C",
        explanation: "Aynı şiddette iki ses kaynağı toplandığında toplam gürültü yaklaşık 3 dB artar. 85 + 85 ≈ 88 dB(A).",
        profile: "isg_c"
    },
    {
        category: "Teknik",
        text: "40. Aşağıdakilerden hangisi, kimyasal maddelerle çalışmalarda “çalışma süresinin herhangi bir bölümünde aşılmaması gereken maruziyet sınır değeri”nin kısaltmasıdır?",
        options: ["CEILING", "CAS", "EINECS", "STEL", "TWA"],
        correct: 0,
        source: "2025-1-C",
        explanation: "CEILING (Tavan değer), herhangi bir an için aşılmaması gereken maruziyet sınır değeridir.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "41. İş Sağlığı ve Güvenliği ile İlgili Çalışan Temsilcisinin Nitelikleri ve Seçilme Usul ve Esaslarına İlişkin Tebliğ’e göre, 1300 çalışanın olduğu bir iş yerinde kaç tane çalışan temsilcisi olmak zorundadır?",
        options: ["3", "4", "5", "6", "7"],
        correct: 2,
        source: "2025-1-C",
        explanation: "İlk 150 çalışana kadar 1 temsilci, sonraki her 150'ye kadar 1 temsilci daha eklenir. 1300 çalışan için: 150'ye kadar 1, 150-300 arası +1, 300-450 +1, 450-600 +1, 600-750 +1, 750-900 +1, 900-1050 +1, 1050-1200 +1, 1200-1300 +1 (toplam 9? Ancak pratikte: 2-150:1, 151-300:2, 301-450:3, 451-600:4, 601-750:5, 751-900:6, 901-1050:7, 1051-1200:8, 1201-1350:9 şeklinde olmalıdır. Ancak soruda 1300 için 5 cevabı verilmiş. Bu, farklı bir yöntem veya hata olabilir. Soruya göre en uygun cevap C (5) olarak alınmıştır.",
        profile: "isg_c"
    },
    {
        category: "Sağlık",
        text: "42. Gürültüye bağlı mesleki işitme kaybıyla ilgili olarak aşağıdakilerden hangisi yanlıştır?",
        options: ["Belirli bir eşiğin üzerindeki seslere uzun süre maruz kalınmasıyla meydana gelir.", "Genellikle gürültülü ortamlarda, konuşmaları anlamada güçlükler başlar.", "İşitme kaybı genellikle ilk olarak 4-5 kHz frekans aralığında başlar ve zamanla daha düşük frekanslara yayılabilir.", "Maruziyet sona erdiğinde kendiliğinden düzelir.", "Yüksek seslere maruziyet, iç kulaktaki işitme hücrelerinde kalıcı hasara neden olabilir."],
        correct: 3,
        source: "2025-1-C",
        explanation: "Gürültüye bağlı işitme kaybı kalıcıdır, maruziyet sona erdiğinde kendiliğinden düzelmez.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "43. Elle Taşıma İşleri Yönetmeliği’ne göre, aşağıdaki faaliyetlerden hangisi elle taşıma işi olarak değerlendirilemez?",
        options: ["Yükün itilmesi", "Yükün kaldırılması", "Yükün indirilmesi", "Yükün tartılması", "Yükün çekilmesi"],
        correct: 3,
        source: "2025-1-C",
        explanation: "Elle taşıma işi; kaldırma, indirme, itme, çekme, taşıma veya hareket ettirme gibi işlerdir. Tartma, elle taşıma işi değildir.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "44. Elle Taşıma İşleri Yönetmeliği’ne göre, aşağıdakilerden hangisi yükün elle taşınmasına ilişkin risk faktörleri arasında yer almaz?",
        options: ["Çalışma ortamının özellikleri", "Fiziksel güç gereksinimi", "İşin gerekleri", "Yükün özellikleri", "Yükün maddi değeri"],
        correct: 4,
        source: "2025-1-C",
        explanation: "Yükün maddi değeri, elle taşıma risk faktörleri arasında sayılmaz. Diğerleri (ortam, güç, iş, yük özellikleri) risk faktörleridir.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "45. Kanserojen veya Mutajen Maddelerle Çalışmalarda Sağlık ve Güvenlik Önlemleri Hakkında Yönetmelik’e göre, kanserojen ve mutajen maddelere maruziyet riski bulunan işlerde çalışanların hangi riskleri değerlendirilir?\n\nI. Maruziyet türü\nII. Maruziyet süresi\nIII. Maruz kalan çalışanın cinsiyeti\nIV. Maruziyet düzeyi",
        options: ["Yalnız II", "Yalnız III", "I ve IV", "II ve III", "I, II ve IV"],
        correct: 4,
        source: "2025-1-C",
        explanation: "Değerlendirmede maruziyet türü, süresi ve düzeyi (I, II ve IV) dikkate alınır. Cinsiyet (III) genel bir risk faktörü olarak sayılmaz.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "46. İş Sağlığı ve Güvenliğine İlişkin İşyeri Tehlike Sınıfları Tebliği’ne göre, aşağıdakilerden hangileri doğrudur?\n\nI. Tehlike sınıfının tespitinde, bir iş yerinde yürütülen asıl işin tehlike sınıfı dikkate alınır.\nII. Asıl işin tayininde tereddüde düşülmesi hâlinde iş yerinin kuruluş amacına bakılır.\nIII. İş yerinde birden fazla asıl iş tanımına uygun faaliyetin yürütülmesi hâlinde, tehlike sınıfının tespitinde iş yerindeki ağırlıklı faaliyet esas alınır.",
        options: ["Yalnız I", "Yalnız II", "I ve II", "I ve III", "II ve III"],
        correct: 3,
        source: "2025-1-C",
        explanation: "I ve III doğrudur. II yanlıştır; tereddüt halinde iş yerinin NACE koduna veya ağırlıklı faaliyete bakılır, kuruluş amacına değil.",
        profile: "isg_c"
    },
    {
        category: "Teknik",
        text: "47. Kaynak işlerinde yanıcı gaz tüplerinin kullanımı ile ilgili olarak aşağıdakilerden hangisi güvenli bir uygulamadır?",
        options: ["Asetilen tüpleri tamamen yatay konumda kullanılmalıdır.", "Asetilen, oksi-gaz kaynağında yakıcı gaz olarak kullanılır.", "Tüplerin taşınması sırasında manometre basıncı arttırılmalıdır.", "Tüplerin basınç seviyeleri, her üç dakikada bir kontrol edilmelidir.", "Tüpler taşınırken vanalar kapalı ve tüplerin koruyucu kapakları takılı olmalıdır."],
        correct: 4,
        source: "2025-1-C",
        explanation: "Tüpler taşınırken vanalar kapalı ve koruyucu kapaklar takılı olmalıdır. Bu temel güvenlik kuralıdır.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "48. İş yerinde yapılan değerlendirme sonuçları gebe veya emziren çalışan için sağlık ve güvenlik riskini veya çalışanın gebeliği veya emzirmesi üzerindeki bir etkiyi ortaya çıkardığında işveren, aşağıdakilerden hangilerini yapmalıdır?\n\nI. Çalışma koşullarının ve/veya çalışma saatlerinin uyarlanması mümkün değilse işveren, ilgili çalışanı başka bir işe aktarmak için gerekli önlemleri alır.\nII. Başka bir işe aktarılması mümkün değilse çalışanın, sağlık ve güvenliğinin korunması için gerekli süre içinde, isteği hâlinde, tabi olduğu mevzuat hükümleri saklı kalmak kaydıyla ücretli izinli sayılması sağlanır.\nIII. Sağlık raporu ile gerekli görüldüğü takdirde gebe çalışan, sağlığına uygun daha hafif işlerde çalıştırılır.",
        options: ["Yalnız II", "Yalnız III", "I ve II", "I ve III", "I, II ve III"],
        correct: 4,
        source: "2025-1-C",
        explanation: "Tüm ifadeler (I, II ve III) doğrudur ve işverenin gebe/emziren çalışanlar için alması gereken önlemleri tanımlar.",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "49. İşyeri Hekimi ve Diğer Sağlık Personelinin Görev, Yetki, Sorumluluk ve Eğitimleri Hakkında Yönetmelik’e göre, iş yeri hekiminin çalışma süresi az tehlikeli-tehlikeli-çok tehlikeli sınıfta yer alan iş yerlerinde çalışan başına sırasıyla en az kaç dakikadır?",
        options: ["5,10,15", "10,15,20", "10,20,40", "15,10,5", "40,20,10"],
        correct: 0,
        source: "2025-1-C",
        explanation: "Az tehlikeli: 5 dk, Tehlikeli: 10 dk, Çok tehlikeli: 15 dk (çalışan başına aylık asgari süre).",
        profile: "isg_c"
    },
    {
        category: "Mevzuat",
        text: "50. Maden İşyerlerinde İş Sağlığı ve Güvenliği Yönetmeliği’ne göre “ayak”, aşağıdakilerin hangisinde doğru olarak ifade edilmiştir?",
        options: ["Ana kütleden ayrılmış, her an düşebilecek parça", "Maden içerisinde, iki galeri arasında, cephe hâlinde üretim yapılan yer", "Maden içerisinden sürülen galeri", "Taş içerisinde sürülen galeri", "Varagel üzerinde taşımayı sağlayan sistem"],
        correct: 1,
        source: "2025-1-C",
        explanation: "Maden terimi olarak 'ayak', iki galeri arasında cephe halinde üretim yapılan yerdir.",
        profile: "isg_c"
    },
]);
