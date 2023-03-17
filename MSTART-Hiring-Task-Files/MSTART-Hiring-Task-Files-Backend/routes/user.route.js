'use strict'

const express = require('express');
const { addUser, allUser, deleteUser, createDeal, allDeal, createClaimedDeal, allClaimedDeal } = require('../controllers/user.controllers');
const router = express.Router();


// router.post('adduser', uploadItemImages.array( "uploadedImages", 4 ), addUser)
router.post('/adduser', addUser);
router.get('/users', allUser);

router.post('/createdeal', createDeal);
router.get('/deals', allDeal);

router.post('/createclaimeddeal', createClaimedDeal);
router.get('/claimeddeals', allClaimedDeal);
router.delete('/users/:id', deleteUser);

module.exports = router;