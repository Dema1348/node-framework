const URL = require("url");

const handlers = {};

const route = (req, res, next) => {
  const urlParse = URL.parse(req.url);
  handlers[urlParse.path + req.method].cb(req, res);
};

const add = (method, url, cb) => {
  handlers[`${url + method}`] = { method, url, cb };
};

module.exports = { route, add };
