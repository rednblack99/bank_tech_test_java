# Bank Tech Test in Java

```
         _._._                       _._._
        _|   |_                     _|   |_
        | ... |_._._._._._._._._._._| ... |
        | ||| |  o NATIONAL BANK o  | ||| |
        | """ |  """    """    """  | """ |
   ())  |[-|-]| [-|-]  [-|-]  [-|-] |[-|-]|  ())
  (())) |     |---------------------|     | (()))
 (())())| """ |  """    """    """  | """ |(())())
 (()))()|[-|-]|  :::   .-"-.   :::  |[-|-]|(()))()
 ()))(()|     | |~|~|  |_|_|  |~|~| |     |()))(()
    ||  |_____|_|_|_|__|_|_|__|_|_|_|_____|  ||
 ~ ~^^ @@@@@@@@@@@@@@/=======\@@@@@@@@@@@@@@ ^^~ ~
      ^~^~                                ~^~^
```

## Description

A basic banking application built in JavaScript to be used on the command line. Users can:

* Create an account
* Deposit money
* Withdraw money
* Display their balance along with a history of all transactions made on their account

## Tech Stack
JavaScript
Jasmine  

## Installation

```bash
$ git clone https://github.com/rednblack99/bank_tech_test
$ cd bank_tech_test
$ open index.html

$ open SpecRunner.html # Run the tests to ensure it works
```

## How to Use

This app is run entirely from the command line. To begin from the index.html webpage. 

* Right click and select `inspect`
* Select the `console` tab of the developer tools

```bash
$ account = new Account()
```

You can then run the following commands to interact with your account (`amount` should be replaced with the integer you could like to deposit or withdraw from your account):

```bash
$ account.deposit(amount) # Deposits a specified value in your account
$ account.withdraw(amount) # Withdraws a specified value from your account
$ account.show_balance() # Displays your balance and a record of all transactions
```

## Screenshot

<!-- ![Banking Tech Test Screenshot](https://i.imgur.com/rofOEsB.png)

![Current Test Results and Coverage](https://i.imgur.com/dQIo62E.png) -->