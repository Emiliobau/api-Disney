const express = require ("express");
const router = express.Router();
const controller = require ("../controllers/controllerCharacter")
const isAuthenticated = require("../middleware/authToken")

router.post("/create", isAuthenticated, controller.create)
router.put("/edit/:id", isAuthenticated, controller.update)
router.delete("/delete/:id", isAuthenticated, controller.delete)
router.get("/characters", isAuthenticated, controller.list)
router.get("/characterDetail/:id", isAuthenticated, controller.detail)



module.exports = router;