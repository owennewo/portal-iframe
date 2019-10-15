const express = require('express');
const app = express();
const port = process.env.PORT || 1337;
app.use('/', express.static('dist'));
app.use('/legacy', express.static('src'));

app.listen(port, function () {
  console.log('Example app listening on port ' + port)
});
