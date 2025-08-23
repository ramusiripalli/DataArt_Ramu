# 📜 DataArt Timeline (React + TypeScript)

An interactive timeline web app rebuilt with **React + TypeScript** using **Vite**.  
Displays historical events dynamically from a JSON file with a clean modular architecture.

---

## 🚀 Features

- **Dynamic Timeline** – Loads events from `data/events.json`.
- **Interactive Modal** – Click on an event marker to view details.
- **Component-Based Architecture** – Built with reusable React components.
- **React Hooks** – Uses `useState` and `useEffect` for state management.
- **Portal Modal** – Event details open in a modal (React Portal supported).
- **Optional Filters** – Ready for future filters/bookmarks (`<FilterPanel>`).
- **Responsive UI** – Styled with CSS / CSS Modules.

---

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** CSS / CSS Modules (can extend with styled-components)
- **Data Source:** JSON (`data/events.json`)

---

## 📂 Project Structure

-project-root/
-│── public/
-│ └── events.json # Event data
-│
-│── src/
-│ ├── components/
-│ │ ├── Header.tsx # Header with logo + theme switch
-│ │ ├── Timeline.tsx # Renders timeline & event markers
-│ │ ├── EventMarker.tsx# Each timeline event marker
-│ │ ├── EventModal.tsx # Modal for detailed view
-│ │ └── FilterPanel.tsx# (Optional) filters/bookmarks
-│ │
-│ ├── App.tsx # Main app entry
-│ ├── main.tsx # React DOM entry point
-│ └── index.css # Global styles
-│
-│── tsconfig.json # TypeScript config
-│── vite.config.ts # Vite config
-│── package.json

## 📸 Sample Screenshot

![Timeline Desktop LayOut](/public/Images/1.png)
![Timeline  Desktop Modal ](/public/Images/2.png)
![Timeline Mobile LayOut](/public/Images/3.png)
![Timeline  Mobile Modal ](/public/Images/4.png)