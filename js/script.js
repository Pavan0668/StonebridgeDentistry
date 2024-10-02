document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById("email");
    const emailUnderline = document.querySelector(".email-underline");

    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("error");
        emailUnderline.style.backgroundColor = "red";
    } else {
        emailInput.classList.remove("error");
        emailUnderline.style.backgroundColor = "#003478";
        alert("Form submitted successfully!");
        // You can proceed with form submission logic here
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
