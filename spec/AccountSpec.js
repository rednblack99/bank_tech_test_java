describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("can show a custom message", function() {
    expect(account.show_balance()).toEqual("Hello, world");
  })

  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);
  // });
});
