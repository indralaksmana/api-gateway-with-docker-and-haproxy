'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentrequest = sequelize.define('t_shipmentrequest', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_shipment: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    shipper_id_comp: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    shipper_id_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    stat: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(256),
      allowNull: true,
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
  t_shipmentrequest.associate = function (models) {
    // associations can be defined here
  }
  return t_shipmentrequest
}
