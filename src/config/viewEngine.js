const path = require('path')
const express = require('express')

const configureViewEngine = (app) => {
    console.log("Check dirname", path.join('./src', 'views'))
    //config template engine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');


    //config static files: image/css/js
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configureViewEngine;