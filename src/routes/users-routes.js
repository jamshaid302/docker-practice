const express = require("express");
const router = express.Router();
const { userController } = require("../controllers/index");

router.post("/", userController.createUser);
router.get("/", userController.allUsers);
router.patch("/", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
