const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const cookieParser = require ("cookie-parser");
const path = require("path");

// REQUIRE ROUTE FILES
const welcomeRouter = require("./routes/welcome");
const clucksRouter = require("./routes/clucks");

// CREATE APP
const app = express();

// CHOOSE TEMPLATING ENGINE
app.set("view engine", "ejs");

// SETUP MIDDLEWARE
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser())
// Method Override
app.use(
  
  methodOverride((req, res) => {
    if (req.body && req.body._method) {
      const method = req.body._method;
      return method;
    }
  })
);

app.use((req,res,next)=>{
    res.locals.username= req.cookies.username || ""
    next()
})

// USE ROUTERS FROM ROUTE FILES
app.use("/", welcomeRouter);
app.use("/clucks", clucksRouter);

// START SERVER
  const PORT = 4000;
  const DOMAIN = "localhost";
  app.listen(PORT, DOMAIN, () => {
    console.log(`💁 Server is listening at http://${DOMAIN}:${PORT}`);
  });