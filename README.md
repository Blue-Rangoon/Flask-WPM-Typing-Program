<div align="center">

# ⌨️ WPM Typing Test

**A full-stack typing speed test application built with FastAPI & Vanilla JavaScript**

![Preview](preview.png)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

[![Last Commit](https://img.shields.io/github/last-commit/Blue-Rangoon/Flask-WPM-Typing-Program?style=for-the-badge&color=f39c12)](https://github.com/Blue-Rangoon/Flask-WPM-Typing-Program/commits/main)
[![Stars](https://img.shields.io/github/stars/Blue-Rangoon/Flask-WPM-Typing-Program?style=for-the-badge&color=9b59b6)](https://github.com/Blue-Rangoon/Flask-WPM-Typing-Program/stargazers)
[![Contributors](https://img.shields.io/github/contributors/Blue-Rangoon/Flask-WPM-Typing-Program?style=for-the-badge&color=1abc9c)](https://github.com/Blue-Rangoon/Flask-WPM-Typing-Program/graphs/contributors)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge&color=success)](https://github.com/Blue-Rangoon/Flask-WPM-Typing-Program)

[🌐 Live Demo](https://wpm-typing-python.vercel.app) • [🚀 Quick Start](#-installation) • [📂 Project Structure](#-project-structure) • [🕹️ How to Use](#-how-to-use) • [🤝 Contributing](#-contributing) • [📜 License](#-license)

</div>

---

## About The Project

A fast and responsive **WPM (Words Per Minute) Typing Test** web app built using Flask, FastAPI, and a static frontend. This project helps users measure their typing speed, accuracy, and consistency in real time with a smooth and minimal interface.

Designed for performance and simplicity, the app delivers instant feedback while maintaining a lightweight backend powered by modern Python frameworks.

Whether you're practicing typing or benchmarking your speed, this tool provides a clean and efficient experience.

> 💡 **Live Demo:** [WPM SpeedType Program](https://flask-wpm-typing-program.vercel.app/)

---

## ⭐ Repository Visitors

<div align="center">

![GitHub Views](https://komarev.com/ghpvc/?username=Blue-Rangoon&repo=Flask-WPM-Typing-Program&style=for-the-badge&color=00cf63&label=Profile+Views)
![GitHub Clones](https://komarev.com/ghpvc/?username=Blue-Rangoon&repo=Flask-WPM-Typing-Program&style=for-the-badge&color=00cf63&label=Repo+Clones&clones=true)

*Thanks for checking it out! If you like the project, consider giving it a ⭐*

</div>

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| ⚡ **Real-time Feedback** | Instant highlighting of correct/incorrect characters |
| 📊 **WPM Tracking** | Live Words Per Minute calculation |
| 🎯 **Accuracy Score** | Track your typing accuracy as a percentage |
| ⏱️ **60-Second Timer** | Race against the clock to improve your speed |
| 🎲 **Random Text** | Fresh typing content fetched from the backend API |
| 🔄 **Easy Restart** | One-click restart with new random text |
| 💻 **Interactive UI** | Smooth, responsive typing experience |
| 📱 **Mobile Friendly** | Works on desktop and mobile devices |

---

## 🧠 Tech Stack

<div align="left">

### Backend
| Python | FastAPI | Uvicorn | Jinja2 |
|:------:|:-------:|:-------:|:------:|
| ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white) | ![Uvicorn](https://img.shields.io/badge/Uvicorn-444444?style=flat&logo=unicorn&logoColor=white) | ![Jinja2](https://img.shields.io/badge/Jinja2-B41717?style=flat&logo=jinja&logoColor=white) |

### Frontend
| HTML5 | CSS3 | JavaScript |
|:-----:|:----:|:----------:|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=000) |

</div>

---

## 📂 Project Structure

```
wpm-typing-test/
│
├── api/
│   └── tutorial.py          # FastAPI backend & text generation
│
├── static/
│   ├── index.js             # Frontend logic (typing detection, scoring)
│   └── index.css            # Styling & animations
│
├── templates/
│   └── index.html           # HTML template
│
├── text.txt                 # Text corpus for random text generation
│
├── requirements.txt         # Python dependencies
├── vercel.json              # Vercel deployment configuration
├── preview.png              # App preview screenshot
├── LICENSE                  # MIT License
└── README.md                # This file
```

---

## ⚡ Installation

### Prerequisites

- **Python 3.11+** installed
- **Git** installed
- A modern web browser

### Step-by-Step Setup

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Blue-Rangoon/wpm-typing-test.git
cd wpm-typing-test
```

#### 2️⃣ Create Virtual Environment (Recommended)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

#### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

#### 4️⃣ Run the Server

```bash
uvicorn api.tutorial:app --reload
```

#### 5️⃣ Open in Browser

Navigate to: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

## 🕹️ How to Use

1. **Start Typing** — Begin typing the displayed text when ready
2. **Watch Real-time Feedback** — Green for correct, red for incorrect
3. **Track Your Stats** — See WPM and accuracy update as you type
4. **Complete the Test** — Timer runs for 60 seconds
5. **Restart** — Click "New Text" to try again with fresh content

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Restart / New Text |
| `Escape` | Reset current test |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Render the main typing test page |
| `GET` | `/get-text` | Returns a random text for typing |

### Example API Response

```json
{
  "text": "Practice makes progress."
}
```

---

## 🌐 Deploy to Vercel

Deploy your own instance in just a few steps:

1. **Fork** this repository
2. Go to [Vercel](https://vercel.com)
3. Import your forked repository
4. Vercel auto-detects FastAPI — deploy!

**Live Demo:** [https://wpm-typing-python.vercel.app](https://wpm-typing-python.vercel.app)

---

## 🏗️ Upcoming Features

- [ ] Multiple time options (30s, 60s, 120s)
- [ ] Different text categories (programming, quotes, paragraphs)
- [ ] Historical results tracking
- [ ] Leaderboard
- [ ] Custom text input

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. **Commit** your changes (`git commit -m 'Add amazing feature'`)
5. **Push** to the branch (`git push origin feature/amazing-feature`)
6. Open a **Pull Request**

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Improve documentation
- ⚡ Optimize code
- 🎨 Enhance UI/UX

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by Saad Ali Rizvi**

[![GitHub followers](https://img.shields.io/github/followers/Blue-Rangoon?style=social)](https://github.com/Blue-Rangoon)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Follow-0A66C2?style=social&logo=linkedin)](https://linkedin.com/in/saad-ali-rizvi/)
</div>

