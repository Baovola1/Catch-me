//----Step9:Comptabiliser les bulles qu'on explose + création compteur
const counterDisplay = document.querySelector('h3');
 let counter = 0;


//---Step4:Création plusieurs bulles à partir création de la fonction
const bubbleMarker = () => {

    //----Step1:Création d'une bulle dans le span
const bubble = document.createElement("span");
bubble.classList.add("bubble");/*ajouter le style bubble*/

    //----dire au body qu'il a un enfant bubble
document.body.appendChild(bubble);

    //-------Step2:Gérance taille des bulles 
const size = Math.random() * 200 + 100 + "px";
bubble.style.height = size;
bubble.style.width = size;

bubble.style.top = Math.random() * 100 + 50 + "%"; /*Ne pas oublier l'unité*/
bubble.style.left = Math.random() * 100 + "%";

    // ----Step3+6:Faire partir les bulles un peu à gauche
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
bubble.style.setProperty('--left', Math.random() * 100 * plusMinus + "%");
 
    //----Step7: Supprimer les bulles dans 8s quand il arrive en haut
setTimeout(()=>{
bubble.remove();
},8000)

//Step8: Quand je clique sur ma cible, je veux que la bulle disparait
    bubble.addEventListener('click',()=>{
    counter++;/*INTEGRATION DU COMPTEUR*/
    counterDisplay.textContent = counter;/*Pour afficher la valeur*/   
    bubble.remove();
})
};

//----Step5
setInterval(bubbleMarker, 1000);
