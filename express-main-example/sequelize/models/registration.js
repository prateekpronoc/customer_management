
const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('goshala_registrations', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		application_code: {
			allowNull: true,
			type: DataTypes.STRING
		},
        application_status :{
            allowNull:true,
            type: DataTypes.STRING
        },
        goshala_name :{
            allowNull:false,
            type: DataTypes.STRING
        },
        date_of_est :{
            allowNull:false,
            type: DataTypes.DATE
        },
        district :{
            allowNull:false,
            type: DataTypes.STRING
        },

        tehsil :{
            allowNull:false,
            type: DataTypes.STRING
        },
        block :{
            allowNull:false,
            type: DataTypes.STRING
        },
        applicant_name :{
            allowNull:false,
            type: DataTypes.STRING
        },
        father_name :{
            allowNull:false,
            type: DataTypes.STRING
        },
        mobile_no :{
            allowNull:false,
            type: DataTypes.STRING
        },
        email :{
            allowNull:false,
            type: DataTypes.STRING
        },
        complete_address :{
            allowNull : false,
            type : DataTypes.STRING
        },
        application_uuid :{
            allowNull:false,
            type: DataTypes.STRING
        },
        cow_count:{
            allowNull:false,
            type: DataTypes.INTEGER
        }
	},{
        timestamps: false
    });
};
