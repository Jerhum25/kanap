let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier);
let cartItems = document.querySelector("#cart__items");

/* ------------- ajout des articles dans le panier-------------- */
/* ------------- si le panier est vide-------------- */
if (panier === null || panier.length === 0) {
  let panierVide = document.createElement('p');
  document.querySelector('#cart__items').appendChild(panierVide);
  panierVide.textContent = 'Votre panier est vide !';
}

/* ------------- si le panier n'est pas vide-------------- */
else {
  let pan = [];

  for (article in panier) {
    // if (panier[article].id && panier[article].color) {
    // }
    // else {
      pan = pan +
        `<article class="cart__item" data-id="${panier[article].id}" data-color="${panier[article].color}">
    <div class="cart__item__img">
      <img src="${panier[article].imageUrl}" alt="${panier[article].altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${panier[article].name}</h2>
        <p>${panier[article].color}</p>
        <p>${panier[article].price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : ${panier[article].quantity}</p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[article].quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`;

      cartItems.innerHTML = pan;
    // }
  }
}

/* ------------- ajouter des articles depuis le panier -------------- */
for (i =0; i < panier.length; i++) {
  console.log(panier[i].quantity);
document.getElementsByClassName("itemQuantity")[i].addEventListener("input", function (e) {
  document
    .querySelector(".cart__item__content__settings__quantity p")
    .innerText = "Qté : " + e.target.value;
})
}

/* ------------- supprimer un article depuis le panier -------------- */



/* ------------- quantité totale -------------- */

let quantitePanier = document.getElementsByClassName('itemQuantity');
let quantiteTotale = 0;
for (let i = 0; i < quantitePanier.length; i++) {
  quantiteTotale += quantitePanier[i].valueAsNumber;
}
let totalArticles = document.getElementById('totalQuantity');
totalArticles.textContent = quantiteTotale;

/* ------------- prix total -------------- */
// let prixPanier = document.getElementsByClassName('itemPrice');
let prixTotal = 0;
for (let j = 0; j < quantitePanier.length; j++) {
  prixTotal += quantitePanier[j].valueAsNumber * panier[j].price;
}
let totalPanier = document.getElementById('totalPrice');
totalPanier.textContent = prixTotal;





/* ------------- validation du formulaire -------------- */
order.onclick = (e) => {
  /* ------------- déclaration des variables -------------- */
  let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
  let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let email = document.getElementById("email");

  let regExName = /^[a-zA-Z-\s]+$/;
  let regExEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  /* ------------- validation du prénom -------------- */
  if (firstName.value == "") {
    firstNameErrorMsg.innerHTML = "Ce champs est requis.";
    firstNameErrorMsg.style.color = "red";
    e.preventDefault();
  } else if (regExName.test(firstName.value) == false) {
    firstNameErrorMsg.innerHTML = "Les caractères saisis ne sont pas valides.";
    firstNameErrorMsg.style.color = "red";
    e.preventDefault();
  } else {
    firstNameErrorMsg.innerHTML = "";
  }

  /* ------------- validation du nom -------------- */
  if (lastName.value == "") {
    lastNameErrorMsg.innerHTML = "Ce champs est requis.";
    lastNameErrorMsg.style.color = "red";
    e.preventDefault();
  } else if (regExName.test(lastName.value) == false) {
    lastNameErrorMsg.innerHTML = "Les caractères saisis ne sont pas valides.";
    lastNameErrorMsg.style.color = "red";
    e.preventDefault();
  } else {
    lastNameErrorMsg.innerHTML = "";
  }

  /* ------------- validation de l'adresse -------------- */
  if (address.value == "") {
    addressErrorMsg.innerHTML = "Ce champs est requis.";
    addressErrorMsg.style.color = "red";
    e.preventDefault();
  } else {
    addressErrorMsg.innerHTML = "";
  }

  /* ------------- validation de la ville -------------- */
  if (city.value == "") {
    cityErrorMsg.innerHTML = "Ce champs est requis.";
    cityErrorMsg.style.color = "red";
    e.preventDefault();
  } else {
    cityErrorMsg.innerHTML = "";
  }

  /* ------------- validation de l'email -------------- */
  if (email.value == "") {
    emailErrorMsg.innerHTML = "Ce champs est requis.";
    emailErrorMsg.style.color = "red";
    e.preventDefault();
  } else if (regExEmail.test(email.value) == false) {
    emailErrorMsg.innerHTML = "Ceci n'est pas une adresse mail valide.";
    emailErrorMsg.style.color = "red";
    e.preventDefault();
  } else {
    emailErrorMsg.innerHTML = "";
  }

  /* ------------- ouverture de la page confirmation -------------- */
  // window.open("confirmation.html");
}