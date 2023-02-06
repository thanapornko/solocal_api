module.exports = (req, res, next) => {
  // throw new Error("Test error middleware ka");
  res.status(404).json({
    message: "resource not found on this server na ka"
  });
};
