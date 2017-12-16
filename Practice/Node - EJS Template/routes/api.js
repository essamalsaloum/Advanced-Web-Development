var express = require('express');
    api = require('../helpers/api')
    router = express.Router();

router.route('/')
  .get(api.get);


module.exports = router;
