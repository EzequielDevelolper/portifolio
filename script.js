

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 60 * i);
    });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);

//   var posicaoy = window.scrollY;
//   console.log(posicaoy);

var navbar = document.getElementById('navbar');
const navbarItem = document.querySelectorAll('.navbar-item')


document.addEventListener("scroll", function () {

    if (window.scrollY <= 0) {
        //MUDA O STYLE DA NAVBAR COM O SCROLL PRA BAIXO
        navbar.style.backgroundColor = "rgb(0, 0, 0)";
        navbar.style.border = "none";
        

        //FOR PARA MUDAR OS ELEMENTOS DA NAVBAR
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].style.color = 'rgb(60, 128, 255)'
            navbarItem[i].style= 'hover: color="white"'
          
        }

    } else {
        //MUDA O STYLE DA NAVBAR COM O SCROLL PRA BAIXO
        navbar.style.backgroundColor = "rgb(60, 128, 255)";
        navbar.style.border = "none";
        navbar.style.transition = "0.3s";

        //FOR PARA MUDAR OS ELEMENTOS DA NAVBAR
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].style.color = 'white'
            navbarItem[i].style.transition = "0.3s"
        }
    }


});


