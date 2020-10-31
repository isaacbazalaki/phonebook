const fs = require('fs');
const path = require('path');

//creating contacts
var isaac = {
    firstName : "isaac",
    lastName : "bazalaki",
    phoneNumber : "0750762305"
};

var sarah = {
    firstName : "sarah",
    lastName : "gabby",
    phoneNumber : "0773387153"
};

var ed = {
    firstName : "ed",
    lastName : "muwanguzi",
    phoneNumber : "0726095816"
};

var jackson = {
    firstName : "jackson",
    lastName : "bazalaki",
    phoneNumber : "07721723445"
};

// console.log (sarah.phoneNumber);
// console.log (isaac.phoneNumber);
// console.log (ed.phoneNumber);
// console.log (jackson.phoneNumber);

//array of the contacts
var contacts = [isaac, sarah, ed, jackson];

// console.log (contacts);

function print (person) {
    console.log (person.firstName + " " + person.lastName, "\n", person.phoneNumber);
};

// print (contacts [0]);
// print (contacts [1]);
// print (contacts [2]);
// print (contacts [3]);

function list () {
    var contactList = contacts.length;
        for (var i = 0; i < contactList; i++){
            print (contacts[i]);
        };
};

// list ();

function search (lastName) {
    var length = contacts.length;
        for (var i = 0; i < length; i++) {
            if (lastName == contacts[i].lastName) {
                print (contacts [i]);
            };
        };
};

// search ("bazalaki");

function searchFirst (firstName) {
    var length = contacts.length;
        for (var i = 0; i < length; i++) {
            if (firstName == contacts[i].firstName) {
                print (contacts [i]);
            };
        };
};

// searchFirst ("isaac");

function searchPhone (phoneNumber) {
    var length = contacts.length;
        for (var i = 0; i < length; i++) {
            if (phoneNumber == contacts[i].phoneNumber) {
                print (contacts [i]);
            };
        };
};

// searchPhone ("0750762305");

function add (firstName, lastName, phoneNumber) {
    var newContact = {
        firstName : firstName,
        lastName : lastName,
        phoneNumber : phoneNumber
    };
        contacts[contacts.length] = newContact
};

add ("bridget", "akankunda", "0777777722");
add ("jeremy", "biko", "0765232323");
add ("ignatius", "aturinda", "0765232323");
add ("mike", "otienno", "0765232323");
add ("walter", "ruganzu", "0765232323");
list ();

fs.readFile ("contacts.json", "utf-8", function (err, data) {
     fs.writeFile ("contacts.json", JSON.stringify(contacts), function(err) {
        if (err) throw err;
            console.log('complete');
     })
});

// fs.writeFile ("contacts.json", JSON.stringify(contacts), function(err) {
//     if (err) throw err;
//     console.log('complete');
//     }
// );

// module.exports = phonebook;