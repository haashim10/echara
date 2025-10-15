import { Router } from "express";

import { notImplementedHandler } from "../controllers/base";

const router = Router();

router.post("/", notImplementedHandler("Create booking request"));
router.get("/:id", notImplementedHandler("Get booking details"));
router.post("/:id/approve", notImplementedHandler("Approve booking"));
router.post("/:id/decline", notImplementedHandler("Decline booking"));
router.post("/:id/cancel", notImplementedHandler("Cancel booking"));
router.post("/:id/complete", notImplementedHandler("Complete booking"));
router.post(
  "/:id/payment-log",
  notImplementedHandler("Log booking payment"),
);

export default router;
