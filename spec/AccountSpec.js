describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("can deposit £1000 and update balance", function() {
    account.deposit(1000)
    expect(account.balance).toEqual(1000);
  })

  it("can withdraw £500 and update balance", function() {
    account.withdraw(500)
    expect(account.balance).toEqual(-500);
  })

  it("Can display the balance", function() {
    account.deposit(1000, Transaction, new Date(2001, 01, 01))
    account.withdraw(500, Transaction, new Date(2001, 01, 01))
    expect(account.show_balance()).toEqual("date || credit || debit || balance\n1/2/2001 || 1000.00 || || 1000.00\n1/2/2001 || || 500.00 || 500.00\n")
  })

});
