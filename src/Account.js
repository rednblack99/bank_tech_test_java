class Account {
  constructor() {
    this.transactions= []
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
  }

  show_balance() {
    return "Hello, world"
  }

}
