import {UnisRouter} from "./routes/unis";
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

let app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/unis', UnisRouter);

module.exports = app;

/*
var UnisDatas = require('./models/UnisData');
var express = require('express'),
  app = express();

var cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/public'));

var unisData = new UnisDatas.UnisData();

app.get('/unis', function(req, res) {
  unisData.getUnis(function(unis) {
    res.json(unis);
  });
});

app.listen(3000);
/*
 controllers/ – defines your app routes and their logic
 helpers/ – code and functionality to be shared by different parts of the project
 middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes
 models/ – represents data, implements business logic and handles storage
 public/ – contains all static files like images, styles and javascript
 views/ – provides templates which are rendered and served by your routes
 tests/ – tests everything which is in the other folders
 app.js – initializes the app and glues everything together
 package.json – remembers all packages that your app depends on and their versions
 */