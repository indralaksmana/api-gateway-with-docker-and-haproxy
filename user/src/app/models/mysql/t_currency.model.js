'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_currency = sequelize.define('t_currency', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    base: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    quote: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  t_currency.associate = function (models) {
    // associations can be defined here
  }
  return t_currency
}
