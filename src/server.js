require('dotenv').config()
const express = require('express')
const configureViewEngine = require('./config/viewEngine');
const { gethomepage, checkAB, gethoiLong } = require('../src/controllers/homeController')
const webRoutes = require('./routes/web');
const router = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//Config req.body
app.use(express.json()); //for json
app.use(express.urlencoded({ extended: true })) //for data

router.get('/testController', gethomepage)
router.get('/AB', checkAB)
router.get('/hoiLong', gethoiLong)

//config template engine
configureViewEngine(app);

//khai bao route
app.use('/', webRoutes);




connection.query(
    'SELECT * FROM Users u ;',
    function (err, results, fields) {
        console.log((">> Result is:"), results); // results contains rows returned by server
        //console.log((">> Result is:"), fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})