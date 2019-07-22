'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_groupprice = sequelize.define('m_groupprice', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    descgroupprice: {
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
    collate: 'utf8_general_ci',
  });
  m_groupprice.associate = function (models) {
    // associations can be defined here
    m_groupprice.belongsTo(models.t_bidprice, {
      foreignKey: 'code_group_price',
      sourceKey: 'code',
    });

    m_groupprice.belongsTo(models.t_bidpricecontract, {
      foreignKey: 'code_group_price',
      sourceKey: 'code',
    });
  }
  return m_groupprice
}
