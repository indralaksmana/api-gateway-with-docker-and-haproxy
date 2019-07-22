'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_cities = sequelize.define('m_cities', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    codecountry: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNUll: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    modified_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
  }, {});
  m_cities.associate = function (models) {
    // associations can be defined here
    m_cities.belongsTo(models.m_countries, {
      foreignKey: 'codecountry',
      sourceKey: 'code',
    })    
  }
  return m_cities
}
