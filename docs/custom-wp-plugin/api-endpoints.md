---
sidebar_position: 5
---

# API endpoints

The plugin exposes REST endpoints under the namespace `nemitek/v1` to allow external systems (e.g. Salesforce/Make) to manage event enrollments.

## Endpoints

### `GET|POST /nemitek/v1/remove-event-signup`

- **Params**
  - `username` (string) – WordPress username / external_id
  - `post_id` (int) – event post ID
- **Action**
  - Calls `Nemitek_User_Manager::remove_event_signup()`.

### `POST /nemitek/v1/update-enrollment-status`

- **Params**
  - `username` (string)
  - `post_id` (int)
  - `action` (string: `enroll`, `waitlist`, `unsubscribe`)
- **Action**
  - Resolves the user, then calls the corresponding method on `Nemitek_User_Manager`.

## Permissions

- `remove-event-signup` is intentionally **open** (`permission_callback` = `__return_true`) for backwards compatibility.
- `update-enrollment-status` uses `check_permission()` which requires a **WordPress-authenticated request** (e.g. Application Password).

These endpoints are the bridge between Salesforce automation and WordPress user/event state.
