const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllerMovie")


router.post("/create", controller.create)
router.put("/edit/:id", controller.update)
router.delete("/delete/:id", controller.delete)
router.get("/movies", controller.list)
router.get("/movieDetail/:id", controller.detail)



module.exports = router;
