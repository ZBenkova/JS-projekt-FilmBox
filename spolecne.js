const myFunction = () => {
    const polozky = document.querySelector("#menu-polozky")
   
    if (polozky.classList.contains("show")) {
        polozky.classList.remove("show")
    } else {
         polozky.classList.add("show")
    }

}


const tlacitko = document.querySelector("#menu-tlacitko")
tlacitko.addEventListener("click", myFunction)

