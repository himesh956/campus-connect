const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Campus Connect API"
    });
});

module.exports = router;