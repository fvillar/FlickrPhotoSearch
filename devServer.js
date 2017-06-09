var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
// var config = require('./webpack.config.prod'); // For PROD
var open = require('open');
var cors = require('cors');

/* eslint-disable no-console */
const port = 7757;
var app = express();
var compiler = webpack(config);
app.use(cors());

// var bodyParser = require('body-parser');
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//   extended: true,
//   limit: '50mb'
// }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
