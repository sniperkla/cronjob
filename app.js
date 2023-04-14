var request = require("request");
const express = require("express");
const app = express();

var cron = require("node-cron");

cron.schedule(
  "*/3 * * * *",
  () => {
    request(
      "http://147.50.227.164:4000/huay",
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log("done huay");
        } else console.log("fail huay");
      }
    );
    setTimeout(() => {
      request(
        "http://147.50.227.164:3001/yeekee",
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log("done yeekee");
          } else console.log("fail yeekee");
        }
      );
    });
  },
  30000
);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
