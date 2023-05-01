const User = require("../models/User");

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    });
}

//Tạo hàm create user
const postCreateUserAPI = async (req, res) => {
    //Lấy các giá trị người dùng nhập trong req.body
    let email = req.body.emailID;
    let name = req.body.nameInput;
    let city = req.body.cityInput;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    })

    return res.status(200).json({
        errorCode: 0,
        data: user
    });
}


module.exports = { getUsersAPI, postCreateUserAPI }