'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_bidcontract = sequelize.define('t_bidcontract', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_contract: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      unique: true,
    },
    id_merchant: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    estimatedaymin: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    estimatedaymax: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    minweight: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    maxweight: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    shippingline: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    validdate: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    bid: {
      type: DataTypes.DECIMAL(10, 0),
      allowNull: false,
      unique: true,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.BIGINT(11),
    },
    status_edit: {
      type: DataTypes.BIGINT(11),
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {
    timestamps: false,
    collate: 'utf8_general_ci',
  });
  t_bidcontract.associate = function (models) {
    // associations can be defined here

    t_bidcontract.belongsTo(models.c_comp, {
      foreignKey: 'id_merchant',
      sourceKey: 'id',
    });

    t_bidcontract.belongsTo(models.t_contract, {
      foreignKey: 'id_contract',
      sourceKey: 'id',
    });
  }
  return t_bidcontract
}
