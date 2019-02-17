class Account {
  constructor() {
    this.transactions = []
    this.balance = 0
  }

  deposit(amount, transaction = Transaction) {
    this.balance += amount
    this.transactions.push(new transaction(new Date(), amount, 0, this.balance))
  }

  withdraw(amount, transaction = Transaction) {
    this.balance -= amount
    this.transactions.push(new transaction(new Date(), 0, amount, this.balance))
  }

}
