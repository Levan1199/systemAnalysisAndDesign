
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

mongoose.set('useFindAndModify',false);

const Retailer = require('../models/retailer');

const retailerRouter = express.Router();

retailerRouter.use(bodyParser.json());


retailerRouter.route('/')
.options(cors.cors, (req,res)=>{
    res.sendStatus(200);
})
.get(cors.cors, (req,res,next)=>{
    Retailer.find(req.query)
    .populate('employee')
    .populate('retailerReport')
    .then((retailer)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(retailer);
    },(err)=>next(err))
    .catch((err)=> next(err));
})

.post(cors.cors,authenticate.verifyUser, (req,res,next)=>{
    Retailer.create(req.body)
    .then((retailer)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(retailer);
    },(err)=>next(err))
    .catch((err)=> next(err));
})

.put(cors.cors, (req, res, next) => {
    Retailer.findOneAndUpdate(req.retailerId,{
        $set: req.body
    },{new:true})
    .then((retailer)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(retailer);
    },(err)=>next(err))
    .catch((err)=> next(err));
})


.delete(cors.cors,authenticate.verifyUser, (req,res,next)=>{
    Retailer.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=> next(err))
    .catch((err)=>next(err));
});





module.exports = retailerRouter;

