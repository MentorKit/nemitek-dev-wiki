---
sidebar_position: 4
---

# User event status (waitlist & signup)

The plugin tracks a user’s relationship to events in **user meta**, managed by `Nemitek_User_Manager`.

## User meta keys

- `waitlist_event_ids` – array of event post IDs where the user is on the waitlist.
- `signed_up_event_ids` – array of event post IDs where the user is fully enrolled.

## Core methods

- `add_to_waitlist( $user_id, $event_id )`
- `remove_from_waitlist( $user_id, $event_id )`
- `enroll_in_event( $user_id, $event_id )`
- `unsubscribe_from_event( $user_id, $event_id )`
- `has_signed_up_for_event( $user_id, $event_id )`
- `is_on_waitlist( $user_id, $event_id )`

## How it is used

- Gravity Forms submissions call these methods to **move users between waitlist and enrolled**.
- REST API endpoints (see *API endpoints* doc) allow external systems to:
  - Enroll a user, waitlist them, or unsubscribe them.
- Shortcodes use these methods to show/hide UI based on the current user’s status.
