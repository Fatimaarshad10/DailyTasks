const {Sequelize , Model , DataTypes} = require("sequelize");


const sequelize = new Sequelize('userdb', 'root', '1122', {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 4000 ,
  logging : false 
});

sequelize.sync()
  .then(() => {
    console.log('Database and tables have been created!');
  })
  .catch((err) => {
    console.log('Error syncing the database:', err);
  });

const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.User = require('./user')(sequelize , DataTypes , Model)
db.sequelize.sync();
module.exports =  db