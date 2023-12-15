const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.post(
  "/forgot-password",
  validateBody(schemas.userResetPasswordSchema),
  ctrl.forgotPassword
);


router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
