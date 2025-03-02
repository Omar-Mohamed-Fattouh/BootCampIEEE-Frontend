function showSection(sectionId) {
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  showSection("hero");
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const toggleButton = document.getElementById("toggle-sidebar");
  sidebar.classList.toggle("collapsed");
  mainContent.classList.toggle("expanded");
  toggleButton.classList.toggle("collapsed");
}
