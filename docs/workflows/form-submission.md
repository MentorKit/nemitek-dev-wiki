---
sidebar_position: 2
---

# Unified Form Submission Flow

All Gravity Forms used on the platform — conference forms, standard event forms, rebusløp forms, and others — follow the same backend submission workflow. **Every form is always placed on an event post** (CPT: *arrangement*), and that event’s metadata becomes part of the data package sent to Salesforce.

## Core Concept

**The form does not stand alone.**  
It always inherits context from the *Arrangement* post where it is embedded.  
This allows Salesforce to link the submission to the correct event.

## Submission Workflow

### 1. Form on an Event Post
Editors place any Gravity Form inside an *Arrangement* post.  
When the form loads or submits, the plugin knows:

- **Which event post it belongs to**  
- All ACF fields on that post (date, price, conference_key, etc.)  
- All taxonomies (Region, Event Type, Competence Area)

This event context is automatically merged into the final payload.

### 2. Gravity Forms Submission
User submits the form. Gravity Forms fires `gform_after_submission`.

### 3. Field Standardization
The integration plugin processes each field:

1. **CSS class → primary key**  
2. **Label → fallback key**

This ensures consistent field names across all forms.

### 4. Metadata Enrichment (From the Event Post)
The plugin adds:

- **Event metadata** (post ID, title, URL)  
- **Event ACF fields** (date, prices, conference_key, etc.)  
- **Event taxonomies**  
- **User metadata** (username, email, display name)

### 5. Webhook Dispatch → Salesforce
A normalized JSON payload is sent to Salesforce via `wp_safe_remote_post()`.  
Salesforce now receives a complete, standardized package tied to the correct event.

## Result

Regardless of how many forms exist or how different they look, **they all behave the same**:

- Form input → Standardized  
- Event context → Automatically attached  
- Payload → Consistent  
- Destination → Salesforce  

No per-form mapping or configuration is needed — placing the form on an event post is enough.
