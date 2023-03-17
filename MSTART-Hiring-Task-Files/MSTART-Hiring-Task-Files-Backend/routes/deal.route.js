'use strict'

const express = require('express');
const { createDeal, allDeal } = require('../controllers/deal.controllers');
const router = express.Router();


// router.post('adduser', uploadItemImages.array( "uploadedImages", 4 ), addUser)
router.post('/createdeal', createDeal);
router.get('/deals', allDeal);

module.exports = router;