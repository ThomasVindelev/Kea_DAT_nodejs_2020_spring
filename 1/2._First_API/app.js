// const express = require("express");
// const app = express();

const app = require("express")();

app.get("/", (req, res) => {
    res.send({"message": "Hello there"});
});

app.get("/aboutMe", (req, res) => {
    const me = {
        "firstName": "Thomas", 
        "lastName": "Vindelev", 
        "hobby": "Music"
    }
    res.send(me)
})

app.listen(3000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 3000);
});

app.get("/aboutThisWebsite", (req, res) => {
    const website = {
        "port": "3000",
        "type": "Rest API",
        "purpose": "This is an explanation of the website"
    };
    res.send(website);
    // any code after this won't run, because the send() function acts as a return statement
});

app.get("/countries", (req, res) => {
    const denmark = {
        "name": "Denmark"
    };
    const france = {
        "name": "France"
    };
    const countries = {
        denmark,
        france
    }
    res.send(countries);
});