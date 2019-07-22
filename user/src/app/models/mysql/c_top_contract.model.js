'strict mode'

module.exports = (sequelize, DataTypes) => {
  const c_top_contract = sequelize.define('c_top_contract', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_contract: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    id_company: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    id_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    compname: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    term_of_payment: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    modified_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  });
  c_top_contract.associate = function (models) {
    // associations can be defined here
    c_top_contract.belongsTo(models.t_contract, {
      foreignKey: 'id_contract',
      sourceKey: 'id',
    });
  }
  return c_top_contract
}
