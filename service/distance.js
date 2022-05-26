var request = require('request');
const apiKey = process.env.apiKey;
const zipCodeURL = 'https:/mwa.zipcodeapi.com/rest/';

var distance = {
  find: function (req, res, next) {
    request(
      zipCodeURL +
        apiKey +
        '/distance.json/' +
        req.params.zipcode1 +
        '/' +
        req.params.zipcode2 +
        '/mile',
      function (err, response, body) {
        if (!err && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
        } else {
          res.status(400).send({ distance: -1 });
        }
      }
    );
  },
};

module.exports = distance;
