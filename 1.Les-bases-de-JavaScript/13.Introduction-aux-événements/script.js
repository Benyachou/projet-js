/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over, drag&drop, load, scroll, touch, etc ...

*/



const title = document.querySelector("h1")

title.addEventListener("mouseover",mouseOver);

function mouseOver (event){
    console.log(event);
    console.log("Clicked !");

    // title.textContent = `${title.textContent + "A"}`
    title.style.backgroundColor = "Green";
}

window.addEventListener("load", handleLoad)

function handleLoad (){
    console.log("Loaded !");
    
}