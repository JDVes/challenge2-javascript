//let newp  = document.createElement('p');
 //newP.textcontent= '';

// function ajouter() {
 //   let  userinput1 =document.getElementById("#saisir");
  //  let affiche1 = document.getElementById("#tache1");
  //  affiche1.innerHTML= userinput1.value;
    
 //}

 let b = document.body;
let p1 = document.getElementById('#p1');
let p2 = document.getElementById('#p2');
let newP = document.createElement('#p');
newP.textContent = 'Paragraphe créé et inséré grâce au JavaScript';
b.appendChild(newTexte);

let eltDel = b.removeChild(p1);

//Supprime p2 du DOM
p2.remove()


 