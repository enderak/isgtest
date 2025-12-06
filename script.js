// 1. VERİ HAVUZU (Örnek Sorular - Burayı 60+ soru ile doldurabilirsin)
const allQuestions = [
    {
        id: 1,
        category: "law",
        text: "4857 sayılı İş Kanunu'na göre, deneme süresi toplu iş sözleşmeleriyle en çok ne kadar olabilir?",
        options: ["2 Ay", "3 Ay", "4 Ay", "6 Ay"],
        correct: 2 // Array indexi (0'dan başlar, yani 4 Ay)
    },
    {
        id: 2,
        category: "health",
        text: "Aşağıdakilerden hangisi meslek hastalığı unsurlarından biri değildir?",
        options: ["Geçici hastalık", "Tekrarlanan sebep", "İşin yürütüm şartları", "Uzun süreklilik"],
        correct: 0
    },
    {
        id: 3,
        category: "tech",
        text: "Kaldırma araçlarında beyan edilen yükün en az kaç katını taşıyacak güçte yük frenleri bulunmalıdır?",
        options: ["1.1", "1.25", "1.5", "2"],
        correct: 1
    }
];

// 2. DEĞİŞKENLER
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let currentMode = 'normal';
let userAnswers = [];

// LocalStorage'dan verileri çek
let favorites = JSON.parse(localStorage.getItem('isg_favorites')) || [];
let bestScore = localStorage.getItem('isg_bestScore') || 0;

// Başlangıç Ayarları
document.getElementById('best-score').textContent = bestScore;
document.getElementById('fav-count').textContent = favorites.length;

// 3. FONKSİYONLAR

function startQuiz(mode) {
    currentMode = mode;
    const category = document.getElementById('category-filter').value;
    
    // Soruları Hazırla
    if (mode === 'practice') {
        currentQuestions = allQuestions.filter(q => favorites.includes(q.id));
        if(currentQuestions.length === 0) { alert("Henüz favori sorunuz yok!"); return; }
    } else {
        currentQuestions = category === 'all' 
            ? [...allQuestions] 
            : allQuestions.filter(q => q.category === category);
    }
    
    // Karıştır
    currentQuestions.sort(() => Math.random() - 0.5);
    
    currentQuestionIndex = 0;
    score = 0;
    showScreen('quiz-screen');
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    const q = currentQuestions[currentQuestionIndex];
    
    // UI Güncelleme
    document.getElementById('q-category').textContent = getCategoryName(q.category);
    document.getElementById('question-text').textContent = q.text;
    
    // Favori Butonu Durumu
    const favBtn = document.getElementById('fav-btn');
    favBtn.innerHTML = favorites.includes(q.id) ? '<i class="fas fa-star" style="color:var(--primary)"></i>' : '<i class="far fa-star"></i>';

    // Şıkları Oluştur
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => selectAnswer(index, btn);
        optsContainer.appendChild(btn);
    });

    // Zamanlı Mod Ayarı
    if (currentMode === 'timed') {
        startTimer(30);
    } else {
        document.getElementById('time-left').style.width = '100%';
    }
}

function selectAnswer(index, btn) {
    // Cevap verildiğinde tıklamayı engelle
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    clearInterval(timer);

    const q = currentQuestions[currentQuestionIndex];
    
    if (index === q.correct) {
        btn.classList.add('correct');
        score++;
    } else {
        btn.classList.add('wrong');
        // Doğruyu göster
        allBtns[q.correct].classList.add('correct');
    }

    // Sonraki Soruya Geçiş (1 saniye bekle)
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1500); // 1.5 saniye bekle ki kullanıcı cevabı görsün
}

function startTimer(seconds) {
    const bar = document.getElementById('time-left');
    let timeLeft = seconds;
    
    bar.style.width = '100%';
    bar.style.transition = 'width 1s linear';
    
    timer = setInterval(() => {
        timeLeft--;
        const percentage = (timeLeft / seconds) * 100;
        bar.style.width = percentage + '%';
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            // Süre bitti, yanlış say ve geç
            const allBtns = document.querySelectorAll('.option-btn');
            allBtns.forEach(b => b.disabled = true);
            allBtns[currentQuestions[currentQuestionIndex].correct].classList.add('correct');
            setTimeout(() => {
                currentQuestionIndex++;
                if (currentQuestionIndex < currentQuestions.length) loadQuestion();
                else endQuiz();
            }, 1500);
        }
    }, 1000);
}

function endQuiz() {
    showScreen('result-screen');
    document.getElementById('final-score').textContent = score;
    document.getElementById('total-questions').textContent = currentQuestions.length;
    
    // Skor Kaydetme
    if (score > bestScore) {
        bestScore = score;
        localStorage.setItem('isg_bestScore', bestScore);
        document.getElementById('best-score').textContent = bestScore;
        document.getElementById('feedback-text').textContent = "Yeni Rekor! 🏆";
    } else {
        document.getElementById('feedback-text').textContent = "Test Tamamlandı.";
    }
}

function toggleFav() {
    const qId = currentQuestions[currentQuestionIndex].id;
    if (favorites.includes(qId)) {
        favorites = favorites.filter(id => id !== qId);
    } else {
        favorites.push(qId);
    }
    localStorage.setItem('isg_favorites', JSON.stringify(favorites));
    document.getElementById('fav-count').textContent = favorites.length;
    
    // Buton ikonunu güncelle
    const favBtn = document.getElementById('fav-btn');
    favBtn.innerHTML = favorites.includes(qId) ? '<i class="fas fa-star" style="color:var(--primary)"></i>' : '<i class="far fa-star"></i>';
}

function goHome() {
    showScreen('home-screen');
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function getCategoryName(code) {
    const names = { 'law': 'Hukuk', 'health': 'Sağlık', 'tech': 'Teknik' };
    return names[code] || 'Genel';
}