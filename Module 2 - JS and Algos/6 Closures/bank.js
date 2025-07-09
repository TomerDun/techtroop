const Bank = {
    money: 500,
    deposit: cash => {this.money += cash},
    showBalance: function () {
        console.log('Balance: ', this.money);
        
    },
}

module.exports = Bank;