class Helper {
    constructor() { }
    pastilleArticles = (storage) => {
        let spanPastille = document.getElementById("spanPastille");

        if (typeof spanPastille != undefined && spanPastille != null) {
            spanPastille.textContent = storage.length;

        } else {
            let pastille = document.querySelector("nav").appendChild(document.createElement("span")).setAttribute("id", "spanPastille");
            let _spanPastille = document.getElementById("spanPastille");

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