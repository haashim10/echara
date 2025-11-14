import { StatusCodes } from "http-status-codes";
export function notImplementedHandler(feature) {
    return (_req, res) => {
        res.status(StatusCodes.NOT_IMPLEMENTED).json({
            message: `${feature} not implemented`,
        });
    };
}
