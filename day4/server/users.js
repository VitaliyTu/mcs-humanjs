'use strict';

let express = require('express');
let bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

let fs = require('fs');
let app = express();
let md5 = require('md5');

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
// let parser = bodyParser.urlencoded({ extended: false });
// let parser = bodyParser();
let fileName = 'users.json';

// Find user by login in array
function findUser(login, users) {
    if (!login) return;
    if ( !Array.isArray(users) || users.length == 0) return;

    return users.some( (u) => {
        return u.login == login
    });
}

// Auth user by login and password
function authUser(login, password, users) {
    if (!login || !password) return;
    if ( !Array.isArray(users) || users.length == 0) return;

    return users.some( (u) => {
        return u.login == login && u.password == md5(password)
    });
}

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static(__dirname));
app.use(bodyParser.json());

//
// Registration
//
app.post('/reg', upload.array(), function (req, res) {
    console.log('[INFO] Получен запрос на регистрацию с адреса: ' + req.ip.replace('::ffff:', ''));

    // Check POST body
    if (!req.body) {
        let message = 'Не переданы данные для регистрации пользователя';
        console.log('[ERROR] ' + message);
        res.json({ status: 'error', message: message });
        return;
    }

    console.log(req.body);

    if (!req.body.login || !req.body.password) {
        let message = 'Не переданы логин или пароль';
        console.log('[ERROR] ' + message);
        res.json({ status: 'error', message: message });
        return;
    }

    let fd = fs.openSync(fileName, 'a+');

    // Read file contents
    fs.readFile(fd, (err, data) => {
        if (err) throw err;

        let users;

        try {
            users = JSON.parse(data);
        } catch (e) {}

        if (!Array.isArray(users))
            users = [];

        // Check if user already registered
        if ( findUser(req.body.login, users) ) {
            let message = 'Пользователь с логином ' + req.body.login + ' уже зарегистрирован';
            console.log('[ERROR] ' + message);
            res.json({ status: 'error', message: message });
            return;
        }

        if (req.body.password) {
            req.body.password = md5(req.body.password)
        }
        users.push(req.body);

        fs.writeFile(fd, JSON.stringify(users, null, '\t'), (err) => {
            if (err) throw err;
            let message = 'Пользователь зарегистрирован: ' + req.body.login;
            console.log('[OK] ' + message);
            res.json({ status: 'ok', message: message });
        });

    });

});

//
// Authorization
//

app.post('/auth', urlencodedParser, function (req, res) {
    console.log('[INFO] Получен запрос на авторизацию с адреса: ' + req.ip.replace('::ffff:', ''));

    // console.log(req);
    // console.log(req.body);

    // Check POST body
    if (!req.body || !req.body.login || !req.body.password) {
        let message = 'Не переданы логин или пароль для авторизации пользователя';
        console.log('[ERROR] ' + message);
        res.json({ status: 'error', message: message });
        return;
    }

    let fd = fs.openSync(fileName, 'a+');

    // Read file contents
    fs.readFile(fd, (err, data) => {
        if (err) throw err;

        let users = [];

        try {
            users = JSON.parse(data);
        } catch (e) {}

        if ( authUser(req.body.login, req.body.password, users)) {
            let message = 'Пользователь ' + req.body.login + ' успешно авторизован!';
            console.log('[OK] ' + message);
            res.json({ status: 'ok', message: message });
        } else {
            let message = 'Неправильный логин или пароль ' + req.body.login;
            console.log('[ERROR] ' + message);
            res.json({ status: 'error', message: message });
        }
    });

});

app.listen(3333, function () {
    console.log('Server listening on http://localhost:3333');
});
