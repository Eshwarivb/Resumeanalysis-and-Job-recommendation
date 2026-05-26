const BASE_URL = "http://127.0.0.1:5000/api";

/* ---------------- SIGNUP ---------------- */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Signup successful! Please log in.");
        window.location.href = "login.html";
      } else {
        alert(data.error || "Signup failed. Try again!");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Try again!");
    }
  });
}

/* ---------------- LOGIN ---------------- */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        alert("✅ Login successful!");
        window.location.href = "dashboard.html";
      } else {
        alert(data.error || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Try again!");
    }
  });
}

/* ---------------- DASHBOARD ACCESS CHECK ---------------- */
if (window.location.pathname.includes("dashboard.html")) {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("⚠️ Please login first!");
    window.location.href = "login.html";
  }
}

/* ---------------- AUTO REDIRECT (if already logged in) ---------------- */
if (
  window.location.pathname.includes("login.html") ||
  window.location.pathname.includes("signup.html")
) {
  const token = localStorage.getItem("token");
  if (token) window.location.href = "dashboard.html";
}

/* ---------------- LOGOUT ---------------- */
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    alert("👋 Logged out successfully!");
    window.location.href = "login.html";
  });
}

/* ---------------- RESUME ANALYSIS ---------------- */
const resumeForm = document.getElementById("resumeForm");
if (resumeForm) {
  resumeForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("resumeFile");
    const location = document.getElementById("location").value;

    if (!fileInput.files.length) {
      alert("Please upload a resume file!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", fileInput.files[0]);
    formData.append("location", location);

    try {
      const res = await fetch(`${BASE_URL}/resume/analyze`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      displayResults(data);
    } catch (error) {
      console.error("Resume Analysis Error:", error);
      alert("Something went wrong during resume analysis!");
    }
  });
}

/* ---------------- DISPLAY RESULTS ---------------- */
function displayResults(data) {
  // Show results section if hidden
  const resultsSection = document.getElementById("results");
  if (resultsSection) resultsSection.style.display = "block";

  /*
  // Update skills
  const skillsEl = document.getElementById("skillsList");
  if (skillsEl)
    skillsEl.innerHTML =
      data.skills?.map((s) => `<li>${s}</li>`).join("") ||
      "<li>No skills found</li>";

  */

  // Update feedback
  const feedbackEl = document.getElementById("feedbackList");
  if (feedbackEl)
    feedbackEl.innerHTML =
      data.feedback?.map((f) => `<li>${f}</li>`).join("") ||
      "<li>No feedback available</li>";

  // Update job recommendations
  const jobEl = document.getElementById("jobResults");
  if (jobEl) {
    jobEl.innerHTML = "<h3>Recommended Jobs:</h3>";
    if (data.jobs && data.jobs.length > 0) {
      data.jobs.forEach((j) => {
        const div = document.createElement("div");
        div.className = "job-card";
        div.innerHTML = `
          <h3>${j.title}</h3>
          <p><strong>${j.company}</strong> - ${j.location}</p>
          <p>${j.description}</p>
          <a href="${j.url}" target="_blank" class="apply-btn">Apply Now</a>
        `;
        jobEl.appendChild(div);
      });
    } else {
      jobEl.innerHTML += "<p>No job recommendations found.</p>";
    }
  }
}
