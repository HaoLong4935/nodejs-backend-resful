require('dotenv').config()
const express = require('express')
const configureViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;

//config template engine
configureViewEngine(app);

//khai bao route
app.use('/test', webRoutes);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})