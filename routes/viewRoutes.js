const express = require('express');

const router = express.Router();
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

router.get('/', (req, res) =>
  res.status(200).render('base', {
    tour: 'The Forest Hiker',
    user: 'Jonas',
  }),
);

router.get('/overview', viewsController.getOverview);

router.get('/tour/:slug', authController.protect, viewsController.getTour);

// Login

router.get('/login', viewsController.getLoginForm);

module.exports = router;
