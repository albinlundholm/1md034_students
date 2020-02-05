function menuItem(name, kcal, gluten, lactose, ingredient, imgPath) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.ingredient = ingredient;
    this.imgPath = imgPath;
}


function printItem(item) {
    return [item.name, item.kcal];
}

let item1 = new menuItem("first burger", 500000, true, false, "Cheese", "https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(0,220,0,-250)&w=1269&h=545&ak=f525e733&hm=7f223915");

let item2 = new menuItem("second burger", 5, false, true, "No cheese", "https://www.studentkortet.se/wp-content/uploads/2019/12/burger-king-website.jpg");

let item3 = new menuItem("third burger", 500, false, false, "Pickeled onions", "https://www.56kilo.se/wp-content/uploads/2019/09/03092019-11.jpg");

let item4 = new menuItem("fourth burger", 5000, true, true, "Everything", "https://media-cdn.tripadvisor.com/media/photo-s/18/9a/d7/1c/the-devils-steak-burger.jpg");

let item5 = new menuItem("fifth burger", 50, false, false, "Nothing", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bulka_mala_pszenna.jpg/380px-Bulka_mala_pszenna.jpg");

let el = document.getElementById('myID');

let p1 = document.createElement("p");
p1.appendChild(document.createTextNode(printItem(item1)));
el.appendChild(p1);

let p2 = document.createElement("p");
p2.appendChild(document.createTextNode(printItem(item2)));
el.appendChild(p2);

let p3 = document.createElement("p");
p3.appendChild(document.createTextNode(printItem(item3)));
el.appendChild(p3);

let p4 = document.createElement("p");
p4.appendChild(document.createTextNode(printItem(item4)));
el.appendChild(p4);

let p5 = document.createElement("p");
p5.appendChild(document.createTextNode(printItem(item5)));
el.appendChild(p5);
