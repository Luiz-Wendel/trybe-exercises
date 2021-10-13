const { ObjectId } = require('mongodb');

const connection = require('../connection');

const add = async (name, brand) => {
  const productObject = { name, brand };

  try {
    return connection()
      .then((db) => db.collection('products').insertOne(productObject))
      .then((_result) => ({ ...productObject }));
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    return connection()
      .then((db) => db.collection('products').find().toArray());
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    return connection()
      .then((db) => db.collection('products').findOne(new ObjectId(id)));
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  const newValues = { name, brand };

  try {
    const oldProduct = await getById(id);

    connection()
      .then((db) => db.collection('products').updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: { ...newValues },
        },
      ));

    const updatedProduct = await getById(id);
    return { old: oldProduct, new: updatedProduct };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);

    if (!product) return {};

    connection()
      .then((db) => db.collection('products').deleteOne({ _id: new ObjectId(id) }));

    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
