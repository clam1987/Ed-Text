// Require node packages
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controller/controller");

//Initialize express
const app = express();

// Global Variables
let PORT = process.env.PORT || 3000;

// Serve the public folder as a static folder
app.use(express.static("public"));

// Parse app body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use handlebar engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars");

// Call the routes
app.use(routes);



// Start server
app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT);
})