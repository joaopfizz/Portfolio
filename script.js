(function() {
  emailjs.init("IpPZz5SnplP6HPLZR"); 
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  emailjs.sendForm("service_w4qnps6", "YOUR_TEMPLATE_ID", this) 
    .then(function(response) {
      alert("Message sent successfully!"); 
      console.log(response);
      
      document.getElementById("contact-form").reset();
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.log(error); 
    });
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


toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-theme");
  body.classList.toggle("dark-theme", !isDark);
  body.classList.toggle("light-theme", isDark);
  localStorage.setItem("theme", isDark ? "light" : "dark");
  toggleBtn.textContent = isDark ? "🌞" : "🌙";
});