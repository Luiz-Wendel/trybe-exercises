module.exports = (req, res) => {
  const { files } = req;

  const createdFiles = files.map(({ originalname: file, path }) => ({
    file,
    url: `http://localhost:3000/${path}`,
  }));

  res.status(200).json(createdFiles);
};
