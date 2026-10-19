# Configure NeuroSage

## Required services

- MongoDB or MongoDB Atlas, configured through `MONGODB_URI`
- Brevo HTTP API for verification and notification email
- Ollama for the companion (`OLLAMA_BASE_URL` and `OLLAMA_MODEL`)
- A private storage provider for payment slips in production
- HTTPS in production, with `COOKIE_SECURE=true`

## Security

Generate separate high-entropy `JWT_ACCESS_SECRET` and `JWT_REFRESH_SECRET` values. Change `ADMIN_PASSWORD` before any deployment. Keep `.env.local` out of version control. Payment slips must be stored privately and served only through an authenticated admin endpoint. Configure a Redis-backed rate limiter before horizontal scaling.

## Payments and live sessions

Set `UPI_QR_IMAGE_URL`, `UPI_ID`, and the live-body-doubling amount only through deployment configuration. Payment verification is manual; never mark a UTR approved automatically. Set `JITSI_DOMAIN` to a trusted deployment domain if using a self-hosted Jitsi server.

## Assets

Add the supplied files to `public/neurosage-logo.png`, `public/neurosage-poster.jpg`, and `public/books/`. The original source project was not present in the workspace, so exact source-specific asset dimensions and copy should be reconciled when it is supplied.
