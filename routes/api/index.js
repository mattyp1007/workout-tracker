const router = require('express').Router();

const apiRoutes = require('./api-routes.js');

router.use('/users', apiRoutes);

module.exports = router;
