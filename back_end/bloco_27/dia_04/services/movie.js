const MoviesModel = require('../models/movie');

const MONGO_ID_LENGTH = 12 * 2;

const getNewMovie = (movieData) => {
  const { id, title, directedBy, releaseYear } = movieData;

  return { id, title, directedBy, releaseYear };
};

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const getAll = async () => {
  const moviesData = await MoviesModel
    .getAll();

  return moviesData.map(getNewMovie);
};

const isValidId = (id) => id && typeof id === 'string' && id.length === MONGO_ID_LENGTH;

const findOne = async (id) => {
  if (!isValidId(id)) return false;

  const movie = await MoviesModel
    .findOne(id);

  return movie;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

module.exports = {
  create,
  getAll,
  findOne,
};
