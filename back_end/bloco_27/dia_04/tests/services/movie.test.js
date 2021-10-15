const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movie');
const MoviesService = require('../../services/movie');

describe('Testa o service Movie', () => {
  describe('Insere um novo filme no BD', () => {
    describe('quando o payload informado não é válido', () => {
      const payloadMovie = {};

      it('retorna um boolean', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.be.a('boolean');
      });

      it('o boolean contém "false"', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.be.equal(false);
      });

    });

    describe('quando é inserido com sucesso', () => {
      const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      before(() => {
        const ID_EXAMPLE = '604cb554311d68f491ba5781';

        sinon.stub(MoviesModel, 'create')
          .resolves({ id: ID_EXAMPLE });
      })

      after(() => {
        MoviesModel.create.restore();
      })

      it('retorna um objeto', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.be.a('object');
      });

      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesService.create(payloadMovie);

        expect(response).to.have.a.property('id');
      });
    });
  });

  describe('Busca todos os filmes no BD', () => {
    describe('quando não existe nenhum filme criado', () => {
      before(() => {
        sinon.stub(MoviesModel, 'getAll')
          .resolves([]);
      });

      after(() => {
        MoviesModel.getAll.restore();
      });

      it('retorna um array', async () => {
        const response = await MoviesService.getAll();

        expect(response).to.be.an('array');
      });

      it('o array está vazio', async () => {
        const response = await MoviesService.getAll();

        expect(response).to.be.empty;
      });
    });

    describe('quando existem filmes criados', () => {
      before(() => {
        sinon.stub(MoviesModel, 'getAll')
          .resolves([
            {
              id: '604cb554311d68f491ba5781',
              title: 'Example Movie',
              directedBy: 'Jane Dow',
              releaseYear: 1999,
            }
          ]);
      });

      after(() => {
        MoviesModel.getAll.restore();
      });

      it('retorna um array', async () => {
        const response = await MoviesService.getAll();

        expect(response).to.be.an('array');
      });

      it('o array não está vazio', async () => {
        const response = await MoviesService.getAll();

        expect(response).to.be.not.empty;
      });

      it('o array possui itens do tipo objeto', async () => {
        const [ item ] = await MoviesService.getAll();

        expect(item).to.be.an('object');
      });

      it('tais itens possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
        const [ item ] = await MoviesService.getAll();

        expect(item).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
      });
    });
  });

  describe('Busca os detalhes de um filme no BD', () => {
    describe('quando o ID é inválido', () => {
      before(() => {
        sinon.stub(MoviesModel, 'findOne')
          .resolves(null);
      });

      after(() => {
        MoviesModel.findOne.restore();
      });

      it('retorna um booleano', async () => {
        const requests = [
          MoviesService.findOne(),
          MoviesService.findOne(158),
          MoviesService.findOne(['teste']),
          MoviesService.findOne({ teste: 'teste' }),
          MoviesService.findOne('604cb554311d68f491ba'),
        ];

        const responses = await Promise.all(requests);

        responses.forEach((response) => {
          expect(response).to.be.a('boolean');
        });
      });

      it('retorna false', async () => {
        const requests = [
          MoviesService.findOne(),
          MoviesService.findOne(158),
          MoviesService.findOne(['teste']),
          MoviesService.findOne({ teste: 'teste' }),
          MoviesService.findOne('604cb554311d68f491ba'),
        ];

        const responses = await Promise.all(requests);

        responses.forEach((response) => {
          expect(response).to.be.false;
        });
      });
    });

    describe('quando não existe o filme', () => {
      const invalidIdExample = '604cb554311d68f491ba5789';

      before(() => {
        sinon.stub(MoviesModel, 'findOne')
          .resolves(null);
      });

      after(() => {
        MoviesModel.findOne.restore();
      });

      it('retorna null', async () => {
        const response = await MoviesService.findOne(invalidIdExample);

        expect(response).to.be.null;
      });
    });

    describe('quando existe o filme', () => {
      const expectedMovie = {
        id: '604cb554311d68f491ba5781',
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      before(() => {
        sinon.stub(MoviesModel, 'findOne')
          .resolves(expectedMovie);
      });

      after(() => {
        MoviesModel.findOne.restore();
      });

      it('retorna um objeto', async () => {
        const response = await MoviesService.findOne(expectedMovie.id);

        expect(response).to.be.an('object');
      });

      it('o objeto não está vazio!', async () => {
        const movie = await MoviesService.findOne(expectedMovie.id);

        expect(movie).not.to.be.empty;
      });

      it('o objeto possui os atributos "id", "title", "directedBy", "releaseYear"', async () => {
        const movie = await MoviesService.findOne(expectedMovie.id);

        expect(Object.keys(movie)).to.have.lengthOf(4);
        expect(movie).to.include.all.keys(['id', 'title', 'directedBy', 'releaseYear']);
      });

      it('o objeto retornado é um filme cadastrado', async () => {
        const movie = await MoviesService.findOne(expectedMovie.id);

        expect(movie).to.deep.equal(expectedMovie);
      });
    });
  });
});
