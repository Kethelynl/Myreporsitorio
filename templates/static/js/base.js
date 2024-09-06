//let currentSlide = 0;

//function showSlide(index) {
  //  const cards = document.querySelector(".cards4");
    //const card = document.querySelector('.card4');
    //const totalSlide = document.querySelectorAll('.card4').length;

    // Obtém a largura total do card, incluindo margens e padding
    //const cardWidth = card.getBoundingClientRect().width;

    //if (index >= totalSlide) {
      //  currentSlide = 0;
    //} else if (index < 0) {
      //  currentSlide = totalSlide - 1;
    //} else {
      //  currentSlide = index;
    //}

    //const translateXValue = -currentSlide * cardWidth;
    //cards.style.transform = `translateX(${translateXValue}px)`;
    //cards.style.transition = "transform 0.5s ease"; // Transição suave
//}

//function nextSlide() {
  //  showSlide(currentSlide + 1);
//}

//function prevSlide() {
  //  showSlide(currentSlide - 1);
//}

// Atualiza o slide ao redimensionar a janela
//window.addEventListener('resize', () => {
  //  showSlide(currentSlide); // Recalcula a posição do slide com base na nova largura
//});

click = 2;

const rolagem = document.getElementById("rolagem")
const bntmenu = document.getElementById("menu")
function showSlide(){
    
  responsivo = document.getElementById("respo")
  jogo = document.getElementById("jog")
  sit = document.getElementById("sit")
    
    responsivo.classList.remove("active", "exit-left", "enter-right");
    jogo.classList.remove("active", "exit-left", "enter-right");
    sit.classList.remove("active", "exit-left", "enter-right");

    // Lógica para alternar os slides com base no valor de 'click'
    if (click == 1) {
        sit.classList.add("active");
        responsivo.classList.add("exit-left");
        click = 2;  // Próximo clique vai para o slide 2
    } else if (click == 2) {
        jogo.classList.add("active");
        sit.classList.add("exit-left");
        click = 3;  // Próximo clique vai para o slide 3
    } else if (click == 3) {
        responsivo.classList.add("active");
        jogo.classList.add("exit-left");
        click = 1;  // Retorna ao slide 1
    }
}

menu = 0
function showMenu(){
   
  menuicon = document.getElementById("menu-icon");

  menuicon.classList.remove("active");
  
  if(menu == 0){
    menuicon.classList.add("active");
    menu = 1
  }else if(menu == 1){
    menuicon.classList.remove("active");
    menu = 0
  }
}


rolagem.addEventListener('click', showSlide)
bntmenu.addEventListener('click', showMenu)

