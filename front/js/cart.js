const helper = new Helper();

let panier = JSON.parse(localStorage.getItem("panier"));

let cartItems = document.querySelector("#cart__items");

/* ------------- ajout pastille avec nombre d'articles-------------- */
helper.pastilleArticles(panier);

/* ------------- ajout des articles dans le panier-------------- */
/* ------------- si le panier est vide, on affiche une message "panier vide" -------------- */
if (panier === null || panier.length === 0) {
  let panierVide = document.createElement('p');
  document.querySelector('#cart__items').appendChild(panierVide);
  panierVide.textContent = 'Votre panier est vide !';
}

/* ------------- si il y a des produits dans le local storage, on crée les articles -------------- */
else {
  let pan = [];

  fetch('http://localhost:3000/api/products')
    .then(reponse => reponse.json())
    .then(data => {
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
            <p>${data[article].price} €</p>
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
      helper.ajoutArticles();

      helper.supprimeArticle();

      helper.quantiteTotalePanier();

      helper.prixTotalPanier();
    })
}









/* ------------- validation du formulaire -------------- */
order.onclick = (e) => {
  e.preventDefault();
  /* ------------- déclaration des variables -------------- */
  let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
  let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let email = document.getElementById("email");

  /* ------------- déclaration des regEx pour validation du formulaire -------------- */
  let regExName = /^[a-zA-Z-\s]+$/;
  let regExEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  /* ------------- déclaration de l'objet contact-------------- */
  let contact = {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value
  };

  validationFormulaire();

  function validationFormulaire() {
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
  }

  /* ------------- ajout de l'objet contact au localStorage -------------- */
  localStorage.setItem("contact", JSON.stringify(contact));

  /* ------------- ouverture de la page confirmation si le formulaire est valide -------------- */
  if (regExName.test(firstName.value) == true && regExName.test(lastName.value) == true && address.value && city.value && regExEmail.test(email.value) == true) {
    console.log("formualire ok")
    window.open("./confirmation.html", "_self");
  } else {

  }
}