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

An organization number lookup feature is implemented in Brønnøysund for **logged-out** users. To achieve this, we use this plugin https://github.com/Sinfjell/brreg-gravity-forms where input and output fields are deteremined based on css classes. 

### Region events {#4.4-region-events}

We are using this shortcode: “ \[facetwp template="event\_same\_region"\]” to display events with the same region on singular pages. Meaning that if we are on a event for the Oslo region than at the bottom we will see all other events for the region. 

