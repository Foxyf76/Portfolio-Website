const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
///

const fs = require('fs');


///


// Register Handlebars view engine
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));

// Use Semantic UI
app.use("/semantic", express.static(__dirname + '/semantic'));

app.use(express.static(__dirname + '/views'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/counter.json", express.static(__dirname + '/counter.json'));

// Use Handlebars view engine
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
  });

app.get('/more', (req, res) => {
    res.render('more.hbs');
  });

app.get('/blog', (req, res) => {
    res.render('blog.hbs');
  });

  app.get('/blog/january', (req, res) => {
    res.render('january.hbs');
  });

app.listen(process.env.PORT || 5000, () => {
  console.log('App is running → PORT 5000');
});
