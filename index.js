const app = require("./library/app");
const addName = require("./addName");
const addTest = require("./addTest");
const routerTest = require("./routerTest");

const server = app.initServer();
server.use(addName);
server.use(addTest);
server.use(routerTest.route);

server.listen(process.env.PORT || 3000, () => {
  console.log(`listening port ${process.env.PORT || 3000}`);
});
