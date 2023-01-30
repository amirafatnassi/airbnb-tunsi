const express = require("express");
const passport = require("passport");
const {
  getLogements,
  getLogement,
  addLogement,
  updateLogement,
  deleteLogement,
} = require("../controllers/logementController");
const upload = require("../Middlewares/upload");

const router = express.Router();

router.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  getLogements
);
router.get(
  "/show/:id",
  passport.authenticate("bearer", { session: false }),
  getLogement
);
router.post(
  "/add",
  [passport.authenticate("bearer", { session: false }), upload.array("photos",10)],
  addLogement
);
router.put(
  "/update/:id",
  [passport.authenticate("bearer", { session: false }), upload.array("photos",10)],
  updateLogement
);
router.delete(
  "/delete/:id",
  passport.authenticate("bearer", { session: false }),
  deleteLogement
);

module.exports = router;
