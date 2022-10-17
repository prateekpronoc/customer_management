const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('selfdrive_booking_configs', {
        id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        tenant_id :{
            allowNull: true,
			type: DataTypes.INTEGER
        },
        min_booking_hr :{
            allowNull : true,
            type : DataTypes.DOUBLE,
        },
        booking_buffer_min :{
            allowNull : true,
            type : DataTypes.DOUBLE
        },
        cancellation_lead_time :{
            allowNull : true,
            type :DataTypes.DOUBLE
        },
        min_delivery_charges :{
            allowNull : true,
            type :DataTypes.DOUBLE
        },
        min_pickup_charges :{
            allowNull : true,
            type :DataTypes.DOUBLE
        },
        airport_delivery_charges:{
            allowNull : true,
            type :DataTypes.DOUBLE
        },
        airport_pickup_charges :{
            allowNull : true,
            type :DataTypes.DOUBLE
        },
        created_on :{
            type: 'TIMESTAMP',
            // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
        },
        created_by :{
            allowNull : true,
            type : DataTypes.INTEGER
        },
        modified_on :{
            type: 'TIMESTAMP',
            // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true

        },
        modified_by :{
            allowNull : true,
            type : DataTypes.INTEGER
        }
    },{
        timestamps: false
    });
};



  