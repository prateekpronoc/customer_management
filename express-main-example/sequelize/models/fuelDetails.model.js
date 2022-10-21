const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('fuel_details', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		vehicleUuid: {
			allowNull: true,
			type: DataTypes.STRING,
             field : 'vehicle_uuid'
		},
        vehicleId :{
            allowNull:true,
            type: DataTypes.BIGINT,
            field : 'vehicle_id'
        },
        odometerReading :{
            allowNull:true,
            type: DataTypes.INTEGER,
            field :'odometer_reading'
        },
        pricePerUnit :{
            allowNull:true,
            type: DataTypes.DOUBLE,
            field : 'price_per_unit'
        },
        quantity :{
            allowNull:true,
            type: DataTypes.DOUBLE,
            field : 'quantity'
        },
        totalAmount :{
            allowNull:true,
            type: DataTypes.DOUBLE,
            field : 'total_amount'
        },
        filledBy :{
            allowNull:true,
            type: DataTypes.STRING,
            field : 'filled_by'
        },
        createdBy :{
            allowNull:true,
            type: DataTypes.BIGINT,
            field : 'created_by'
        },
        modifiedBy:{
            allowNull : true,
            type : DataTypes.BIGINT,
            field : 'modified_by'
        },
        createdOn: {
            type: 'TIMESTAMP',
            // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true,
            field : 'created_on'
          },
          modifiedOm: {
            type: 'TIMESTAMP',
            // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true,
            field : 'modified_on'
          }
        
	},{
        timestamps: false
    });
};




  