//'use strict';

//const fs = require('fs');
//const path = require('path');
//const process = require('process');
//const basename = path.basename(__filename);
//const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];
const config = require("../config/config.json");
import {Sequelize, DataTypes} from 'sequelize';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});
sequelize.authenticate()
.then(()=>{
  console.log("Conected...")
})
.catch(err => {
  console.log("Error"+ err)
})
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user= require("./user.js")(sequelize, Sequelize.DataTypes);
db.role = require("./role.js")(sequelize, Sequelize.DataTypes);

db.sequelize.sync({force: false})
.then(()=>{
  console.log("yes re-sync done !")
})

module.exports = db;
