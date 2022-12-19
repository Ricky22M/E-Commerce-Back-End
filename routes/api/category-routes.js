const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    },
  }).then(insideDBCategories => res.json(insideDBCategories)).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    }
  }).then(insideDBCategories => {
    if (!insideDBCategories) {
      res.status(404).json({ message: 'No categories have been found'});
      return;
    }
    res.json(insideDBCategories);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.catergory_name
  }).then(insideDBCategories => {
    res.json(insideDBCategories);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(insideDBCategories => {
    if (!insideDBCategories[0]) {
      res.status(404).json({ message: 'No categories have been found'});
      return;
    }
    res.json(insideDBCategories);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(insideDBCategories => {
    if (!insideDBCategories) {
      res.status(404).json({ message: 'No categories have been found'});
      return;
    }
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
