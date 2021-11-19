const express = require("express");
const router = express.Router();
const controller = require("../controllers/controllerMovie")
const isAuthenticated = require ("../middleware/authToken")

// configuracion documentacion swagger

/**
 * @swagger
 *
 *  components:
 *    schemas:
 *      Movie:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *            description: id usuario
 *          title:
 *            type: string
 *            description: Titulo de la pelicula
 *          image:
 *            type: string
 *            description: path de la imagen de la pelicula
 *          create_date:
 *            type: string
 *            description: fecha de creacion de la pelicula
 *          rating:
 *            type: integer
 *            description: calificacion de la pelicula de 0 a 10
 *          genre_id:
 *            type: integer
 *            description: numero de id del genero de la pelicula
 *        required:
 *          -title
 *          -create_date
 *          -rating
 *          -genre_id
 *        example:
 *          title: Coco
 *          image: www.coco.jpg
 *          create_daye: 2017-11-22
 *          rating: 9
 *          genre_id: 6
 */


router.post("/create", isAuthenticated, controller.create)
/**
 * @swagger
 *
 * /movie/create:
 *    post:
 *      summary: creacion de pelicula
 *      parameters:
 *        - in: header
 *          name: Token
 *          description: token authorization header
 *          required: true
 *          type: string
 *      tags: [Movie]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: "#/components/schemas/Movie"
 *            example:
 *              title: Coco
 *              image: www.coco.jpg
 *              create_date: 2017-11-22
 *              rating: 9
 *              genre_id: 6
 *
 *      responses:
 *        200:
 *          description: Pelicula creada correctamente
 *        400:
 *          description: No tiene permiso para crear pelicula
 */

router.put("/edit/:id", isAuthenticated, controller.update)
router.delete("/delete/:id", isAuthenticated, controller.delete)
router.get("/movies",isAuthenticated, controller.list)
router.get("/movieDetail/:id", isAuthenticated, controller.detail)



module.exports = router;
