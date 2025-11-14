import { Router } from "express";
import { notImplementedHandler } from "../controllers/base";
const router = Router();
router.get("/", notImplementedHandler("List chats"));
router.get("/:id", notImplementedHandler("Get chat history"));
export default router;
