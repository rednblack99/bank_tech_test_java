class Account {
  constructor() {
    this.transactions= []
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
  }

  withdraw(amount) {
    this.balance -= amount
  }

}
