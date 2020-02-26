const axios = require("axios");

class Http {
  get = async url => await axios.get(url);
  post = async (url, todo) => await axios.post(url, todo);
}
module.exports = new Http();
