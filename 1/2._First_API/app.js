// const express = require("express");
// const app = express();

// import
const app = require("express")();
const request = require('request');

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

const dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

app.get("/time", (req, res) => {
    let date = new Date;
    const time = {
        "date": date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear(),
        "time": date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        "today": dayArray[date.getDay()-1]
    }
    res.send(time);
});

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    return res.send({
        "id": req.params.id
    });
});

app.get("/search", (req, res) => {
    console.log(req)
    return res.send(req.query);
});

app.get("/google", (req, res) => {
    request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  return res.send(body);
    });
});

app.get("/documentation", (req, res) => {
    // return res.redirect("/documentation2")
    return res.sendFile(__dirname + "/public/" + req.url + ".html");
});

app.get("/documentation2", (req, res) => {
    return res.sendFile(__dirname + "/public/documentation2.html");
});

// universel controller
// app.get("/:name", (req, res) => {
//     return res.sendFile(__dirname + '/public/' + req.params.name + '.html');
// });
