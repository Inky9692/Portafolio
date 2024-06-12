let menuVisible = false;
//FUNCIÓN QUE OCULTA O MUESTRA EL MENU
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciona una opción 
    document.getElementById("nav").classList = "";
    menuVisible = false; 
}

//funcion que aplica las animaciones de las habilidades 
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("ingles");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("django");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("facilidad");
    }
}

//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

document.addEventListener("DOMContentLoaded", function() {
    const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#trucazo')
    $form.addEventListener('submit', handleSubmit)

    function handleSubmit (event) {
        event.preventDefault()
        const form = new FormData(this)
        console.log(form.get('name'))
        $buttonMailto.setAttribute('href', `mailto:andreavelas18@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`);
        $buttonMailto.click()
    }
})
