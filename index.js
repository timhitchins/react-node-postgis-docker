const express = require("express");
const app = express();

const client = new Client({
  user: "ppraxis",
  host: "localhost",
  database: "db",
  password: "testing",
  port: 35432
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});
