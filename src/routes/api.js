const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, puttUpdateUserAPI, deleteUserAPI, postUploadfileAPI, postUploadMultiplefileAPI } = require('../controllers/apiController')
const { postCreateCustomer } = require('../controllers/customerController')

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', puttUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadfileAPI);
routerAPI.post('/files', postUploadMultiplefileAPI);

routerAPI.post('/customers', postCreateCustomer);


module.exports = routerAPI;