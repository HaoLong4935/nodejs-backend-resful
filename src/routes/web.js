//Khai báo thư viện express
const express = require('express');
//Khai báo express router
const router = express.Router();
const { gethomepage, checkAB, gethoiLong, postCreateUser } = require('../controllers/homeController')

//Khai bao route
router.get('/home', gethomepage);
router.get('/abc', checkAB);
router.get('/haolong', gethoiLong);

router.post('/CREATE_USER', postCreateUser);

//Xuất hàm ni ra cục bộ 
module.exports = router;