const questionPool = [
    // --- GERÇEK ÖRNEK SORULAR (Manuel Eklenenler) ---
    {
        question: "İşverenin iş sağlığı ve güvenliği konusunda işçilere eğitim verme yükümlülüğü hangi kanuna dayanır?",
        options: ["4857 İş Kanunu", "6331 İSG Kanunu", "5510 SSGSS Kanunu", "6098 Borçlar Kanunu", "TC Anayasası"],
        answer: 1, category: "Hukuk", profile: "igu", source: "2023",
        explanation: "İşveren çalışanların eğitimini 6331 sayılı kanun gereği sağlar."
    },
    {
        question: "Gürültü yönetmeliğine göre en düşük maruziyet eylem değeri kaçtır?",
        options: ["80 dB(A)", "85 dB(A)", "87 dB(A)", "90 dB(A)", "75 dB(A)"],
        answer: 0, category: "Teknik", profile: "igu", source: "2023",
        explanation: "En düşük eylem değeri 80, en yüksek 85, sınır değer 87 dB(A)'dır."
    },
    {
        question: "Meslek hastalıklarının sınıflandırılmasında 'A Grubu' aşağıdakilerden hangisidir?",
        options: ["Kimyasal nedenli", "Fiziksel nedenli", "Biyolojik nedenli", "Toz nedenli", "Psikolojik nedenli"],
        answer: 0, category: "Sağlık", profile: "hekim", source: "2024",
        explanation: "A Grubu: Kimyasal, B: Cilt, C: Pnömokonyoz, D: Biyolojik, E: Fiziksel."
    }
];

// --- OTOMATİK HAVUZ DOLDURMA (Test Edebilmen İçin) ---
// Her kategoriden bolca soru ekliyoruz ki algoritma %40 Teknik seçerken soru bitmesin.

const categories = ["Hukuk", "Genel İSG Konuları", "Mevzuat", "Sağlık", "Teknik"];

// Her kategori için 30'ar tane rastgele soru üretelim (Toplam 150 soru havuzu)
categories.forEach(cat => {
    for (let i = 1; i <= 30; i++) {
        questionPool.push({
            question: `(${cat}) Konusunda Örnek Soru - ${i}. Bu soru ${cat} ağırlığını test etmek içindir.`,
            options: [`${cat} Cevap A`, `${cat} Cevap B`, "Doğru Cevap C", "Cevap D", "Cevap E"],
            answer: 2,
            category: cat, 
            profile: "igu", // Test için hepsine açık yapıyoruz
            source: i % 2 === 0 ? "2024" : "2023",
            explanation: `Bu bir ${cat} sorusudur ve yüzdelik dilime göre seçilmiştir.`
        });
    }
});
