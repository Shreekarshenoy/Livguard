const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
require("./db/conn");
// const static_path =path.join(__dirname)
// Get the resolved absolute path
const filePath = path.resolve(__dirname, 'app.js');
console.log(filePath);

app.use(express.json());
// app.use(express.static());
app.get("/", (req, res) => {
    console.log("Received a request at root endpoint");
    res.send("hello ");
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
});
