---
sidebar_position: 3
---

# Gravity Forms integration

The plugin hooks into **Gravity Forms** to standardize all event-related submissions before sending them to Salesforce.

## Hooks

- `gform_after_submission` → main entry point for building the payload.
- `gform_confirmation` → optional redirect back to the same event page (`#pamelding` anchor).
- Form-specific hooks (e.g. form 14/Rebusløp):
  - `gform_pre_validation_14`
  - `gform_pre_render_14`
  - `gform_pre_process_14`

## Responsibilities

- Read all submitted fields and map each field to a **data key**:
  - CSS class → **primary key**
  - Sanitized field label → **fallback key**
- Attach:
  - Current event post (ID, title, URL)
  - Event ACF (dates, prices, conference_key, etc.)
  - Event taxonomies
  - User data (username, email, display name)
- Build a normalized JSON payload and send it to Salesforce via `wp_safe_remote_post()`.

For special workflows (e.g. **Rebusløp form 14**) the class also:

- Populates dropdowns from Salesforce.
- Adds/removes fields from the outgoing payload based on conditional logic.
