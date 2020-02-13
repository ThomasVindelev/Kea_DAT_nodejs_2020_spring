// const express = require("express");
// const app = express();

const app = require("express")();

app.get("/", (req, res) => {
    res.send({"message": "Hello there"});
});

app.get("/aboutMe", (req, res) => {
    res.send({"firstName": "Thomas", "lastName": "Vindelev", "hobby": "Music"})
})

app.listen(3000);