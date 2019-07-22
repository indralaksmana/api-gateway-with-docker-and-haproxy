module.exports = (sequelize, DataTypes) => {
  const m_country = sequelize.define('m_country', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    status: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    created_at: DataTypes.DATE, 
    created_user: DataTypes.INTEGER,
    modified_user: DataTypes.INTEGER,
  }, {})
  m_country.associate = function (models) {
    // associations can be defined here
  }
  return m_country
};
