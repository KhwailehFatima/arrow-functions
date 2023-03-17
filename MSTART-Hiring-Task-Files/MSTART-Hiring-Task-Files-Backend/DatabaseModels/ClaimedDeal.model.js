'use strict';
 
module.exports=(sequelize, DataTypes)=>{
    const ClaimedDeals= sequelize.define('ClaimedDeals',{
        // User_ID:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //  },
        // Deal_ID:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //  },
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
        Amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Currency: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return ClaimedDeals;
}