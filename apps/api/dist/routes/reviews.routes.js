"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const base_1 = require("../controllers/base");
const router = (0, express_1.Router)();
router.post("/", (0, base_1.notImplementedHandler)("Create review"));
router.post("/:id/reply", (0, base_1.notImplementedHandler)("Vendor reply to review"));
router.delete("/:id", (0, base_1.notImplementedHandler)("Hide review by admin"));
exports.default = router;
