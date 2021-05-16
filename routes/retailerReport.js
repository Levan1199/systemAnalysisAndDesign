
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

mongoose.set('useFindAndModify',false);

const RetailerReport = require('../models/retailerReport');

const retailerReportRouter = express.Router();

retailerReportRouter.use(bodyParser.json());


retailerReportRouter.route('/')
.options(cors.cors, (req,res)=>{
    res.sendStatus(200);
})
.get(cors.cors, (req,res,next)=>{
    RetailerReport.find(req.query)
    .then((retailer)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(retailer);
    },(err)=>next(err))
    .catch((err)=> next(err));
})

.post(cors.cors,authenticate.verifyUser, (req,res,next)=>{
    RetailerReport.create(req.body)
    .then((retailer)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(retailer);
    },(err)=>next(err))
    .catch((err)=> next(err));
})




module.exports = retailerReportRouter;

