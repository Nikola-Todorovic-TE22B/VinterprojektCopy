 const produkten_div = document.querySelector(".varor");

 function addToCart(bild, namn, pris)
 {
    let prod={
        produkten_bild: bild,
        produkten_namn: namn,
        produkten_pris: pris
    }
    let json = window.localStorage.getItem("kundvagn");
    let array = JSON.parse(json);
    if(!array){
        array=[];
    }
    array.push(prod);
    json = JSON.stringify(array);
    window.localStorage.setItem("kundvagn",json);
 }

 function loadCart()
 {
    console.log("ladda kundvagn")
    let json_array = window.localStorage.getItem("kundvagn");
    let array = JSON.parse(json_array);
    if(!array){
        return;
    }
    produkten_div.innerHTML="";
    for(let i = 0; i<array.length; i++){
        let diven = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("scr", array[i].produkten_bild);
        diven.appendChild(img);
        let h2 = document.createElement("h2");
        h2.textContent = (array[i].produkten_namn);
        diven.appendChild(h2);
        let p = document.createElement("p");
        h2.textContent = (array[i].produkten_pris);
        diven.appendChild(p);
        produkten_div.appendChild(diven);
    }
 }

 function fullprice(){}

 function checkOut(){
    localStorage.removeItem('kundvagn')
 }