//Cần phải khai báo thư viện mới dùng được biến bên env
require('dotenv').config();
const mongoose = require('mongoose');

//Kiểm tra connection của mongoose 
const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];


const connection = async () => {
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27017/');
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
    } catch (error) {
        console.log(">>Error connection DB:", error);
    }
}

module.exports = connection;