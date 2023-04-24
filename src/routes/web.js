//Khai báo thư viện express
const express = require('express');
//Khai báo express router
const router = express.Router();
const { gethomepage, checkAB, gethoiLong, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')

//Khai bao route
router.get('/', gethomepage);
router.get('/abc', checkAB);
router.get('/haolong', gethoiLong);

router.get('/CREATE', getCreatePage);
router.get('/UPDATE/:id', getUpdatePage);

router.post('/CREATE_USER', postCreateUser);

router.post('/UPDATE_USER', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);
//Xuất hàm ni ra cục bộ 
module.exports = router;