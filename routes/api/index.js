const router = require('express').Router();

const apiRoutes = require('./api-routes.js');

router.use('/', apiRoutes);

module.exports = router;
