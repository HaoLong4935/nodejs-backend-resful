//Lấy file connection 
const { render } = require('ejs')
const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../serviecs/CRUDService')

const gethomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
}

const checkAB = (req, res) => {
    res.send('AB')
}

const gethoiLong = (req, res) => {
    res.render('sample.ejs')
}

//Tạo hàm create user
const postCreateUser = async (req, res) => {
    console.log("Request body:", req.body);

    //Lấy các giá trị người dùng nhập trong req.body
    let email = req.body.emailID;
    let name = req.body.nameInput;
    let city = req.body.cityInput;

    let [results, fields] = await connection.query(
        `INSERT INTO Users(email,name,city)VALUES(?,?,?) `, [email, name, city],
    );

    console.log("Check results: ", results);
    res.send("Create Success")


    //const [results, fields] = await connection.query('SELECT * FROM Users u');
}

const getCreatePage = (req, res) => {
    res.render('create_user.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    //console.log("Check id: ", results);


    res.render('edit.ejs', { user: user })
}

const postUpdateUser = async (req, res) => {
    console.log("Request body:", req.body);

    //Lấy các giá trị người dùng nhập trong req.body gửi lên server
    let email = req.body.emailID;
    let name = req.body.nameInput;
    let city = req.body.cityInput;
    //Với update chúng ta cần thêm một tham số nữa là Id
    let userId = req.body.userId;

    await updateUserById(email, city, name, userId);

    console.log(">> emial=", email, " name=", name, " city=", city, " userId=", userId)
    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users(email,name,city)VALUES(?,?,?) `, [email, name, city],
    // );



    //res.send("Update Success")
    res.redirect('/');


    //const [results, fields] = await connection.query('SELECT * FROM Users u');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('delete.ejs', { user: user });
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;

    await deleteUserById(id);

    res.redirect('/');
}

module.exports = {
    gethomepage,
    checkAB,
    gethoiLong,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}