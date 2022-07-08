// console.log(window.location.href)

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
            // console.table(colors);
            let productColors = document.createElement("option");
            document.querySelector("#colors")
                .appendChild(productColors)
                .innerHTML = `<option value="${colors}">${colors}</option>`;
        }
        // addToCart.onclick = (e) => {
        //     if (colors.value == "null" || colors.value == "") {
        //         alert("Veuillez choisir une couleur !")
        //     }
        //     else if (quantity.value < 1 || quantity.value > 100) {
        //         alert("Veuillez choisir une quantité entre 1 et 100 !")
        //     }
        //     else {
        //         let articlesPanier = [];
        //         const save = {};
        //         save.name = product.name;
        //         save.id = product._id;
        //         save.imageUrl = product.imageUrl;
        //         save.altTxt = product.altTxt;
        //         save.price = product.price;
        //         save.description = product.description;
        //         save.color = colors.value;
        //         save.quantity = quantity.value;
        //         articlesPanier.push(save);

        //         localStorage.setItem("panier", JSON.stringify(articlesPanier));
        //         // localStorage.setItem("id", product._id)
        //         // localStorage.setItem("imageUrl", product.imageUrl)
        //         // localStorage.setItem("altTxt", product.altTxt)
        //         // localStorage.setItem("price", product.price)
        //         // localStorage.setItem("description", product.description)
        //         // localStorage.setItem("color", colors.value)
        //         // localStorage.setItem("quantity", quantity.value)
        //         console.log(JSON.parse(localStorage.panier));
        //     }
        // }

        const quantityProduct = document.querySelector("#quantity");


        //Quantité du produit
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
                console.log(articlesPanier);
                console.log(save.id)


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
                        `Vous avez ${numberKanap} ${save.name} ${save.color} dans le pannier`

                    } else {
                        //Et si le produit existe pas je le push dans le tableau
                        articlesPanier.push(save)
                        localStorage.setItem("panier", JSON.stringify(articlesPanier))
                        document.querySelector(".item__content__settings__quantity").appendChild(document.createElement("p")).textContent =
                        `Vous avez ${numberKanap} ${save.name} ${save.color} dans le pannier`
                    }
                } else {
                    // Permet de crée le premier produit
                    articlesPanier.push(save)
                    localStorage.setItem("panier", JSON.stringify(articlesPanier))
                    document.querySelector(".item__content__settings__quantity").appendChild(document.createElement("p")).textContent =
                        `Vous avez ${numberKanap} ${save.name} ${save.color} dans le panier`
                }
                let pastille = document.querySelector("nav").appendChild(document.createElement("span"));
                let nav_ = document.getElementsByTagName("nav")[0];

                for (let d = 0; d < nav_.children.length; d++) {
                    console.log(nav_.children[d]);

                    
                }

                pastille.textContent = articlesPanier.length;
                pastille.style.fontSize = "12px"
                pastille.style.color = "black";
                pastille.style.border = "1px solid black";
                pastille.style.borderRadius = "15px";
                pastille.style.marginLeft = "10px"
                pastille.style.display = "flex";
                pastille.style.alignItems = "center";
                pastille.style.justifyContent = "center";
                pastille.style.alignSelf = "center"
                pastille.style.height = "20px";
                pastille.style.width = "20px";

            }

            // console.log(JSON.parse(localStorage.panier))
        }

    }
    );

