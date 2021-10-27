require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer  = require('multer');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

app.use(express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    const path = 'uploads/';

    if (!fs.existsSync(path)) fs.mkdirSync(path);

    callback(null, path);
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileExtensionValidation = (file) => {
  const splittedFileName = file.originalname.split('.');
  const extension = splittedFileName[splittedFileName.length - 1];

  if (extension !== 'png') {
    return false;
  }

  return true;
};

const fileNameValidation = (file) => {
  const path = 'uploads/';
  let result;

  if (fs.existsSync(path)) {
    result = fs.readdirSync(path).some(existingFile => {
      const splittedExistingFileName = existingFile.split('-');
      splittedExistingFileName.shift();

      const existingFileOriginalName = splittedExistingFileName.join('-');

      return existingFileOriginalName === file.originalname;
    });
  }

  return !result;
};

const upload = multer({
  storage,
  fileFilter: (_req, file, callback) => {
    const isValidExtension = fileExtensionValidation(file);

    if (!isValidExtension) return callback(new Error('Extension must be "png"'));

    const isValidName = fileNameValidation(file);

    if (!isValidName) return callback(new Error('File already exists'));

    callback(null, true);
  },
});

const multiple = multer({ dest: 'uploads/' });

const profile = multer({ dest: 'profilePics/' });

app.post('/upload', upload.single('file'), controllers.upload);

app.post('/multiple', multiple.array('files'), controllers.multiple);

app.post('/profile', profile.single
('profilePics'), controllers.profilePics);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
