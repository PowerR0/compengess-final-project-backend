const express = require("express");
const itemsController = require("../controller/itemsController");

const router = express.Router();

router.get("/", itemsController.getAssignments);
router.get("/point", itemsController.getPoints);
router.post("/", itemsController.changePoints);
// router.delete("/:item_id", itemsController.deleteItem);

module.exports = router;
