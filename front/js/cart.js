// let id = localStorage.getItem("id");
// let color = localStorage.getItem("color");
// let imageUrl = localStorage.getItem("imageUrl");
// let altTxt = localStorage.getItem("altTxt");
// let nom = localStorage.getItem("name");
// let price = localStorage.getItem("price");
// let quantity = localStorage.getItem("quantity");
// panierVide.push(recup);
// // console.log(recup.name)
// localStorage.setItem("produit", JSON.stringify(panierVide));

// ajoutPanier()

// function ajoutPanier() {

//     let cart__item = document.querySelector("#cart__items").appendChild(document.createElement("article"));
//     cart__item.className = "cart__item";
//     cart__item.id = recup.id;
//     cart__item.color = JSON.parse(localStorage.getItem("panier")).color;

//     let cart__item__img = cart__item.appendChild(document.createElement("div"));
//     cart__item__img.className = "cart__item__img";

//     let img = cart__item__img.appendChild(document.createElement("img"));
//     img.src = JSON.parse(localStorage.getItem("panier")).imgUrl;
//     img.alt = JSON.parse(localStorage.getItem("panier")).altTxt;

//     let cart__item__content = cart__item.appendChild(document.createElement("div"));
//     cart__item__content.className = "cart__item__content";

//     let cart__item__content__description = cart__item__content.appendChild(document.createElement("div"));
//     cart__item__content__description.name = "cart__item__content__description";

//     let h2 = cart__item__content__description.appendChild(document.createElement("h2"));
//     h2.innerHTML = JSON.stringify(localStorage.getItem("panier").name);

//     let pColor = cart__item__content__description.appendChild(document.createElement("p"));
//     pColor.innerHTML = JSON.parse(localStorage.getItem("panier")).color;

//     let pPrice = cart__item__content__description.appendChild(document.createElement("p"));
//     pPrice.innerHTML = JSON.parse(localStorage.getItem("panier")).price + "€";

//     let cart__item__content__settings = cart__item__content.appendChild(document.createElement("div"));
//     cart__item__content__settings.className = "cart__item__content__settings";

//     let cart__item__content__settings__quantity = cart__item__content__settings.appendChild(document.createElement("div"));
//     cart__item__content__settings__quantity.className = "cart__item__content__settings__quantity";

//     let pQuantity = cart__item__content__settings__quantity.appendChild(document.createElement("p"));
//     pQuantity.innerHTML = "Qté : ";

//     let itemQuantity = cart__item__content__settings__quantity.appendChild(document.createElement("input"));
//     itemQuantity.type = "number"
//     itemQuantity.className = "itemQuantity";
//     itemQuantity.name = "itemQuantity";
//     itemQuantity.setAttribute("min", 1);
//     itemQuantity.setAttribute("max", 100);
//     itemQuantity.value = JSON.parse(localStorage.getItem("panier")).quantity;

//     let cart__item__content__settings__delete = cart__item__content__settings__quantity.appendChild(document.createElement("div"));
//     cart__item__content__settings__delete.className = "cart__item__content__settings__delete";

//     let pDelete = cart__item__content__settings.appendChild(document.createElement("p"));
//     pDelete.className = "deleteItem";
//     pDelete.innerHTML = "Supprimer";
// }


let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier);


function ajoutPanier() {
  for (let i in panier){
    document.querySelector("#cart__items").innerHTML = 
    `<article class="cart__item" data-id="${panier[i].id}" data-color="${panier[i].color}">
    <div class="cart__item__img">
      <img src="${panier[i].imageUrl}" alt="${panier[i].altTxt}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${panier[i].name}</h2>
        <p>Vert</p>
        <p>${panier[i].price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : ${panier[i].quantity}</p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[i].quantity}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`
  console.log(i);
}
}

ajoutPanier();

document.getElementById("totalQuantity").innerHTML = panier.length;