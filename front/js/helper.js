class Helper {
    constructor() { }
    pastilleArticles = (storage) => {
        let spanPastille = document.getElementById("spanPastille");

        if (typeof spanPastille != undefined && spanPastille != null) {
            spanPastille.textContent = storage.length;

        } else {
            let pastille = document.querySelector("nav").appendChild(document.createElement("span")).setAttribute("id", "spanPastille");
            let _spanPastille = document.getElementById("spanPastille");

            if (storage != null) {
                _spanPastille.textContent = storage.length;
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

        }
    }

    ajoutArticles() {
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
    }

    supprimeArticle() {
        /* ------------- supprimer un article depuis le panier -------------- */
        const supprArticle = document.querySelectorAll(".deleteItem");
        for (let j = 0; j < supprArticle.length; j++) {
            supprArticle[j].addEventListener("click", function () {
                panier.splice(j, 1);
                localStorage.setItem("panier", JSON.stringify(panier));
                location.reload();
            })
        }
    }

    quantiteTotalePanier() {
        /* ------------- quantité totale -------------- */
        let quantitePanier = document.getElementsByClassName('itemQuantity');
        let quantiteTotale = 0;
        for (let i = 0; i < quantitePanier.length; i++) {
            quantiteTotale += quantitePanier[i].valueAsNumber;
        }
        let totalArticles = document.getElementById('totalQuantity');
        totalArticles.textContent = quantiteTotale;
    }

    prixTotalPanier() {
        /* ------------- prix total -------------- */
        let quantitePanier = document.getElementsByClassName('itemQuantity');
        let prixTotal = 0;
        for (let j = 0; j < quantitePanier.length; j++) {
            prixTotal += quantitePanier[j].valueAsNumber * panier[j].price;
        }
        let totalPanier = document.getElementById('totalPrice');
        totalPanier.textContent = prixTotal;
    }

}