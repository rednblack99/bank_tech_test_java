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

  show_balance() {
    var transaction_history = "date || credit || debit || balance\n"
    this.transactions.forEach(function(transaction) {
      transaction_history += `${transaction.date_format()} || ${transaction.is_credit()}|| ${transaction.is_debit()}|| ${transaction.balance}.00\n`;
    });
    return transaction_history
  }

}
