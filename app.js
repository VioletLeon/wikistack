const express = require('express');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const { db, Page, User } = require('./models/index');
const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routes/users');

const app = express();

app.use(morgan('dev'));
app.use(
  express.urlencoded({
    extended: false,
  })
);

db.authenticate().then(() => {
  console.log('Connected to the database');
});

app.use('/wiki', wikiRouter);
// app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello');
});

const init = async () => {
  await db.sync({ force: false });
  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`);
  });
};

init();
