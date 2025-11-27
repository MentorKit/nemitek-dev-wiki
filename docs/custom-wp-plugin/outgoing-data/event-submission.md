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