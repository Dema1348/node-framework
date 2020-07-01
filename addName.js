const addName = (req, res, next) => {
  res.setHeader("X-addName", "modifying data");
  next();
};
module.exports = addName;
