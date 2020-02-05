const router = require("express").Router();
const movieController = require("../../controllers/movieController");

router.route("/")
    .get(movieController.findAll);


module.exports = router;