const router = require("./library/router");

router.add("GET", "/", (req, res) => {
  const { user } = req.query;
  res.send(400, { message: "ok", user });
});

router.add("GET", "/hola", (req, res) => {
  const { user } = req.query;
  res.send(400, { message: "ok", user });
});

router.add("GET", "/hola/:id", (req, res) => {
  const { user } = req.query;
  res.send(400, { message: "ok", user });
});

module.exports = router;
