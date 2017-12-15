var express = require("express")
    db = require("../models")
    helpers = require("../helpers/todos")
    router = express.Router();

router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodos)


router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo);

module.exports = router;
