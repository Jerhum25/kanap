// import { getAllProducts } from "../../back/controllers/product";



class Product{
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct);
    }}

fetch("http://localhost:3000/api/products")
    .then(data => data.json())
    .then(jsonListProducts => {
        for (let jsonProduct of jsonListProducts){
            let product = new Product(jsonProduct);
            // document.querySelector(".items")
            //     .innerHTML += `<a href="./product.html?id=${product._id}">
            //     <article>
            //       <img src="${product.imageUrl}" alt="${product.altTxt}">
            //       <h3 class="productName">${product.name}</h3>
            //       <p class="productDescription">${product.description}</p>
            //     </article>
            //   </a>`

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

