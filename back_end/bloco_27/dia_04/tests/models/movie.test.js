const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movie');

describe('Testa o model Movie', () => {
  describe('Insere um novo filme no BD', () => {
    const DBServer = new MongoMemoryServer();
    let connectionMock;

    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(async () => {
      const URLMock = await DBServer.getUri();

      connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((conn) => conn.db('model_example'));

      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });

    after(() => {
      mongoConnection.getConnection.restore();
    });

    describe('quando é inserido com sucesso', () => {

      it('retorna um objeto', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.be.a('object');
      });

      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesModel.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });

      it('deve existir um filme com o título cadastrado!', async () => {
        await MoviesModel.create(payloadMovie);
        const movieCreated = await connectionMock.collection('movies').findOne({ title: payloadMovie.title });
        expect(movieCreated).to.be.not.null;
      });
    });
  });

  describe('Busca todos os filmes', () => {
    const DBServer = new MongoMemoryServer();
    let connectionMock; 

    before(async () => {
      const URLMock = await DBServer.getUri();  
      connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((conn) => conn.db('model_example'));

      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });

    after(() => {
      mongoConnection.getConnection.restore();
    });

    describe('Quando não existe nenhum filme criado', () => {
      it('retorna uma array', async () => {
        const movies = await MoviesModel.getAll();

        expect(movies).to.be.an('array');
      });

      it('a array está vazia', async () => {
        const movies = await MoviesModel.getAll();

        expect(movies).to.be.empty;
      });
    });

    describe('Quando existem filmes cadastrados', () => {
      const expectedMovie = {
        id: '604cb554311d68f491ba5781',
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      before(async () => {
        await connectionMock.collection('movies').insertOne({ ...expectedMovie });
      });

      after(async () => {
        await connectionMock.collection('movies').drop();
      });

      it('retorna uma array', async () => {
        const movies = await MoviesModel.getAll();

        expect(movies).to.be.an('array');
      });

      it('a array não está vazia!', async () => {
        const movies = await MoviesModel.getAll();

        expect(movies).to.be.not.empty;
      });

      it('a array possui dados do tipo objeto', async () => {
        const [ item ] = await MoviesModel.getAll();

        expect(item).to.be.an('object');
      });

      it('tais itens possuem os atributos "id", "title", "directedBy", "releaseYear"', async () => {
        const [ item ] = await MoviesModel.getAll();

        expect(item).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
      });

      it('o filme cadastrado está na lista', async () => {
        const [ { id, title, directedBy, releaseYear } ] = await MoviesModel.getAll();

        expect({ id, title, directedBy, releaseYear }).to.deep.equal(expectedMovie);
      });
    });
  });

  describe('Busca os detalhes de um filme', () => {
    const DBServer = new MongoMemoryServer();
    let connectionMock; 

    before(async () => {
      const URLMock = await DBServer.getUri();  
      connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((conn) => conn.db('model_example'));

      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });

    after(() => {
      mongoConnection.getConnection.restore();
    });

    describe('Quando não é passado o ID do filme', () => {
      it('retorna null', async () => {
        const movie = await MoviesModel.findOne();

        expect(movie).to.be.null;
      });
    });

    describe('Quando não existe o filme', () => {
      const invalidId = '61609852e58392e54f6c4e4c';

      it('retorna null', async () => {
        const movie = await MoviesModel.findOne(invalidId);

        expect(movie).to.be.null;
      });
    });

    describe('Quando existe o filme', () => {
      const expectedMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      let createdId;

      before(async () => {
        const newMovie = await connectionMock.collection('movies').insertOne({ ...expectedMovie });
        createdId = newMovie.insertedId;
      });

      after(async () => {
        await connectionMock.collection('movies').drop();
      });

      it('retorna um objeto', async () => {
        const movie = await MoviesModel.findOne(createdId);

        expect(movie).to.be.an('object');
      });

      it('o objeto não está vazio!', async () => {
        const movie = await MoviesModel.findOne(createdId);

        expect(movie).not.to.be.empty;
      });

      it('o objeto possui os atributos "id", "title", "directedBy", "releaseYear"', async () => {
        const movie = await MoviesModel.findOne(createdId);

        expect(Object.keys(movie)).to.have.lengthOf(4);
        expect(movie).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
      });

      it('o objeto retornado é um filme cadastrado', async () => {
        const movie = await MoviesModel.findOne(createdId);

        expect(movie).to.deep.equal({ id: createdId, ...expectedMovie});
      });
    });
  });

  describe('Exclusão de um filme', () => {
    const DBServer = new MongoMemoryServer();
    let connectionMock;

    before(async () => {
      const URLMock = await DBServer.getUri();  
      connectionMock = await MongoClient.connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((conn) => conn.db('model_example'));

      sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
    });

    after(() => {
      mongoConnection.getConnection.restore();
    });

    describe('Quando exclui com sucesso', () => {
      const expectedMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
      let createdId;

      beforeEach(async () => {
        const { insertedId } = await connectionMock.collection('movies').insertOne({ ...expectedMovie });
        createdId = insertedId;
      });

      afterEach(async () => {
        await connectionMock.collection('movies').drop();
      });

      it('retorna um número', async () => {
        const movie = await MoviesModel.remove(createdId);

        expect(movie).to.be.a('number');
      });

      it('retorn 1', async () => {
        const movie = await MoviesModel.remove(createdId);

        expect(movie).to.be.equal(1);
      });

      it('o filme não deve existir no bd', async () => {
        const movieBeforeDeletion = await connectionMock.collection('movies')
          .findOne({ _id: createdId });
        await MoviesModel.remove(createdId);
        const movieAfterDeletion = await connectionMock.collection('movies')
          .findOne({ _id: createdId });

        expect(movieBeforeDeletion).to.be.deep.equal({ _id: createdId, ...expectedMovie });
        expect(movieAfterDeletion).to.be.null;
      });
    });
  });
});
