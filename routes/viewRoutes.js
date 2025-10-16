const express = require('express');

const router = express.Router();
const viewsController = require('./controllers/viewsController');

router.get('/', (req, res) =>
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Jonas',
  }),
);

router.get('/overview', viewsController.getOverview);

router.get('/tour', viewsController.getTour);

module.exports = router;
