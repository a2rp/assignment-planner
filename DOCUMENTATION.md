# Assignment Planner - Documentation

## Overview

Assignment Planner is a modern browser-based application for organizing coursework, managing deadlines, tracking assignment progress, and keeping academic tasks structured in one place.

The application is built with React and runs entirely on the client side. Assignment data is stored locally in the browser, so the application does not require a backend server, database, user account, or authentication system.

The project includes assignment management, search and filtering, workload summaries, CSV import/export, calendar event export, printing, themes, and responsive layouts.

---

## Core Features

### Assignment Management

Users can:

- Add assignments
- Edit assignments
- Delete assignments
- Mark assignments as completed
- Restore completed assignments
- Track assignment status
- Add notes and instructions
- Set estimated work duration

Each assignment can contain:

- Title
- Course
- Due date
- Due time
- Priority
- Estimate
- Notes
- Status

---

## Assignment Form

The assignment form is used to create new assignments.

### Title

The title identifies the assignment.

This is a required field.

Example:

```text
Operating Systems Assignment
```

### Course

The course field can be used to associate the assignment with a subject or course code.

Example:

```text
CS301
```

### Due Date

The due date determines when the assignment must be completed.

The application uses the browser's native date input.

### Due Time

An optional due time can be assigned along with the due date.

### Priority

Assignments can be categorized by priority.

Available priority levels include:

```text
Low
Medium
High
```

### Estimate

The estimate field represents the expected amount of time required to complete the assignment.

### Notes

Additional instructions, references, or useful information can be stored with an assignment.

### Status

Assignments can be assigned a workflow status such as:

```text
To-do
Doing
Done
```

---

## Assignment Summary

The Assignment Summary section provides a quick overview of the current workload.

It displays:

### Total

Total number of assignments currently stored.

### To-do

Assignments that have not yet been started.

### Doing

Assignments currently in progress.

### Done

Assignments that have been completed.

### Overdue

Assignments whose deadline has passed and which have not been completed.

This provides an immediate overview of assignment progress without requiring the user to inspect every individual item.

---

## Assignment List

Assignments are displayed in a structured planner.

Desktop layouts use a table-style presentation that makes it easy to compare multiple assignments.

Information displayed can include:

- Title
- Course
- Due date
- Due time
- Priority
- Estimate
- Status
- Available actions

The interface also adapts for smaller screen sizes.

---

## Assignment Actions

Each assignment provides contextual actions.

Depending on the assignment state, users can perform actions such as:

- Mark as complete
- Restore assignment
- Export calendar event
- Edit assignment
- Delete assignment

Icons are used where suitable to keep the interface compact and easy to scan.

---

## Editing Assignments

Existing assignments can be modified through the edit interface.

The editor allows users to update assignment information without deleting and recreating the assignment.

Editable information can include:

- Title
- Course
- Due date
- Due time
- Priority
- Estimate
- Notes
- Status

Changes are reflected in the planner after saving.

---

## Delete Confirmation

Deleting an assignment requires confirmation.

The project uses a custom confirmation modal instead of the browser's native `confirm()` dialog.

This keeps the confirmation experience consistent with the application's visual design.

---

## Form Reset Confirmation

When entered assignment information exists, resetting the form can require confirmation.

A custom modal is used instead of the browser's native confirmation dialog.

This helps prevent accidental loss of entered form data.

---

## Search

Assignments can be searched using the planner search field.

The search system can match information such as:

- Assignment title
- Course
- Notes

Search results update the visible assignment collection based on the entered query.

The search field uses the browser's search input behavior while avoiding duplicate custom clear controls.

---

## Filters

Assignments can be narrowed using multiple filters.

Available filtering options include areas such as:

- Course
- Priority
- Status
- Due state
- Completion state

Multiple filters can be combined to locate specific assignments.

---

## Clear Filters

The Clear Filters control restores the planner filters to their default state.

This allows users to quickly return to the complete assignment list.

---

## Hide Completed Assignments

Completed assignments can be hidden from the active planner.

This is useful when the user wants to focus only on unfinished work.

Completed assignments remain stored and can be shown again when needed.

---

## Due Date Tracking

Assignment deadlines are evaluated using their configured date and time.

The interface can visually identify assignments based on deadline state.

Examples include:

