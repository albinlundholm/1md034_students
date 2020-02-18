/*let submitButton = document.getElementById("submitButton");
submitButton.onclick = function () {
    console.log("Button Clicked!");
    console.log(getInfo());
}
*/
let getInfo = function () {
    
    let infoArray = [document.getElementById("fullname").value, document.getElementById("email").value, document.getElementById("street").value, document.getElementById("house").value, document.getElementById("paymentmethod").value, document.querySelector('input[name=gender]:checked').value];
    
    return infoArray;
}

/*
let menu = document.getElementById("menu");

for (var burger of burgerList) {
    let box = document.createElement("div");
    
    let nameP = document.createElement("p");
    nameP.appendChild(document.createTextNode(burger.name));
    box.appendChild(nameP);
    
    let image = document.createElement("img");
    image.src = burger.imgPath;
    image.classList.add("burgerImage"); 
    box.appendChild(image);
    let infoList = document.createElement("ul");

    let cal = document.createElement("li");
    cal.appendChild(document.createTextNode("Calories: " + burger.kcal));
    infoList.appendChild(cal);

    let ingredient = document.createElement("li");
    ingredient.appendChild(document.createTextNode(burger.ingredient));
    infoList.appendChild(ingredient);
    
    if (burger.gluten) {
	let gluten = document.createElement("li");
	gluten.appendChild(document.createTextNode("Contains gluten"));
	gluten.classList.add("allergen");
	infoList.appendChild(gluten);
    }

    if (burger.lactose) {
	let lactose = document.createElement("li");
	lactose.appendChild(document.createTextNode("Contains lactose"));
	lactose.classList.add("allergen");
	infoList.appendChild(lactose);
    }
    
    box.appendChild(infoList);
    menu.appendChild(box);
}
*/
