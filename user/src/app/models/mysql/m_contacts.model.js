'strict mode'

module.exports = (sequelize, DataTypes) => {
  const m_contacts = sequelize.define('m_contacts', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    fullname: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    subject_description: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    read: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    sender: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true, // do not pluralizing tables name
    tableName: 'm_contacts',
  }, {})
  return m_contacts
}
