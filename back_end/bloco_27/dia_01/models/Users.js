const connection = require('./connection');

const getNewUser = ({ id, firstName, lastName, email, password }) => ({
  id,
  firstName,
  lastName,
  email,
  password,
});

const create = async (userObject) => {
  return connection()
    .then((db) => db.collection('users').insertOne(userObject))
    .then((result) => getNewUser({ id: result.insertedId, ...userObject }));
};

module.exports = { create };
