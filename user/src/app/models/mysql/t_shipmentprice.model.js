'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentprice = sequelize.define('t_shipmentprice', {
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
    component_type: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    component_city_code: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    service_type: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    price_group_code: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    price_group_desc: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    price_code: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    price_desc: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    qty: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    volume: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL(16, 2),
      allowNull: false,
    },
    price_uom: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price_min: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    price_sum: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    price_currency_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    book_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    book_price_min: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    book_price_sum: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    book_price_currency_code: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    book_price_currency_rate: {
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
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  t_shipmentprice.associate = function (models) {
    // associations can be defined here
  }
  return t_shipmentprice
}
