const vm = new Vue({
    el: '#main',
    data: {
  	burgerMenu: burgerList,
	infoSent: false, 
	name: "", 
	email: "",
	street: "",
	house: "",
	payment: 'Credit/debit card',
	gender: 'male', 
	pickedBurgers: []
    } ,
    methods: {
	sendInfo: function() {
	    if (!this.infoSent) {
		this.infoSent = true;
	    } else {
		this.infoSent = false;
	    }
	}
    }
})
