# Resume Analyzer & Job Recommendation System

An AI-powered full-stack web application that analyzes resumes, extracts skills, evaluates candidate profiles, and recommends relevant job opportunities based on skills, experience level, and preferred location.

---

## 🚀 Features

* 🔐 User Authentication (JWT-based Login & Signup)
* 📄 Resume Upload & Analysis
* 🤖 AI-Based Job Recommendation System
* 🧠 Skill Extraction using NLP
* 📍 Location-Based Job Search
* 📊 Interactive Dashboard
* 💡 Resume Feedback & Suggestions
* 🔍 Fuzzy Skill Matching
* ☁️ MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask
* MongoDB
* JWT Authentication
* spaCy NLP
* PDFMiner
* scikit-learn

### APIs & Libraries

* RapidAPI JSearch API
* Flask-CORS
* python-docx
* pandas

---

## 📁 Project Structure

```bash
Resumeanalysis-and-Job-recommendation/
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   │
│   ├── models/
│   │   └── user_model.py
│   │
│   ├── routes/
│   │   ├── auth_routes.py
│   │   └── resume_routes.py
│   │
│   ├── utils/
│   │   ├── auth_helper.py
│   │   ├── resume_parser.py
│   │   ├── feedback_generator.py
│   │   ├── job_recommender.py
│   │   ├── canonical_map.py
│   │   ├── fuzzy_skills.txt
│   │   └── skills.jsonl
│   │
│   └── uploads/
│
└── frontend/
    ├── index.html
    ├── login.html
    ├── signup.html
    ├── dashboard.html
    ├── css/
    └── js/
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Eshwarivb/Resumeanalysis-and-Job-recommendation.git
cd Resumeanalysis-and-Job-recommendation
```

---

### 2️⃣ Create Virtual Environment

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### macOS/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4️⃣ Download spaCy Model

```bash
python -m spacy download en_core_web_sm
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
RAPIDAPI_KEY=your_rapidapi_key
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend
python app.py
```

Backend runs on:

```bash
http://localhost:5000
```

---

### Start Frontend

```bash
cd frontend
python -m http.server 8000
```

Frontend runs on:

```bash
http://localhost:8000
```

---

## 📡 API Endpoints

### Authentication

#### Signup

```http
POST /api/auth/signup
```

#### Login

```http
POST /api/auth/login
```

---

### Resume Analysis

#### Analyze Resume

```http
POST /api/resume/analyze
```

Returns:

* Extracted Skills
* Experience Level
* Resume Feedback
* Job Recommendations

---

## 🔐 Security Features

* JWT Authentication
* Password Hashing
* Environment Variable Protection
* Secure File Upload Validation

---

## 📈 Future Enhancements

* Resume ATS Score Prediction
* AI Interview Preparation
* LinkedIn Integration
* Resume Builder
* Admin Dashboard
* Real-Time Job Tracking

---

---
## 📌 Repository Link

https://github.com/Eshwarivb/Resumeanalysis-and-Job-recommendation
