import { Router } from "express";

import { notImplementedHandler } from "../controllers/base";

const router = Router();

router.post("/", notImplementedHandler("Create listing"));
router.put("/:id", notImplementedHandler("Update listing"));
router.delete("/:id", notImplementedHandler("Delete listing"));
router.get("/:id", notImplementedHandler("Get listing by id"));
router.get("/search", notImplementedHandler("Search listings"));

export default router;
