'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_statusbid = sequelize.define('m_statusbid', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_rfq: {
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
    id_bid: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    reason: {
      type: DataTypes.TEXT,
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
  m_statusbid.associate = function (models) {
    // associations can be defined
  }
  return m_statusbid
}
