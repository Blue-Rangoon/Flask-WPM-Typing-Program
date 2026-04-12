[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge&color=success)](https://github.com/Blue-Rangoon/wpm-typing-test)

<div align="center">

![WPM Typing Test](preview.png)

# ⌨️ WPM Typing Test

**A full-stack typing speed test application built with FastAPI & Vanilla JavaScript**

[🌐 Live Demo](https://wpm-typing-python.vercel.app) • [🚀 Quick Start](#-installation) • [📂 Project Structure](#-project-structure) • [🤝 Contributing](#-contributing) • [📜 License](#-license)

</div>

---

## 🚀 Features

- ⚡ Real-time typing feedback (correct/incorrect highlighting)
- 📊 WPM (Words Per Minute) calculation
- 🎯 Accuracy tracking (percentage)
- ⏱️ 60-second countdown timer
- 🎲 Random text generation from backend API
- 🔄 Restart / New Text buttons
- 💻 Fully interactive UI
- 📱 Responsive design

---

## 🧠 Tech Stack

<div>

### Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white) ![Uvicorn](https://img.shields.io/badge/Uvicorn-444444?style=flat&logo=unicorn&logoColor=white) ![Jinja2](https://img.shields.io/badge/Jinja2-B41717?style=flat&logo=jinja&logoColor=white)

### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=000)

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
│   ├── index.js             # Frontend logic
│   └── index.css            # Styling
│
├── templates/
│   └── index.html           # HTML template
│
├── text.txt                # Text corpus for typing tests
│
├── requirements.txt        # Python dependencies
├── vercel.json             # Vercel deployment config
├── preview.png             # App preview screenshot
└── README.md               # This file
```

---

## ⚡ Installation

### Prerequisites

- **Python 3.11+** installed
- **Git** installed
- A web browser

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

1. Fork this repository
2. Go to [Vercel](https://vercel.com)
3. Import your forked repository
4. Vercel auto-detects FastAPI - deploy!

**Live Demo:** [https://wpm-typing-python.vercel.app](https://wpm-typing-python.vercel.app)

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

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [Saad Ali Rizvi](https://github.com/Blue-Rangoon)**

[![GitHub Stars](https://img.shields.io/github/stars/Blue-Rangoon/wpm-typing-test?style=social)](https://github.com/Blue-Rangoon/wpm-typing-test)
[![GitHub Forks](https://img.shields.io/github/forks/Blue-Rangoon/wpm-typing-test?style=social)](https://github.com/Blue-Rangoon/wpm-typing-test)

</div>
