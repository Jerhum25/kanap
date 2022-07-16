class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }}

/* ------------- récupération des articles dans l'API-------------- */
fetch("http://localhost:3000/api/products")
    .then(data => data.json())
    .then(jsonListProducts => {
        for (let jsonProduct of jsonListProducts){
            let product = new Product(jsonProduct);

            let lien = document.querySelector("#items").appendChild(document.createElement("a"));
            lien.href = `./product.html?id=${product._id}`;

            let article = lien.appendChild(document.createElement("article"));

            let image = article.appendChild(document.createElement("img"));
            image.src = `${product.imageUrl}`;
            image.alt = `${product.altTxt}`;

            let nom = article.appendChild(document.createElement("h3"));
            nom.className = "ProductName";
            nom.innerHTML = `${product.name}`;

            let desc = article.appendChild(document.createElement("p"));
            desc.className = "productDescription";
            desc.innerHTML = `${product.description}`;

        }
    });

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
