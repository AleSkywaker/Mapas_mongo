const Store = require('../models/store');

// @description Get all Stores
// @route GET /api/v1/stores
// @access Public

exports.getStores = async (req, res, next) => {
  try {
    const stores = await Store.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};

// @description Create store
// @route POST /api/v1/stores
// @access Public

exports.addStore = async (req, res, next) => {
  try {
    console.log(req.body);
    const store = await Store.create(req.body);

    return res.status(200).json({
      success: true,
      data: store,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
};
