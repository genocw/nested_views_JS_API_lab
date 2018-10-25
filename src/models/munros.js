const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

const Munros = function () {
  this.munros = [];
}

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper("https://munroapi.herokuapp.com/api/munros");
  requestHelper.get( (data) => {

    // manipulate the retrieved data

    // publish to channel
    PubSub.publish("MunroListView:munro-data-ready", this.munros);
  });
};

module.exports = Munros;
