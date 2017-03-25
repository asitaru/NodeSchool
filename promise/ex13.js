const http = require("q-io/http");

return http.read("http://localhost:7000/")
    .then(res => http.read("http://localhost:7001/" + res))
    .then( json => console.log(JSON.parse(json)))
    .then(null, console.log);
