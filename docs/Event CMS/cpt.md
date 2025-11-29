---
sidebar_position: 1
---

# CPT
We are using the plugin ACF to create a CPT

Post type: Arrangementer.
Connected taxonomies: Region, Fagområder (competence areas) and arrangementstype (event type). 
Field group: A field group is connected to all event posts. We display fields relevant to the events via this field group. 

## ACF Fields for the “Arrangement” Post Type

Each event post uses the ACF field group **“Arrangement-felter”**, which provides all structured data used across the platform — for frontend display, conditional logic, form behavior, and Salesforce payload enrichment.

### Field Overview

| Label | Name | Type | Notes |
|-------|-------|-------|-------|
| Dato | `dato` | Date/Time | Event start datetime. Used for sorting, display, ICS generation. |
| Dato slutt | `dato_slutt` | Date/Time | Event end datetime. Included in Salesforce payload. |
| Sted | `sted` | Text | City/venue name shown on event cards and detail pages. |
| Adresse | `adresse` | Text | Full address; included in ICS file + Salesforce payload. |
| Skjema INNloggede brukere | `skjema` | Select | Selects which Gravity Form to show for logged-in users. |
| Skjema UTloggede brukere | `skjema_utloggede_brukere` | Select | Selects which Gravity Form to show for guests. |
| Video | `video` | Text Area | Optional embed shown on event page. |
| Generisk reise | `generisk_reise` | True/False | Toggles generic travel info. |
| Pris | `pris` | Number | Standard price. Sent to Salesforce. |
| Pris for studentmedlemmer | `pris_student` | Number | Student price. Sent to Salesforce. |
| Pris for de som ikke er medlemmer | `pris_ikke_medlem` | Number | Non-member price. Sent to Salesforce. |
| Omdirigering | `omdirigering` | URL | After-submit redirect URL. |
| Venteliste | `venteliste` | True/False | **Salesforce-controlled.** When an event is marked as full in Salesforce, this flag is automatically set. UI shows: “You will be placed on the waitlist.” Users *can still register*, but are flagged as waitlisted in the payload. |
| Arrangør | `arrangor` | Text | Organizer name. |
| Maks kapasitet | `maks_kapasitet` | Text | Display-only capacity indicator. Not enforced in WP. |
| Referansenummer | `referansenummer` | Text | Internal event reference sent to Salesforce. |
| Ekstern påmeldingslenke | `ekstern_pameldingslenke` | URL | Used when registration is handled externally (button becomes outbound link). |
| Påmelding ikke aktiv enda | `pamelding_ikke_aktiv_enda` | True/False | Toggles whether the registration form is visible. Used for “registration opens later.” |
| Konferanse | `conference_key` | Select | Unique key used for conditional logic + conference workflow. Sent to Salesforce. |

### Notes on Salesforce integration

#### **venteliste (Waitlist) Behavior**
- Salesforce marks an event as **full**, which updates the `venteliste` field in WordPress.  
- When `venteliste = true`:
  - The event page displays **waitlist messaging**.
  - Users *can still submit forms*.
  - All form submissions are flagged as **waitlist registrations** in the payload.

This allows Salesforce to control capacity while still capturing overflow interest.

### How These Fields Are Used

All ACF values are automatically included in the form submission payload through the integration plugin.  
This ensures Salesforce receives:

- Event identity (ID, title, reference)  
- Event timing (start/end)  
- Pricing (member, student, non-member)  
- State flags (waitlist active, registration active/inactive)  
- Conference metadata  
- Organizer and location details  

Together, they define the event’s structure and drive the registration logic across the entire platform.