- Upcoming
- Due soon
- Overdue

Completed assignments are handled separately from unfinished overdue work.

---

## Overdue Assignments

An assignment becomes overdue when:

1. Its deadline has passed.
2. The assignment has not been completed.

Overdue assignments are highlighted so that they are easier to identify.

The Assignment Summary also displays the total number of overdue assignments.

---

## Calendar Export

Assignments can be exported as iCalendar files using the `.ics` format.

An exported calendar event can contain information such as:

```text
SUMMARY
DESCRIPTION
DTSTART
DTEND
PRIORITY
UID
```

Example structure:

```text
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Assignment Planner//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
UID:assignment-id@assignment-planner
DTSTART:20260821T094700Z
DTEND:20260821T104700Z
SUMMARY:Assignment Title
DESCRIPTION:Course and assignment notes
PRIORITY:9
END:VEVENT
END:VCALENDAR
```

The downloaded `.ics` file can be opened or imported into compatible calendar applications.

---

## CSV Export

Assignment data can be exported to a CSV file.

CSV export provides a portable copy of assignment information that can be:

- Stored as a backup
- Opened in spreadsheet applications
- Processed by other tools
- Imported back into the planner

The CSV functionality is handled on the client side.

---

## CSV Import

The application supports importing compatible assignment data from CSV files.

Imported data is processed in the browser and added to the planner.

Import functionality allows previously exported assignment data to be restored without requiring a remote database.

---

## Print Support

The planner provides printing functionality for assignment information.

Print-specific styles help produce a cleaner printed representation than directly printing the normal application interface.

---

## LocalStorage

Assignment data is persisted using browser LocalStorage.

This allows assignments to remain available after:

- Refreshing the page
- Closing the tab
- Restarting the browser

No remote database is required.

### Important

LocalStorage belongs to the browser and website origin.

Assignment data may be removed if the user:

- Clears browser storage
- Clears site data
- Uses browser cleanup tools
- Uses another browser or device

CSV export can be used when a separate backup is needed.

---

## Theme System

The application provides:

- Dark theme
- Light theme

Theme colors are controlled using CSS variables.

The interface updates elements such as:

- Backgrounds
- Text
- Borders
- Surfaces
- Form controls
- Interactive elements
- Scrollbars

This keeps visual styling consistent across the application.

---

## Native Date and Time Inputs

The assignment form uses native browser date and time controls.

This approach provides:

- Browser-native calendar selection
- Browser-native time selection
- Keyboard accessibility
- Platform-specific input behavior
- No additional date picker dependency

The visual appearance of the native picker popup itself is controlled by the browser and operating system.

---

## Custom Modals

Application confirmation actions use custom React modals where appropriate.

This avoids inconsistent native browser dialogs such as:

```javascript
window.alert();
window.confirm();
window.prompt();
```

The project does not rely on these browser dialogs for its normal application confirmation flows.

---

## Toast Messages

Toast notifications provide lightweight application feedback.

They can be used to communicate successful operations or other temporary status information without interrupting the user's workflow.

Unlike browser alert dialogs, toast messages remain visually integrated with the application.

---

## Responsive Design

The application is designed to adapt across different viewport sizes.

Responsive behavior applies to areas such as:

- Header
- Assignment form
- Summary cards
- Planner controls
- Assignment list
- Footer
- Action buttons

The goal is to preserve usability across desktop and smaller screens.

---

## Component Architecture

Reusable interface functionality is separated into components.

The project includes components such as:

```text
src/components/
├── assignmentCard/
├── assignmentForm/
├── assignmentTable/
├── confirmModal/
├── editModal/
├── filters/
├── footer/
├── goToTop/
├── header/
├── importExportTools/
├── loader/
├── summary/
└── toast/
```

Components that require dedicated styling keep their styles in their respective `styled.js` files.

---

## Hooks

Reusable React logic is separated into custom hooks.

The project includes hooks for responsibilities such as:

```text
src/hooks/
├── useAssignments.js
└── useLocalStorage.js
```

### useAssignments

Handles assignment-related state and operations.

### useLocalStorage

Provides reusable LocalStorage persistence behavior.

---

## Utilities

Utility functions are separated from UI components.

The utilities directory contains functionality for areas such as:

