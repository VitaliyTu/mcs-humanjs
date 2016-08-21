'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static(__dirname));

// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let fileName = 'database.json';

app.post('/database', urlencodedParser, function (req, res) {
    console.log('[INFO] Получен запрос с адреса: ' + req.ip.replace('::ffff:', ''));

    if (!req.body) {
        let message = 'Не переданы параметры запроса';
        res.json({ status: 'error', message: message });
        console.log('[ERROR] ' + message);
        return;
    }

    // console.log('[INFO] Получен POST запрос: ' + req.body.toString() );

    let fd = fs.openSync(fileName, 'a+');

    // Read file contents
    fs.readFile(fd, (err, data) => {
        let json;

        try {
            json = JSON.parse(data);
        } catch (e) {}

        if (!Array.isArray(json))
            json = [];

        json.push(req.body);

        fs.writeFile(fd, JSON.stringify(json, null, '\t'), (err) => {
            if (err) throw err;
            let message = 'Сохранено: ' + JSON.stringify(req.body)
            res.json({ status: 'ok', message: message });
            console.log('[OK] ' + message);
        });

    });
});

app.listen(3001, function () {
    console.log('Server listening on http://localhost:3001');
});
