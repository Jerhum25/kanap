const helper = new Helper();
const storage = JSON.parse(localStorage.getItem("panier"));

helper.pastilleArticles(storage);

let numCommande = document.querySelector("#orderId");
numCommande.innerHTML = commandeId(123456789, 999999999) + "<br>Merci pour votre commande";

function commandeId(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


// const paragraphe = document.querySelector('.confirmation p');
// console.log(paragraphe);

document.querySelector('.confirmation').style.flexDirection = "column";

// const newelem = document.createElement('h2').innerHTML = "Récapitulatif de commande"
// document.querySelector('.confirmation').insertBefore(newelem, paragraphe);

const contact = JSON.parse(localStorage.getItem("contact"));
console.log(contact.email);

document.querySelector('.confirmation p')
  .appendChild(document.createElement('p'))
  .innerHTML = `Votre commande sera envoyée à cette adresse : <br><br>
  ${contact.firstName} ${contact.lastName}<br>
  ${contact.address}<br>
  ${contact.city}`;

/* ------------- supprimer les données du localStorage -------------- */
const logo = document.querySelector('.logo');
// console.log(logo);
logo.addEventListener('click', function () {
  localStorage.clear();
});

const accueil = document.querySelector('.limitedWidthBlock nav ul a li');
// console.log(accueil.textContent);
accueil.addEventListener('click', function () {
  localStorage.clear();
});

