const assert = require('assert');
const phonebook = require('./phonebook');

describe("phonebook", () => {
        it("lastName of isaac is bazalaki", () => {
            assert.equal("isaac bazalaki", search("bazalaki"));
        });
        it("firstName of ed is ed", () => {
            assert.equal("ed muwanguzi", search("ed"));
        });
        it("phoneNumber of isaac bazalaki is 0750762305", () => {
            assert.equal("isaac bazalaki", search("0750762305"));
        });
    });