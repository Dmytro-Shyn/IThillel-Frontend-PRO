class BankAccount {
  constructor(wallet) {
    this.wallet = wallet;
  }

  deposit(value) {
    this.wallet += value;
  }

  getBalance() {
    return this.wallet;
  }

  withdraw(value) {
    this.wallet -= value;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
