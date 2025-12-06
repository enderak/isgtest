const questions = [
    {
      question: "İş sağlığı ve güvenliği ile ilgili temel sorumlu kim veya kimlerdir?",
      options: ["Sadece işveren", "Sadece çalışanlar", "İşveren ve çalışanlar birlikte", "Sadece devlet"],
      correct: 2,
      category: "Genel"
    },
    {
      question: "6331 sayılı İş Sağlığı ve Güvenliği Kanunu hangi yılda yürürlüğe girmiştir?",
      options: ["2010", "2012", "2013", "2015"],
      correct: 1,
      category: "Mevzuat"
    },
    {
      question: "Çok tehlikeli sınıfta yer alan işyerlerinde kaç çalışana kadar bir iş güvenliği uzmanı görevlendirilmelidir?",
      options: ["50", "100", "150", "200"],
      correct: 1,
      category: "İSG Organizasyonu"
    },
    {
      question: "Aşağıdakilerden hangisi kişisel koruyucu donanımdır?",
      options: ["İş makinesi", "Baret", "Vinç", "İskele"],
      correct: 1,
      category: "KKD"
    },
    {
      question: "Risk değerlendirmesi hangi sıklıkla yenilenmelidir?",
      options: ["Ayda bir", "6 ayda bir", "Yılda bir", "İhtiyaç duyulduğunda"],
      correct: 3,
      category: "Risk Değerlendirme"
    },
    {
      question: "İşyerinde acil durum planı hazırlamak kimin sorumluluğundadır?",
      options: ["Sadece çalışanların", "İşverenin", "İtfaiyenin", "Belediyenin"],
      correct: 1,
      category: "Acil Durum"
    },
    {
      question: "Yangın söndürücüler kaç ayda bir kontrol edilmelidir?",
      options: ["3 ayda bir", "6 ayda bir", "Yılda bir", "2 yılda bir"],
      correct: 1,
      category: "Yangın Güvenliği"
    },
    {
      question: "İş kazası bildirimi kaç gün içinde yapılmalıdır?",
      options: ["1 gün", "3 gün", "7 gün", "15 gün"],
      correct: 1,
      category: "İş Kazası"
    },
    {
      question: "Elektrik akımının insan vücudundan geçmesi sonucu oluşan kazaya ne ad verilir?",
      options: ["Elektrik yangını", "Kısa devre", "Elektrik çarpması", "Ark"],
      correct: 2,
      category: "Elektrik Güvenliği"
    },
    {
      question: "İşyeri hekimi ve iş güvenliği uzmanı en az kaç çalışanı olan işyerlerinde bulundurulur?",
      options: ["10", "30", "50", "Tüm işyerlerinde"],
      correct: 3,
      category: "İSG Organizasyonu"
    },
    {
      question: "Gürültü seviyesi kaç dB'nin üzerinde ise KKD kullanımı zorunludur?",
      options: ["80 dB", "85 dB", "90 dB", "95 dB"],
      correct: 1,
      category: "Fiziksel Etkenler"
    },
    {
      question: "Asbestin insan sağlığına olan etkisi nedir?",
      options: ["Zatürre", "Kanser", "Grip", "Sarılık"],
      correct: 1,
      category: "Kimyasal Etkenler"
    },
    {
      question: "İşyerinde sigara içme yasağı hangi yasa ile getirilmiştir?",
      options: ["4857 sayılı İş Kanunu", "5510 sayılı Kanun", "4207 sayılı Tütün Yasası", "6331 sayılı Kanun"],
      correct: 2,
      category: "Mevzuat"
    },
    {
      question: "Ofis çalışanları için ergonomik oturma süresinin maksimum süresi kaç dakikadır?",
      options: ["30 dakika", "45 dakika", "60 dakika", "90 dakika"],
      correct: 2,
      category: "Ergonomi"
    },
    {
      question: "İlk yardım çantası kaç çalışana kadar bir adet bulundurulmalıdır?",
      options: ["20", "50", "100", "150"],
      correct: 1,
      category: "İlk Yardım"
    }
];

let currentQuestion = 0;
let score = 0;
let showResult = false;
let selectedAnswer = null;
let answered = false;
let results = [];

const app = document.getElementById('quiz-app');

function render() {
    if (showResult) {
        renderResult();
    } else {
        renderQuestion();
    }
    // İkonları oluştur
    lucide.createIcons();
}

