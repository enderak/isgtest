const questionPool = [
    // --- TEKNİK ÖRNEKLER ---
    {
        "question": "Aşağıdakilerden hangisi fiziksel risk etmenlerinden biri değildir?",
        "options": ["Gürültü", "Titreşim", "Virüsler", "Aydınlatma", "Termal Konfor"],
        "answer": 2,
        "category": "Teknik",
        "profile": "ortak",
        "source": "2024-1",
        "explanation": "Virüsler biyolojik risk etmenidir."
    },
    // Deneme modunun çalışması için Teknik kategorisini dolduruyoruz
    ...Array.from({length: 25}, (_, i) => ({
        "question": `Teknik Konulu Deneme Sorusu ${i+1}`,
        "options": ["A Şıkkı", "B Şıkkı", "C Şıkkı", "D Şıkkı", "E Şıkkı"],
        "answer": 0,
        "category": "Teknik",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Bu bir test sorusudur."
    })),

    // --- MEVZUAT ÖRNEKLER ---
    {
        "question": "6331 sayılı kanuna göre çok tehlikeli sınıfta uzman çalıştırma süresi çalışan başına ayda en az kaç dakikadır?",
        "options": ["10", "20", "40", "60", "80"],
        "answer": 2, // 40 dk
        "category": "Mevzuat",
        "profile": "igu",
        "source": "2023-2",
        "explanation": "Çok tehlikeli sınıfta çalışan başına 40 dakikadır."
    },
    ...Array.from({length: 20}, (_, i) => ({
        "question": `Mevzuat Konulu Deneme Sorusu ${i+1}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 1,
        "category": "Mevzuat",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Mevzuat test verisi."
    })),

    // --- SAĞLIK ÖRNEKLER ---
    ...Array.from({length: 30}, (_, i) => ({
        "question": `Sağlık Konulu Deneme Sorusu ${i+1}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 2,
        "category": "Sağlık",
        "profile": "hekim", // Hekimler için daha çok çıkar
        "source": "Deneme-1",
        "explanation": "Sağlık test verisi."
    })),

    // --- GENEL İSG ÖRNEKLER ---
    ...Array.from({length: 20}, (_, i) => ({
        "question": `Genel İSG Konulu Deneme Sorusu ${i+1}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 3,
        "category": "Genel İSG Konuları",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Genel İSG test verisi."
    })),

    // --- HUKUK ÖRNEKLER ---
    ...Array.from({length: 10}, (_, i) => ({
        "question": `Hukuk Konulu Deneme Sorusu ${i+1}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 4,
        "category": "Hukuk",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Hukuk test verisi."
    }))
].flat();
