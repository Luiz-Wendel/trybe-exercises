const express = require('express');

const postsRouter = express.Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]

postsRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  const post = posts.find((post) => post.id === Number(id));

  if (!post) return res.status(404).json({ message: 'Post not found!' });

  return res.status(200).json(post);
});

module.exports = postsRouter;
