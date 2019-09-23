const router = require('express').Router();
const projectController = require('../../controllers/projectcontroller');

router
  .route('/')
  .post(projectController.create)
  .get(projectController.findAll);

router.route('/:id').delete(projectController.remove);

module.exports = router;
