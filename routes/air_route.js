const express     = require('express');
const router      = express.Router();

const Air         = require('../models/air_model')

router.get('/', async function(req, res) {
    const result = await Air.FindAllAir();
    if (result.error) {
        console.log('[ERROR] Fail to get all air data', result.error);
        return res.status(400).json({error: result.error});
          
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data});
    }
});
router.post('/', async function(req, res) {
    console.log('####', req.body)
    const data = req.body.data;
    console.log('data111', data, typeof(data))
    //if (typeof(data) == 'string') {
    //    data = JSON.parse(data);
    //}
    const result = await Air.AddAir(data);
    if (result.error) {
        console.log(result.error)
        // 400 Bad Request
        return res.status(400).json({error: result.error});
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data.insertId});
    }
});
router.delete('/:id', async function(req, res) {
    const id = req.params.id;
    const result = await Air.DeleteAir(id);
    if (result.data.affectedRows == 0) {
        // 204 Non Content
        return res.status(204).json({data: result.data});
    }
    else {
        // 200 OK
        return res.status(200).json({data: result.data});
    }
});

module.exports = router;