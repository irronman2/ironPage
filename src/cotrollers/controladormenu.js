let menu = document.getElementById("menu")

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop>100){
        menu.classList.add("menuSecundario")
        menu.classList.remove("menuSecundario")
    }else{
        menu.classList.add("menuPrincipal")
        menu.classList.remove("menuSecundario")        
    }
}
)