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

const puttUpdateUserAPI = async (req, res) => {
    console.log("Request body:", req.body);

    //Lấy các giá trị người dùng nhập trong req.body gửi lên server
    let email = req.body.emailID;
    let name = req.body.nameInput;
    let city = req.body.cityInput;
    //Với update chúng ta cần thêm một tham số nữa là Id
    let userId = req.body.userId;

    // await User.updateOne({ điều kiện để filter(lọc) }, { các giá trị muốn cập nhật }) => Trả về một {};
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });

    console.log(">> emial=", email, " name=", name, " city=", city, " userId=", userId)
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users(email,name,city)VALUES(?,?,?) `, [email, name, city],
    // );
    //res.send("Update Success")
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
    //const [results, fields] = await connection.query('SELECT * FROM Users u');
}


module.exports = { getUsersAPI, postCreateUserAPI, puttUpdateUserAPI }