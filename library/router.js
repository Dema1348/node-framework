const URL = require("url");

const handlers = {};

const extendRes = res => {
  return {
    send: (status, json) => {
      res.writeHead(status, { "Content-Type": "text/json" });
      res.write(JSON.stringify(json));
      res.end();
    }
  };
};

const extendReq = req => {
  return {
    query: URL.parse(req.url, true).query
  };
};

const route = (req, res) => {
  const urlParse = URL.parse(req.url, true);
  const newRes = { ...req, ...extendRes(res) };
  const newReq = { ...req, ...extendReq(req) };
  handlers[urlParse.pathname + req.method].cb(newReq, newRes);
};

const add = (method, url, cb) => {
  handlers[`${url + method}`] = { method, url, cb };
};

module.exports = { route, add };
