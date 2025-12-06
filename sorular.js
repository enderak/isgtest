const questionPool = [
    // --- TEKNİK SORULAR (Bolca ekledim ki deneme modu çalışsın) ---
    {
        "question": "Aşağıdakilerden hangisi fiziksel risk etmenlerinden biri değildir?",
        "options": ["Gürültü", "Titreşim", "Virüsler", "Aydınlatma", "Termal Konfor"],
        "answer": 2,
        "category": "Teknik",
        "profile": "ortak",
        "source": "2024-1",
        "explanation": "Virüsler biyolojik risk etmenidir."
    },
    {
        "question": "Kapalı alanlarda çalışma izin belgesi (Work Permit) en fazla kaç saat geçerlidir?",
        "options": ["8", "12", "24", "48", "72"],
        "answer": 0,
        "category": "Teknik",
        "profile": "igu",
        "source": "Deneme-1",
        "explanation": "Genellikle vardiya süresi (8 saat) ile sınırlıdır."
    },
    {
        "question": "Yangın söndürme cihazlarının periyodik kontrolü ne kadar sürede bir yapılmalıdır?",
        "options": ["6 ay", "1 yıl", "2 yıl", "4 yıl", "5 yıl"],
        "answer": 1,
        "category": "Teknik",
        "profile": "ortak",
        "source": "2023-2",
        "explanation": "YSC kontrolleri TS ISO 11602-2 standardına göre yılda bir yapılır."
    },
    // (Sistemin hata vermemesi için Teknik kategorisine 'dummy' veriler ekliyorum, gerçekte buraya sorularını gireceksin)
    ...Array.from({length: 20}, (_, i) => ({
        "question": `Teknik Soru Örneği ${i+4} (Test Amaçlı)`,
        "options": ["A Şıkkı", "B Şıkkı", "C Şıkkı", "D Şıkkı", "E Şıkkı"],
        "answer": 0,
        "category": "Teknik",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Test verisi."
    })),

    // --- MEVZUAT SORULARI ---
    {
        "question": "6331 sayılı kanuna göre 'Çalışan Temsilcisi' 51-100 çalışanı olan işyerlerinde kaç kişidir?",
        "options": ["1", "2", "3", "4", "5"],
        "answer": 1,
        "category": "Mevzuat",
        "profile": "ortak",
        "source": "2024-1",
        "explanation": "51-100 arası çalışan için 2 temsilci seçilir."
    },
    ...Array.from({length: 15}, (_, i) => ({
        "question": `Mevzuat Soru Örneği ${i+2}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 2,
        "category": "Mevzuat",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Test verisi."
    })),

    // --- SAĞLIK SORULARI ---
    {
        "question": "Pnömokonyoz hangi organı etkileyen bir meslek hastalığıdır?",
        "options": ["Karaciğer", "Akciğer", "Böbrek", "Deri", "Kalp"],
        "answer": 1,
        "category": "Sağlık",
        "profile": "hekim",
        "source": "2023-1",
        "explanation": "Tozların akciğerde birikmesi sonucu oluşur."
    },
    ...Array.from({length: 25}, (_, i) => ({
        "question": `Sağlık Soru Örneği ${i+2}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 0,
        "category": "Sağlık",
        "profile": "hekim",
        "source": "Deneme-1",
        "explanation": "Test verisi."
    })),

    // --- GENEL İSG KONULARI ---
    {
        "question": "ILO'nun merkezi nerededir?",
        "options": ["Paris", "Londra", "Cenevre", "New York", "Berlin"],
        "answer": 2,
        "category": "Genel İSG Konuları",
        "profile": "ortak",
        "source": "2022-1",
        "explanation": "ILO merkezi İsviçre/Cenevre'dedir."
    },
    ...Array.from({length: 15}, (_, i) => ({
        "question": `Genel İSG Soru Örneği ${i+2}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 3,
        "category": "Genel İSG Konuları",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Test verisi."
    })),

    // --- HUKUK SORULARI ---
    {
        "question": "İş Kanununa göre deneme süresi toplu iş sözleşmeleriyle en çok ne kadara kadar artırılabilir?",
        "options": ["2 ay", "3 ay", "4 ay", "6 ay", "1 yıl"],
        "answer": 2,
        "category": "Hukuk",
        "profile": "ortak",
        "source": "2024-1",
        "explanation": "Bireysel sözleşmede 2 ay, TİS ile 4 aya kadar artırılabilir."
    },
    ...Array.from({length: 5}, (_, i) => ({
        "question": `Hukuk Soru Örneği ${i+2}`,
        "options": ["A", "B", "C", "D", "E"],
        "answer": 1,
        "category": "Hukuk",
        "profile": "ortak",
        "source": "Deneme-1",
        "explanation": "Test verisi."
    }))
].flat(); // flat() kullandım çünkü array içinde array oluşturduk dummy data için
