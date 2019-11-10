var scroll = new SmoothScroll('a[href*="#"]',{
    speed:1000
});

const nodos = document.querySelectorAll('.letra')
const nodoss = document.querySelectorAll('.letraa')
const nodosss = document.querySelectorAll('.letraaa')
const nodossss = document.querySelectorAll('.letraaaa')


window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    document.getElementById("navbarr").classList.add("colorChange");
    console.log('aca se agrega la clase');
  } else {
    document.getElementById("navbarr").classList.remove("colorChange");
    console.log('aca se remueve la clase')
  }

  if(document.body.scrollTop>1500 || document.documentElement.scrollTop > 1500){
    document.getElementById("navbarr").classList.add("colorBottomChange");
    document.getElementById('h').classList.add('footerFondo');
  }else{
    document.getElementById("navbarr").classList.remove("colorBottomChange");
    document.getElementById('h').classList.remove('footerFondo')
  }
  

}

ScrollReveal().reveal(nodos,{
    delay:350,
    duration: 700,
    reset: true,
   
});
ScrollReveal().reveal(nodoss,{
    delay:300,
    distance: '150%',
    origin: 'left',
    opacity: null,
    reset:true
});
ScrollReveal().reveal(nodosss,{
    delay:300,
    duration: 700,
    reset: true,
    
});
ScrollReveal().reveal(nodossss,{
    delay:350,
    duration: 900,
    reset: true,
});


