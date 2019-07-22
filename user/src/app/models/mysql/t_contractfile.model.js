'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_contractfile = sequelize.define('t_contractfile', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_contract: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    contract_number: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    file_category: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    file_description: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    file_container: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    file_name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    file_ext: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    file_origin: {
      type: DataTypes.STRING(8),
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
    created_by_username: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
  t_contractfile.associate = function (models) {
    // associations can be defined here
  }
  return t_contractfile
}
