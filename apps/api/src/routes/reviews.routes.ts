import { Router } from "express";

import { notImplementedHandler } from "../controllers/base";

const router = Router();

router.post("/", notImplementedHandler("Create review"));
router.post("/:id/reply", notImplementedHandler("Vendor reply to review"));
router.delete("/:id", notImplementedHandler("Hide review by admin"));

export default router;
