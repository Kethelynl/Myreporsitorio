const translations = {
    en: {
      tecnologias: "Technology",
      projetos: "Projects",
      servicos: "Services",
      blog: "Blog",
      ola: "Hello, I am",
      funcao: "Web Developer",
      texto_entrada: "I have over 2 years of experience studying programming and have developed several small projects, facing and solving a wide range of challenges. My ambition is to continue growing and create even bigger projects. I'm ready to turn your ideas into success. Let's talk and make it happen?",
      btn_conversar: "Let's Talk",
      mystacks: "My technology stacks",
      html:"Markup language used to structure the content of web pages.",
      css:"Style language that defines the visual appearance of web pages.",
      js:"Programming language that adds interactivity and dynamic functionality to websites.",
      django:"Python web framework focused on fast and secure application development.",
      py:"Versatile programming language used in a variety of areas, including web, data science and automation.",
      php:"Programming language aimed at dynamic web development and server-side processing.",
      sql:"Relational database management system widely used for storing web application data.",
      projetos_p:"Projects",
      em_breve:"Soon",
      em_brev:"Soon",
      em_bre:"Soon",
      what_do:"what do I do",
      site:"As a developer, I bring ideas to life through code. I transform abstract concepts into digital solutions, creating interactive and functional experiences. I make your website a reality.",
      responsivo:"I create responsive websites that adapt to any screen size, providing the best interaction experience for the user.",
      jogos:"I transform ideas into fun and accessible experiences. With creativity and code, I bring to life virtual worlds, where every detail is designed to entertain and engage.",
      aboutme:"I am a Computer Engineering student at Cruzeiro do Sul and I have a great interest in programming. I discovered that this is the area that truly motivates me and that I am passionate about. I dedicate myself intensely to my studies every day, constantly seeking to grow and improve myself. I love what I do and I am determined to build a solid career in this field.",
      letgotalk:"Let's talk?",
      home:"Home",
    },
    pt: {
      tecnologias: "Tecnologias",
      projetos: "Projetos",
      servicos: "Serviços",
      blog: "Blog",
      ola: "Olá, eu sou a",
      funcao: "Desenvolvedora Web",
      texto_entrada: "Tenho mais de 2 anos de experiência estudando programação e já desenvolvi diversos projetos pequenos, enfrentando e resolvendo uma ampla gama de desafios. Minha ambição é continuar crescendo e criar projetos ainda maiores. Estou pronta para transformar suas ideias em sucesso. Vamos conversar e tornar isso realidade?",
      btn_conversar: "Vamos Conversar",
      mystacks: "Minhas stacks de tecnologia",
      html:"Linguagem de marcação usada para estruturar o conteúdo de páginas web.",
      css:"Linguagem de estilo que define a aparência visual de páginas web.",
      js:"Linguagem de programação que adiciona interatividade e funcionalidades dinâmicas aos sites.",
      django:"Framework web em Python, focado em desenvolvimento rápido e seguro de aplicações.",
      py:"Linguagem de programação versátil, usada em diversas áreas, incluindo web, ciência de dados e automação.",
      php:"Linguagem de programação voltada para desenvolvimento web dinâmico e processamento no servidor.",
      sql:"Sistema de gerenciamento de banco de dados relacional amplamente usado para armazenar dados de aplicações web.",
      projetos_p:"Projetos",
      em_breve:"Em Breve",
      em_brev:"Em Breve",
      em_bre:"Em Breve",
      what_do:"O que faço",
      site:"Como desenvolvedora, trago ideias e vida através de códigos. Transformo conceitos abstratos em soluções digitais, criando experiências interativas e funcionais.Faço seu site se tornar realidade.",
      responsivo:"Crio sites responsivos que se adaptam a qualquer tamanho de tela, proporcionando a melhor experiência de interação para o usuário.",
      jogos:"Transformo ideias em experiências divertidas e acessíveis.Com criatividade e código, dou vida a mundos virtuais, onde cada detalhe é projetado para entreter e envolver.",
      aboutme:"Sou estudante de Engenharia da Computação na Cruzeiro do Sul e tenho grande interesse em programação. Descobri que essa é a área que realmente me apaixona e me motiva. Dedico-me intensamente aos estudos todos os dias, buscando crescer e me aprimorar constantemente. Amo o que faço e estou determinado a construir uma carreira sólida nesse campo.",
      letgotalk:"Vamos conversar?",
      home:"Inicío",
    }
  };

function changeLanguage() {
    const selectedLang = document.getElementById("languageSelector").value;
  
    document.getElementById("projetos").textContent = translations[selectedLang].projetos;
    document.getElementById("home").textContent = translations[selectedLang].home;
    document.getElementById("tecnologias").textContent = translations[selectedLang].tecnologias;
    document.getElementById("servicos").textContent = translations[selectedLang].servicos;
    document.getElementById("blog").textContent = translations[selectedLang].blog;
    document.getElementById("ola").textContent = translations[selectedLang].ola;
    document.getElementById("funcao").textContent = translations[selectedLang].funcao;
    document.getElementById("texto_entrada").textContent = translations[selectedLang].texto_entrada;
    document.getElementById("btn-conversar").textContent = translations[selectedLang].btn_conversar;
    document.getElementById("mystacks").textContent = translations[selectedLang].mystacks;
    document.getElementById("html").textContent = translations[selectedLang].html;
    document.getElementById("css").textContent = translations[selectedLang].css;
    document.getElementById("js").textContent = translations[selectedLang].js;
    document.getElementById("django").textContent = translations[selectedLang].django;
    document.getElementById("py").textContent = translations[selectedLang].py;
    document.getElementById("php").textContent = translations[selectedLang].php;
    document.getElementById("sql").textContent = translations[selectedLang].sql;
    document.getElementById("projetos_p").textContent = translations[selectedLang].projetos_p;
    document.getElementById("em_breve").textContent = translations[selectedLang].em_breve;
    document.getElementById("em_brev").textContent = translations[selectedLang].em_brev;
    document.getElementById("em_bre").textContent = translations[selectedLang].em_bre;
    document.getElementById("what_do").textContent = translations[selectedLang].what_do;
    document.getElementById("site").textContent = translations[selectedLang].site;
    document.getElementById("responsivo").textContent = translations[selectedLang].responsivo;
    document.getElementById("jogos").textContent = translations[selectedLang].jogos;
    document.getElementById("aboutme").textContent = translations[selectedLang].aboutme;
    document.getElementById("letgotalk").textContent = translations[selectedLang].letgotalk;
}

window.onload = function() {
    document.getElementById("languageSelector").value = "pt";  // Idioma padrão
    changeLanguage();
};