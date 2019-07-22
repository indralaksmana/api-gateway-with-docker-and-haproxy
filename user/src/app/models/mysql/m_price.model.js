'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_price = sequelize.define('m_price', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_groupprice: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    codegroupprice: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    descprice: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      defaultValue: 1,
    },
    modified_user: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
      defaultValue: 1,
    },
  }, {
    timestamps: false,
  });
  m_price.associate = function (models) {
    // associations can be defined here
    m_price.belongsTo(models.t_bidprice, {
      foreignKey: 'code_price',
      sourceKey: 'code',
    });

    m_price.belongsTo(models.t_bidpricecontract, {
      foreignKey: 'code_price',
      sourceKey: 'code',
    });
  }
  return m_price
}
