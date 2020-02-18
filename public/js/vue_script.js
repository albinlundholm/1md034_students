'use strict';
const socket = io();

const vm = new Vue({
    el: '#main',
    data: {
	orderCount: 0,
	orders: {},
	order: {details: {x: 0, y: 0}},
  	burgerMenu: burgerList,
	infoSent: false, 
	name: "", 
	email: "",
	payment: 'Credit/debit card',
	gender: 'male', 
	pickedBurgers: [], 
	
    } ,
    methods: {
	sendInfo: function() {
	    if (!this.infoSent) {
		this.infoSent = true;
	    } else {
		this.infoSent = false;
	    }
	},
	getNext: function() {
	    this.orderCount++;
	    return this.orderCount;
	},
	addOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: this.order.details.x,
		    y: this.order.details.y,
		},
		orderItems: this.pickedBurgers,
		customerInfo: [this.name, this.email, this.payment, this.gender],
	    });
	},
	displayOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    
	    this.order.details.x = event.clientX - 10 - offset.x;
	    this.order.details.y = event.clientY - 10 - offset.y;
	}
    }
})
