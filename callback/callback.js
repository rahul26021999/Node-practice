const users = require('./users.json');
const movies = require('./movies.json');
const reviews = require('./reviews.json');

const getMovie = (id, cb) => {
    setTimeout(() => {
        const movie = movies.find((movie) => movie.id === id);
        cb(movie);
    }, 1000);
};
getMovie(3, (movie) => {
    console.log(movie);
});