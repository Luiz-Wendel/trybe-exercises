module.exports = (req, res) => {
  const { files } = req;

  const createdFiles = files.map(({ originalname: file, path }) => ({
    file,
    url: `http://localhost:3000/${path}`,
  }));

  return res.status(200).json(createdFiles);
};
