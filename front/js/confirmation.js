const helper = new Helper();
const storage = JSON.parse(localStorage.getItem("panier"));

helper.pastilleArticles(storage);

let numCommande = document.querySelector("#orderId");
numCommande.innerHTML = commandeId(123456789, 999999999) + "<br>Merci pour votre commande";

function commandeId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }