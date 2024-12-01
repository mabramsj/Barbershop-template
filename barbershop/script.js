function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

document.getElementById("form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    if (name === "") {
      e.preventDefault();
      alert("Name is required!");
    }
  });
  
