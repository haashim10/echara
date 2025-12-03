"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const base_1 = require("../controllers/base");
const router = (0, express_1.Router)();
router.get("/", (0, base_1.notImplementedHandler)("List chats"));
router.get("/:id", (0, base_1.notImplementedHandler)("Get chat history"));
exports.default = router;
