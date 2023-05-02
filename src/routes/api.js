const express = require('express');

const routerAPI = express.Router();

const { getUsersAPI, postCreateUserAPI, puttUpdateUserAPI } = require('../controllers/apiController')


routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', puttUpdateUserAPI);

module.exports = routerAPI;