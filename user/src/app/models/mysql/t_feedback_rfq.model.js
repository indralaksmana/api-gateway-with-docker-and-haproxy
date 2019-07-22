'strict mode'

module.exports = (sequelize, DataTypes) => {
  const t_feedback_rfq = sequelize.define('t_feedback_rfq', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT(11),
    },
    id_rfq: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
      unique: true,
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
    modified_user: {
      type: DataTypes.BIGINT(11),
      allowNull: true,
    },
  }, {
    timestamps: false,
  });
  t_feedback_rfq.associate = function (models) {
    // associations can be defined
  }
  return t_feedback_rfq
}
