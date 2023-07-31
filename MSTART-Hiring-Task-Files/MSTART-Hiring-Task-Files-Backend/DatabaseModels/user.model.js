'use strict';

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
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
            defaultValue: 'New User'
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Status: {
            type: DataTypes.ENUM('Active', 'In Active', 'Deleted', 'Expired'),
            defaultValue: 'Active'
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Date_Of_Birth: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue:new Date()
        }

    });
 return user;        
}