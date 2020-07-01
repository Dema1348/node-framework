/* eslint-disable no-await-in-loop */
const http = require("http");

let middlewares = [];

const defaultConfig = async (req, res) => {
  for (const middleware of middlewares) {
    await new Promise(resolve => {
      middleware.method(req, res, () => {
        console.debug(`Finished middleware ${middleware.name}`);
        resolve();
      });
    });
  }
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
