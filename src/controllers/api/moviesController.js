const { Movie } = require('../../database/models');

module.exports = {
    create: (req, res) => {
        Movie.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
            .then((movie) => {
                const RESPONSE = {
                    meta: {
                        status: 200,
                        url: '/api/movie/create'
                    },
                    data: movie
                }
                return res.status(200).json(RESPONSE)
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        let movieId = req.params.id;
        Movie.destroy({ where: { id: movieId }, force: true })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        url: 'api/movies/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        url: 'api/movies/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }

}