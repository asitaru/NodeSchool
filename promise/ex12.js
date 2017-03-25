const http = require("q-io/http");

return http.read("http://localhost:1337")
    .then(val => JSON.parse(val))
    .then(console.log);
