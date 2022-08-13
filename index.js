const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const app = express()

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("about-me.ejs");
});

app.get("/supermarket", function(req, res) {
  res.render("super.ejs");
});

app.get("/contact-me", function(req, res) {
  res.render("contact-me.ejs");
});
app.get("/about-site", function(req, res) {
  res.render("about-site.ejs");
});





app.listen("https://arshamam.github.io/Arsham.rgh/", function() {
    console.log("server started in port 3000")
});