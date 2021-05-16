
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../authenticate');
const cors = require('./cors');

mongoose.set('useFindAndModify',false);

const Employee = require('../models/employee');

const employeeRouter = express.Router();

employeeRouter.use(bodyParser.json());


employeeRouter.route('/')
.options(cors.cors, (req,res)=>{
    res.sendStatus(200);
})
.get(cors.cors, (req,res,next)=>{
    Employee.find(req.query)
    .populate('retailer')
    .then((employee)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(employee);
    },(err)=>next(err))
    .catch((err)=> next(err));
})

.post(cors.cors,authenticate.verifyUser, (req,res,next)=>{
    Employee.create(req.body)
    .then((employee)=>{
        console.log('Employee Created ', employee);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(employee);
    },(err)=>next(err))
    .catch((err)=> next(err));
})



.delete(cors.cors,authenticate.verifyUser, (req,res,next)=>{
    Employee.remove({})
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=> next(err))
    .catch((err)=>next(err));
});

// For specific emp Id
employeeRouter.route('/:employeeId')
.options(cors.corsWithOptions, (req,res)=>{
    res.sendStatus(200);
})
.get(cors.cors, (req,res,next)=>{
    Employee.findById(req.params.employeeId)
    .populate('retailer')
    .then((employee)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(employee);
    },(err)=>next(err))
    .catch((err)=> next(err));
})

.put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
    Employee.findOneAndUpdate(req.params.employeeId,{
        $set: req.body
    },{new:true})
    .then((employee)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(employee);
    },(err)=>next(err))
    .catch((err)=> next(err));
})
.delete(cors.cors,authenticate.verifyUser,(req,res,next)=>{
    Employee.findByIdAndRemove(req.params.employeeId)
    .then((resp)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    },(err)=> next(err))
    .catch((err)=>next(err));
});



module.exports = employeeRouter;

