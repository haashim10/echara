import { Router } from "express";

import { notImplementedHandler } from "../controllers/base";

const router = Router();

router.post("/register", notImplementedHandler("Email registration"));
router.post("/login", notImplementedHandler("Email login"));
router.post("/oauth/callback", notImplementedHandler("OAuth callback"));
router.get("/me", notImplementedHandler("Current user profile"));
router.delete("/me", notImplementedHandler("GDPR account delete"));
router.get("/me/favourites", notImplementedHandler("List favourites"));
router.post(
  "/me/favourites/:listingId",
  notImplementedHandler("Add/remove favourite"),
);

export default router;
