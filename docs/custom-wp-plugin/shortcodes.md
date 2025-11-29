---
sidebar_position: 6
---

# Shortcodes

The plugin exposes two shortcodes for use in Beaver Builder, Gutenberg, or templates.  
They allow the frontend to react to the user's registration state for the current event.

Shortcodes are implemented in:  
`includes/shortcodes/class-event-shortcodes.php`

## `[is_on_waitlist]`

Returns `"1"` if the **current logged-in user** is on the waitlist for the current event.  
Returns `"0"` otherwise.

### Attributes

- `event_id` (optional) – defaults to the current post ID.

### Example

```text
[is_on_waitlist]
```

With explicit event ID:

```text
[is_on_waitlist event_id="1234"]
```

Used with Beaver conditions to show waitlist messaging on event pages.

## `[has_signed_up_for_event]`

Returns `"1"` if the user is fully enrolled in the event.  
Returns `"0"` if not enrolled.

### Attributes

- `event_id` (optional) – defaults to the current post ID.

### Example

```text
[has_signed_up_for_event]
```

With explicit event ID:

```text
[has_signed_up_for_event event_id="1234"]
```

## How These Shortcodes Work

Internally, both shortcodes call methods on `Nemitek_User_Manager`:

- `is_on_waitlist( $user_id, $event_id )`
- `has_signed_up_for_event( $user_id, $event_id )`

These methods check user meta values:

- `waitlist_event_ids`
- `signed_up_event_ids`

The shortcodes provide a simple way to conditionally display:

- "You are on the waitlist"
- "You are registered"
- "You have not signed up yet"

…directly in Beaver Builder or Gutenberg.






