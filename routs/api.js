const express = require('express');
const router = express.Router();
const JSONData = require('./JSONData.json');

router.get('',(req,res)=>{
    res.send('first Response');
})

router.get('/about',(req,res)=>{
    res.send('about rout');
})

router.get('/userDetails',(req,res)=>res.json(JSONData));

router.get('/:name',(req,res)=>{
    const found = JSONData.some(JSONData=>JSONData.name===req.params.name);

    if(found){
        res.json(JSONData.filter(JSONData=>JSONData.name===req.params.name));
    }
    else
    {
        res.status(400).json(`no data on ${req.params.name}`);
    }
})

//post request
router.post('/newUser',(req,res)=>{
    if(!req.body.name || !req.body.email)
    {
        res.status(400);
        res.json(`There is no name or email passed`);
    }
    else
    {
        res.send(req.body)
    }
})

module.exports = router;