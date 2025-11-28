---
sidebar_position: 0
---

# Intro

This section documents all core workflows in the Nemitek event platform.  
A *workflow* describes how data moves through the system — from user actions on the website, through WordPress hooks and custom plugins, to external systems such as Salesforce, Infosoft, and Mixpanel.

Workflows are **system-level processes**, not code snippets. Each workflow explains:

- **Where an action starts** (e.g., user submits a form, editor creates an event)
- **What components are involved** (Gravity Forms, ACF, CPT “arrangement”, custom plugin)
- **How data is enriched** (post meta, taxonomies, user info)
- **Where the final payload goes** (typically Salesforce or Infosoft)
- **What happens automatically** versus what editors must configure

This helps developers understand not just *what the code does*, but *how the entire platform behaves end-to-end*.

## Core Workflows

The workflow chapter currently covers:

- **Unified Form Submission Flow** – how all Gravity Forms send standardized payloads to Salesforce  
- **Conferences Workflow** – how the shared conference form adapts automatically per event  
- *(More workflows will be added as needed)*

Use this section to understand the high-level mechanics behind the system's most important processes.
