const express = require('express');
const morgan = require('morgan');
const sequelize = require('sequelize');

const app = express();

app.use(morgan('dev'))

app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
})

