
emailjs.init("user_HO6pThFEFKgSqVUZnMCCR");


const form = document.getElementById("plan-trip-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Previne reîncărcarea paginii

    // Trimite datele formularului prin EmailJS
    emailjs.sendForm("service_8789u5a", "template_ue634ki", form)
        .then(function (response) {
            alert("E-mail was sent. Thank you!");
            console.log("Succes:", response.status, response.text);
            form.reset(); // Resetează formularul după trimitere
        }, function (error) {
            alert("Error sending the message");
            console.error("Error:", error);
        });
});