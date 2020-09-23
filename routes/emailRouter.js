const router = require("express").Router();

router.get("/sendemail", (req, res) => {
  res.send("Hello, wow");
});

module.exports = router;
