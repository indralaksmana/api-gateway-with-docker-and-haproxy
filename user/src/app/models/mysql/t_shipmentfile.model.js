'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_shipmentfile = sequelize.define('t_shipmentfile', {
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
    file_category: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    file_description: {
      type: DataTypes.STRING(),
      allowNull: true,
      unique: true,
    },
    file_container: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    file_name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    file_ext: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
    },
    file_origin: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: true,
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
  },
  {
    timestamps: false,
  });

  t_shipmentfile.associate = function (models) {
    // associations can be defined here
  }

  return t_shipmentfile
}
