---
sidebar_position: 2
---

# Plugin architecture

The **Nemitek Event & Integration Manager** plugin centralizes all custom event logic for arrangement.nemitek.no.

Repository: [Nemitek Event & Integration Manager on Bitbucket](https://bitbucket.org/simplylearn/nemitek-event-integration-manager/src/main/)

## Responsibilities

- Normalize **Gravity Forms** submissions and send them to Salesforce.
- Attach **event context** (CPT `arrangement` ACF + taxonomies) and **user context** to every payload.
- Manage **user event status** (signed up vs waitlist) via user meta.
- Expose **REST API endpoints** to update/remove event signups from external systems.
- Provide **shortcodes** to check user status on the current event.
- Provide a **Gutenberg block** for external registration links.

## Code structure

- `includes/core/`
  - `class-event-manager.php` – helpers around events.
  - `class-user-manager.php` – waitlist / signup user meta logic.
- `includes/integrations/`
  - `class-gravity-forms.php` – hooks into Gravity Forms.
- `includes/api/`
  - `class-api-endpoints.php` – registers REST routes.
  - `class-api-handlers.php` – implements REST callbacks.
- `includes/shortcodes/`
  - `class-event-shortcodes.php`
- `includes/blocks/`
  - `class-external-registration-link-block.php`
