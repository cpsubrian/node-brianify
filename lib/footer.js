var https = require('https')
  , url = require('url')

module.exports = function (cb) {
  https.get(url.parse('https://raw.github.com/TerraEclipse/footer/master/README.md'), function (res) {
    var data = '';
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.once('end', function () {
      cb(null, data);
    });
  }).once('error', cb);
};