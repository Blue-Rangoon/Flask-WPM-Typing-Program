# 💬 SpeedType – WPM Typing Program

<p align="center">
Lightweight WPM Typing Test built with Python FastAPI and Vanilla JavaScript
</p>

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com/?lines=WPM+Typing+Test;Improve+Your+Typing+Speed;Frontend+%2B+Backend+Integration;Real-Time+WPM+%26+Accuracy">
</p>

---

## 🛫 Project Badges

![HTML5](https://img.shields.io/badge/frontend-html5-orange?logo=html5)
![CSS3](https://img.shields.io/badge/style-css3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/logic-javascript-yellow?logo=javascript)
![Python](https://img.shields.io/badge/backend-python-blue?logo=python)
![Flask](https://img.shields.io/badge/framework-flask-lightgrey?logo=flask)
![Vercel](https://img.shields.io/badge/deployment-vercel-black?logo=vercel)
![Typing](https://img.shields.io/badge/domain-WPM%20%26%20SpeedTyping-purple)
![Dashboard](https://img.shields.io/badge/ui-dashboard-blue)

---

## 👀 Visitors

![Visitors](https://komarev.com/ghpvc/?username=Blue-Rangoon&label=Repository%20Views&color=blue)

---

# 🖥️ Project Preview 

![Interface Screen Shot](preview.png)

---

# 🌐 Live Demo

https://flask-wpm-typing-program.vercel.app/

---

# ⌨️ WPM Typing Test (FastAPI + JavaScript)

A full-stack typing speed test application built using **Python FastAPI** for the backend and **Vanilla JavaScript** for the frontend.

The app measures:

- Words Per Minute (WPM)
- Typing Accuracy
- Live typing feedback
- 60-second countdown timer

Random text is fetched dynamically from the backend API.

---

## 🚀 Features

- Real-time typing feedback (correct/incorrect highlighting)
- WPM calculation
- Accuracy tracking
- 60-second typing timer
- Random text generation from backend
- Fully interactive UI
- Restart / new text buttons

---

## 🧠 Tech Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=html,css,js,py,fastapi,flask,git,vercel" />
</p>

**Backend**
- Python
- FastAPI
- Uvicorn
- Jinja2

**Frontend**
- HTML
- CSS
- JavaScript (Vanilla JS)

---

## 📂 Project Structure

````markdown
```bash
wpm-typing-test/
│
├── api/
│   └── tutorial.py  
├── static/
│   ├── style.css
│   └── script.js
├── templates/
│   └── index.html
├── text.txt
└── requirements.txt
```

## ⚙️ Installation (Run Locally)

**Clone the repository:**

```bash
git clone https://github.com/yourusername/wpm-typing-test.git
cd wpm-typing-test


- Install dependencies:
pip install -r requirements.txt


- Run the server:
uvicorn tutorial:app --reload


- Open in browser:
http://127.0.0.1:8000


- Example API Endpoint
GET /get-text
```

## 5. Format API response properly
**Response:**

````markdown
```json
{
  "text": "Practice makes progress."
}




