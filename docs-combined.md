# NemiTek Dev Wiki - Complete Documentation

Generated: Fri Nov 28 17:13:18 CET 2025


---
## File: intro.md
---

---
sidebar_position: 1
---

# Intro

Welcome to the comprehensive documentation for **arrangement.nemitek.no**, Nemitek's event and course management platform.

## Overview

Nemitek offers various solutions, including course login customizations through CSS and PHP snippets. The platform handles extensive data transfers to renderers and processes search data.

## Key Features

- **Event Post System**: Custom-built solution managing events and digital courses with Ajax-powered live filtering
- **SSO Login**: Implemented using unique subscriber IDs with Infosoft integration
- **Code Snippets**: Extensive collection of custom code snippets for site functionality
- **Data Integration**: Webhook-based data transfers to external systems (Microsoft Dynamics, MixPanel)
- **Form Management**: Dynamic forms for logged-in and logged-out users

## Architecture

We collaborate closely with **DTB.digital**, our vendor, who works extensively on CRM systems and data analysis in MixPanel. The core database is in **Infosoft**, managing user logins and related functions.

## Documentation Structure

- [Introduction & Architecture](./architecture) - System overview and architecture
- [SSO Login Solution](./SSO) - Authentication and user management
- [Event Post System](./Event%20CMS/cpt) - Event management features
- [Forms & User Management](./Event%20CMS/beaver-themer) - Form handling and user interactions
- [Webhooks & Data Integration](./architecture) - External system integrations
- [Ad Placements](./Event%20CMS/ads) - Advertisement management
- [Changelog](./changelog) - Complete version history

## Quick Links

