function menuItem(name, kcal, gluten, lactose, ingredient, imgPath) {
    this.name = name;
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.ingredient = ingredient;
    this.imgPath = imgPath;
}

function printItem(item) {
	let itemString = item.name + ' Calories: ' + item.kcal;
  if (item.gluten) {
  	itemString = itemString + " Contains gluten"
  }
  if (item.lactose) {
  	itemString = itemString + " Contains lactose"
  }
    return itemString;
}

let menu = [new menuItem("first burger", 500000, true, false, "Cheese", "https://cdn-rdb.arla.com/Files/arla-se/1361781217/43b7c050-b61b-4baa-8eb6-5a8ebb896bc4.jpg?crop=(0,220,0,-250)&w=1269&h=545&ak=f525e733&hm=7f223915"), new menuItem("second burger", 5, false, true, "No cheese", "https://www.studentkortet.se/wp-content/uploads/2019/12/burger-king-website.jpg"), new menuItem("third burger", 500, false, false, "Pickeled onions", "https://www.56kilo.se/wp-content/uploads/2019/09/03092019-11.jpg"), new menuItem("fourth burger", 5000, true, true, "Everything", "https://media-cdn.tripadvisor.com/media/photo-s/18/9a/d7/1c/the-devils-steak-burger.jpg"), new menuItem("fifth burger", 50, false, false, "Nothing", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bulka_mala_pszenna.jpg/380px-Bulka_mala_pszenna.jpg")];

let burgerList = document.getElementById("burgerList");
for (var burger of menu) 
{
	let listItem = document.createElement("li");
  let listValue = document.createTextNode(printItem(burger));
  listItem.appendChild(listValue);
  burgerList.appendChild(listItem);
}
