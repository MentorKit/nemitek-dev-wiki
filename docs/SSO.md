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
