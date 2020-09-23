const router = require("express").Router();
const { Home } = require("../controllers/Home/HomeController");

// Landing page route
router.get("/", Home);

module.exports = router;
