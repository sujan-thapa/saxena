# Portfolio Frontend

This is the frontend for my portfolio website, to showcase projects, skills, and experience.

## Tech Stack

- React
- JavaScript (ES6+)
- CSS/SCSS

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/sujan-thapa/saxena/tree/master/portfolio/frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Deployment

To start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── FaviconGenerator.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── index.js
├── pages/
│   ├── Home/
│   │   └── Home.jsx
│   ├── Personal/
│   │   └── Personal.jsx
│   ├── Project/
│   │   └── Project.jsx
│   └── Resume/
│       └── Resume.jsx
├── App.jsx
├── main.jsx
├── App.css
├── index.css
```

### Components

#### FaviconGenrator
This is for favicon for my personal portfolio website.

#### Header

The `Header` component displays the top navigation bar of the portfolio.

#### Footer

The `Footer` component appears at the bottom of every page.

#### Index.js
A barrel file to centralize export from multiple components into a single file, making it easier and cleaner to import components in App.jsx.

---

### Pages

#### Home

The `Home` page serves as the landing page of the portfolio, providing an overview and introduction.

#### Personal

The `Personal` page highlights personal information, background, and interests.

#### Project

The `Project` page showcases project works.

#### Resume

The `Resume` page displays link to download resume.


## Github Link
https://github.com/sujan-thapa/saxena/tree/master/portfolio/frontend 

## Vercel Link
https://saxena-kmsn.vercel.app/ 
