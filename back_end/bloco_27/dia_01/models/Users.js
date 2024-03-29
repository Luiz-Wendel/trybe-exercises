const { ObjectId } = require('mongodb');

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

const getAll = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray());
};

const getById = async (id) => {
  return connection()
    .then((db) => db.collection('users').findOne(new ObjectId(id)));
};

const updateOneById = async (id, newValues) => {
  return connection()
    .then((db) => db.collection('users').updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: { ...newValues },
      },
    ));
};

module.exports = { create, getAll, getById, updateOneById };
