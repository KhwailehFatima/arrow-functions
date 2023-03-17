'use strict'

const ClaimedDealModel = require('../DatabaseModels/ClaimedDeal.model');
const { userModel, dealModel, claimedDealModel } = require('../DatabaseModels/index')


/******************** USER **********************/
const addUser = async (req, res) => {
    try {
        const newUser = req.body;
        // console.log({ newUser })
        const addedUser = await userModel.create(newUser);
        console.log({ addedUser })
        res.status(201).json(addedUser);
    } catch (error) {
        res.status(500).send(error)
    }
}

const allUser = async (req, res) => {
    const users = await userModel.findAll({ limit: 10 });
    res.status(200).json(users)
};

/********************* DEAL ***********************/

const createDeal = async (req, res) => {
    try {
        const newDeal = req.body;
        // console.log({ newDeal })
        const addedDeal = await dealModel.create(newDeal);
        console.log({ addedDeal })
        res.status(201).json(addedDeal);
    } catch (error) {
        res.status(500).send(error)
    }
}

const allDeal = async (req, res) => {
    const deals = await dealModel.findAll();
    res.status(200).json(deals)
}

const createClaimedDeal = async (req, res) => {
    try {
        console.log(req.body.User_ID)
        const newClaimedDeal = req.body;
        console.log({ newClaimedDeal })
        const addedClaimedDeal = await claimedDealModel.create(newClaimedDeal,);
        res.status(201).json(addedClaimedDeal);
    } catch (error) {
        res.status(500).send(error)
    }
}
const allClaimedDeal = async (req, res) => {
    const ClaimedDeals = await ClaimedDealModel.findAll();
    res.status(200).json(ClaimedDeals)
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        console.log({id})
        const deletedUser= await userModel.destroy({
            where: {id}
        })
        console.log({userModel})
    } catch (error) {
        console.error( `Error during the deleting with the id: ${id}` );

    }
}

module.exports = {
    addUser,
    allUser,
    deleteUser,
    createDeal,
    allDeal,
    createClaimedDeal,
    allClaimedDeal
}