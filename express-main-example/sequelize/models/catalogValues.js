const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('catalog_values', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		value: {
			allowNull: false,
			type: DataTypes.STRING
		},
        tenant_id :{
            allowNull:true,
            type: DataTypes.INTEGER
        },
        is_deleted :{
            allowNull:false,
            type: DataTypes.TINYINT,
            defaultValue : 0
        },
        catalogmaster_id :{
            allowNull:false,
            type: DataTypes.INTEGER
        },
        catalogvalue_id :{
            allowNull:true,
            type : DataTypes.INTEGER
        },
        created_on: {
            type: 'TIMESTAMP',
            // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
          },
          modified_on: {
            type: 'TIMESTAMP',
            // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true
          }
        
	},{
        timestamps: false
    });
};
