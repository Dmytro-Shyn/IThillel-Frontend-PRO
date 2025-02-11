let addressBook = {
  contacts: [
    { name: "Dmytro", phone: "+380123456789", email: "dmytro@example.com" },
    { name: "Anna", phone: "+380987654321", email: "anna@example.com" },
    { name: "Oleg", phone: "+380555555555", email: "oleg@example.com" }
  ],
  findNames(someName) {
    let foundContacts = this.contacts.filter(contact => contact.name === someName)
    console.log(foundContacts)
  },
  addContact(name, phone, email) {
    this.contacts.push({ name: name, phone: phone, email: email });
  }
};

console.log(addressBook.contacts);
addressBook.findNames('Dmytro')
addressBook.addContact('Petro', '+380555555555', "petro@example.com")
addressBook.findNames('Petro')
console.log(addressBook.contacts);

