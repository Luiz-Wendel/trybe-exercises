const { ObjectId } = require('mongodb');

const mongoConnection = require('./connection');

const getAll = async () => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const findOne = async (id) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const movie = await moviesCollection
    .findOne(new ObjectId(id));

  if (!movie) return movie;

  const { title, directedBy, releaseYear } = movie;

  return {
    id,
    title,
    directedBy,
    releaseYear
  };
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await mongoConnection.getConnection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
    title,
    directedBy,
    releaseYear
  };
};

module.exports = {
  create,
  getAll,
  findOne,
};
