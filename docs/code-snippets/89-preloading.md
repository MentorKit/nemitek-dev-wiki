# #89 Preloading conference value and logged in status in hidden gravity form field
[Snippet url](https://arrangement.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=89)

This snippet ensures that our **standard event registration form** (Gravity Form ID 20) behaves dynamically for each event page. When a user views an *Arrangement* post, the snippet automatically populates two hidden fields in the form:

- **conference_key** — pulled from the ACF field `conference_key` on the current event
- **user_status** — set to `logged_in` or `guest` based on WordPress authentication

These values are injected both when the form renders and when it is submitted. Gravity Forms can then use them for **conditional logic** (e.g., showing fields per conference or login state), while the Nemitek Event Integration Manager plugin uses them in the **webhook payload** to ensure that CRM submissions are correctly linked to the event.

To work, the Gravity Form must include two hidden fields with dynamic population enabled and parameter names set to `conference_key` and `user_status`.

This approach allows us to use **one shared form** across all events, keeping registration flows consistent while still supporting event-specific logic.