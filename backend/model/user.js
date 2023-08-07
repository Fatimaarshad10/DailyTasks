
module.exports = (sequelize, DataTypes , Model) => {
class User extends Model {}

User.init({
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },

}, {
  sequelize,
  modelName: 'User' 
});
return User 
}

