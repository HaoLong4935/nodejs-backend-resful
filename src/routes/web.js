//Khai báo thư viện express
const express = require('express');
//Khai báo express router
const router = express.Router();

//Khai bao route
router.get('/haolong', (req, res) => {
    res.render('sample.ejs')
})

router.get('/abc', (req, res) => {
    res.send('Hello, tui là Leng')
})

router.get('/', (req, res) => {
    res.send('Hello World ! ')
})

//Xuất hàm ni ra cục bộ 
module.exports = router;