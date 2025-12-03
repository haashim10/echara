"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notImplementedHandler = notImplementedHandler;
const http_status_codes_1 = require("http-status-codes");
function notImplementedHandler(feature) {
    return (_req, res) => {
        res.status(http_status_codes_1.StatusCodes.NOT_IMPLEMENTED).json({
            message: `${feature} not implemented`,
        });
    };
}
