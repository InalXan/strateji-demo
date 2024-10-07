const translations = {
    lv: {
        // header 
        header_media_title: "Mēs esam šeit jums!",
        navigation_one: "māja",
        navigation_two: "par Mumsс",
        navigation_thirty: "Partijas vadītājs",
        navigation_fourty: "Atbalsta centriс",
        navigation_fivety: "Mēs esam parlamentā",
        // navigation 
        about_header_one: "par Mums",
        about_desc_one: "Esam atvēruši trīs sabiedriskā atbalsta centrus visā Latvijā, kur ikviens iedzīvotājs var risināt dažāda veida jautājumus un saņemt juridiskas konsultācijas: RĪGA, st. Lāčplēša 112 DAUGAVPILS, st. Rīgas 59e RĒZEKNE, st. Latgales 52, 2. stāvs e-pasts: japolitika@gmail.com Reģionālo iedzīvotāju atbalsta centru vadītāja: (FOTO!!!!) Santa Skārste e-pasts: stabilitatei.santa@mail.lv, +371 25447057",
        about_header_two: "Mēs nodrošinām:",
        about_desc_two: "1) Pastāvīgās juridiskās konsultācijas mūsu atbalsta centros visā Latvijā - bez maksas! 2) Individuāls atbalsts cilvēkiem, kuri nonākuši sarežģītās dzīves situācijās - bez maksas! 3) Likumdošanas iniciatīvas, lai atbalstītu visus cilvēkus ar jebkādiem jautājumiem un problēmām! 4) Mēs darbojamies kā aizstāvji cilvēkiem, kuru intereses ir jāaizsargā valdības centros - bez maksas! 5) Regulāri organizējam jauniešu un bērnu kustības valsts jaunākās paaudzes atbalstam - bez maksas! 6) Sniedzam regulāras konsultācijas pensijas vecuma cilvēkiem un sniedzam atbalstu sociālajos un komunālajos jautājumos - bez maksas! 7) Veicam pastāvīgu dialogu ar privāto komercstruktūru pārstāvjiem, lai sniegtu atbalstu gan darba devējiem, gan vispārējai uzņēmējdarbības attīstībai Latvijā! Mūsu uzdevums ir kalpot jums! Mēs strādājam!"
    },
    ru: {
        // header 
        header_media_title: "Мы здесь для вас!",
        navigation_one: "дом",
        navigation_two: "о нас",
        navigation_thirty: "Лидер партии",
        navigation_fourty: "Центры поддержки",
        navigation_fivety: "Мы в парламенте",
        // navigation 
        about_header_one: "о нас",
        about_desc_one: "Мы открыли три центра поддержки населения по всей Латвии, куда каждый житель может обратиться с различного рода вопросами и получить юридические консультации: РИГА, ул. Лачплеша 112 ДАУГАВПИЛС, ул. Ригас 59e РЕЗЕКНЕ, ул. Латгалес 52, 2 этаж электронная почта: japolitika@gmail.com Руководитель региональных центров поддержки населения: (PHOTO!!!!) Санта Шкарсте электронная почта: stabilitatei.santa@mail.lv, +371 25447057",
        about_header_two: "Мы предоставляем:",
        about_desc_two: "1) Постоянные юридические консультации в наших центрах поддержки по всей Латвии - бесплатно ! 2) Индивидуальная поддержка людям, попавшим в сложную жизненную ситуацию- бесплатно ! <br/> 3) Законодательные инициативы в поддержку всех людей с любыми вопросами и проблемами !<br/> 4) Выступаем в качестве защитников для людей, чьи интересы необходимо защищать в центрах государственной власти - бесплатно ! <br/>  5) Регулярно организовываем молодежные и детские движения для поддержки молодого поколения страны- бесплатно !  <br/> 6) Проводим регулярные консультации для людей пенсионного возраста и оказываем им поддержку в вопросах социальной и коммунальных отраслях -бесплатно  ! <br/> 7) Ведем постоянный диалог с представителями частных коммерческих структур, для оказания поддержки как работодателям, так и общего развития бизнеса в Латвии !   Наша задача служить Вам ! Работаем ! "
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
    // about
    document.getElementById('about_header_one').textContent = translations[lang].about_header_one;
    document.getElementById('about_desc_one').textContent = translations[lang].about_desc_one;
    document.getElementById('about_header_two').textContent = translations[lang].about_header_two;
    document.getElementById('about_desc_two').textContent = translations[lang].about_desc_two;
}