- [Code Snippets Overview](https://kurs.nemitek.no) - All code snippets documentation
- [Graphical Guidelines](./graphical_guidelines) - Fonts and colors information

---

*This documentation was created by Sindre Fjellestad, last updated 23 Oct 2024.*


---
## File: architecture.md
---

---
sidebar_position: 2
---

# Architecture of kurs.nemitek.no

# System overview

The architecture of Nemitek's system consists of several key components:

* **Core Database (Infosoft):** Manages user logins and related functions. This central repository handles user data and authentication. The SSO login relies on this functionality.  
* **CRM System:** Handled by DTB.digital, this system manages customer relationships and interactions.  
* **Data Analysis (MixPanel):** Used for in-depth analysis of user behavior and system performance. We send course analytics data to MixPanel. Vendor DTB.Digital is running this. 

# Technology stack

* **PHP:** Extensive use of PHP snippets for smooth site functionality.  
* **Uncanny Automator:** WordPress plugin for data exchange with CRM and Infosoft. And outbound data to mixpanel.   
* **Mini Orange SSO:** Implements Single Sign-On solution.  
* **Facet WP:** Enables Ajax-powered filtering for events and archive pages.  
* [**Make.com**](http://Make.com)**:** Utilized by DTB digital for data transmission.  
* **Advanced Custom Fields (ACF):** Sets up custom post types, fields, and taxonomies.  
* **Beaver Builder:** Used for creating archives and singular pages.  
* **Code Snippets Pro:** Handles technical operations like custom breadcrumbs.  
* **JavaScript:** Implements dynamic lookups, such as organization number queries on the AW website.  
* Code Snippets Pro is used for technical operations like custom breadcrumbs.  
* Javascript is being used to do dynamic lookups. E.g. dynamic company lookup of a organization number on aw website.

# Data flow

This section explains all the data inflows and outflows related to kurs.nemitek.no. An overview of all the inflows and outflows can be found in this document [API data flow reference guide for kurs.nemitek.no](https://docs.google.com/spreadsheets/d/1fs2fp7Y7aMgagFSoGqzn1WQ3rTB4lH4aB0ri4xBpNj0/edit?gid=0#gid=0).  A glance can be found below, but at the document we setup all relevant urls. 

| ID | Triggers | Last modified | Column 12 | Data type |
| ----- | :---- | ----- | :---- | :---- |
| 1 | A user completes a course |  | Active | Send |
| 2 | A user completes a lesson |  | Active | Send |
| 3 | A user completes a topic |  | Active | Send |
| 4 | A user fails a quiz |  | Active | Send |
| 5 | A user is enrolled in a course |  | Active | Send |
| 6 | A user is unenrolled from a course |  | Active | Send |
| 7 | A user passes a quiz |  | Active | Send |
| 8 | A user submits an assignment for a lesson or topic |  | Active | Send |
| 9 | A user submits an essay for a quiz |  | Active | Send |
| 10 | A user's access to a course expires |  | Active | Send |
| 11 | User completes a course |  | Active | Send |
| 12 | Course is updated |  | Active | Send |
| 13 | Form submission on event-page by user |  | Active | Send |
| 14 | Event post is updated |  | Active | Send |
| 15 | Event post is created |  | Active | Send |
| 16 | Subscription created |  | Active | Receive |
| 17 | Subscription cancelled |  | Inactive | Receive |
| 18 | Update/create user when Nemitek subscription is created | 30/10/2024 | Active | Receive |
| 19 | Data fetch when user logs in | 21/10/2024 | Active | Receive |
| 20 | User submits form to edit user information |  | Active | Send |

## Outflows

### Course analytics that is sent to mixpanel

In Autumn 23, we created triggers and sent data payloads to Point Taken and Mixpanel. Most triggers are setup with Uncanny Automator where we have used there functionality to do every step of the data sendout. Sometimes, we have been forced to call a function that fetches post or user meta and sends to the desired webhook. The written functions are currently (11 Nov 2023 15:40) written in the Code Snippets Pro plugin. 

Review the following document for a list of all triggers. [Trigger Events i SimplyLearn](https://docs.google.com/spreadsheets/d/1JHFRO8Z2uDGaw3XK9FiBruLarOAXlkfcL5i14oorHVA/edit#gid=0)

| ID | Trigger Events | Status | Webhook URL (Prod) |
| ----- | :---- | :---- | :---- |
| 1 | A user completes a course | Validated | [https://hook.eu1.make.com/vsaw7nuahwlw9nde314o1nmykp2ceiyn](https://hook.eu1.make.com/vsaw7nuahwlw9nde314o1nmykp2ceiyn) |
| 2 | A user completes a lesson | Validated | [https://hook.eu1.make.com/minidvqn28mg7wouvlzcc65y8d169dpp](https://hook.eu1.make.com/minidvqn28mg7wouvlzcc65y8d169dpp) |
| 3 | A user completes a topic | Validated | [https://hook.eu1.make.com/acacbs78ldksubfffpumrbwo2sot4e6v](https://hook.eu1.make.com/acacbs78ldksubfffpumrbwo2sot4e6v) |
| 4 | A user fails a quiz | Validated | [https://hook.eu1.make.com/7ezen2qge4gmop54qxh9xeb9f176e3ix](https://hook.eu1.make.com/7ezen2qge4gmop54qxh9xeb9f176e3ix) |
| 5 | A user is enrolled in a course | Validated | [https://hook.eu1.make.com/7y422ln3um1dfjr6uluuqstaefaac1e4](https://hook.eu1.make.com/7y422ln3um1dfjr6uluuqstaefaac1e4) |
| 6 | A user is unenrolled from a course | Ignored | [https://hook.eu1.make.com/us46zaj6yz0crasvq3jf0a3quew8jqgq](https://hook.eu1.make.com/us46zaj6yz0crasvq3jf0a3quew8jqgq) |
| 7 | A user passes a quiz | Validated | [https://hook.eu1.make.com/se6cga0sh5lcc7sry2y3ac9qmfrxotwo](https://hook.eu1.make.com/se6cga0sh5lcc7sry2y3ac9qmfrxotwo) |
| 8 | A user submits an assignment for a lesson or topic | Ignored | [https://hook.eu1.make.com/7cnh19q9ithm7ybon1ilmv79h5lt2fbv](https://hook.eu1.make.com/7cnh19q9ithm7ybon1ilmv79h5lt2fbv) |
| 9 | A user submits an essay for a quiz | Ignored | [https://hook.eu1.make.com/ks1g3jn2ygm7lpd76xjjmr9q5l6qpuss](https://hook.eu1.make.com/ks1g3jn2ygm7lpd76xjjmr9q5l6qpuss) |
| 10 | A user's access to a course expires | Ignored | [https://hook.eu1.make.com/rmfv7z2bqm8pb0ibldladv64d5mvvf4e](https://hook.eu1.make.com/rmfv7z2bqm8pb0ibldladv64d5mvvf4e) |

## Events sent to CRM

| ID | Trigger Events | Status | Identificator | WordPress Recipe (Prod) |
| ----- | :---- | :---- | :---- | :---- |
| 1 | User completes a course | Review | course\_completed | [https://kurs.nemitek.no/wp-admin/post.php?post=38481\&action=edit](https://kurs.nemitek.no/wp-admin/post.php?post=38481&action=edit) |
| 2 | User starts a course | Backlog |  |  |
| 3 | Course is updated | Validated by Point Taken | course\_updated | [https://kurs.nemitek.no/wp-admin/post.php?post=39567\&action=edit](https://kurs.nemitek.no/wp-admin/post.php?post=39567&action=edit) |
| 4 | Event post is updated | Validated by Point Taken | post\_update | [https://kurs.nemitek.no/wp-admin/post.php?post=39525\&action=edit](https://kurs.nemitek.no/wp-admin/post.php?post=39525&action=edit) |
| 5 | Form submission on event-page by user | Validated by Point Taken | form\_submission | [https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet\&id=25](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=25) |
| 6 | Event post is created | Validated by Point Taken | post\_creation | [https://kurs.nemitek.no/wp-admin/post.php?post=39622\&action=edit](https://kurs.nemitek.no/wp-admin/post.php?post=39622&action=edit) |

## 

## Inflows

### User Meta Updates with Infosoft Integration using GET/PUT Requests

Development was completed 6 Jun 2024 18:14. Here is [video](https://www.loom.com/share/2715722a21a343d6a3724572388600f0) showing what was done. 

This solution is designed to update user meta information for company name (`bedriftsNavn`) and organization number (`orgNr`) every time a user logs in. Additionally, it provides custom shortcodes to display these user meta values during event signups and a custom form that allows users to update their information, which is then reflected in both the WordPress user meta and the Infosoft database.

**Resources**

* Code snippet for custom shortcode. [https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet\&id=43](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=43)  
* UA recipe for updating user meta when user logs in. Data is fetched from get request. [https://kurs.nemitek.no/wp-admin/post.php?post=40140\&action=edit](https://kurs.nemitek.no/wp-admin/post.php?post=40140&action=edit)  
* UA recipe for updating user meta and put request to infosoft database when user submits gravity form for updating this info. [https://kurs.nemitek.no/wp-admin/post.php?post=40129\&action=edit](https://kurs.nemitek.no/wp-admin/post.php?post=40129&action=edit)  
* Update company meta gravity forms

### Make.com data that is sent to SimplyLearn

| ID | Trigger Events | Note | Status | Webhook URL |
| ----- | :---- | :---- | :---- | :---- |
| 1 | Subscription created | User is created in Simplylearn when this is triggered. Fields like "subscriber ID", "name", etc, is setup. | Validated | [https://kurs.nemitek.no/wp-json/uap/v2/uap-38475-38476](https://kurs.nemitek.no/wp-json/uap/v2/uap-38475-38476) |
| 2 | Subscription cancelled | User is removed from all groups when this is triggered. | Validated | [https://kurs.nemitek.no/wp-json/uap/v2/uap-38472-38473](https://kurs.nemitek.no/wp-json/uap/v2/uap-38472-38473) |
| 3 | Contact Updated | User is updated in SimplyLearn when this is triggered. | Validated | [https://kurs.nemitek.no/wp-json/uap/v2/uap-38469-38470](https://kurs.nemitek.no/wp-json/uap/v2/uap-38469-38470) |



---
## File: SSO.md
---

---
sidebar_position: 8
---
# SSO
Customers of the site uses SSO to login. Each user is identified by a unique subscriber ID, consistent across the Simplylearn and Infosoft systems. All user data is securely stored with Infosoft.

We have a test user to troubleshoot or test the SSO login. Login with these credentials: 
Username: admin@simplylearn.com
Password: [REDACTED - Contact administrator for credentials]

## Issues with Varnish
Varnish exclusion for the redirect url must be active. If not, front end login will not be successful. Read more about this issue here. 

All information related to the SSO login can be found in this document Documentation of SSO solution and integration with MixPanel. 

## SSO configuration for staging site
If we encounter issues related to the SSO login we need to test on STG environment. For these situations we need to setup a different client and secret. Keys are generated from conversation with Thomas Sundback. See video for how to implement this keys on STG site.  

Client ID
1b614cbf-db3a-4659-9085-ac3bbd537fb7
Client Secret
[REDACTED - Contact administrator for credentials]

## SSO login URL with redirect is set with javascript
[Code snippet #31](https://arrangement.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=31)

This JavaScript code dynamically redirects user clicks on specified buttons to an OAuth URL. The redirect URL parameter is set to the user's current page URL, allowing users to return to the page they were on after the OAuth process.


---
## File: graphical_guidelines.md
---

---
sidebar_position: 10
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Graphical guidelines

**Fonts**
The fonts are Sora for titles and Source Sans Pro for body text. Check this folder for font files: Fonter. 

Colours
#e9e0d7


---
## File: Event CMS/cpt.md
---

---
sidebar_position: 1
---

# CPT
We are using the plugin ACF to create a CPT

Post type: Arrangementer.
Connected taxonomies: Region, Fagområder (competence areas) and arrangementstype (event type). 
Field group: A field group is connected to all event posts. We display fields relevant to the events via this field group. 


---
## File: Event CMS/beaver-themer.md
---

---
sidebar_position: 2
---
# Beaver Themer setup
## Archive layout
We use the Beaver Builder standard post module to display the archive page. All posts are sorted after the ACF date field with taxonomy key “dato”. 

A Fiverr freelancer (Hleb) was working on the site with facet-related work December 2023\. Here is his summary of the work that was done. [https://drive.google.com/file/d/1cFupxMfFEB9Cpwu8B5c7nyWYnjYT85TG/view?usp=sharing](https://drive.google.com/file/d/1cFupxMfFEB9Cpwu8B5c7nyWYnjYT85TG/view?usp=sharing) 

### 3.1 Ajax filtering {#3.1-ajax-filtering}

We use the plugin Facet WP to enable filtering for multiple taxonomies for the archive page. On this archive page, we are setting up facet filters for filtering on the archive pages. We are also using their technical tools to set up a listing containing both the Learndash course post type and the custom post type “arrangementer”. 

* Regarding sorting of listings. Settings \> FacetWP \> Listings \- customised the “Arrangementer” list query so it will first show the closest events, then future events, then without date. Created a new listing for the events in the same location \- “Arrangmenter (Same Region)”. [This snippet](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=40) contains modifications in the SQL requirement to ensure date sorting first, then posts with no dates.   
* The checkbox for digital courses is created with CSS. See Appearance \-\> Additional CSS. 

#### Calendar filtering

1. **Date \+ Time Storage (Snippet \#33)**

   * Updated code to store the `dato` field using the `d/m/Y H:i` format.  
   * Ensures both date and time are accurately captured for the `arrangement` post type.  
2. **Facet Data Source & Month Translation (Snippet \#66)**

   * Reverted the **FacetWP data source** to `course_start_month`, which is automatically generated.  
   * Uses a **translation function** to convert English month names (e.g., “January”) into Norwegian (e.g., “Januar”).  
   * This is done via the `save_post` hook, updating `course_start_month` whenever an `arrangement` is saved.  
3. **FacetWP Settings**

   * In **FacetWP** (under *Settings*), the facet named `course_starts` now filters by `course_start_month`.  
   * Snippet \#66 also sets the facet’s dropdown label to **"Kalender"** so it remains consistent before and after selection.

**Links to Relevant Code & Settings**

* [Snippet \#33 (Date Format Update)](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=33)  
* [Snippet \#66 (Month Translation \+ Facet Label)](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=66)  
* [FacetWP Data Source Settings](https://kurs.nemitek.no/wp-admin/options-general.php?page=facetwp)

With these updates, users can filter arrangements by their Norwegian month names while consistently displaying "Kalender" in the dropdown.

### Custom breadcrumbs 

[Developer notes](https://fjellestad.notion.site/Setup-custom-breadcrumbs-c6e3f2c1cf4c436cb97d5f8618dea7f7?pvs=4)   
[Direct link to code snippet](https://nemitek-events.simplylearn.dev/wp-admin/admin.php?page=edit-snippet&id=5)

The custom breadcrumb function is designed to generate a breadcrumb trail for the post type “Arrangementer”. It targets explicitly single post pages and outputs the breadcrumb in the following format:  
\[Taxonomy 1: Event Type\] | \[Post Title\]

## Singular pages {#4-singular-pages}

The singular pages are set as templates where the idea is that Nemitek will duplicate each template when they create their events and after that edit in Beaverbilder. 

### Global elements {#4.1-global-elements}

We have created a global top section and footer section to ensure some dynamic capabilities. This gives us the ability to edit those parts on all events. We can do this because those sections are only displayed based on dynamic data (post title, featured image, acf fields). 

### Gravity forms {#4.2-gravity-forms}

We will use gravity forms to create the different forms that Nemitek requires. When Nemitek need custom forms they will duplicate our standard form that contains the necessary fields and adjust from there. 

Currently 21 Sept 2023, there are a lot of unfinished questions regarding this setup that need answers, especially concerning sending out data to MixPanel. 

### Dynamic organization number lookup in Brønnysund 

Done 16 Feb 2025 10:07. 

An organization number lookup feature is implemented in Brønnøysund for **logged-out** users. To achieve this, we use JavaScript and CSS code that is integrated into the Beaver Builder module, which hosts the shortcode for displaying forms for logged-out users.   
![][image1]

**Link**  
[Beaver builder saved rows where javascript and css is stored](https://kurs.nemitek.no/fl-builder-template/pamelding-arrangementer-2/) 

### Region events {#4.4-region-events}

We are using this shortcode: “ \[facetwp template="event\_same\_region"\]” to display events with the same region on singular pages. Meaning that if we are on a event for the Oslo region than at the bottom we will see all other events for the region. 



---
## File: Event CMS/ads.md
---

---
sidebar_position: 2
---
# Ads

Nemitek has also instructed us to set up ads on the event pages. The ads are delivered through the company adnunitus and employee Stian Remaad, [see email thread](https://app.sparkmailapp.com/web-share/Zynp6GNd020sUval1jmcaMi28ZLnOUYym0HI-Whm).   
This was done to set this up. 

1. We have applied a Beaver Themer layout to set up the sidebars and top bars for placing ads. Custom CSS must be applied to ensure width in a main content column of 1088px. The CSS is stored in the Beaver Themer layout.   
2. Then we have placed the Adnuntius javascript script in the head section of the theme.   
3. Then we place HTML scripts where we would like the ads to display. See the email thread for javascript and html snippets. 

## Beaver themer layout for advert purposes

The beaver themer layout with link here is placed for advert purposes. 

* This document shows the version control of the CSS code placed to obtain 3 3-column structure for sidebars and main content equal to 1088px. [https://fjellestad.notion.site/CSS-for-beaver-builder-event-layout-0dcbd889a50040e58def21d471c55d02?pvs=4](https://fjellestad.notion.site/CSS-for-beaver-builder-event-layout-0dcbd889a50040e58def21d471c55d02?pvs=4) 


---
## File: custom-wp-plugin/intro.md
---

---
sidebar_position: 1
---

# Intro


---
## File: custom-wp-plugin/outgoing-data/event-post-creation.md
---

# Payload on event post creation 
[Link to code snippet](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=32)

[Link to Uncanny Automator recipe.](https://kurs.nemitek.no/wp-admin/post.php?post=39525&action=edit)

When a new event is created, essential data is transmitted to Microsoft Dynamics to ensure that all future participant submissions are accurately associated with the correct event ID. This is technically implemented through a custom-coded function, send_event_data_to_webhook, specifically designed to dispatch related taxonomies. The activation of this function is facilitated by Uncanny Automator, which serves as the trigger mechanism and automatically provides the relevant post_id as an argument to the function.

---
## File: custom-wp-plugin/outgoing-data/event-submission.md
---

# Payload on event participant submission
Through our custom event integration plugin is sending data to a webhook upon Gravity Form submissions. The purpose is to send form submission data to a specified webhook URL for further processing or integration with external services.

The payload includes the form fields and additional information, such as the user's WordPress username, email, the post from which the form was submitted, and other relevant metadata.

Technical Overview

The script is written in PHP and hooks into the Gravity Forms gform_after_submission action to execute the function send_data_to_webhook() after submitting a form.

Field Key Mapping As of version 1.02, the plugin uses CSS class names for consistent field identification:

- Fields with CSS classes: The CSS class name is used directly as the key in the webhook payload (e.g., a field with CSS class user_phone will be sent as user_phone)
- Fields without CSS classes: The sanitized field label is used as the key
- This ensures that fields with the same purpose across different forms use the same key, regardless of label variations (e.g., "Telefon" vs "Phone" both become user_phone if they share the CSS class)

Data Collection

- Form Fields: Loops through all fields in the form and collects their values.
- User Information: Adds the current user's username, email, and display name.
- Post Information: Adds the ID, title, and URL of the post from which the form was submitted.
- Taxonomies: Adds the taxonomies associated with the current post.
- Custom Fields: Adds custom post meta such as event price and date if applicable.
- Sending the Payload
- The function wp_safe_remote_post() is used to securely send the payload to the webhook URL. The payload is sent as a JSON object with a 'Content-Type' header set to 'application/json'.

---
## File: code-snippets/89-preloading.md
---

# #89 Preloading conference value and logged in status in hidden gravity form field
[Snippet url](https://arrangement.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=89)

This snippet ensures that our **standard event registration form** (Gravity Form ID 20) behaves dynamically for each event page. When a user views an *Arrangement* post, the snippet automatically populates two hidden fields in the form:

- **conference_key** — pulled from the ACF field `conference_key` on the current event
- **user_status** — set to `logged_in` or `guest` based on WordPress authentication

These values are injected both when the form renders and when it is submitted. Gravity Forms can then use them for **conditional logic** (e.g., showing fields per conference or login state), while the Nemitek Event Integration Manager plugin uses them in the **webhook payload** to ensure that CRM submissions are correctly linked to the event.

To work, the Gravity Form must include two hidden fields with dynamic population enabled and parameter names set to `conference_key` and `user_status`.

This approach allows us to use **one shared form** across all events, keeping registration flows consistent while still supporting event-specific logic.

---
## File: changelog.md
---

---
sidebar_position: 11
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Changelog


## **4 Nov 2025 \- CSS Class-based Field Mapping for Webhook Data**

**Problem:** Different form labels across multiple forms resulted in inconsistent field keys in webhook payloads. For example, a phone field labeled "Telefon" in one form and "Phone" in another would create different keys (`telefon` vs `phone`), causing the receiving system to treat them as different fields.

**Solution:** Refactored the webhook data mapping system in the Nemitek Event Integration Manager plugin to use CSS class names directly as field keys. Fields with CSS classes now use the CSS class name as the key in the webhook payload, regardless of the field label.

**Technical Details:**

* Fields with CSS classes (e.g., `user_phone`, `orgNumber`, `companyName`) are mapped using the CSS class name as the data key  
* Fields without CSS classes continue to use their sanitized field label as the key  
* Removed hardcoded field mappings (`orgNumber` → `orgNummer`, `companyName` → `bedrift`)  
* Improved consistency across all forms using the same CSS class

**Impact:** Forms with the same CSS class (e.g., `user_phone`) will now always send data with the same key, ensuring consistent data structure regardless of field labels. This eliminates the need for code changes when adding new standardized fields.

**Plugin Version:** 1.02

## 28 Aug 2025 \- Custom sorting implementation

On [arrangement.nemitek.no](http://arrangement.nemitek.no), we implemented dual sorting logic to handle different post types correctly:

* CPT 'arrangement' (physical events): Sorted by meta field 'dato' in ascending order  
* LearnDash courses ('sfwd-courses'): Sorted by post publication date in descending order

Solution was implemented with Hleb's assistance. The final code snippet ([snippet \#40](https://arrangement.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=40)) uses a custom posts\_orderby filter that modifies the SQL query to maintain appropriate sorting for each content type while limiting scope to FacetWP queries only.

## 24 Jun 2025 \- Password reset in Azure led to rejected logins

[https://docs.info-subscription.com/en/latest/managed-experience/authentication-authorization/adb2c.html\#handling-forgotten-password](https://docs.info-subscription.com/en/latest/managed-experience/authentication-authorization/adb2c.html#handling-forgotten-password)  

A bug was discovered where users who reset their passwords via Azure AD B2C were unable to log in because the authentication token was missing the required extension\_Products claim, which is necessary for membership verification. As a temporary solution, we allowed these users to log in by bypassing the membership check; however, this created a security risk. Following Infosoft’s guidance, we implemented a permanent solution: users are now required to perform a fresh login after resetting their password, ensuring all necessary claims are present and restoring secure access control. This change affects all systems relying on Azure AD B2C for authentication and membership checks, and was verified through targeted user tests and log monitoring⁠

## 5 Jun 2025 \- RSS Feed Implementation to display events on labrador 

**The need:** Display the next 5 upcoming *arrangement* posts from `arrangement.nemitek.no` on the Labrador site `nemitek.no`, matching Nemitek's event card styling.

### **Support materials**

* MU-plugin code: `/home/master/applications/nemiteklms/public_html/wp-content/mu-plugins/nemitek-rest.php`. This plugin bypasses CORS issues  
* Labrador markup block (HTML / CSS / JS) on page **Test2**

### **What was done & why**

* **MU-plugin** created to expose `/wp-json/nemitek/v1/next-arrangements`, handle CORS headers, and bypass Cloudways/Breeze cache—enabling error-free data fetching from Labrador.  
* **Client-side widget** (Markup block) implemented on [nemitek.no](http://nemitek.no):  
  * Purple container (\#782146) featuring heading **HVA SKJER I NEMITEK?** and link **SE ALLE ARRANGEMENT**.  
  * Grid layout displaying five upcoming events, each showing type, image, title, location, date \+ time, and **Meld deg på** button.  
  * Left-aligned text maintains design consistency.

## 28 May 2025 \- ICS File Generation for Event Downloads {#28-may-2025---ics-file-generation-for-event-downloads}

### **Support Materials**

* Code snippet: [ICS Calendar Integration Implementation](https://arrangement.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=77)

### **Changes Implemented**

Implemented ICS file functionality for calendar event integration in WordPress. The solution allows users to easily add events to their personal calendars (Outlook, Google Calendar, etc.) through a "Add to Calendar" button.

### **Technical Details**

* Created shortcode \[add\_event\_to\_calendar\] for generating calendar buttons  
* Implemented dynamic ICS file generation using event metadata (title, location, start/end times) fetched from the CPT “Arrangement”  
* Added support for various date formats including seconds precision  
* Implemented proper file headers and content disposition for calendar file downloads

Solution has been tested and verified with event metadata integration and file download functionality. Confirmed working with major calendar applications.

## 16 May 2025 \- Automatic Infosoft Data Synchronization in PHP when SSO login {#16-may-2025---automatic-infosoft-data-synchronization-in-php-when-sso-login}

**Problem:** User data from Infosoft was not synchronizing during MiniOrange SSO login, as the existing Uncanny Automator recipe wasn't being triggered. This led to missing updates of essential user information.

**Solution:** A new PHP solution was implemented using MiniOrange's `mo_oauth_logged_in_user_token` hook. The solution ensures that Infosoft data (company name, organization number, and job title) automatically synchronizes every time a user logs in via SSO. Additionally, a new REST API endpoint was added for manual user updates (see [code documentation](https://www.notion.so/REST-API-Endpoint-Manual-Infosoft-WordPress-Sync-_Update-a-single-user-s-meta-data-on-demand_--1f56b6f60b1280948837fde0d550291b?pvs=21)).

**Impact:** Data from Infosoft now reliably synchronizes at each login, and administrator control has been improved through the ability to perform manual updates via API.

[Code Snippet \#74](https://arrangement.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=74)

**🔄 Manual User Update via API**

To manually update a user's Infosoft data, you can use cURL with Application Password authentication:

curl \-X POST \\\\  
  \-u "your-username:xxxx xxxx xxxx xxxx xxxx" \\\\  
  \<https://arrangement.nemitek.no/wp-json/nemitek/v1/infosoft-sync/USER-GUID\>

Replace:

* `your-username` with your WordPress admin username  
* `xxxx xxxx xxxx xxxx xxxx` with your Application Password (generated in WordPress)  
* `USER-GUID` with the user's WordPress username/GUID (the external id). 

To generate an Application Password:

1. Go to WordPress Admin → Users → Profile  
2. Scroll down to "Application Passwords"  
3. Enter a name (e.g., "Infosoft API") and click "Add New"  
4. Copy the generated password immediately (it won't be shown again)

## 6 May 2025 \- Implement Open Graph support for “Arrangement” custom post type so Facebook/Twitter previews show the featured image and correct meta-data. {#6-may-2025---implement-open-graph-support-for-“arrangement”-custom-post-type-so-facebook/twitter-previews-show-the-featured-image-and-correct-meta-data.}

**Changelog:** Added Open Graph meta tags support for "Arrangement" custom post type to enable proper social media previews with featured images and metadata.

Link to snippet in admin: [Code Snippets Pro – Open Graph support](https://arrangement.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=72)

##  11 Apr 2025 \- Add event price fields to form data {#11-apr-2025---add-event-price-fields-to-form-data}

2 new price fields for student and non memerbs are added to each event. We have now modified the plugin to 

* Send these two price fields as well in the data package that is sent on each event submission. We also included those fields in the data package on post update. 

On another note we added form submission handling to hide buttons for non-logged users (PR: [https://bitbucket.org/simplylearn/nemitek-event-integration-manager/pull-requests/7](https://bitbucket.org/simplylearn/nemitek-event-integration-manager/pull-requests/7)). This was on instructions from camilla. 

Yesterday we changed domains to arrangement.nemitek.no. 

## 8 Apr 2025 \- Add logic to handle events where registration is not yet available {#8-apr-2025---add-logic-to-handle-events-where-registration-is-not-yet-available}

We use an ACF (Advanced Custom Fields) field called pamelding\_ikke\_aktiv\_enda to control the visibility of event registration forms.

How it works

* When creating a new event in WordPress:  
  * Set the field to **true** if registration is not yet open  
  * Set the field to **false** when you want to display the registration form

This allows you to publish event information while hiding the registration form until you can accept registrations.

Technical Details

The Beaver Builder row containing the registration form will only be displayed when the ACF field equals 1 (false). The registration form row is hidden from view when the field is set to true.

## 8 Apr 2025 \- Fixed listing of events in this region {#8-apr-2025---fixed-listing-of-events-in-this-region}

The "Same Region" events facet was not interactive and displayed outdated events. Users couldn't click on event cards, and past events remained visible in the listing, creating a confusing user experience.

The following changes were implemented:

* Query arguments were modified to filter out past events, ensuring only upcoming events are displayed  
* Added a new post title element that makes the entire event card clickable  
* Implemented CSS styling to provide visual feedback through hover animations when users interact with event cards

These improvements make the events listing more user-friendly and ensure that only relevant, upcoming events are displayed to visitors.

The CSS is placed in the saved row in Beaver Builder. The ID of the saved row is id 39943\. See link:  [https://kurs.nemitek.no/fl-builder-template/andre-arrangement-region/?fl\_builder\&fl\_builder\_ui](https://kurs.nemitek.no/fl-builder-template/andre-arrangement-region/?fl_builder&fl_builder_ui) 

## 2 Apr 2025 \- Rebusløp \- Webhook & Field Visibility Updates {#2-apr-2025---rebusløp---webhook-&-field-visibility-updates}

[Bitbucket pull request](https://bitbucket.org/simplylearn/nemitek-event-integration-manager/pull-requests/4)   
[Gravity form id 14](https://kurs.nemitek.no/wp-admin/admin.php?page=gf_edit_forms&id=14&gf_ajax_save=4f7qmph46)

Enhanced Form \#14's webhook behavior and field visibility with conditional logic for specific fields. When field \#18 (team selection) contains "newTeam", its value is excluded from the webhook data, while field \#10 is only included when field \#18 is either empty or "newTeam". For logged-in users, fields \#7 and \#9 are automatically hidden in the form and excluded from webhook submissions. These changes ensure proper data flow based on team selection and user authentication status while maintaining the existing Salesforce integration. All webhook logic is consolidated in the plugin's Gravity Forms class for centralized management and version control.

## 19 Mar 2025 Select team in Rebusløp & Salesforce Integration {#19-mar-2025-select-team-in-rebusløp-&-salesforce-integration}

[Bitbucket pull request](https://bitbucket.org/simplylearn/nemitek-event-integration-manager/pull-requests/3/diff) 

We have implemented a new Gravity Forms setup (Form \#14) for a Rebusløp that dynamically fetches “Lagnavn” (team names) from Salesforce and displays them in a dropdown (field \#18). The code uses a 30-minute cached JWT token to authenticate with Salesforce, retrieves the relevant team name tied to the current post ID (or falls back to 40756), and optionally includes an “Others” choice so users can create a new team. If no team data is found, the “Lagnavn” field is removed entirely, ensuring only valid options are displayed. Additionally, we introduced a separate dropdown (field \#17) for “Velg lagleder” on page 2, which is populated from a List Field (field \#11) on page 1\.

All logic and data handling—such as storing the JWT token, calling Salesforce, and building the form choices—are now consolidated into the plugin for easier maintenance and version control. This setup ensures your form is seamlessly integrated with Salesforce while also providing robust error logging and fallback mechanisms. Updating the JWT assertion or endpoint details can be handled in a single code location, and Gravity Forms’ conditional logic can be extended as needed to show or hide additional fields based on user input.

## 

## 6 Feb 2025 added forms for logged in and out users {#6-feb-2025-added-forms-for-logged-in-and-out-users}

Order from Nemitek, they needed some more standardixation and customization to forms along with various forms for both logged-in and logged-out users. 

## 13 Dec 2024 modified query to sort after date {#13-dec-2024-modified-query-to-sort-after-date}

**Issue:** Sorting by the “dato”  field broke after adding minutes in ACF due to WordPress’s default handling.

**Solution:**  
Hired a Fiverr freelancer (Hleb) to update the solution. The custom sorting was implemented via the posts\_clauses filter (snippet \#16) and integrated with a FacetWP listing query. The filter modifies the SQL to:

	1\.	Sort future events (dato \>= now) first.

	3\.	Place events with no or empty dato last.

## 3 Nov 2024 {#3-nov-2024}

* Modified snippet \#6. It will now trigger on all forms except form with id 3, which is the edit user profile submission

## 30 Oct 2024 \- Only members should be able to successfully login {#30-oct-2024---only-members-should-be-able-to-successfully-login}

[Developed code snippet 14\.](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=47)

[testing sso optimization 30 oct 2024](https://docs.google.com/spreadsheets/d/1EwhIU93NQzFWTz_gYkX8dhPhlr7IK3o__BpBVg4LqEo/edit?gid=0#gid=0)

**Enhanced product claim validation**: Implemented a check on the extension\_Products attribute during login to verify product IDs. Users with invalid or missing product claims are logged out and redirected to a membership error page.

We utilized the MiniOrange SSO plugin hooks to achieve this, which **required upgrading to an enterprise license.**

We have removed the Learndash Group for "Medlemskap," which previously provided access to all courses. Now, all courses are free, with login as the only requirement. Users must have the correct subscription, managed through product IDs, to access the platform.

## 25 Oct 2024 \- Setting external\_id as username and storing subscriber\_id as meta {#25-oct-2024---setting-external_id-as-username-and-storing-subscriber_id-as-meta}

[See VIDEO describing the setup.](https://www.loom.com/share/bafdaff9bff8447997ade9e1e73c3341) 

We needed to swap the `username` (currently set as the subscriber ID) and `external ID` (stored as user meta) for approximately 5,000 user. The new requirement was for the `external ID` to become the `username` and the `subscriber ID` to be moved to user meta. This was necessary to improve system consistency and ensure proper identification across multiple databases. 

To achieve this, we created a custom REST API endpoint that allows updating the `username` with validation. A bulk update process was set up using Make.com to process the updates in batches, minimizing risk and allowing for controlled scheduling of changes.

1. **SQL Query for User List**: We started by extracting the current `username` (subscriber ID) and `external ID` from the database to ensure we had a live record before making any updates. We inserted it in here [external\_id\_as\_main\_id\_bulk\_edit](https://docs.google.com/spreadsheets/d/1WezpNueFcxo2slZ4TrZWvlI9iba4STYbEp9BKpBMp4k/edit?gid=0#gid=0).   
2. **Custom API Endpoint**: Since WordPress doesn’t allow updating `username` through its default REST API, we created a custom PHP endpoint to handle the swap, with permission checks and proper validation.  
3. **Testing with Make.com**: The new process was tested in Make.com, where overwriting users was controlled, and logs were tracked. We iterated through this sheet and run the scenario for all rows that were not marked. [external\_id\_as\_main\_id\_bulk\_edit](https://docs.google.com/spreadsheets/d/1WezpNueFcxo2slZ4TrZWvlI9iba4STYbEp9BKpBMp4k/edit?gid=0#gid=0).   
4. **Go Live**: After testing, the updates were scheduled live using Make.com to ensure minimal disruption.  
5. After going live, I modified the PHP functions for sending and grieving data to ensure that they work with an external ID as the primary ID. 

**Resources**

* [Make.com scenario for updating users](https://eu1.make.com/195273/scenarios/2825032/edit).   
* Google spreadsheet for logging. [external\_id\_as\_main\_id\_bulk\_edit](https://docs.google.com/spreadsheets/d/1WezpNueFcxo2slZ4TrZWvlI9iba4STYbEp9BKpBMp4k/edit?gid=0#gid=0)

## 24 Oct 2024 \- Date Validation for Course Start and End Dates in ACF {#24-oct-2024---date-validation-for-course-start-and-end-dates-in-acf}

Wrote PHP code; see [snippet ID 12](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=44) to ensure that the start date precedes the end date in the CACF fields using server-side validation with PHP. Espen needs to ensure that his Salesforce mechanisms are functioning correctly.

See [VIDEO](https://www.loom.com/share/4e8c419e8dad452c8cfaea49ea4c170a) demonstrating the solution. 

# 2023 {#2023}

## 5 Sept 2023 \-  Google tag manager username code snippet {#5-sept-2023---google-tag-manager-username-code-snippet}

Sindre Fjellestad developed this solution on 5 Sept 2023\.

Purpose is that Espen from DTB.Digital can then track all users through their usernames on Google Tag Manager.

This PHP function, `add_username_and_meta_script()`, identifies logged-in WordPress users and makes their usernames available in Google Tag Manager (GTM) via a JavaScript variable `window.wpUsername`.

The function:

* Checks user login status  
* Retrieves user information and 'external\_id'  
* Adds a script to the page header, setting `wpUsername` and `externalId` variables

Hooked to 'wp\_head', it runs on every page load, enabling user tracking and personalization.

# No date (before 2024\)  {#no-date-(before-2024)}

## Snippet for Start and enroll into course {#snippet-for-start-and-enroll-into-course}

To enhance the tracking mechanism of user interactions, mainly focusing on the first module engagement within a course, we have implemented functionality to **hide the lesson list on course pages**. This modification aims to direct users towards the initial module of a course, ensuring accurate tracking of user engagement from the outset. This feature is contingent on the course's completion status—the lesson list is hidden only for users who have not yet completed the course.

Implementation:

The implementation is done through a custom WordPress function hooked into the wp\_enqueue\_scripts action. This function checks two primary conditions: the current page type and the course completion status for the logged-in user.



---
## File: workflows/conferences.md
---

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


---
## File: workflows/form-submission.md
---

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

