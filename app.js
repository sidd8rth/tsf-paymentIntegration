const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded ({
  extended: true
}));

app.get("/", function(req,res){
  res.render("index")
})

app.get("/contact",function(req,res){
  res.render("contact")
})

app.get("/about",function(req,res){
  res.render("about")
})

app.get("/donate",function(req,res){
  res.render("donate")
})

app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("Server started");
})
