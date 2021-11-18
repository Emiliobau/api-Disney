const express = require ("express");
const router = express.Router();
const controller = require("../controllers/controllerUser")

//configuracion documentacion swagger

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: id usuario
 *          name:
 *            type: string
 *            description: nombre de usuario
 *          email:
 *            type: string
 *            description: email usuario
 *          password:
 *             type: string
 *             description: password usuario
 *        required:
 *          - name
 *          - email
 *          - password
 *        example:
 *          name: Emilio
 *          email: emiliobaudracco@gmail.com
 *          password: emilio123

 */

/**
 * @swagger
 *  /auth/register:
 *    post:
 *      summary: creacion nuevo usuario
 *      tags: [User]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/User"
 *      responses:
 *        200:
 *          description: nuevo usuario creado
 */



router.post("/register", controller.register)
router.post("/login", controller.login)



module.exports = router;


