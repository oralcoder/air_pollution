const express           = require('express');
const router            = express.Router();
const Air              = require('../models/air_model')


router.get('/', async function(req, res) {
    const result = await Air.FindAllAir();
    if (result.error) {
        console.log('[ERROR] Fail to get all tasks', result.error);
        return res.status(400).json({error: result.error});
    }
    else {
        res.render('main', {data: result.data});    
    }
});

module.exports = router;