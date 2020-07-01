const addTest = (req, res, next) => {
  res.setHeader("X-addTest", "modifying data");
  next();
};
module.exports = addTest;
