const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('firebase_token_info', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		application_id: {
			allowNull: true,
			type: DataTypes.STRING
		},
        token :{
            allowNull:true,
            type: DataTypes.STRING
        },
        server_key :{
            allowNull:true,
            type: DataTypes.STRING
        },
        device_id :{
            allowNull : true,
            type : DataTypes.STRING
        },
        application_name :{
            allowNull : true,
            type : DataTypes.STRING
        }
        
	},{
        timestamps: false
    });
};
