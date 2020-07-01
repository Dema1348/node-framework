const library = require("./library");
const addName = require("./addName");
const addTest = require("./addTest");

const app = library.initServer();
app.use(addName);
app.use(addTest);
app.listen(process.env.PORT || 3000, () => {
  console.log(`listening port ${process.env.PORT || 3000}`);
});
