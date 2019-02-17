class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date
    this.credit = credit
    this.debit = debit
    this.balance = balance
  }

  is_credit() {
    format(this.credit)
  }

  is_debit() {
    format(this.debit)
  }

  format(amount) {
    return(amount != 0 ? amount.toString + ".00 " : nil)
  }

}
