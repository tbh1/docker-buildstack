var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/node_modules', express.static('node_modules'));
app.use('/assets', express.static('assets'));
app.use(express.static('app'));


app.listen(port, function (err) {
  if (err) {
    console.log('error starting app: ' + err);
    return;
  }
  console.log('application listening on port ' + port);
});
