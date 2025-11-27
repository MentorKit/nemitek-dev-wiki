---
sidebar_position: 2
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

