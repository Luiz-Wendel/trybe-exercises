const chai = require('chai');
const chaiHttp = require('chai-http');
const { MongoClient } = require('mongodb');
const sinon = require('sinon');
const { getConnection } = require('../connectionMock');
const server = require('../../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /api/users/:userId', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('when there is no token', () => {
    const errorMessage = 'Token not found or present';

    before(async () => {
      response = await chai.request(server).get('/api/users/:userId');
    });

    it('should return status code 400', () => {
      expect(response.status).to.be.equal(400);
    });

    it('should return a json with as object', () => {
      expect(response.json).to.be.an('object');
    });

    it('should return a json with the "message" property', () => {
      expect(response.json).to.have.ownProperty('message');
    });

    it(`should return the error message: "${errorMessage}"`, () => {
      expect(response.json.message).to.be.equal(errorMessage);
    });
  });
});
