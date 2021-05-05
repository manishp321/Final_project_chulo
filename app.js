// load the things we need
const express = require("express");
require("dotenv").config();
require("./demo_db_connection");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
const khanaRoutes = require("./routes/khanaRoutes");
const cartRoutes = require("./routes/cartRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use(
    "/fontawesome-free-5.15.1-web",
    express.static(__dirname + "public/fontawesome-free-5.15.1-web")
);



// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function(req, res) {
    res.render("pages/index");
});

// login page
app.get("/login", function(req, res) {
    res.render("pages/purchase");
});


//dish detail page
app.get("/detail", function(req, res) {
    res.render("pages/detail");
});

// Khana page

app.use("/khana", khanaRoutes);
// Cart page
app.use("/cart", cartRoutes);

// Purchase route
app.use("/purchase", purchaseRoutes);

app.listen(5000);
console.log("server started at port 5000");