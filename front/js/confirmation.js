const helper = new Helper();
const storage = JSON.parse(localStorage.getItem("panier"));
helper.pastilleArticles(storage);

let url = new URL(window.location.href);
let orderId = url.searchParams.get("orderId");
let confirmOrderId = document.getElementById('orderId');
confirmOrderId.innerHTML = orderId;

// let numCommande = document.querySelector("#orderId");
// numCommande.innerHTML = commandeId(123456789, 999999999) + "<br>Merci pour votre commande";

// function commandeId(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };


/* ------------- Confirmation de l'adresse de livraison -------------- */
document.querySelector('.confirmation').style.flexDirection = "column";

const contact = JSON.parse(localStorage.getItem("contact"));

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

