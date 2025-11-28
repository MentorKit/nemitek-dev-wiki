# Nemitek Dev Wiki

Comprehensive documentation for Nemitek's development systems and integrations.

## Overview

This wiki contains documentation for:
- **Event CMS** - Event management system
- **Custom WP Plugin** - WordPress plugin documentation
- **SSO** - Single Sign-On implementation
- **Changelog** - Version history and updates

## Getting Started

### Prerequisites

- Node.js version 20.0 or above
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The site will be available at `http://localhost:3000`

### Build

Build the site for production:

```bash
npm run build
```

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

## Documentation Structure

- `/docs` - Main documentation files
- `/docs/Event CMS` - Event management documentation
- `/docs/custom-wp-plugin` - WordPress plugin documentation
- `/docs/SSO` - SSO implementation guides
- `/docs/workflows` - Step-by-step guides and process flows

## Exporting Documentation

To combine all documentation into a single Markdown file (useful for uploading to ChatGPT or other AI tools):

```bash
./combine-docs.sh
```

This will generate `docs-combined.md` in the root directory, containing all documentation files from the `/docs` folder in a structured format. The script:

- Recursively finds all `.md` files in the `/docs` directory
- Combines them in a logical order
- Adds file path headers for easy navigation
- Prevents duplicate entries

**Output:** `docs-combined.md` - A single file with all documentation ready for export.

## Contributing

Documentation is maintained in Markdown format. Follow the existing structure and naming conventions when adding new content.

## License

Copyright © Nemitek. All rights reserved.
