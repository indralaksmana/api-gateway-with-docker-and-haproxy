'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentschedule = sequelize.define('t_shipmentschedule', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_schedule_head: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    id_shipment: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    date_arrival: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_departure: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    port_open_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    port_cutoff_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    inland_cutoff_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vesel_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    pol: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    pod: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    origin_city_code: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    origin_country_code: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    destination_city_code: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    destination_country_code: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    is_valid: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by_comptp: {
      type: DataTypes.STRING(11),
      allowNull: true,
      unique: true,
    },
    created_by_id_comp: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    created_by_id_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
  },
  {
    timestamps: false,
  });

  t_shipmentschedule.associate = function (models) {
    // associations can be defined here
  }

  return t_shipmentschedule
}
