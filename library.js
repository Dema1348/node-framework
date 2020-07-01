/* eslint-disable no-await-in-loop */
const http = require("http");
// const url = require("url");
// const router = require("./router");

// const defaultConfig = (req, res) => {
//   const parseUrl = url.parse(req.url);
//   if (router[parseUrl.pathname]) router[parseUrl.pathname](req, res);
//   else router["404"](req, res);
// };

let middlewares = [];

const defaultConfig = async (req, res) => {
  const rr = { req, res };
  for (const middleware of middlewares) {
    await new Promise(resolve => {
      middleware.method(rr, () => {
        console.debug(`Finished middleware ${middleware.name}`);
        resolve();
      });
    });
  }

  rr.res.writeHead(200, { "Content-Type": "application/text" });
  rr.res.write("ok");
  rr.res.end();
};

const addMiddleware = middleware => {
  console.debug(`Mount ${middleware.name}`);
  middlewares = [...middlewares, { name: middleware.name, method: middleware }];
};

const initServer = () => {
  const server = http.createServer(defaultConfig);
  server.use = addMiddleware;
  return server;
};

module.exports = {
  initServer
};
