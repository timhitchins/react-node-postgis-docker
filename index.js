const express = require("express");
const app = express();

const client = new Client({
  user: "ppraxis",
  host: "postgis",
  database: "postgres",
  password: "testing",
  port: 35432
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});


app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.listen(5000, ()=>{
    console.log("listening on port 5000")
})