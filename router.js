const pong = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/text" });
  res.write("pong");
  res.end();
};

const root = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/text" });
  res.write("ok");
  res.end();
};

const notFound = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/text" });
  res.write("not found");
  res.end();
};

module.exports = {
  "/ping": pong,
  "/": root,
  "404": notFound
};
