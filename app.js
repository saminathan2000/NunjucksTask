const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const PORT = 3000;

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});
app.use(express.static(__dirname + '/'));
const data = require("./data/data.json");
app.get('/', (req, res) => {
  res.render('index.html',{data:data});
});

app.listen(PORT, () => console.dir(`Server running on port ${PORT}`));
