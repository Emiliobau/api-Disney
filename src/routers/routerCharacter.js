const express = require ("express");
const router = express.Router();
const controller = require ("../controllers/controllerCharacter")

router.post("/create", controller.create)
router.put("/edit/:id", controller.update)
router.delete("/delete/:id", controller.delete)
router.get("/characters", controller.list)
router.get("/characterDetail/:id", controller.detail)



module.exports = router;