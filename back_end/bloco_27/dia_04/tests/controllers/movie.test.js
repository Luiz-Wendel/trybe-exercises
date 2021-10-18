const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movie');
const MoviesController = require('../../controllers/movie');

describe('Testa o controller Movie' , () => {
  describe('Ao chamar o controller de create', () => {
    describe('quando o payload informado não é válido', () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {};

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();

          sinon.stub(MoviesService, 'create')
          .resolves(false);
      })

      after(() => {
        MoviesService.create.restore();
      })

      it('é chamado o status com o código 400', async () => {
        await MoviesController.create(request, response);

        expect(response.status.calledWith(400)).to.be.equal(true);
      });

      it('é chamado o json com a mensagem "Dados inválidos"', async () => {
        await MoviesController.create(request, response);

        expect(response.json.calledWith({ message: 'Dados inválidos' })).to.be.equal(true);
      });
    });

    describe('quando é inserido com sucesso', () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };

        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();

        sinon.stub(MoviesService, 'create')
          .resolves(true);
      });

      after(() => {
        MoviesService.create.restore();
      });

      it('é chamado o status com o código 201', async () => {
        await MoviesController.create(request, response);

        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o json com a mensagem "Filme criado com sucesso!"', async () => {
        await MoviesController.create(request, response);

        expect(response.json.calledWith({ message: 'Filme criado com sucesso!' })).to.be.equal(true);
      });
    });
  });

  describe('Ao chamar o controller de getAll', () => {
    describe('quando não existem filmes no banco de dados', async () => {
      const request = {};
      const response = {};

      before(async () => {
        request.body = {};

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(MoviesService, 'getAll').resolves([]);
      });

      after(() => {
        MoviesService.getAll.restore();
      });

      it('é chamado o método "status" passando o código 200', async () => {
        await MoviesController.getAll(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('é chamado o método "json" passando uma array', async () => {
        await MoviesController.getAll(request, response);

        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });

      it('é chamado o método "json" passando uma array vazia', async () => {
        await MoviesController.getAll(request, response);

        expect(response.json.calledWith([])).to.be.equal(true);
      });
    });

    describe('quando existem filmes no banco de dados', () => {
      const request = {};
      const response = {};
      const movies = [
        {
          id: '604cb554311d68f491ba5781',
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        }
      ];

      before(() => {
        request.body = {};

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(MoviesService, 'getAll').resolves(movies);
      });

      after(() => {
        MoviesService.getAll.restore();
      });

      it('é chamado o método "status" passando o código 200', async () => {
        await MoviesController.getAll(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('é chamado o método "json" passando uma array', async () => {
        await MoviesController.getAll(request, response);

        expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
      });

      it('é chamado o método "json" com a lista de filmes', async () => {
        await MoviesController.getAll(request, response);

        expect(response.json.calledWith(movies)).to.be.equal(true);
      });
    });
  });

  describe('Ao chamar o controller de findOne', () => {
    describe('quando o o filme não existe no banco de dados', async () => {
      const request = {};
      const response = {};

      before(() => {
        request.params = {};

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(MoviesService, 'findOne').resolves(false);
      });

      after(() => {
        MoviesService.findOne.restore();
      });

      it('é chamado o método "status" passando o código 400', async () => {
        await MoviesController.findOne(request, response);

        expect(response.status.calledWith(400)).to.be.true;
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await MoviesController.findOne(request, response);

        expect(response.json.calledWith(sinon.match.object)).to.be.true;
      });

      it('é chamado o método "json" passando um objeto com a mensagem de erro', async () => {
        await MoviesController.findOne(request, response);

        expect(response.json.calledWith({ message: 'Nenhum filme encontrado com este ID!' })).to.be.true;
      });
    });

    describe('quando existe o filme no banco de dados', async () => {
      const request = {};
      const response = {};
      const movie = {
        id: '604cb554311d68f491ba5781',
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      before(() => {
        request.params = { id: '604cb554311d68f491ba5781' };

        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();

        sinon.stub(MoviesService, 'findOne').resolves(movie);
      });

      after(() => {
        MoviesService.findOne.restore();
      });

      it('é chamado o método "status" passando o código 200', async () => {
        await MoviesController.findOne(request, response);

        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('é chamado o método "json" passando um objeto', async () => {
        await MoviesController.findOne(request, response);

        expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
      });

      it('é chamado o método "json" com o filme', async () => {
        await MoviesController.findOne(request, response);

        expect(response.json.calledWith(movie)).to.be.equal(true);
      });
    });
  });
});

