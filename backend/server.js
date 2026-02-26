const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("hello smart ai planner");
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});