import Mustache from "mustache";

const translations = {
    en: {
        "developer": "Software Developer",
        "personal": { "title": "Personal", "military": "Military: Completed", "driver": "B & A2 Type of Driver Licenses", "hobbies": "Hobbies: Computer Science, Trekking&Camping, Cooking" },
        "cv": "cv_en.pdf",
        "experience": {
            "title": "Experience", "list": [
                { "company": "i4Works", "title": "Software Developer", "duration": "June 2019 to -", "description": ["In the development team of a full-stack web application using AngularJS for the frontend, NodeJS for the backend which enables users to manage their projects on web.", "Developed a mobile app using React Native for the mentioned project which lets users to upload enriched photos from their site by adding extra data such as description and location.", "Developed a web app using NextJS where users can plan UAV flights for photogrametric analysis by selecting an area, drone type, and flight specifications."] },
                { "company": "Middle East Technical University", "title": "Research Assistant", "duration": "Feb. 2020 to Sept. 2022", "description": ["@CEITECH (Civil Engineering Department Information Technologies)"] },
                { "company": "i4Works", "title": "Intern Software Developer", "duration": "June 2018 to June 2019" }
            ]
        },
        "education": {
            "title": "Education", "list": [
                { "company": "Middle East Technical University", "title": "M.Sc., Information Systems", "duration": "2020 to 2024", "description": ["All coursework completed."] },
                { "company": "Middle East Technical University", "title": "B.S., Civil Engineering", "duration": "2014 to 2019", "description": ["CGPA: 3.33"] }
            ]
        },
        "skills": { "title": "Technical Skills", "languages": "Languages", "frontend": "Frontend", "backend": "Backend", "database": "Database", "other": "Other", "aws": "AWS (Lambda, S3, etc.)", "agile": "Agile Methodologies" },
        "language": { "title": "Language", "turkish": "Turkish", "english": "English", "french": "French", "native": "Native", "upper": "Upper-intermediate", "beginner": "Beginner" }
    },
    tr: {
        "developer": "Yazılım Geliştirici",
        "personal": { "title": "Kişisel", "military": "Askerlik: Tamamlandı", "driver": "B & A2 Tipi Ehliyet", "hobbies": "Hobiler: Bilgisayar Bilimleri, Doğa Gezileri&Kamp, Amatör Aşçılık" },
        "cv": "cv_tr.pdf",
        "experience": {
            "title": "Deneyim", "list": [
                { "company": "i4 İnşaat Yazılım", "title": "Yazılım Geliştirme Uzmanı", "duration": "Haziran 2019'dan beri", "description": ["Önyüzde AngularJS, arkayüzde NodeJS kullananan, kullanıcıların web üzerinden sahalarındaki projelerini yönetmeye yarayan tam donanımlı bir web uygulamasının geliştirici ekibindeyim.", "React Native kullanarak bir önceki deneyimde bahsettiğim web uygulaması için kullanıcıların açıklama ve lokasyon gibi ekstra bilgiler ile anlamlı fotoğraflar yüklemesini mümkün kılan bir mobil uygulama geliştirdim.", "NextJS kullanarak kullanıcıların fotogrametik analiz için drone tipi, uçuş parametreleri ve alan seçerek İHA uçuşlarını planlayabilecekleri bir web uygulaması geliştirdim."] },
                { "company": "Orta Doğu Teknik Üniversitesi", "title": "Araştırma Görevlisi", "duration": "Şubat 2020 - Eylül 2022", "description": ["@İnşaat Mühendisliği Bilgi İşlem Birimi"] },
                { "company": "i4 İnşaat Yazılım", "title": "Yazılım Geliştirme Stajyeri", "duration": "Haziran 2018 - Haziran 2019" }
            ]
        },
        "education": {
            "title": "Eğitim", "list": [
                { "company": "Orta Doğu Teknik Üniversitesi", "title": "Yükseklisans, Bilişim Sistemleri", "duration": "2020 - 2024", "description": ["Dersler tamamlandı."] },
                { "company": "Orta Doğu Teknik Üniversitesi", "title": "Lisans, İnşaat Mühendisliği", "duration": "2014 - 2019", "description": ["CGPA: 3.33"] }
            ]
        },
        "skills": { "title": "Teknik Donanımlar", "languages": "Diller", "frontend": "Önyüz", "backend": "Arkayüz", "database": "Veritabanı", "other": "Diğer", "aws": "AWS (Lambda, S3, vb.)", "agile": "Çevik Yöntemler" },
        "language": { "title": "Diller", "turkish": "Türkçe", "english": "İngilizce", "french": "Fransızca", "native": "Anadil", "upper": "Orta Üstü", "beginner": "Başlangıç" }
    }
};

function render(lang) {
    const template = document.getElementById('resume-template').innerHTML;
    const rendered = Mustache.render(template, translations[lang]);
    document.getElementById('resume-container').innerHTML = rendered;
    document.documentElement.lang = lang;
}
window.render = render;

render('en');
