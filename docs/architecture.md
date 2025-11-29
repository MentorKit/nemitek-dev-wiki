---
sidebar_position: 2
---

# Architecture of arrangement.nemitek.no

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

