---
sidebar_position: 1
---

# Conferences

Conferences are a special event type that use **one shared Gravity Form** (Form ID 20) for all registrations. The form adapts automatically per conference through dynamic field population and conditional logic—meaning **no form updates are required** when new conferences are created.

## Overview

Each conference (an *Arrangement* post with a `conference_key`) automatically controls the behavior of the shared form. Snippet #89 preloads:

- **conference_key** – from the event’s ACF field  
- **user_status** – set to `logged_in` or `guest`

These values power all conditional logic inside Gravity Forms.

## Conference Workflow

### 1. Create the Conference Event
1. Create a new **Arrangement** post.  
2. Set required taxonomies: Region, Fagområder, Arrangementstype.  
3. Add a unique **conference_key** in ACF.  
4. Fill out any additional event fields (date, location, prices, etc.).  

After this, the event is fully conference-ready — **no actions needed inside the form**.

### 2. Shared Registration Form (Form ID 20)

Form 20 contains two hidden fields:

- `conference_key`  
- `user_status`  

Both are dynamically populated by **Snippet #89**.  
Conditional logic uses these values to show/hide fields per conference and based on login state.

### 3. Automatic Data Flow

When the form is submitted, the custom event integration plugin sends a normalized payload—including the event’s `conference_key`, taxonomies, user data, and field values—to Dynamics and any other configured webhooks. Registrations are automatically linked to the correct conference.

---

This setup ensures conferences require **no ongoing form configuration**. Creating the event and assigning the `conference_key` is all that’s needed.
