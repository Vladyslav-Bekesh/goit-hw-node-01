const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

console.log("i`m working");

const books = require("./db");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allBooks = await books.listContacts();
      return console.log(allBooks);
    case "getById":
      const oneBook = await books.getContactById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.addContact({ name, email, phone });
      return console.log(newBook);
    case "deleteById":
      const deleteBook = await books.removeContact(id);
      return console.log(deleteBook);
    default:
      return console.log("Unknown action");
  }
};


const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);

//! commands and calls

// invokeAction({action: "read"});
// invokeAction({action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({action: "add", name: "Worm", email: "John C. McCrae", phone: "852-741-96"});
// invokeAction({action: "deleteById", id: "rsKkOQUi80UsgVPCcLZZW"});

//node contacts --action read
//node contacts --action getById --id  AeHIrLTr6JkxGE6SN-0Rw
//node contacts --action add --name Worm --email John C. McCrae --phone 852-741-96
//node contacts --action deleteById --id hY_XN7eFBKTWsMKwjE83V