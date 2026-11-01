# LearnHub — Frontend only

A responsive Online Learning Platform interface built with **HTML, CSS and vanilla JavaScript**. There is no Python, Flask, MySQL, package manager, or build step in this version.

## Folder structure

```text
learnhub-frontend/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── app.js
```

## Run it in VS Code

1. Extract the `learnhub-frontend.zip` file.
2. Open the extracted `learnhub-frontend` folder in VS Code.
3. Open `index.html` in your browser. You can also install the **Live Server** extension in VS Code, right-click `index.html`, and choose **Open with Live Server**.
4. No terminal commands or dependencies are required.

## Included frontend features

- Responsive LearnHub landing page and course catalog
- Course search, category filter, and level filter
- Course details and course outline
- Demo sign-in and account creation interface
- Course enrolment
- My Learning dashboard with progress summaries
- Lesson navigation and mark-as-complete interaction
- Sample multiple-choice quiz with score result
- Favourite courses
- Light/dark theme toggle
- Browser `localStorage` persistence for demo profile, enrollments, lesson progress, favourites, and theme

## Important: frontend demo limitations

This is a **frontend-only prototype**. It does not yet have a real server or database.

- Demo sign-in is not secure authentication. It accepts a valid-looking email and a password of at least 6 characters, but it does not verify credentials on a server. No password is saved.
- Enrolments and progress are saved only in the current browser on the current device. They are not shared between users or devices.
- The lesson video area is a visual placeholder; real video hosting/player integration can be added later.
- The sample quiz is included to demonstrate the interface and JavaScript interaction.
- Do not use this demo for real student accounts or sensitive information.

When the interface is ready, a later stage can connect these screens to a Flask API and MySQL database, replacing the browser-only demo data with real user accounts and course records.
