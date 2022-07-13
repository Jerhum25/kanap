var parsedUrl = new URL(window.location.href);
var urlId = parsedUrl.searchParams.get("id");
// console.log(urlId)

fetch(`http://localhost:3000/api/products/${urlId}`)
    .then(data => data.json())
    .then(product => {
        let img = document.querySelector(".item__img").appendChild(document.createElement("img"));
        img.src = `${product.imageUrl}`
        img.alt = `${product.altTxt}`

        document.querySelector("#title").innerHTML = product.name;
        document.querySelector("#price").innerHTML = product.price;
        for (let colors of product.colors) {
            let productColors = document.createElement("option");
            document.querySelector("#colors")
                .appendChild(productColors)
                .innerHTML = `<option value="${colors}">${colors}</option>`;
        }


        //Quantité du produit
        const quantityProduct = document.querySelector("#quantity");
        let numberKanap;
        quantityProduct.addEventListener('change', (e) => {
            numberKanap = parseInt(e.target.value);
        })


        addToCart.onclick = (e) => {
            if (colors.value === "null" || colors.value === "") {
                alert("Veuillez choisir une couleur !")
            }
            else if (quantity.value < 1 || quantity.value > 100) {
                alert("Veuillez choisir une quantité entre 1 et 100 !")
            }
            else {
                let articlesPanier = [];
                const save = {
                    name: product.name,
                    id: product._id,
                    imageUrl: product.imageUrl,
                    altTxt: product.altTxt,
                    price: product.price,
                    description: product.description,
                    color: colors.value,
                    quantity: quantity.value
                };
                // console.log(articlesPanier);
                // console.log(save.id)


                //Envoie les données dans le local storage + change les quantité si la couleur et l'id est la même
                if (typeof localStorage != 'undefined' && localStorage.getItem("panier") != null) {
                    articlesPanier = JSON.parse(localStorage.getItem("panier"));
                    const findProduct = articlesPanier.find((product) =>
                        save.id === product.id && save.color === product.color
                        )
                    if (findProduct) {
                        findProduct.quantity = quantity.value;

                        localStorage.setItem("panier", JSON.stringify(articlesPanier))
                        // et j'informe le clients de la quantité de produits dans sont panier
                        document.querySelector(".item__content__settings__quantity").appendChild(document.createElement("p")).textContent =
                            `Vous avez ${numberKanap} ${save.name} ${save.color} dans le panier`

                    } else {
                        //Et si le produit existe pas je le push dans le tableau
                        articlesPanier.push(save)
                        localStorage.setItem("panier", JSON.stringify(articlesPanier))
                        document.querySelector(".item__content__settings__quantity").appendChild(document.createElement("p")).textContent =
                            `Vous avez ${numberKanap} ${save.name} ${save.color} dans le panier`
                    }
                } else {
                    // Permet de crée le premier produit
                    articlesPanier.push(save)
                    localStorage.setItem("panier", JSON.stringify(articlesPanier))
                    document.querySelector(".item__content__settings__quantity").appendChild(document.createElement("p")).textContent =
                        `Vous avez ${numberKanap} ${save.name} ${save.color} dans le panier`
                }


                let pastille = document.querySelector("nav").appendChild(document.createElement("span")).setAttribute("id", "spanPastille");
                let spanPastille = document.getElementById("spanPastille")
                let nav_ = document.getElementsByTagName("nav")[0];
                // for (let d = 0; d < nav_.children.length; d++) {
                // console.log(nav_.children[d]);
                if (!document.getElementById("spanPastille")) {
                    spanPastille.textContent = articlesPanier.length;
                } else {
                    spanPastille.textContent = articlesPanier.length;
                    spanPastille.style.fontSize = "12px";
                    spanPastille.style.color = "black";
                    spanPastille.style.border = "1px solid black";
                    spanPastille.style.borderRadius = "15px";
                    spanPastille.style.marginLeft = "10px"
                    spanPastille.style.display = "flex";
                    spanPastille.style.alignItems = "center";
                    spanPastille.style.justifyContent = "center";
                    spanPastille.style.alignSelf = "center"
                    spanPastille.style.height = "20px";
                    spanPastille.style.width = "20px";
                }
            }
        }
    }
    );

