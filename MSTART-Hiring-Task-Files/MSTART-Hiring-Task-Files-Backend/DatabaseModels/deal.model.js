'use strict';

module.exports = (sequelize, DataTypes) => {
    const deal = sequelize.define('deal', {
        Server_DateTime: {
            type: DataTypes.DATE,
            defaultValue: new Date(Date.now()),
            allowNull: true
        },
        DateTime_UTC: {
            type: DataTypes.DATE,
            defaultValue: new Date(Date.now()),
            allowNull: true
        },
        Update_DateTime_UTC: {
            type: DataTypes.DATE,
            defaultValue:new Date(Date.now()),
            allowNull: true
        },
        Last_Login_DateTime_UTC: {
            type: DataTypes.DATE,
            defaultValue: new Date(Date.now()),
            allowNull: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'New Deal'
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Status: {
            type: DataTypes.ENUM('Active', 'In Active', 'Deleted', 'Expired'),
            defaultValue: 'Active'
        },
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Currency: {
            type: DataTypes.STRING,
            allowNull:true
        }
    });
    return deal;
}