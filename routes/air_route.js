const express           = require('express');
const router            = express.Router();

//localhost:8080/task
router.get('/', function(req, res) {
    res.status(200).json({data: "Air Router"})
});

module.exports = router;