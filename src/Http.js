const axios = require("axios");

class Http {
  get = async url => await axios.get(url);
}

module.exports = new Http();
