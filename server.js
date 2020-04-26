// import du module servant à créer l'application web 
const express = require("express");
// initialisation du module express
const app = express();

const port = 3000;
app.set("port", port);
app.listen(port, function () {
    console.log("API running on localhost : " + port);

})
app.get("/", function (rec, res) {
    console.log(" Http Request get on route /");
    res.send({
        message: "http request"
    })
})

app.get("/login", function (rec, res) {
    console.log(" Http Request get on route /");
    res.send({
        message: "http request login"
    })
})