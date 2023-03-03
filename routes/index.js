const express = require("express");
const router = express.Router();
const orderController = require("../controllers/AlbumController");

// Root/Index Routes
router.get("/", (req, res, next) => {
  res.json({
    message: "Call the /albums route to retrieve a list of albums",
    message: "ワークフロー自動実行を確認",
  });
});

// get albums
router.get("/albums", orderController.index);

module.exports = router;
