// Node Module Requires
const express = require("express");
const router = express.Router();


// Get Routes
router.get("*", (req, res) => {
    res.redirect("/");
});

router.get("/", (req, res) => {
    res.render("");
})

router.get("/game", (req, res) => {
    res.render("")
});

// Post Routes
router.post("/character", (req, res) => {
    
})

module.exports = router;