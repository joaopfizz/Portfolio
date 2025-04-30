document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });

document.querySelectorAll(".preview-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const modal = btn.nextElementSibling;
      modal.style.display = "flex";
    });
  });
  
  document.querySelectorAll(".close-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });
  
  const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.classList.remove("dark-theme", "light-theme");
  body.classList.add(`${savedTheme}-theme`);
  toggleBtn.textContent = savedTheme === "light" ? "🌞" : "🌙";
});

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-theme");
  body.classList.toggle("dark-theme", !isDark);
  body.classList.toggle("light-theme", isDark);
  localStorage.setItem("theme", isDark ? "light" : "dark");
  toggleBtn.textContent = isDark ? "🌞" : "🌙";
});

  