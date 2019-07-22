module.exports = (sequelize, DataTypes) => {
  const t_shipmentotif = sequelize.define('t_shipmentotif', {
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
      allowNull: true,
    },
    otif_stat: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    estimate_pickup_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    eta: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    etd: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    custom_profile_type: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    driver_name: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    driver_phone_number: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    vehicle_plate_number: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    pickup_delivery_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      defaultValue: 1,
    },
    created_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    modified_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    timestamps: false,
    freezeTableName: true, // do not pluralizing tables name
    tableName: 't_shipmentotif',
  })
  return t_shipmentotif
}

