# Nesto Front-End Coding Challenge

This is a solution for the Nesto Front-End Coding Challenge, a single-page application (SPA) built with a modern React and TypeScript stack. The application allows users to browse mortgage products, create an application, and manage their existing applications.

## 🚀 Live Demos

-   **Main Application:** `https://<URL-de-tu-app-en-vercel>.vercel.app`
-   **Storybook Component Library:** `https://<URL-de-tu-storybook-en-vercel>.vercel.app`

---

## ✨ Features

-   **Product View:**
    -   Fetches and displays the best fixed and variable mortgage rates from the Nesto API.
    -   Encapsulates data fetching and business logic in a custom hook (`useMortgageProducts`).

-   **Application Flow:**
    -   Creates a new application (`POST`) when a user selects a product.
    -   Redirects the user to a dedicated form page for the new application using a dynamic route (`/application/:id`).

-   **Contact Form:**
    -   Displays a form to edit applicant details, pre-filled with data from the API.
    -   Implements robust, real-time validation using **React Hook Form** and **Zod** for a seamless user experience.
    -   The save button is intelligently disabled based on the form's state (`isDirty`, `isValid`, `isSubmitting`).
    -   Updates the application on the backend (`PUT`) and provides clear visual feedback on success.
    -   Page-specific data fetching is encapsulated in a custom hook (`useApplicationDetails`).

-   **Applications List:**
    -   Fetches and displays a list of all *completed* applications.
    -   Presents the data in a clean, responsive, and sortable table.
    -   Implements **client-side pagination** to elegantly handle large datasets, with all logic encapsulated in a reusable custom hook (`usePagination`).
    -   Data fetching and data "enrichment" (combining application and product data) is handled in a dedicated custom hook (`useApplicationsList`).

-   **Component Library (Storybook):**
    -   Includes a full Storybook setup to document and showcase all reusable UI components (`Card`, `Navbar`, `ContactForm`, etc.) in isolation.

-   **Architecture & Styling:**
    -   Built on a modern, scalable architecture using custom hooks to separate concerns.
    -   Modern and encapsulated styles using **SCSS Modules**.
    -   Responsive design that adapts to different screen sizes.
    -   Configurable through environment variables (`.env`).

---

## 🛠️ Tech Stack

-   **Framework:** React (with Vite)
-   **Language:** TypeScript
-   **Styling:** SCSS Modules
-   **Routing:** React Router DOM
-   **Form Management:** React Hook Form
-   **Schema Validation:** Zod
-   **HTTP Requests:** Axios
-   **Component Library:** Storybook
-   **Deployment:** Vercel
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

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root of the project by copying the example below. This file is ignored by Git.
    ```env
    VITE_NESTO_CANDIDAT="Your Full Name"
    VITE_PAGINATION_ITEMS_PER_PAGE=5
    ```

4.  **Start the development server:**
    ```bash
    pnpm run dev
    ```
    The application will be available at `http://localhost:5173`.

5.  **Run Storybook:**
    To browse the component library, run:
    ```bash
    pnpm run storybook
    ```
    Storybook will be available at `http://localhost:6006`.