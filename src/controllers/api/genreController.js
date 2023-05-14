const { Genre } = require('../../database/models');

module.exports = {
    list : (req, res) => {
        Genre.findAll()
        .then(genres => {
            const RESPONSE = {
                meta: {
                   status: 200,
                   total: genres.length,
                   url: '/genres'
                },
                data: genres
            }
            res.json(RESPONSE);
        })
    },
    genre: (req, res) => {
        const genre_Id = req.params.id;
        Genre.findByPk(genre_Id)
            .then(genre => {
                const RESPONSE = {
                    meta: {
                        status: 200,
                        url: `/genres/${genre_Id}`
                    },
                    data: genre
                }
                res.json(RESPONSE);
            });
    }
}