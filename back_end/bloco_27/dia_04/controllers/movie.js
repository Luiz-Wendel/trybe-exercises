const MovieService = require('../services/movie');

const getAll = async (_req, res) => {
  const movies = await MovieService
    .getAll();

  res.status(200).json(movies);
};

const findOne = async (req, res) => {
  const { id } = req.params;

  const movie = await MovieService
    .findOne(id);

  if (!movie) return res.status(400).json({ message: 'Nenhum filme encontrado com este ID!' });

  return res.status(200).json(movie);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400)
      .json({ message: 'Dados inválidos' });
  }

  res.status(201)
    .json({ message: 'Filme criado com sucesso!' });
};

module.exports = {
  getAll,
  create,
  findOne,
};
