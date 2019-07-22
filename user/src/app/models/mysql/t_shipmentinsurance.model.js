'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentinsurance = sequelize.define('t_shipmentinsurance', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_shipment: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    id_price: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    goods_value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    goods_value_currency: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    pcg: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price_sum: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    price_currency_code: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    price_currency_rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by_comptp: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    created_by_id_comp: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    created_by_id_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  t_shipmentinsurance.associate = function (models) {
    // associations can be defined here
  }
  return t_shipmentinsurance
}
