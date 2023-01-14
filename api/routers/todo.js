// const express = require("express");
// const router = express.Router;

// router.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });

// router.get("/", (req, res) => {
//   res.send("hi form todos GET call");
// });

// router.get("/about", (req, res) => {
//   res.send("hi from the get for about");
// });

// // router.post("/", (req, res) => {
// //   res.send("hi from todos POST call");
// // });

// // router.delete(":id", (req, res) => {
// //   res.send("hi from todo DELETE call");
// // });

// module.exports = router;

const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

module.exports = router;
