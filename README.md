# Nesto Front-End Coding Challenge

This is a solution for the Nesto Front-End Coding Challenge. The project is a single-page application (SPA) built with React and TypeScript that allows users to browse mortgage products, create an application, and manage their existing applications.

---

## ✨ Features

-   **Product View:**
    -   Fetches and displays the best fixed and variable mortgage rates from the Nesto API.
    -   Data fetching and processing logic is encapsulated in a custom hook (`useMortgageProducts`).

-   **Application Flow:**
    -   Creates a new application (`POST`) when a user selects a product.
    -   Redirects the user to a dedicated form page for the new application using a dynamic route (`/application/:id`).

-   **Contact Form:**
    -   Displays a form to edit applicant details (First Name, Last Name, Email, Phone).
    -   Implements real-time validation using **React Hook Form** and **Zod** for a robust user experience.
    -   The save button is only enabled when the form has been modified and is valid.
    -   Updates the application on the backend (`PUT`) upon form submission.
    -   Shows a visual confirmation when data is saved successfully.
    -   All data fetching and state management logic for the page is encapsulated in a custom hook (`useApplicationDetails`).

-   **Applications List:**
    -   Fetches and displays a list of all applications that have complete contact information.
    -   Presents the data in a clean, easy-to-read, and responsive table.
    -   Implements **client-side pagination** to handle a large number of applications, with logic encapsulated in a custom hook (`usePagination`).

-   **Architecture & Styling:**
    -   Reusable components (`Card`, `Navbar`, `ContactForm`, etc.).
    -   Modern and encapsulated styles using **SCSS Modules**.
    -   Responsive design that adapts to different screen sizes.

---

## 🛠️ Tech Stack

-   **Framework:** React (with Vite)
-   **Language:** TypeScript
-   **Styling:** SCSS Modules
-   **Routing:** React Router DOM
-   **Form Management:** React Hook Form
-   **Schema Validation:** Zod
-   **HTTP Requests:** Axios
-   **Package Manager:** pnpm

---

## 🚀 Local Development

To clone and run this project on your machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder-name>
    ```

2.  **Install dependencies:**
    (Ensure you have `pnpm` installed: `npm install -g pnpm`)
    ```bash
    pnpm install
    ```

3.  **Start the development server:**
    ```bash
    pnpm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

---

## storybook Component Library

This project uses Storybook for UI component development, testing, and documentation. Each reusable component (`Card`, `Navbar`, `ContactForm`, etc.) has its own set of "stories" that showcase its different states and props.

### Running Storybook Locally

To browse the component library, run the following command:

```bash
pnpm run storybook