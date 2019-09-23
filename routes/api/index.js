const router = require('express').Router();
const projectRoutes = require('./project');

router.use('/projects', projectRoutes);

module.exports = router;
