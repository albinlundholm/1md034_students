/*
<div id="myID">
    <h1>Välj en burgare</h1>
    <ul id="burgerList">
    <li v-for="burger in burgerMenu">
      {{ burger.name }} Calories: {{burger.kcal}}
      <span v-if="burger.gluten == true" >Contains gluten</span>
      <span v-if="burger.lactose == true" >Contains lactose</span>
    </li>
    </ul>
</div>
*/

const vm = new Vue({
    el: '#burgerList',
    data: {
  	burgerMenu: menu
    }
})
