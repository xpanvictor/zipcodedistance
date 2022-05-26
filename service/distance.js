var request = require('request');
const apiKey = process.env.KEY;
const zipCodeURL = 'http://www.zipcodeapi.com/rest/';

var distance = {
  find: function (req, res, next) {
    request(
      zipCodeURL +
        apiKey +
        '/distance.json/' +
        req.query.zipcode1 +
        '/' +
        req.query.zipcode2 +
        '/' +
        req.query.unit,
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
