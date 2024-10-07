const translations = {
    lv: {
        // header 
        header_media_title: "Mēs esam šeit jums!",
        navigation_one: "māja",
        navigation_two: "par Mumsс",
        navigation_thirty: "Partijas vadītājs",
        navigation_fourty: "Atbalsta centriс",
        navigation_fivety: "Mēs esam parlamentā",
        // party leader  
    },
    ru: {
        // header 
        header_media_title: "Мы здесь для вас!",
        navigation_one: "дом",
        navigation_two: "о нас",
        navigation_thirty: "Лидер партии",
        navigation_fourty: "Центры поддержки",
        navigation_fivety: "Мы в парламенте",
      
    }
};

function changeLanguage(lang) {
    // navigation 
    document.getElementById('header_media_title').textContent = translations[lang].header_media_title;
    document.getElementById('navigation_one').textContent = translations[lang].navigation_one;
    document.getElementById('navigation_two').textContent = translations[lang].navigation_two;
    document.getElementById('navigation_thirty').textContent = translations[lang].navigation_thirty;
    document.getElementById('navigation_fourty').textContent = translations[lang].navigation_fourty;
    document.getElementById('navigation_fivety').textContent = translations[lang].navigation_fivety;
    // party leader
}