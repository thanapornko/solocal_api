module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },

    {
      underscored: true,
      timestamps: true
    }
  );

  Booking.associate = db => {
    Booking.belongsTo(db.User, {
      foreignKey: {
        name: "userId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });
    Booking.belongsTo(db.Guide, {
      foreignKey: {
        name: "guideId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });
  };

  return Booking;
};
