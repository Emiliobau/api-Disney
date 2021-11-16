const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllerMovie")
const isAuthenticated = require ("../middleware/authToken")


router.post("/create", isAuthenticated, controller.create)
router.put("/edit/:id", isAuthenticated, controller.update)
router.delete("/delete/:id", isAuthenticated, controller.delete)
router.get("/movies",isAuthenticated, controller.list)
router.get("/movieDetail/:id", isAuthenticated, controller.detail)



module.exports = router;
