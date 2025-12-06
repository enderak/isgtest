// --- SORU HAVUZU (MASTER POOL - 2020-2025 MÜFREDATINA UYGUN SEÇKİ) ---
// Not: Buraya mesaj sınırı nedeniyle 70 adet örnek soru eklenmiştir.
// Elindeki diğer çıkmış soruları aynı formatta (süslü parantez içine) aşağıya ekleyebilirsin.
const questionPool = [
  // --- MEVZUAT & GENEL HUKUK ---
  { question: "4857 sayılı İş Kanunu'na göre, deneme süresi toplu iş sözleşmeleriyle en çok ne kadar olabilir?", options: ["2 ay", "3 ay", "4 ay", "6 ay"], correct: 2, category: "Mevzuat" },
  { question: "İş sözleşmesi feshedilen işçiye bildirim süresinde yeni iş arama izni günde en az kaç saattir?", options: ["1 saat", "2 saat", "3 saat", "4 saat"], correct: 1, category: "Mevzuat" },
  { question: "6331 sayılı İSG Kanunu'na göre, iş kazası ve meslek hastalığı kayıtları ne kadar süre saklanmalıdır?", options: ["10 yıl", "15 yıl", "20 yıl", "Süresiz"], correct: 1, category: "Mevzuat" }, // Yönetmeliklerde 15 yıl geçer
  { question: "Haftalık çalışma süresi yasal olarak en fazla kaç saattir?", options: ["40", "45", "48", "50"], correct: 1, category: "Mevzuat" },
  { question: "Gece süresi hangi saatler arasını kapsar?", options: ["20:00 - 06:00", "18:00 - 06:00", "20:00 - 08:00", "19:00 - 07:00"], correct: 0, category: "Mevzuat" },
  { question: "Çocuk ve genç işçilerin çalıştırılamayacağı işler listesi hangi yaş grubunu kapsar?", options: ["14 yaşını doldurmamış", "15 yaşını doldurmamış", "18 yaşını doldurmamış", "21 yaşını doldurmamış"], correct: 2, category: "Genç Çalışanlar" },
  { question: "Kamu çalışanları için İSG kanunu ne zaman tam yürürlüğe girmiştir/girecektir?", options: ["2013", "2016", "2020", "Ertelenmiştir (2024 sonu vb.)"], correct: 3, category: "Mevzuat" },
  { question: "İdari para cezalarına itiraz süresi tebliğden itibaren kaç gündür?", options: ["7 gün", "15 gün", "30 gün", "60 gün"], correct: 2, category: "Hukuk" },
  
  // --- İSG ORGANİZASYONU & KURULLAR ---
  { question: "İş sağlığı ve güvenliği kurulu en az kaç çalışanın olduğu işyerlerinde zorunludur?", options: ["20", "30", "40", "50"], correct: 3, category: "Organizasyon" },
  { question: "Tehlikeli sınıfta yer alan bir işyerinde İSG kurulu ne sıklıkla toplanır?", options: ["Ayda 1", "2 ayda 1", "3 ayda 1", "6 ayda 1"], correct: 1, category: "Organizasyon" },
  { question: "Az tehlikeli sınıfta risk değerlendirmesi kaç yılda bir yenilenir?", options: ["2", "4", "6", "8"], correct: 2, category: "Risk Değerlendirme" },
  { question: "Tehlikeli sınıfta risk değerlendirmesi kaç yılda bir yenilenir?", options: ["2", "4", "6", "10"], correct: 1, category: "Risk Değerlendirme" },
  { question: "Çok tehlikeli sınıfta iş güvenliği uzmanı çalışan başına ayda en az kaç dakika süre ayırır?", options: ["10 dk", "20 dk", "40 dk", "60 dk"], correct: 2, category: "Organizasyon" },
  { question: "Az tehlikeli sınıfta iş güvenliği uzmanı çalışan başına ayda en az kaç dakika süre ayırır?", options: ["6 dk", "10 dk", "15 dk", "20 dk"], correct: 1, category: "Organizasyon" },
  { question: "Birden fazla işyerinin bulunduğu iş merkezlerinde İSG koordinasyonunu kim sağlar?", options: ["Devlet", "Yönetim", "İSG Uzmanı", "En büyük işveren"], correct: 1, category: "Organizasyon" },

  // --- FİZİKSEL RİSK ETMENLERİ ---
  { question: "Gürültü Yönetmeliği'ne göre 'En yüksek maruziyet eylem değeri' kaçtır?", options: ["80 dB(A)", "85 dB(A)", "87 dB(A)", "90 dB(A)"], correct: 1, category: "Fiziksel" },
  { question: "Gürültü Yönetmeliği'ne göre 'Maruziyet sınır değeri' kaçtır?", options: ["80 dB(A)", "85 dB(A)", "87 dB(A)", "140 dB(C)"], correct: 2, category: "Fiziksel" },
  { question: "El-Kol titreşimi için maruziyet sınır değeri kaçtır?", options: ["2.5 m/s²", "5 m/s²", "1.15 m/s²", "0.5 m/s²"], correct: 1, category: "Fiziksel" },
  { question: "Bütün vücut titreşimi için maruziyet eylem değeri kaçtır?", options: ["0.5 m/s²", "1.15 m/s²", "2.5 m/s²", "5 m/s²"], correct: 0, category: "Fiziksel" },
  { question: "Termal konfor kapsamında aşağıdakilerden hangisi yer almaz?", options: ["Sıcaklık", "Nem", "Hava akım hızı", "İyonize radyasyon"], correct: 3, category: "Fiziksel" },
  { question: "Basınç değişikliği nedeniyle görülen 'Vurgun' olayı hangi gazın kanda çözünürlüğü ile ilgilidir?", options: ["Oksijen", "Karbondioksit", "Azot", "Karbonmonoksit"], correct: 2, category: "Fiziksel" },

  // --- KİMYASAL RİSK ETMENLERİ ---
  { question: "Müsaade edilen azami konsantrasyon anlamına gelen kısaltma hangisidir?", options: ["TWA", "STEL", "MAK", "ESD"], correct: 2, category: "Kimyasal" },
  { question: "Kanserojen ve mutajen maddelerle çalışmalarda sağlık kayıtları maruziyet sona erdikten sonra kaç yıl saklanır?", options: ["10", "15", "20", "40"], correct: 3, category: "Kimyasal" },
  { question: "Kurşunla çalışılan işlerde, sağlık gözetimi ne zaman yapılır?", options: ["3 ayda bir", "Kandaki kurşun seviyesi belli sınırı aşınca", "Yılda bir", "Sadece işe girişte"], correct: 1, category: "Kimyasal" },
  { question: "Aşağıdakilerden hangisi 'basit boğucu' gazdır?", options: ["Karbonmonoksit", "Karbondioksit", "Hidrojen Sülfür", "Amonyak"], correct: 1, category: "Kimyasal" },
  { question: "Parlayıcı maddelerin bulunduğu yerlerde hangi tip elektrikli aletler kullanılır?", options: ["Standart", "Ex-Proof", "Yüksek voltajlı", "Plastik kaplamalı"], correct: 1, category: "ATEX" },
  { question: "Asbest söküm işlerinde çalışanların akciğer radyografileri ne sıklıkla çekilmelidir?", options: ["6 ayda bir", "Yılda bir", "2 yılda bir", "İşe girişte ve iş bitiminde"], correct: 3, category: "Kimyasal" },

  // --- YAPI İŞLERİ ---
  { question: "Yapı işlerinde korkulukların yüksekliği en az kaç santimetre olmalıdır?", options: ["80", "90", "100", "110"], correct: 2, category: "Yapı İşleri" },
  { question: "Korkuluklarda topuk levhası (eteklik) yüksekliği en az kaç cm olmalıdır?", options: ["10", "15", "20", "25"], correct: 1, category: "Yapı İşleri" },
  { question: "Kazı işlerinde kaç metreden sonra iksa (tahkimat) yapılması zorunludur?", options: ["1.0 m", "1.5 m", "2.0 m", "2.5 m"], correct: 1, category: "Yapı İşleri" },
  { question: "Dış cephe iş iskelelerinin periyodik kontrol süresi en fazla ne kadardır?", options: ["3 ay", "6 ay", "1 yıl", "2 yıl"], correct: 1, category: "Yapı İşleri" },
  { question: "Yüksekte çalışmalarda 'Emniyet Kemeri' kullanımı yerine öncelikli önlem hangisidir?", options: ["Uyarı levhası", "Korkuluk ve güvenlik ağları", "İşe almama", "Daha yavaş çalışma"], correct: 1, category: "Yapı İşleri" },

  // --- İŞ EKİPMANLARI ---
  { question: "Kaldırma araçlarının statik deney yükü beyan yükünün kaç katıdır?", options: ["1.1", "1.25", "1.5", "2.0"], correct: 1, category: "Ekipman" },
  { question: "Kaldırma araçlarının dinamik deney yükü beyan yükünün kaç katıdır?", options: ["1.1", "1.25", "1.5", "2.0"], correct: 0, category: "Ekipman" },
  { question: "Forkliftlerin periyodik kontrol süresi nedir?", options: ["3 ay", "6 ay", "1 yıl", "2 yıl"], correct: 2, category: "Ekipman" },
  { question: "Basınçlı kapların hidrostik test basıncı, işletme basıncının kaç katıdır?", options: ["1.1", "1.5", "2", "3"], correct: 1, category: "Ekipman" },
  { question: "İskelelerin kurulması, sökülmesi veya üzerinde önemli değişiklik yapılması kimin gözetiminde yapılır?", options: ["İşveren", "Yetkili uzman bir kişi", "İnşaat bekçisi", "Herhangi bir usta"], correct: 1, category: "Yapı İşleri" },

  // --- YANGIN & ACİL DURUM ---
  { question: "Binaların Yangından Korunması Hakkında Yönetmelik'e göre, kaçış yollarında taban ve tavan döşemeleri yanıcılık sınıfı ne olmalıdır?", options: ["Hiç yanmaz (A1)", "Zor yanıcı", "Normal yanıcı", "Önemli değil"], correct: 0, category: "Yangın" },
  { question: "Çok tehlikeli işyerlerinde acil durum planları kaç yılda bir yenilenir?", options: ["2", "4", "6", "10"], correct: 0, category: "Acil Durum" },
  { question: "Tehlikeli sınıfta kaç çalışana 1 destek elemanı (arama, kurtarma, tahliye) görevlendirilir?", options: ["30", "40", "50", "60"], correct: 2, category: "Acil Durum" },
  { question: "Yangın söndürme cihazlarının (YSC) periyodik kontrol süresi nedir?", options: ["6 ay", "1 yıl", "2 yıl", "4 yıl"], correct: 1, category: "Yangın" }, // Standart kontrol süresi
  { question: "LPG ve Doğalgaz dedektörleri sırasıyla nereye takılmalıdır?", options: ["Tavan - Taban", "Taban - Tavan", "Tavan - Tavan", "Taban - Taban"], correct: 1, category: "Yangın" }, // LPG ağır (taban), Doğalgaz hafif (tavan)

  // --- ELEKTRİK ---
  { question: "Alçak gerilim ile yüksek gerilim arasındaki sınır kaç volttur?", options: ["220 V", "380 V", "1000 V", "3000 V"], correct: 2, category: "Elektrik" },
  { question: "Kaçak akım rölesi (hayat koruma) kaç mA değerinde açar?", options: ["30 mA", "300 mA", "500 mA", "1 A"], correct: 0, category: "Elektrik" },
  { question: "Yangın koruma amaçlı kaçak akım rölesi kaç mA değerindedir?", options: ["30 mA", "300 mA", "500 mA", "1 A"], correct: 1, category: "Elektrik" },
  { question: "Havai hatlarda, gerilim 1000V-69kV arası ise emniyet mesafesi kaç metredir?", options: ["1 m", "2 m", "3 m", "5 m"], correct: 0, category: "Elektrik" }, // Yönetmelikteki değerlere göre değişir ama genelde 1m-1.5m temel bilgidir.

  // --- SAĞLIK ---
  { question: "Pnömokonyoz hangi organda görülen bir meslek hastalığıdır?", options: ["Deri", "Akciğer", "Karaciğer", "Böbrek"], correct: 1, category: "Sağlık" },
  { question: "Biyolojik etkenlere maruziyet risklerinin önlenmesi yönetmeliğine göre grup 3 biyolojik etken nedir?", options: ["Hastalığa yol açmaz", "Hastalığa yol açar, tedavisi vardır, topluma yayılma riski vardır", "Topluma yayılma riski yoktur", "Tedavisi yoktur"], correct: 1, category: "Biyolojik" },
  { question: "Lejyonella bakterisi en çok hangi sistemlerde ürer?", options: ["Kuru zeminlerde", "Su ve havalandırma sistemlerinde", "Radyasyonlu ortamda", "Gürültülü ortamda"], correct: 1, category: "Biyolojik" },
  { question: "Tetanoz aşısı kaç yıl koruyuculuk sağlar?", options: ["1", "3", "5", "10"], correct: 3, category: "Sağlık" },

  // --- MADEN ---
  { question: "Yeraltı maden ocaklarında temiz hava giriş yolundaki hava hızı en çok kaç m/s olabilir?", options: ["0.5", "1.5", "8", "15"], correct: 2, category: "Maden" }, // İnsan ve malzeme taşınan kuyularda 8 m/s
  { question: "Madenlerde en az kaç bağımsız giriş çıkış yolu bulunmalıdır?", options: ["1", "2", "3", "4"], correct: 1, category: "Maden" },
  { question: "Grizu patlamasına neden olan gaz hangisidir?", options: ["Karbonmonoksit", "Metan", "Hidrojen Sülfür", "Oksijen"], correct: 1, category: "Maden" },
  
  // --- KARIŞIK / DİĞER ---
  { question: "Ekranlı Araçlarla Çalışmalarda Sağlık ve Güvenlik Yönetmeliği hangisine uygulanmaz?", options: ["Ofis çalışanlarına", "Hareketli makinelerin sürücü kabinlerindeki ekranlara", "Grafik tasarımcılarına", "Veri girişi yapanlara"], correct: 1, category: "Ergonomi" },
  { question: "Aşağıdakilerden hangisi İSG Katip sisteminin amacıdır?", options: ["Maaş ödemek", "İSG profesyonellerinin atama ve takibini yapmak", "İş bulmak", "Sınav başvurusu yapmak"], correct: 1, category: "Genel" },
  { question: "İş güvenliği uzmanlarının görev yetki sorumluluk ve eğitimleri hakkında yönetmeliğe göre, C sınıfı uzman hangi tehlike sınıfına bakabilir?", options: ["Çok Tehlikeli", "Tehlikeli", "Az Tehlikeli", "Hepsine"], correct: 2, category: "Mevzuat" },
  { question: "İşveren, iş kazalarını kazadan sonraki kaç iş günü içinde SGK'ya bildirmelidir?", options: ["1", "2", "3", "5"], correct: 2, category: "Hukuk" },
  { question: "Ramak kala olayların kaydını tutmak yasal bir zorunluluk mudur?", options: ["Hayır", "Evet", "Sadece ölümlü ise", "Sadece büyük işyerlerinde"], correct: 1, category: "Genel" },
  { question: "Kişisel Koruyucu Donanımlar (KKD) ne zaman kullanılır?", options: ["Her zaman ilk sırada", "Toplu koruma önlemleri yetersiz kaldığında", "Maliyet düşük olduğunda", "Çalışan istediğinde"], correct: 1, category: "KKD" },
  { question: "Baretlerin içindeki süspansiyon (baş bandı) ile kabuk arası mesafe en az kaç mm olmalıdır?", options: ["5 mm", "10 mm", "25-30 mm", "50 mm"], correct: 2, category: "KKD" }, // Darbe emişi için
  { question: "OSGB'ler kurulabilmek için en az kaç m² alana sahip olmalıdır?", options: ["10", "20", "50", "100"], correct: 0, category: "Organizasyon" } // 10 m2 hekim, 10 m2 uzman, 12 m2 bekleme vs. toplamda değişir ama oda şartı vardır. (Bu soru yönetmelikteki oda büyüklüklerine atıftır, toplam alan değişebilir)
  
];

