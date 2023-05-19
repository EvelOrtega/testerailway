const express = require("express");

const app = express();
// Use PORT provided in environment or default to 3000
const port = process.env.PORT || 3000;

// function
app.use("/", res.status(200).send("funcionou"));


// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  // ...
});
