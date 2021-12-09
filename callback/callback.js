const users = require('../json/users.json');
const movies = require('../json/movies.json');
const reviews = require('../json/reviews.json');

const getMovie = (id, cb) => {
    setTimeout(() => {
        const movie = movies.find(movie => movie.id === id);
        cb(movie);
    }, 1000);
};
const getReview = (movieId, cb) => {
    setTimeout(() => {
        const review = reviews.find(review => review.movie_id === movieId);
        cb(review);
    }, 1000);
};
const getUser = (name, cb) => {
    setTimeout(() => {
        const user = users.find(user => user.name === name);
        cb(user);
    }, 1000);
};
getMovie(3, (movie) => {
    getReview(movie.id, (review) => {
        getUser(review.reviewer, (user) => {
            console.log(user);
        });
        console.log(review);
    });
    console.log(movie);
});