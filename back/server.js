require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/currencies', require('./valutes/valutes.controller'));

// start server
const port = 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
