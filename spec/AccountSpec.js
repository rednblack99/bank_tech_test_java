describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("can deposit £1000 and update balance", function() {
    account.deposit(1000)
    expect(account.balance).toEqual(1000);
  })

});
