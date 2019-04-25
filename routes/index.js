const morgan = require('morgan');
const express = require('express');
const router = express.Router();
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views/index');

router.get('/', (req, res, next) => {
  res.send(main(''))
})


module.exports = router;
