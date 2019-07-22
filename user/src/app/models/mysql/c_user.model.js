'strict mode'

module.exports = (sequelize, DataTypes) => {
  const c_user = sequelize.define('c_user', {
    id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER(11) },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    codeusertype: DataTypes.STRING,
    id_company: DataTypes.INTEGER,
    verifcode: DataTypes.STRING,
    statverif: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    job: DataTypes.STRING,
    photo: DataTypes.STRING,
    knoweximku: DataTypes.STRING,
    codereferal: DataTypes.STRING,
    userrating: DataTypes.INTEGER,
    note: DataTypes.STRING,
    status: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    created_at: DataTypes.DATE,
    created_user: DataTypes.INTEGER,
    modified_user: DataTypes.INTEGER,
    downpayment: DataTypes.DECIMAL,
    bankacc: DataTypes.STRING,
    accname: DataTypes.STRING,
    bankname: DataTypes.STRING,
    bankbranch: DataTypes.STRING,
    productdesc: DataTypes.STRING,
    remember_token: DataTypes.STRING,
    verifiedbyadmin: DataTypes.STRING,
    compref: DataTypes.STRING,
    statususer: DataTypes.STRING,
  }, {});
  c_user.associate = function (models) {
    // associations can be defined here
    c_user.belongsTo(models.c_comp, {
      foreignKey: 'id_company',
      sourceKey: 'id',
    });
  };
  return c_user
};
