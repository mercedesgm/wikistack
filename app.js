const morgan = require('morgan');
const express = require('express');
const routes = require('./routes/index');
const { db } = require('./models');

const app = express();

db.authenticate().then(() => {
  console.log('connected to the database')
})


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.redirect('/index')
})

app.use('/index', routes)

app.listen(3000, () => {
  console.log('its happeninggg')
})
