// --- VERİ HAVUZU (Sorular ve Açıklamalar) ---
const questionPool = [
    {
        question: "4857 sayılı İş Kanunu'na göre yer altı işlerinde günlük çalışma süresi en çok kaç saattir?",
        options: ["6 saat", "7.5 saat", "8 saat", "11 saat"],
        correct: 1,
        category: "Mevzuat",
        explanation: "4857 Sayılı İş Kanunu Madde 63'e göre; yer altı ve su altı işlerinde günlük çalışma süresi en çok 7.5 saattir."
    },
    {
        question: "Yangın söndürme cihazları zeminden ne kadar yükseğe asılmalıdır?",
        options: ["75 cm", "90 cm", "100 cm", "150 cm"],
        correct: 1,
        category: "Yangın",
        explanation: "Binaların Yangından Korunması Hakkında Yönetmelik gereği, taşınabilir söndürme cihazları zeminden 90 cm yüksekliğe asılmalıdır."
    },
    {
        question: "Aşağıdakilerden hangisi fiziksel risk etmenlerinden biridir?",
        options: ["Bakteriler", "Gürültü", "Kurşun", "Asitler"],
        correct: 1,
        category: "Teknik",
        explanation: "Gürültü, titreşim, aydınlatma ve termal konfor gibi etmenler 'Fiziksel Risk Etmenleri' grubuna girer."
    },
    {
        question: "İş sağlığı ve güvenliği kurulları kaç ayda bir toplanır?",
        options: ["Ayda en az bir", "3 ayda bir", "6 ayda bir", "Yılda bir"],
        correct: 0,
        category: "Mevzuat",
        explanation: "Kurullar yönetmeliğine göre kurul, ayda en az bir kere toplanır. Ancak tehlike sınıfına göre bu süre artırılabilir."
    },
    {
        question: "Baret hangi risk grubuna karşı koruma sağlar?",
        options: ["Kimyasal", "Mekanik", "Biyolojik", "Ergonomik"],
        correct: 1,
        category: "Teknik",
        explanation: "Baretler özellikle yukarıdan düşen cisimlere ve çarpmalara karşı (Mekanik) koruma sağlar."
    }
];

// --- DEĞİŞKENLER ---
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Ayarlar
let useTimer = false;
let instantAnswer = false;
let showExplanations = false;

// --- FONKSİYONLAR ---

function startQuiz() {
    // Ayarları Al
    const qCount = document.getElementById('question-count').value;
    const category = document.getElementById('category-select').value;
    useTimer = document.getElementById('enable-timer').checked;
    instantAnswer = document.getElementById('instant-answer').checked;
    showExplanations = document.getElementById('enable-explanations').checked;

    // Soruları Filtrele
    let filteredQuestions = questionPool;
    if (category !== 'all') {
        filteredQuestions = questionPool.filter(q => q.category === category);
    }

    // Yeterli soru var mı kontrolü
    if (filteredQuestions.length === 0) {
        alert("Bu kategoride soru bulunamadı!");
        return;
    }

    // Rastgele Karıştırma (Fisher-Yates)
    questions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, qCount);

    // Ekranları Değiştir
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // Zamanlayıcı Göster/Gizle
    if(useTimer) document.getElementById('timer-display').style.display = 'block';

    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    // Önceki zamanlayıcıyı ve açıklamayı temizle
    clearInterval(timer);
    document.getElementById('explanation-box').style.display = 'none';

    const q = questions[currentQuestionIndex];
    
    // Metinleri Güncelle
    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}. ${q.question}`;
    document.getElementById('progress-text').innerText = `Soru: ${currentQuestionIndex + 1}/${questions.length}`;
    
    // Şıkları Oluştur
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = ''; // Temizle

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(index, btn);
        optsContainer.appendChild(btn);
    });

    // Sonraki Soru butonunu gizle
    document.getElementById('next-btn').style.display = 'none';

    // Zamanlayıcıyı Başlat (Eğer seçildiyse)
    if (useTimer) {
        timeLeft = 30;
        document.getElementById('timer-display').innerText = `Süre: ${timeLeft}`;
        timer = setInterval(() => {
            timeLeft--;
            document.getElementById('timer-display').innerText = `Süre: ${timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                checkAnswer(-1, null); // Süre bitti
            }
        }, 1000);
    }
}

function checkAnswer(selectedIndex, btnElement) {
    clearInterval(timer); // Süreyi durdur

    const currentQ = questions[currentQuestionIndex];
    const options = document.getElementById('options-container').children;

    // Tüm butonları devre dışı bırak
    for (let btn of options) {
        btn.disabled = true;
    }

    let isCorrect = false;

    // Doğru şıkkı her zaman yeşil yap
    options[currentQ.correct].classList.add('correct');

    if (selectedIndex === currentQ.correct) {
        // Doğru bildi
        score += 10;
        isCorrect = true;
    } else if (selectedIndex !== -1) {
        // Yanlış bildi (Eğer süre bitmediyse)
        btnElement.classList.add('incorrect');
    }

    document.getElementById('score-text').innerText = `Puan: ${score}`;

    // Açıklama Göster
    if (showExplanations) {
        const explanationBox = document.getElementById('explanation-box');
        const expText = currentQ.explanation ? currentQ.explanation : "Bu soru için açıklama bulunamadı.";
        
        explanationBox.innerHTML = `<strong>💡 BİLGİ NOTU:</strong> ${expText}`;
        explanationBox.style.display = 'block';
        explanationBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Sonraki soru butonunu göster
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'inline-block';

    // Anlık Cevap açıksa ve açıklama kapalıysa otomatik geç
    if (instantAnswer && isCorrect && !showExplanations) { 
        setTimeout(nextQuestion, 1000); 
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('final-score').innerText = score;

    let message = "";
    if (score >= questions.length * 10 * 0.7) {
        message = "Tebrikler! Harika bir sonuç. 🎉";
    } else {
        message = "Biraz daha çalışmalısın. 📚";
    }
    document.getElementById('result-message').innerText = message;
}
