var request = require("request");

var cron = require("node-cron");

cron.schedule("*/5 * * * *", () => {
  request("http://147.50.227.164:4000/huay", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log("done");
    }
  });
});
