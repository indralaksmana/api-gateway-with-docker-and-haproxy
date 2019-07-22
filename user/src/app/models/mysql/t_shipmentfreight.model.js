'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentfreight = sequelize.define('t_shipmentfreight', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_shipment: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    service_type: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    tracking_number: {
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
    additional_info: {
      type: DataTypes.STRING(16),
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
  t_shipmentfreight.associate = function (models) {
    // associations can be defined here
  }
  return t_shipmentfreight
}
