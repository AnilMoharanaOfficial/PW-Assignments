const http = require("http");

const PORT = 5353;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Men & Women Dummy Data");
  } else if (req.url == "/men") {
    const option = {
      hostname: "fakestoreapi.com",
      path: "/products?limit=10",
      method: "GET",
    };

    const apiReq = http.request(option, (apiRes) => {
      let data = "";

      apiRes.on("data", (chunk) => {
        data += chunk;
      });

      apiRes.on("end", () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data);
      });
    });

    apiReq.end();
  } else if (req.url == "/women") {
    const option = {
      hostname: "fakestoreapi.com",
      path: "/products?limit=10",
      method: "GET",
    };

    const apiReq = http.request(option, (apiRes) => {
      let data = "";

      apiRes.on("data", (chunk) => {
        data += chunk;
      });

      apiRes.on("end", () => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(data);
      });
    });

    apiReq.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page Not Found");
  }
});

server.listen(PORT, () => console.log(`SERVER RUNNING AT localhost:${PORT}`));
