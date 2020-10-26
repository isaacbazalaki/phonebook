var isaac = {
    firstName: "Isaac",
    lastName: "Bazalaki",
    phoneNumber: "0750762305"
};

var ed = {
    firstName: "Ed",
    lastName: "Muwanguzi",
    phoneNumber: "0772675756"
};

var contacts = [isaac, ed];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName, "\n", person.phoneNumber);
}

var list = function () {
    for (var i = 0; i < contacts.length; i++)
      printPerson(contacts[i]);
  }
  list();
