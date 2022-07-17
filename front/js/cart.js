let panier = JSON.parse(localStorage.getItem("panier"));

let cartItems = document.querySelector("#cart__items");

/* ------------- ajout pastille avec nombre d'articles-------------- */
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.length != 0) {
    document.querySelector("nav").appendChild(document.createElement("span")).setAttribute("id", "spanPastille");
    let _spanPastille = document.getElementById("spanPastille");

    _spanPastille.textContent = JSON.parse(localStorage.getItem("panier")).length;
    _spanPastille.style.fontSize = "12px";
    _spanPastille.style.color = "black";
    _spanPastille.style.border = "1px solid black";
    _spanPastille.style.borderRadius = "15px";
    _spanPastille.style.marginLeft = "10px"
    _spanPastille.style.display = "flex";
    _spanPastille.style.alignItems = "center";
    _spanPastille.style.justifyContent = "center";
    _spanPastille.style.alignSelf = "center"
    _spanPastille.style.height = "20px";
    _spanPastille.style.width = "20px";
  }
})


/* ------------- ajout des articles dans le panier-------------- */
/* ------------- si le panier est vide, on affiche une message "panier vide" -------------- */
if (panier === null || panier.length === 0) {
  let panierVide = document.createElement('p');
  document.querySelector('#cart__items').appendChild(panierVide);
  panierVide.textContent = 'Votre panier est vide !';
}

/* ------------- si le panier n'est pas vide, on crée l'article -------------- */
else {
  let pan = [];

  for (article in panier) {
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
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[article].quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`;

    cartItems.innerHTML = pan;
  }
}



/* ------------- ajouter des articles depuis le panier -------------- */
const modifQte = document.querySelectorAll(".itemQuantity");
for (let i = 0; i < modifQte.length; i++) {
  modifQte[i].addEventListener("input", function (e) {
    e.preventDefault();
    panier[i].quantity = e.target.value;
    console.log(panier[i].quantity);
    localStorage.setItem("panier", JSON.stringify(panier));
    location.reload()
  })
}



/* ------------- supprimer un article depuis le panier -------------- */
const supprArticle = document.querySelectorAll(".deleteItem");
for (let j = 0; j < supprArticle.length; j++) {
  supprArticle[j].addEventListener("click", function () {
    panier.splice(j, 1);
    localStorage.setItem("panier", JSON.stringify(panier));
    location.reload();
  })
}



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

  let contact = {
    firstName : firstName.value,
    lastName : lastName.value,
    address : address.value,
    city : city.value,
    email : email.value
  }

  /* ------------- validation du prénom -------------- */
  if (firstName.value == "") {
    firstNameErrorMsg.innerHTML = "Ce champs est requis.";
    firstNameErrorMsg.style.color = "red";
  } else if (regExName.test(firstName.value) == false) {
    firstNameErrorMsg.innerHTML = "Les caractères saisis ne sont pas valides.";
    firstNameErrorMsg.style.color = "red";
  } else {
    firstNameErrorMsg.innerHTML = "";
  }

  /* ------------- validation du nom -------------- */
  if (lastName.value == "") {
    lastNameErrorMsg.innerHTML = "Ce champs est requis.";
    lastNameErrorMsg.style.color = "red";
  } else if (regExName.test(lastName.value) == false) {
    lastNameErrorMsg.innerHTML = "Les caractères saisis ne sont pas valides.";
    lastNameErrorMsg.style.color = "red";
  } else {
    lastNameErrorMsg.innerHTML = "";
  }

  /* ------------- validation de l'adresse -------------- */
  if (address.value == "") {
    addressErrorMsg.innerHTML = "Ce champs est requis.";
    addressErrorMsg.style.color = "red";
  } else {
    addressErrorMsg.innerHTML = "";
  }

  /* ------------- validation de la ville -------------- */
  if (city.value == "") {
    cityErrorMsg.innerHTML = "Ce champs est requis.";
    cityErrorMsg.style.color = "red";
  } else {
    cityErrorMsg.innerHTML = "";
  }

  /* ------------- validation de l'email -------------- */
  if (email.value == "") {
    emailErrorMsg.innerHTML = "Ce champs est requis.";
    emailErrorMsg.style.color = "red";
  } else if (regExEmail.test(email.value) == false) {
    emailErrorMsg.innerHTML = "Ceci n'est pas une adresse mail valide.";
    emailErrorMsg.style.color = "red";
  } else {
    emailErrorMsg.innerHTML = "";
  }

  localStorage.setItem("contact", JSON.stringify(contact));


  /* ------------- ouverture de la page confirmation si le formulaire est valide -------------- */
  if (regExName.test(firstName.value) == true && regExName.test(lastName.value) == true && address.value && city.value && regExEmail.test(email.value) == true) {
    window.open("confirmation.html");
  } else {
    
  }
}