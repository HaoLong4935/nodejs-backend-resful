const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, puttUpdateUserAPI, deleteUserAPI } = require('../controllers/apiController')


routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', puttUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

module.exports = routerAPI;