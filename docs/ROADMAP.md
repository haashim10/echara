# Echara MVP Delivery Roadmap

This roadmap captures the follow-up implementation plan after the initial scaffolding completed in this iteration. It maps directly to the Build Pack, Product Development Plan, and DB/API diagram.

## 1. Infrastructure & Environment
- [ ] Connect Firebase Auth Admin SDK and issue custom role claims after initial sign-up
- [ ] Provision MongoDB Atlas project + network rules and wire credentials through `@echara/env`
- [ ] Configure CI pipelines (Vercel for web/admin + serverless API, EAS for Expo) and add lint/test gates
- [ ] Stand up Socket.IO node process + shared session store (Redis or Mongo TTL collections)

## 2. Authentication & Profiles
- [ ] Implement auth controllers (email, Google, Apple) with Firebase verification and JWT session cookies for API
- [ ] Build shared profile service for buyers/vendors (name, avatar uploads → Firebase Storage, favourites, GDPR delete)
- [ ] Create account deletion job to anonymise records across collections (bookings, reviews, chats)
- [ ] Add Playwright happy-path tests for register/login/logout

## 3. Vendor Onboarding & Listings
- [ ] Build multi-step onboarding wizard in web app + Expo mobile using React Hook Form + Zod validation
- [ ] Implement `/vendors` APIs with autosave drafts, approval gating, and trial countdown logic
- [ ] Create listings CRUD screens (media upload via Firebase Storage, price ranges, availability management)
- [ ] Integrate Google Maps Places autocomplete + map preview for listing locations
- [ ] Write Jest integration tests for listings service and admin approval flows

## 4. Search & Buyer Experience
- [ ] Implement `/listings/search` controller with compound indexes, pagination, and caching layer (Redis/in-memory)
- [ ] Build buyer listings page (filters, map results, wishlists) with optimistic updates
- [ ] Persist wishlists in `users.favourites` via API mutations and socket updates
- [ ] Add server components for listing detail view (gallery, reviews, similar vendors)

## 5. Bookings & Calendar
- [ ] Implement booking workflow endpoints (pending → confirmed/declined → completed/canceled) with conflict detection
- [ ] Integrate Google Calendar OAuth + sync service to ingest busy slots and refresh tokens
- [ ] Build booking request UI (date picker backed by availability) in web + mobile
- [ ] Add booking timeline component + audit log entries for state changes
- [ ] Configure email + push notifications for each state transition

## 6. Messaging & Notifications
- [ ] Stand up Socket.IO server rooms per buyer/vendor with rate limiting and attachment validation
- [ ] Build chat UI (web + mobile) with typing indicators, read receipts, and offline queue
- [ ] Implement `/notifications` service, configurable categories, in-app bell icon, and FCM integration

## 7. Reviews & Insights
- [ ] Implement review eligibility guard (completed bookings only, 30-day window) and recalculation pipeline
- [ ] Create vendor review components (write + replies) and admin hide controls
- [ ] Build vendor insights dashboard pulling aggregation pipelines (earnings, conversion, cancellation rate, ad spend)
- [ ] Add automated test fixtures for aggregation correctness

## 8. Admin Portal
- [ ] Flesh out admin pages: vendors queue, listings moderation, review flags, disputes, analytics dashboards
- [ ] Connect to `/admin` API endpoints with secure routing (Next.js middleware + Firebase role claims)
- [ ] Implement AdminLogs viewer with filters and CSV export
- [ ] Add role-based navigation + audit action confirmation modals

## 9. Subscription & Billing
- [ ] Enforce trial gating (lock bookings approvals + insights post-trial unless active)
- [ ] Add admin override toggle for subscription state
- [ ] Prepare Stripe integration stubs (Plan IDs, webhook handlers) for Phase 2

## 10. Quality, Security, & Release
- [ ] Expand ESLint/Prettier coverage across packages + add `pnpm test` script
- [ ] Add Jest + Supertest suites for API controllers, Vitest for shared utilities
- [ ] Configure Playwright smoke tests (web/admin) + Detox for Expo critical flows
- [ ] Enable Sentry SDK across web, admin, mobile, and API
- [ ] Document staging sign-off checklist + release cadence

## 11. Mobile (React Native / Expo)
- [ ] Initialise Expo app within monorepo (`apps/mobile`) with shared UI kit linkage
- [ ] Implement key screens parity (auth, listings, chat, bookings)
- [ ] Configure push notifications via FCM + Expo Notification service
- [ ] Set up EAS build profiles and distribution lists (TestFlight / Play Console)

## 12. Documentation & Operations
- [ ] Generate OpenAPI spec from Express routers (Swagger + typed clients)
- [ ] Create runbooks: vendor approval SLA, review moderation, outage response
- [ ] Maintain changelog + technical docs per module under `/docs`
- [ ] Introduce architectural decision records (ADRs) for major choices (auth, sockets, payments)

---

This plan keeps Phase 1 (MVP) focused while leaving hooks for the reserved Phase 2 initiatives (AI recommendations, Stripe Connect, sponsored listings, CSV exports).