```text
src/utils/
├── assignmentUtils.js
├── calendar.js
├── csv.js
└── fileDownload.js
```

### assignmentUtils.js

Contains assignment-related helper functions and calculations.

### calendar.js

Handles generation of calendar event data.

### csv.js

Handles CSV processing functionality.

### fileDownload.js

Handles browser-based file download operations.

---

## Data

Shared application constants are maintained separately from components.

```text
src/data/constants.js
```

This helps prevent repeated static values throughout the component tree.

---

## Styling

The project uses styled-components for component-level styling.

Global styling and theme-related variables are handled separately.

Important styling files include:

```text
src/App.styled.js
src/index.css
src/theme.css
```

This structure helps reduce style conflicts while keeping component styles close to their respective components.

---

## Global CSS Reset

The application includes a global CSS reset for consistent browser rendering.

It applies common rules such as:

```css
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

The global base font size is:

```css
font-size: 16px;
```

---

## Application Structure

```text
assignment-planner/
├── public/
│   ├── favicon.ico
│   └── preview.png
│
├── src/
│   ├── components/
│   │   ├── assignmentCard/
│   │   ├── assignmentForm/
│   │   ├── assignmentTable/
│   │   ├── confirmModal/
│   │   ├── editModal/
│   │   ├── filters/
│   │   ├── footer/
│   │   ├── goToTop/
│   │   ├── header/
│   │   ├── importExportTools/
│   │   ├── loader/
│   │   ├── summary/
│   │   └── toast/
│   │
│   ├── data/
│   │   └── constants.js
│   │
│   ├── hooks/
│   │   ├── useAssignments.js
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   ├── assignmentUtils.js
│   │   ├── calendar.js
│   │   ├── csv.js
│   │   └── fileDownload.js
│   │
│   ├── App.jsx
│   ├── App.styled.js
│   ├── index.css
│   ├── main.jsx
│   └── theme.css
│
├── .gitignore
├── DOCUMENTATION.md
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Technologies

The application uses:

- React
- Vite
- JavaScript
- styled-components
- react-icons
- HTML
- CSS
- LocalStorage
- CSV
- iCalendar

---

## Installation

Clone the repository:

```bash
git clone https://github.com/a2rp/assignment-planner.git
```

Enter the project directory:

```bash
cd assignment-planner
```

Install dependencies:

```bash
npm install
```

---

## Development

Start the Vite development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

## Production Build

Create the optimized production build:

```bash
npm run build
```

The generated production files are placed inside:

```text
dist/
```

---

## Production Preview

Preview the production build locally:

```bash
npm run preview
```

---

## GitHub Pages Deployment

The Vite configuration uses the repository base path:

```javascript
base: "/assignment-planner/";
```

The project can be deployed using:

```bash
npm run deploy
```

The deployment process:

1. Runs the production build.
2. Generates the `dist` directory.
3. Publishes `dist` to the `gh-pages` branch.
4. GitHub Pages serves the generated production application.

The repository's GitHub Pages source should therefore use:

```text
gh-pages
/(root)
```

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the development server.

### Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Runs the generated production build locally.

### Deploy

```bash
npm run deploy
```

Builds and publishes the application to GitHub Pages.

---

## Browser Requirements

The application is intended for modern browsers with support for:

- ES modules
- LocalStorage
- Native date inputs
- Native time inputs
- Blob and browser download APIs
- Modern CSS
- React-supported browser environments

Some native controls, including calendar and time picker interfaces, may appear differently depending on the browser and operating system.

---

## Data and Privacy

Assignment Planner does not require a backend server for normal operation.

Assignment information is stored locally in the user's browser.

The application does not require:

- Registration
- Login
- Authentication
- Remote database storage

Users remain responsible for exporting important assignment information if they require an external backup.

---

## Project Goals

The project demonstrates practical frontend application concepts including:

- React component architecture
- Reusable custom hooks
- Local state management
- Persistent browser storage
- Search and filtering
- Derived assignment statistics
- Form handling
- Custom modal interfaces
- Responsive UI design
- Theme management
- CSV processing
- Calendar file generation
- Client-side file downloads
- Print support
- Production builds
- GitHub Pages deployment

---

## Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me A Coffee: [https://buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [https://patreon.com/a2rp](https://patreon.com/a2rp)

## License

This project is licensed under the MIT License.
