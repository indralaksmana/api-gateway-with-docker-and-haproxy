'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_termshipment = sequelize.define('m_termshipment', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    vendor_id: {
      type: DataTypes.BIGINT(11),
      allowNull: false,
    },
    vendor_name: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    terms: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(1),
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
    created_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {});
  m_termshipment.associate = function (models) {
    // associations can be defined
  }
  return m_termshipment
}
