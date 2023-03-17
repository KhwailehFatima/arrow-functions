'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const user = require('./user.model');
const deal = require('./deal.model');
const claimedDeal = require('./ClaimedDeal.model');
const DATABASE_URL = process.env.DATABASE_URL;

// const Collection=require('../collection/collection')
const sequelizeOption = {
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOption);

const userModel = user(sequelize, DataTypes);
const dealModel = deal(sequelize, DataTypes);

const claimedDealModel = claimedDeal(sequelize, DataTypes);

// const userCollection= new Collection(userModel);
console.log(dealModel)

userModel.hasMany( claimedDealModel, { foreignKey: 'User_ID' } );
claimedDealModel.belongsTo( userModel, { foreignKey: 'User_ID' } );

dealModel.hasMany( claimedDealModel, { foreignKey: 'Deal_ID' } );
claimedDealModel.belongsTo( dealModel, { foreignKey: 'Deal_ID' } );

module.exports = {
    db: sequelize,
    userModel,
    dealModel,
    claimedDealModel
    // userCollection
}