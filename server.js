const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  },
  threshold: 0
}));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/cv-app'));

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/cv-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
