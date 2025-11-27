# Payload on event post creation 
[Link to code snippet](https://kurs.nemitek.no/wp-admin/admin.php?page=edit-snippet&id=32)

[Link to Uncanny Automator recipe.](https://kurs.nemitek.no/wp-admin/post.php?post=39525&action=edit)

When a new event is created, essential data is transmitted to Microsoft Dynamics to ensure that all future participant submissions are accurately associated with the correct event ID. This is technically implemented through a custom-coded function, send_event_data_to_webhook, specifically designed to dispatch related taxonomies. The activation of this function is facilitated by Uncanny Automator, which serves as the trigger mechanism and automatically provides the relevant post_id as an argument to the function.