const express = require("express");
const axios = require("axios");
const request = require("request");
const bodyParser = require("body-parser");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
const client_secret = process.env.REACT_APP_NAVER_CLIENT_SECRET;

router.post("/", function (req, res, next) {
  const api_url = `https://mac.search.naver.com/mobile/ac?_q_enc=UTF-8&st=1&r_format=json&q=${encodeURI(
    req.body.query
  )}`;
  var options = {
    url: api_url,
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

module.exports = router;
