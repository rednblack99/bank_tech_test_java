describe("Transaction", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction("01/01/2001", 1000, 500, 0);
  });

  it("has a date", function() {
    expect(transaction.date).toEqual("01/01/2001");
  })

  it("has a credit", function() {
    expect(transaction.credit).toEqual(1000);
  })

  it("has a debit", function() {
    expect(transaction.debit).toEqual(500);
  })

  it("has a balance", function() {
    expect(transaction.balance).toEqual(0);
  })

  it("Can format the date", function() {
    transaction = new Transaction(new Date(2001, 0, 1), 1000, 500, 0);
    expect(transaction.date_format()).toEqual("1/1/2001")
  })

});
