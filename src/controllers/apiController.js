const User = require("../models/User");
const { uploadSingleFile, uploadMultipleFiles } = require("../serviecs/fileService");

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


const deleteUserAPI = async (req, res) => {
    const id = req.body.userId;

    //await deleteUserById(id);
    let result = await User.deleteOne({
        _id: id
    });

    console.log(result);

    return res.status(200).json({
        errorCode: 0,
        data: result
    });
}

const postUploadfileAPI = async (req, res) => {

    if (!req.files || Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded')
    }

    let result = await uploadSingleFile(req.files.image);
    console.log("Result", result);
    return res.send('UPLOAD')
}

const postUploadMultiplefileAPI = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    // console.log(req.files);
    //upload single => files is an object
    //upload multiple => files is an array
    if (Array.isArray(req.files.image)) {
        //upload multiple
        let result = await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })

    } else {
        //upload single
        return await uploadSingleFile(req, res);
    }
}


module.exports = { getUsersAPI, postCreateUserAPI, puttUpdateUserAPI, deleteUserAPI, postUploadfileAPI, postUploadMultiplefileAPI }