const express = require('express');
const { addPage, wikiPage, main } = require('../views/');
const router = express.Router();
const { Page } = require('../models');

router.get('/', async (req, res, next) => {
  let pages = await Page.findAll();
  res.send(main(pages));
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    const page = await Page.create({
      title: req.body.title,
      slug: createSlug(req.body.title),
      content: req.body.pagecontent,
      status: req.body.pagestatus,
    });
    res.redirect(`/wiki/${page.slug}`);
  } catch (e) {
    next(e);
  }
});

function createSlug(title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

router.get('/add', (req, res, next) => {
  res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.send(wikiPage(page, 'username placeholder'));
  } catch (e) {
    next(e);
  }
});

module.exports = router;