function renderQuestion() {
    const q = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    let optionsHtml = '';
    q.options.forEach((option, index) => {
        let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between ";
        let iconHtml = '';

        if (!answered) {
            buttonClass += "border-gray-300 hover:border-blue-500 hover:bg-blue-50 bg-white cursor-pointer";
        } else {
            if (index === q.correct) {
                buttonClass += "border-green-500 bg-green-50";
                iconHtml = '<i data-lucide="check-circle" class="w-6 h-6 text-green-500"></i>';
            } else if (index === selectedAnswer) {
                buttonClass += "border-red-500 bg-red-50";
                iconHtml = '<i data-lucide="x-circle" class="w-6 h-6 text-red-500"></i>';
            } else {
                buttonClass += "border-gray-300 bg-gray-50 opacity-60";
            }
        }

        // Tıklama olayını sadece cevaplanmadıysa ekle
        const onClickAttr = !answered ? `onclick="handleAnswer(${index})"` : '';

        optionsHtml += `
            <button ${onClickAttr} class="${buttonClass} mb-3">
                <span class="font-medium text-gray-800">${option}</span>
                ${iconHtml}
            </button>
        `;
    });

    let nextButtonHtml = '';
    if (answered) {
        const btnText = currentQuestion + 1 === questions.length ? 'Sonuçları Gör' : 'Sonraki Soru';
        nextButtonHtml = `
            <button onclick="nextQuestion()" class="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg">
                ${btnText}
            </button>
        `;
    }

    app.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
                <div class="flex items-center justify-between text-white">
                    <div class="flex items-center gap-2">
                        <i data-lucide="book-open" class="w-6 h-6"></i>
                        <h1 class="text-2xl font-bold">İSG Sınavı</h1>
                    </div>
                    <div class="text-right">
                        <p class="text-sm opacity-90">Puan</p>
                        <p class="text-2xl font-bold">${score}/${questions.length}</p>
                    </div>
                </div>
            </div>

            <div class="bg-gray-100 p-4">
                <div class="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Soru ${currentQuestion + 1}/${questions.length}</span>
                    <span class="font-semibold">${q.category}</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-2">
                    <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
                </div>
            </div>

            <div class="p-6">
                <h2 class="text-xl font-bold text-gray-800 mb-6">${q.question}</h2>
                <div class="space-y-3">
                    ${optionsHtml}
                </div>
                ${nextButtonHtml}
            </div>
        </div>
    `;
}

function renderResult() {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "";
    if (percentage >= 90) message = "Mükemmel! 🎉";
    else if (percentage >= 70) message = "Başarılı! 👏";
    else if (percentage >= 50) message = "İyi! 👍";
    else message = "Daha çok çalışmalısın! 📚";

    let summaryHtml = '';
    questions.forEach((q, idx) => {
        const isCorrect = results[idx]?.correct;
        const icon = isCorrect ? 'check-circle' : 'x-circle';
        const colorClass = isCorrect ? 'text-green-500' : 'text-red-500';
        
        summaryHtml += `
            <div class="flex items-center gap-2 mb-2 p-2 rounded bg-gray-50">
                <i data-lucide="${icon}" class="w-5 h-5 ${colorClass} flex-shrink-0"></i>
                <span class="text-sm text-gray-700">Soru ${idx + 1}: ${q.category}</span>
            </div>
        `;
    });

    app.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <div class="flex justify-center mb-4">
                <i data-lucide="trophy" class="w-24 h-24 text-yellow-500"></i>
            </div>
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Quiz Tamamlandı!</h2>
            <p class="text-xl text-gray-600 mb-6">${message}</p>
            
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 mb-6">
                <p class="text-white text-lg mb-2">Toplam Puanınız</p>
                <p class="text-5xl font-bold text-white">${score}/${questions.length}</p>
                <p class="text-white text-2xl mt-2">%${percentage}</p>
            </div>

            <div class="mb-6 text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Sonuç Özeti:</h3>
                ${summaryHtml}
            </div>

            <button onclick="restartQuiz()" class="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg cursor-pointer">
                <i data-lucide="rotate-ccw" class="w-6 h-6"></i>
                Yeniden Başla
            </button>
        </div>
    `;
}

function handleAnswer(index) {
    if (answered) return;
    
    selectedAnswer = index;
    answered = true;
    
    const isCorrect = index === questions[currentQuestion].correct;
    if (isCorrect) {
        score++;
    }

    results.push({
        question: currentQuestion,
        correct: isCorrect
    });

    render();
}

function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
        currentQuestion++;
        selectedAnswer = null;
        answered = false;
    } else {
        showResult = true;
    }
    render();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showResult = false;
    selectedAnswer = null;
    answered = false;
    results = [];
    render();
}

// Uygulamayı başlat
render();
