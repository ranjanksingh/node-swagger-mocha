/**
 * @swagger 
 * components:
 *  schemas:
 *      Movie:
 *          type: object
 *          required:
 *              - movie
 *              - year
 *          properties:
 *              movie:
 *                  type: string
 *                  description: name of the movie.
 *              year:
 *                  type: integer
 *                  description: Movie release year.
 *          example:
 *              movie: Simba
 *              year: 2020
 */

const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: API to manage your Movies.
 */
/**
 * @swagger
 * /movies/:
 *  get:
 *      summary: Lists all the Movies
 *      tags: [Movies]
 *      responses:
 *          "200":
 *              description: The list of movies.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Movie'
 */
router.get("/", (req, res) => {
    res.status(200).json({ movie: 'Pushpa', year: 2021 });
});
module.exports = router;