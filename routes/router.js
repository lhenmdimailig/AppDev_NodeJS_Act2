const express = require('express');
const router = express.Router();
const lhend = require('../controller/lhendController.js');

router.get('/', lhend.home);
router.get('/about', lhend.about);
router.get('/contact', lhend.contact);
router.get('/testimonial', lhend.testimonial); // Keep only one
router.get('/feature', lhend.feature); // Move feature to its own route
router.get('/product', lhend.product); // Move product to its own route
router.get('/howtouse', lhend.howtouse); // Move howtouse to its own route
router.get('/blog', lhend.blog); // Move blog to its own route
router.get('/home', lhend.home);
router.get('/notFound', lhend.notFound); // Move home to its own route

module.exports = router;
