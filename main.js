const restaurant = {
  name: "Bob's Burgers",
  orders: [],
  placeOrder: function(meal) {
    this.orders.push(meal);
  },
  getOrders: function() {
    // console.log(`You have ${this.orders.length} order`);
    // for (i = 0; i < this.orders.length; i++) {
    //   if (this.orders[i].fries === true) {
    //     console.log(this.orders[i]);
    //   }
    // }
    console.table(this.orders);
  },
  getOrdersFries: function() {
    const fryOrders = [];
    console.log(`You have ${this.orders.length} order`);
    for (i = 0; i < this.orders.length; i++) {
      if (this.orders[i].fries === true) {
        fryOrders.push(this.orders[i]);
      }
    }
    console.table(fryOrders);
  }
};

const chickenComboMeal = {
  sandwichType: "tenders",
  fries: true,
  drinkSize: "large"
};
const burgerComboMeal = {
  sandwichType: "burger",
  fries: false,
  drinkSize: "large"
};

const fishComboMeal = {
  sandwichType: "filet o fish",
  fries: true,
  drinkSize: "medium"
};

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);
restaurant.placeOrder(burgerComboMeal);
restaurant.placeOrder(burgerComboMeal);
restaurant.placeOrder(fishComboMeal);
restaurant.placeOrder(fishComboMeal);
restaurant.placeOrder(fishComboMeal);
restaurant.placeOrder(fishComboMeal);
restaurant.placeOrder(fishComboMeal);
// console.log(restaurant.orders);
restaurant.getOrders();
// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
// for (let i = 0; i < restaurant.orders.length; i++) {}
