# Assignment Planner

A modern and responsive assignment planning application built with React for organizing coursework, tracking deadlines, managing priorities, monitoring progress, and keeping assignment data organized in one place.

The application runs entirely in the browser and stores assignment data locally, so no backend or account is required.

![Assignment Planner Preview](public/preview.png)

## Features

- Create and manage assignments
- Edit existing assignments
- Delete assignments with a custom confirmation modal
- Mark assignments as completed
- Restore completed assignments
- Set assignment due dates and times
- Organize assignments by course
- Set Low, Medium, or High priority
- Add estimated completion time
- Add notes and instructions
- Track assignment status
- Automatically identify overdue assignments
- View assignment summary statistics
- Search assignments by title, course, or notes
- Filter assignments by course
- Filter assignments by priority
- Filter assignments by status
- Filter assignments by due date
- Hide completed assignments
- Clear active filters
- Export assignment data to CSV
- Import assignment data from CSV
- Export individual assignments as `.ics` calendar events
- Print assignment information
- Dark and light themes
- Local browser data persistence
- Custom confirmation dialogs instead of browser dialogs
- Responsive interface for different screen sizes
- Smooth UI interactions and reusable components
- GitHub Pages deployment support

## Assignment Overview

The planner provides a quick overview of the current workload through summary cards:

- Total assignments
- To-do assignments
- Assignments in progress
- Completed assignments
- Overdue assignments

This makes it easy to understand the current assignment workload at a glance.

## Assignment Management

Each assignment can contain:

- Title
- Course
- Due date
- Due time
- Priority
- Estimated work time
- Notes
- Status

Assignments can be updated or removed directly from the planner.

## Search and Filters

The assignment list includes tools for quickly finding relevant work.

Assignments can be searched using:

- Title
- Course
- Notes

They can also be filtered using:

- Course
- Priority
- Status
- Due date
- Completion state

## Calendar Export

Individual assignments can be exported as standard `.ics` calendar files.

These files can be opened or imported into applications that support the iCalendar format.

## CSV Import and Export

Assignment data can be exported as CSV for backup or external use.

Previously exported assignment data can also be imported back into the planner.

## Local Data

Assignment information is stored using browser LocalStorage.

This means:

- No account is required
- No backend server is required
- Data remains available after refreshing or reopening the application
- Assignment information stays on the user's browser unless manually exported

## Themes

The application includes both:

- Dark theme
- Light theme

The interface and form controls adapt to the selected theme.

## Built With

- React
- Vite
- JavaScript
- styled-components
- react-icons
- LocalStorage
- CSV
- iCalendar (`.ics`)

## Project Structure

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
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   ├── App.styled.js
│   ├── index.css
│   ├── main.jsx
│   └── theme.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/a2rp/assignment-planner.git
```

Move into the project directory:

```bash
cd assignment-planner
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for GitHub Pages deployment.

Deploy the latest production build with:

```bash
npm run deploy
```

The deployment process builds the application and publishes the generated `dist` directory to the `gh-pages` branch.

## Browser Storage

The application uses LocalStorage for persistence.

Clearing browser site data or LocalStorage may remove saved assignments, so CSV export can be used when a separate backup is needed.

## License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

## Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash[.ranjan09@gmail.com](mailto:.ranjan09@gmail.com)

## Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

## License

This project is licensed under the MIT License.
