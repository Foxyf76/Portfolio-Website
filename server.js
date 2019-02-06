const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const cors = require('cors');

///

var fs = require("fs");

// Register Handlebars view engine
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

// Use Semantic UI
app.use("/semantic", express.static(__dirname + "/semantic"));

app.use(express.static(__dirname + "/views"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/counter.json", express.static(__dirname + "/counter.json"));
app.use("/js", express.static(__dirname + "/js"));

// CORS
app.use(cors({credentials: true, origin: 'http://localhost:5000'}));
app.all("/*", function (req, res, next) {

  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials",true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

////

// Use Handlebars view engine
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/more", (req, res) => {
  res.render("more.hbs");
});

app.get("/blog", (req, res) => {
  res.render("blog.hbs");
});

app.get("/blog/january", (req, res) => {
  res.render("january.hbs");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("App is running → PORT 5000");
});
