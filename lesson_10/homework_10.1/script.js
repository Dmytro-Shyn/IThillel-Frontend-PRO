let user = {
  name: 'Dmytro',
  age: 26,
  location: 'Nova Ushica',
  showName() {
    console.log(this.name);
  },
  showAge() {
    console.log(this.age);
  },
  showLocation() {
    console.log(this.location);
  },
  showUser() {
    console.log(`Привіт користувач ${this.name} тобі ${this.age}. Ти проживаєш в ${this.location}.`);
  }
}

user.showName();
user.showAge();
user.showLocation();
user.showUser();