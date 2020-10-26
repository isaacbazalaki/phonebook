//variables with names and details
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

//variable with all  the  contacts and their details
var contacts = [isaac, ed];

//lists the relevant details to be displayed
function printPerson (person) {
    console.log(person.firstName + " " + person.lastName, "\n", person.phoneNumber);
}

//creates the list of names
function list () {
    for (var i = 0; i < contacts.length; i++)
      printPerson(contacts[i]);
  }
  list();
