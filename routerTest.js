const router = require("./library/router");

router.add("GET", "/", () => {
  console.log("callback");
});

module.exports = router;
