import { Router } from "express";

import { notImplementedHandler } from "../controllers/base";

const router = Router();

router.get("/", notImplementedHandler("List notifications"));
router.post(
  "/:id/read",
  notImplementedHandler("Mark notification as read"),
);

export default router;
