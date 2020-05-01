const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = (collection) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    collection.find().toArray()
    .then(docs => res.json(docs))
    .catch((error) => {
      console.log(error);
      res.status(500);
      res.json({error: error})
    })
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne({_id: ObjectID(id)})
    .then(doc => res.json(doc))
    .catch((error) => {
      console.log(error);
      res.status(500);
      res.json({error: error})
    })
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({_id: ObjectID(id)})
    .then(result => res.json(result))
  });

  return router;
}

module.exports = createRouter;
