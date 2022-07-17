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
                        // let nombre1 = Number(findProduct.quantity)
                        // let nombre2 = Number(parseInt(quantity.value))

                        // findProduct.quantity = nombre1 + nombre2;

                        findProduct.quantity = findProduct.quantity + quantity.value;

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

                pastilleArticles()
                function pastilleArticles() {
                    let spanPastille = document.getElementById("spanPastille");

                    if (typeof spanPastille != undefined && spanPastille != null) {
                        console.log("existe")
                        spanPastille.textContent = articlesPanier.length;

                    } else {
                        console.log("n'existe pas")
                        let pastille = document.querySelector("nav").appendChild(document.createElement("span")).setAttribute("id", "spanPastille");
                        let _spanPastille = document.getElementById("spanPastille");

                        _spanPastille.textContent = articlesPanier.length;
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
        }

    }
    );


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
