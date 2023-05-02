require('dotenv').config()
const express = require('express')
const configureViewEngine = require('./config/viewEngine');
const { gethomepage, checkAB, gethoiLong } = require('../src/controllers/homeController')
const fileupload = require('express-fileupload');
const webRoutes = require('./routes/web');
const apiRouter = require('./routes/api');
const connection = require('./config/database');


const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//Config fileupload 
app.use(fileupload());

//Config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })) //for data

// router.get('/testController', gethomepage)
// router.get('/AB', checkAB)
// router.get('/hoiLong', gethoiLong)

//config template engine
configureViewEngine(app);

//khai bao route
app.use('/', webRoutes);
app.use('/v1/api', apiRouter);


//Test connection 
(async () => {
    //Kiểm tra kết nối 
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`)
        })
    }
    catch (error) {
        console.log(">>. Error connect to DB", error)
    }
})();
