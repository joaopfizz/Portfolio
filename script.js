// Initialize EmailJS with your User ID (replace with your actual User ID)
(function() {
  emailjs.init("IpPZz5SnplP6HPLZR"); // Replace with your actual EmailJS User ID
})();

// Handle form submission for sending email
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Send the form data using EmailJS
  emailjs.sendForm("service_w4qnps6", "YOUR_TEMPLATE_ID", this) // Replace "YOUR_TEMPLATE_ID" with your actual Template ID
    .then(function(response) {
      alert("Message sent successfully!"); // Success message
      console.log(response);
      // Optionally reset the form after successful submission
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message. Please try again."); // Error message
      console.log(error); // Log the error (if any)
    });
});

// Modal Preview Handling
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

// Theme Toggle
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
