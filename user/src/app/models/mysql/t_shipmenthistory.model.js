'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmenthistory = sequelize.define('t_shipmenthistory', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_shipment: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    order_number: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    created_by_comptp: {
      type: DataTypes.STRING(64),
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
    created_by_username: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    action: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(),
      allowNull: true,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  });

  t_shipmenthistory.associate = function (models) {
    // associations can be defined here
  }

  return t_shipmenthistory
}
