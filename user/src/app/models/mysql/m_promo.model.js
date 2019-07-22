'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_promo = sequelize.define('m_promo', {
    id: {
      type: DataTypes.BIGINT(11),
      primaryKey: true,
    },
    origin: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    commercial: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    oum: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    min_oum: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    scope: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    original_price: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    rebate: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    new_price: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    message: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    valid_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    merchant: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    shipping_line: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    transit_time: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    product_type: {
      type: DataTypes.STRING(23),
      allowNull: true,
    },
  }, {})
  m_promo.associate = function () {
  }
  return m_promo
}
