const coffeeShop = {
  beans: 40,
  money: 50,

  drinkRequirements: {
    latte: {beansRequirement: 10, price: 20},
    americano: {beansRequirement: 5, price: 10},
    doubleShot: {beansRequirement: 15, price: 29},
    frenchPress: {beansRequirement: 12, price: 32},
  },

  buyBeans(amount) {
    // Beans price: 1$ per bean
    if (this.money >= amount) {
      this.money -= amount;
      this.beans += amount
      console.log(`Bought ${amount} beans, we not have ${this.beans} beans and ${this.money} shkalim`);      
    }
    else {
      console.log('We dont have enough money for beans, guess we have to close down the business :(');      
    }
  },

  buyDrink(drinkType) {
    if (drinkType in this.drinkRequirements) {
      if (this.beans < this.drinkRequirements[drinkType].beansRequirement) {
        console.log('Sorry we are out of beans');        
      }
      else { // Make the coffe
        this.beans -= this.drinkRequirements[drinkType].beansRequirement;
        this.money += this.drinkRequirements[drinkType].price
        console.log('There you go, 1 ', drinkType);
        console.log('~now our beans count is only ', this.beans);                
      }
    }
    else {
      console.log('Sorry we dont do that here');      
    }
  },

  makeDrink: function (drinkType) {    
    if (drinkType in this.drinkRequirements) {
      if (this.beans < this.drinkRequirements[drinkType]) {
        console.log('Sorry we are out of beans');        
      }
      else { // Make the coffe
        this.beans -= this.drinkRequirements[drinkType];
        console.log('There you go, 1 ', drinkType);
        console.log('~now our beans count is only ', this.beans);                
      }
    }
    else {
      console.log('Sorry we dont do that here');      
    }
  }
}

coffeeShop.buyDrink("latte"); 
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should console "Sorry, we're all out of beans"
