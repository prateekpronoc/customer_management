  const { DataTypes } = require('sequelize');

  // We export a function that defines the model.
  // This function will automatically receive as parameter the Sequelize connection object.
  module.exports = (sequelize) => {
      sequelize.define('customers', {
          // The following specification of the 'id' attribute could be omitted
          // since it is the default.
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.BIGINT
          },
          booking_code: {
              allowNull: false,
              type: DataTypes.STRING
          },
          is_active :{
              allowNull:false,
              type: DataTypes.STRING
          },
          starting_address :{
              allowNull:false,
              type: DataTypes.STRING
          },
          destination_address :{
              allowNull:false,
              type: DataTypes.STRING
          },
          destination_address :{
            allowNull:false,
            type: DataTypes.STRING
        },
        destination_address :{
            allowNull:false,
            type: DataTypes.STRING
        },
        destination_address :{
            allowNull:false,
            type: DataTypes.STRING
        },
        driver_mobile_number :{
            allowNull:false,
            type: DataTypes.STRING
        },
        vehicle_registration_no :{
            allowNull:false,
            type: DataTypes.STRING
        },
        driver_name :{
            allowNull:false,
            type: DataTypes.STRING
        },
        generated_url :{
            allowNull:false,
            type: DataTypes.STRING
        },

          created_at: {
              type: 'TIMESTAMP',
              // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
              allowNull: true
            },
            updated_at: {
              type: 'TIMESTAMP',
              // defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
              allowNull: true
            }
          
      },{
          timestamps: false
      });
  };  
