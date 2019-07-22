'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_statusbidcontract = sequelize.define('m_statusbidcontract', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_contract: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    id_merchant: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    statusbid: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    id_bidcontract: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    reason: {
      type: DataTypes.TEXT,
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
  }, {});
  m_statusbidcontract.associate = function (models) {
    // associations can be defined here
  }
  return m_statusbidcontract
}
