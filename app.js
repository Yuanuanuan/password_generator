const express = require('express');
const { engine } = require('express-handlebars')
const app = express();
const port = 3000;
const generatePassword = require('./main')

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body;
  const password = generatePassword(option);
  res.render('index', {password, option})
})

app.listen(port, () => {
  console.log(`伺服器已運作，監聽在 http://localhost:${port}`)
})