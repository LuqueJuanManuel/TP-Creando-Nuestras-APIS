const express = require('express');
const router = express.Router();
const { create, destroy, } = require('../../controllers/api/moviesController');


router.post('/api/movie/create', create);
router.delete('/api/movie/delete', destroy);

module.exports = router;