function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let demo = document.getElementById("demo");
  let qty = document.getElementById("qty").value;
  let titre = document.getElementById("titre").value;
  let contenu = document.getElementById("contenu").value;




  for(let i = 0; i < qty ; i++ ){
    let element = document.createElement("h2")
    element.textContent = titre + " "+ i;
    demo.appendChild(element);

    let ajoute = document.createElement("p")
    ajoute.textContent = contenu + " "+ i

     demo.appendChild(ajoute)

  }

}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
let couleur = document.getElementById("couleur").value;

let phrases = document.querySelectorAll("#demo p")

  for(let i = 0; i < phrases.length ; i++ ){
    
    phrases[i].style.color = couleur;
  }

}

  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let classe = document.getElementById("btnClass").value

  let boutons = document.querySelectorAll("button");

  for(let i = 0; i< boutons.length ; i++){
    boutons[i].className = classe;
  }
}


