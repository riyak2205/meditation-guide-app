# 🧘‍♀️ Meditation Guide App

A calming web app that helps users explore guided **meditation** and **breathing exercises** with YouTube video support. Built with **React**, **Express**, and styled for a smooth, relaxing user experience.

---

## 🌟 Features

- 🧘 Two main sections: Meditation and Breathing  
- 🎥 10 curated exercises per type with embedded YouTube videos  
- 💻 Fully responsive layout  
- 🌄 Peaceful background and clean UI  
- ⚙️ Backend filtering via query parameters  

---

## 🛠️ Tech Stack

- **Frontend:** React, React Router, CSS  
- **Backend:** Node.js, Express  
- **Data:** Static JSON file  
- **Deployment Ready:** Easily extendable with database or hosting  

---

## 🚀 Getting Started

### Step 1: Clone the repository
git clone https://github.com/yourusername/meditation-guide-app.git
cd meditation-guide-app

Step 2: Start the Backend Server
cd backend
npm install
node server.js
Backend runs at: http://localhost:5000

Step 3: Start the Frontend Server
cd ../frontend
npm install
npm start
Frontend runs at: http://localhost:3000
If port 3000 is busy, it’ll prompt for another — press Y

Project Structure:
meditation-guide-app/
├── backend/
│   ├── server.js
│   └── data/
│       └── exercises.json
├── frontend/
│   ├── public/
│   │   └── yoga.webp
│   └── src/
│       ├── App.jsx
│       ├── index.js
│       └── pages/
│           ├── Home.jsx
│           ├── Home.css
│           ├── ExerciseList.jsx
│           └── ExerciseList.css

