module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {},
    {
      underscored: true,
      timestamp: true
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
    Booking.belongsTo(db.Destination, {
      foreignKey: {
        name: "destinationId",
        allowNull: false
      },
      onDelete: "RESTRICT"
    });
  };

  return Booking;
};
