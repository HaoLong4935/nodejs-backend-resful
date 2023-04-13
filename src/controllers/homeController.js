//Lấy file connection 
const { render } = require('ejs')
const connection = require('../config/database')

const gethomepage = (req, res) => {
    // let users = [];

    // connection.query(
    //     'SELECT * FROM Users u ;',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log((">> Result homepage =:"), results);

    //         // console.log("Check user:", users);
    //         //hàm stringify chuyển các phần tử thành kiểu string\
    //         res.send(JSON.stringify(users))
    //     }
    // );

    return res.render('home.ejs');
}

const checkAB = (req, res) => {
    res.send('AB')
}

const gethoiLong = (req, res) => {
    res.render('sample.ejs')
}

//Tạo hàm create user
const postCreateUser = (req, res) => {
    console.log("Request body:", req.body);
    res.send('Create new user')
}


module.exports = {
    gethomepage,
    checkAB,
    gethoiLong,
    postCreateUser
}