const express = require('express');
const addPage = require("../views/addPage")
const router = express.Router();
const { Page } = require("../models");

router.get('/', (req, res, next) => {
  res.send('got to GET /wiki/');
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  try{
    const page = await Page.create({
      title: req.body.title,
      slug: createSlug(req.body.title),
      content: req.body.pagecontent,
      status: req.body.pagestatus
    })
  } catch(e) {
    next(e)
  }
});

function createSlug(title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
