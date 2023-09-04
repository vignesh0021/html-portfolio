function toggleForm() {
    var form = document.getElementById("contact-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

    document.getElementById("mobileMenuIcon").addEventListener("click", toggleMobileMenu);
    
    function toggleMobileMenu() {
        var menu = document.querySelector(".menu");
        menu.classList.toggle("active");
    }
