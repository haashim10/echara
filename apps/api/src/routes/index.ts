import { Router } from "express";

import adminRoutes from "./admin.routes";
import authRoutes from "./auth.routes";
import bookingsRoutes from "./bookings.routes";
import chatsRoutes from "./chats.routes";
import listingsRoutes from "./listings.routes";
import notificationsRoutes from "./notifications.routes";
import reviewsRoutes from "./reviews.routes";
import vendorsRoutes from "./vendors.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/vendors", vendorsRoutes);
router.use("/listings", listingsRoutes);
router.use("/bookings", bookingsRoutes);
router.use("/chats", chatsRoutes);
router.use("/reviews", reviewsRoutes);
router.use("/notifications", notificationsRoutes);
router.use("/admin", adminRoutes);

export { router };
