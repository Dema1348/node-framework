const router = require("./library/router");

router.add("GET", "/", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/text" });
  res.write("ok");
  res.end();
});

module.exports = router;
