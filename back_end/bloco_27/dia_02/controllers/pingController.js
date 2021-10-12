module.exports = {
  get: (_req, res) => res.status(200).json({ message: 'pong' }),
};