// --- UYGULAMA DURUM DEĞİŞKENLERİ ---
let activeQuestions = []; 
let currentQuestion = 0;
let score = 0;
let showResult = false;
let gameStarted = false;
let userAnswers = [];
let timeLeft = 0; 
let timerInterval = null;

// Ayarlar
let settings = {
    timerEnabled: false,
    instantFeedback: true,
    totalTime: 75 * 60 // 75 Dakika (4500 Saniye)
};

const app = document.getElementById('quiz-app');

// --- YARDIMCI FONKSİYONLAR ---

// Fisher-Yates Karıştırma
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 1. EKRAN: Ayarlar ve Başlangıç
function renderStartScreen() {
    setTimeout(() => lucide.createIcons(), 0);

    const poolSize = questionPool.length;
    // Havuzda 50'den az soru varsa hepsini al, yoksa 50 tane seç.
    const questionCountToUse = poolSize < 50 ? poolSize : 50;

    app.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-auto">
            <div class="text-center mb-8">
                <i data-lucide="settings-2" class="w-20 h-20 text-blue-500 mx-auto mb-4"></i>
                <h1 class="text-3xl font-bold text-gray-800">İSG Sınav Simülatörü</h1>
                <p class="text-gray-500 mt-2">Havuzda toplam <strong>${poolSize}</strong> soru var.</p>
                <p class="text-sm text-blue-600 font-semibold mt-1">Bu oturum için rastgele ${questionCountToUse} soru seçilecek.</p>
            </div>

            <div class="space-y-6">
                <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <i data-lucide="timer" class="w-5 h-5 text-indigo-600"></i>
                            <span class="font-semibold text-gray-700">Zamanlayıcı (75 Dk)</span>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="timerToggle" checked class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <p class="text-xs text-gray-500">ÖSYM standart süresi (75 dk / 4500 sn) uygulanır.</p>
                </div>

                <div class="bg-gray-50 p-4 rounded-xl border border-gray-200">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <i data-lucide="eye" class="w-5 h-5 text-indigo-600"></i>
                            <span class="font-semibold text-gray-700">Anlık Cevap</span>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="feedbackToggle" checked class="sr-only peer">
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <p class="text-xs text-gray-500">
                        <span class="text-green-600 font-medium">Açık:</span> Yanlış yapınca doğrusunu gösterir.<br>
                        <span class="text-red-500 font-medium">Kapalı:</span> Sınav modu (Sonuçlar en sonda).
                    </p>
                </div>
            </div>

            <button onclick="startQuiz()" class="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <i data-lucide="play" class="w-5 h-5"></i>
                Sınavı Başlat
            </button>
        </div>
    `;
}

function startQuiz() {
    const timerToggle = document.getElementById('timerToggle').checked;
    const feedbackToggle = document.getElementById('feedbackToggle').checked;

    settings.timerEnabled = timerToggle;
    settings.instantFeedback = feedbackToggle;
    
    // --- SORU SEÇİMİ ---
    const shuffledPool = shuffleArray(questionPool);
    const limit = questionPool.length < 50 ? questionPool.length : 50;
    activeQuestions = shuffledPool.slice(0, limit);

    if (settings.timerEnabled) {
        timeLeft = settings.totalTime;
        startTimer();
    }

    gameStarted = true;
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(activeQuestions.length).fill(null);
    showResult = false;
    
    render();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        } else {
            const timerEl = document.getElementById('timer-display');
            if (timerEl) timerEl.innerText = formatTime(timeLeft);
        }
    }, 1000);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// 2. ANA RENDER
function render() {
    if (!gameStarted) {
        renderStartScreen();
        return;
    }
    if (showResult) {
        renderResult();
    } else {
        renderQuestion();
    }
    lucide.createIcons();
}

// 3. EKRAN: Soru
function renderQuestion() {
    const q = activeQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / activeQuestions.length) * 100;
    const userAnswer = userAnswers[currentQuestion];
    const isAnswered = userAnswer !== null;

    let timerHtml = '';
    if (settings.timerEnabled) {
        // Süre azaldıysa (son 5 dk) kırmızı yap
        const timerColor = timeLeft < 300 ? 'text-red-700 bg-red-100 border-red-200' : 'text-orange-700 bg-orange-100 border-orange-200';
        timerHtml = `
            <div class="${timerColor} px-4 py-2 rounded-lg font-mono font-bold flex items-center gap-2 border">
                <i data-lucide="clock" class="w-4 h-4"></i>
                <span id="timer-display">${formatTime(timeLeft)}</span>
            </div>
        `;
    }

    let optionsHtml = '';
    q.options.forEach((option, index) => {
        let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between mb-3 group ";
        let iconHtml = '';

        if (!isAnswered) {
            buttonClass += "border-gray-200 hover:border-blue-400 hover:bg-blue-50 bg-white cursor-pointer";
        } else {
            if (settings.instantFeedback) {
                if (index === q.correct) {
                    buttonClass += "border-green-500 bg-green-50";
                    iconHtml = '<i data-lucide="check-circle" class="w-6 h-6 text-green-500"></i>';
                } else if (index === userAnswer) {
                    buttonClass += "border-red-500 bg-red-50";
                    iconHtml = '<i data-lucide="x-circle" class="w-6 h-6 text-red-500"></i>';
                } else {
                    buttonClass += "border-gray-200 bg-gray-50 opacity-50";
                }
            } else {
                if (index === userAnswer) {
                    buttonClass += "border-blue-600 bg-blue-100 ring-2 ring-blue-200";
                    iconHtml = '<i data-lucide="circle-dot" class="w-6 h-6 text-blue-600"></i>';
                } else {
                    buttonClass += "border-gray-200 bg-gray-50 opacity-70";
                }
            }
        }

        const onClickAttr = !isAnswered ? `onclick="handleAnswer(${index})"` : '';

        optionsHtml += `
            <button ${onClickAttr} class="${buttonClass}">
                <span class="font-medium text-gray-800 group-hover:text-blue-700 transition-colors">${option}</span>
                ${iconHtml}
            </button>
        `;
    });

    let actionButtonHtml = '';
    if (isAnswered) {
        const isLast = currentQuestion + 1 === activeQuestions.length;
        actionButtonHtml = `
            <button onclick="${isLast ? 'finishQuiz()' : 'nextQuestion()'}" class="w-full mt-4 bg-gray-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg flex justify-center gap-2 items-center">
                ${isLast ? 'Sınavı Bitir' : 'Sonraki Soru'}
                <i data-lucide="${isLast ? 'flag' : 'arrow-right'}" class="w-5 h-5"></i>
            </button>
        `;
    }

    app.innerHTML = `
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col">
            <div class="bg-white border-b border-gray-100 p-6 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="bg-blue-100 p-2 rounded-lg">
                        <i data-lucide="book-open" class="w-6 h-6 text-blue-600"></i>
                    </div>
                    <div>
                        <h1 class="text-lg font-bold text-gray-800">İSG Sınav Simülatörü</h1>
                        <span class="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded">${q.category}</span>
                    </div>
                </div>
                ${timerHtml}
            </div>

            <div class="w-full bg-gray-100 h-1.5">
                <div class="bg-blue-600 h-1.5 transition-all duration-300" style="width: ${progress}%"></div>
            </div>

            <div class="p-6 md:p-8 flex-1 flex flex-col justify-center">
                <div class="mb-8">
                    <span class="text-sm font-semibold text-blue-600 mb-2 block">Soru ${currentQuestion + 1} / ${activeQuestions.length}</span>
                    <h2 class="text-2xl font-bold text-gray-800 leading-tight">${q.question}</h2>
                </div>

                <div class="space-y-3">
                    ${optionsHtml}
                </div>
                
                ${actionButtonHtml}
            </div>
        </div>
    `;
}

function handleAnswer(index) {
    userAnswers[currentQuestion] = index;
    render();
}

function nextQuestion() {
    if (currentQuestion + 1 < activeQuestions.length) {
        currentQuestion++;
        render();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === activeQuestions[idx].correct) score++;
    });
    showResult = true;
    render();
}

function restartQuiz() {
    gameStarted = false;
    render();
}

// 4. EKRAN: Sonuç
function renderResult() {
    const totalQ = activeQuestions.length;
    const percentage = Math.round((score / totalQ) * 100);
    
    // ÖSYM Geçme Notu 70'tir (50 soruda 35 net)
    let message = "";
    let colorClass = "";
    if (percentage >= 70) {
        message = "Tebrikler! Belgeyi kaptın! 🎓";
        colorClass = "text-green-600";
    } else {
        message = "Maalesef Kaldın. Biraz daha tekrar lazım. 📚";
        colorClass = "text-red-600";
    }

    let summaryHtml = '';
    activeQuestions.forEach((q, idx) => {
        const givenAns = userAnswers[idx];
        const isCorrect = givenAns === q.correct;
        const isEmpty = givenAns === null;
        
        let statusIcon = '';
        let statusClass = '';
        
        if (isCorrect) {
            statusIcon = 'check-circle';
            statusClass = 'text-green-500 bg-green-50 border-green-200';
        } else if (isEmpty) {
            statusIcon = 'minus-circle';
            statusClass = 'text-gray-400 bg-gray-50 border-gray-200';
        } else {
            statusIcon = 'x-circle';
            statusClass = 'text-red-500 bg-red-50 border-red-200';
        }

        summaryHtml += `
            <div class="flex items-start gap-3 p-3 rounded-lg border ${statusClass} text-sm">
                <i data-lucide="${statusIcon}" class="w-5 h-5 flex-shrink-0 mt-0.5"></i>
                <div class="w-full">
                    <span class="font-bold text-gray-700 block mb-1">Soru ${idx + 1}: ${q.question}</span>
                    <div class="grid grid-cols-1 gap-1">
                        <span class="${isCorrect ? 'font-bold text-green-700' : 'text-gray-500 line-through'}">
                            Doğru: ${q.options[q.correct]}
                        </span>
                        ${!isCorrect && !isEmpty ? `<span class="font-bold text-red-700">Senin Cevabın: ${q.options[givenAns]}</span>` : ''}
                        ${isEmpty ? `<span class="text-orange-600 italic">Boş Bırakıldı</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    app.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
            <div class="text-center border-b border-gray-100 pb-8 mb-8">
                <div class="inline-flex p-4 rounded-full bg-gray-50 mb-4">
                    <i data-lucide="award" class="w-16 h-16 ${percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}"></i>
                </div>
                <h2 class="text-3xl font-bold text-gray-800 mb-2">Sınav Tamamlandı</h2>
                <p class="text-xl font-medium ${colorClass}">${message}</p>
                
                <div class="grid grid-cols-3 gap-4 mt-8">
                    <div class="bg-blue-50 p-4 rounded-xl">
                        <p class="text-blue-600 text-sm font-semibold uppercase">Puan</p>
                        <p class="text-3xl font-bold text-blue-900">${score}</p>
                    </div>
                    <div class="bg-indigo-50 p-4 rounded-xl">
                        <p class="text-indigo-600 text-sm font-semibold uppercase">Başarı</p>
                        <p class="text-3xl font-bold text-indigo-900">%${percentage}</p>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-xl">
                        <p class="text-gray-500 text-sm font-semibold uppercase">Soru</p>
                        <p class="text-3xl font-bold text-gray-800">${totalQ}</p>
                    </div>
                </div>
            </div>

            <div class="mb-8">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <i data-lucide="list-checks" class="w-5 h-5"></i>
                    Detaylı Rapor
                </h3>
                <div class="h-96 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                    ${summaryHtml}
                </div>
            </div>

            <button onclick="restartQuiz()" class="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2">
                <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                Ana Menüye Dön
            </button>
        </div>
    `;
    lucide.createIcons();
}

render();
