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
        addToCart.onclick = (e) => {
            if (colors.value == "null" || colors.value == "") {
                alert("Veuillez choisir une couleur !")
            }
            else if (quantity.value < 1 || quantity.value > 100) {
                alert("Veuillez choisir une quantité entre 1 et 100 !")
            }
            else {
                let articlesPanier = [];
                const save = {};
                save.name = product.name;
                save.id = product._id;
                save.imageUrl = product.imageUrl;
                save.altTxt = product.altTxt;
                save.price = product.price;
                save.description = product.description;
                save.color = colors.value;
                save.quantity = quantity.value;
                articlesPanier.push(save);

                localStorage.setItem("panier", JSON.stringify(articlesPanier));
                // localStorage.setItem("id", product._id)
                // localStorage.setItem("imageUrl", product.imageUrl)
                // localStorage.setItem("altTxt", product.altTxt)
                // localStorage.setItem("price", product.price)
                // localStorage.setItem("description", product.description)
                // localStorage.setItem("color", colors.value)
                // localStorage.setItem("quantity", quantity.value)
                console.log(JSON.parse(localStorage.panier));
            }
        }
    }
    );

