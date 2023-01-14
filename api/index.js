const todoRoutes = require("./routers/todo");
const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/todo", (req, res) => {
//   res.send("hi");
// });

app.listen(port, () => {
  console.log(`STARTING SERVER ON PORT: ${port}`);
});
app.use("/todos", todoRoutes);
