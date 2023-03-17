// 'use strict'

// const { dealModel } = require('../DatabaseModels/index');

// const createDeal = async (req, res) => {
//     console.log(req)
//     try {
//         const newDeal = req.body;
//         console.log({ newDeal })
//         const addedDeal = await dealModel.create(newDeal);
//         console.log({ addedDeal })
//         res.status(201).json(addedDeal);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// }

// const allDeal = async (req, res) => {
//     const deals = await dealModel.findAll();
//     res.status(200).json(deals)
// }

// module.exports = {
//     createDeal,
//     allDeal
// }