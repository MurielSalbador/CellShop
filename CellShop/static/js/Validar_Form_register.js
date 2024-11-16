const fieldName = document.getElementById("name");
const fieldEmail = document.getElementById("email");
const fieldPassword = document.getElementById("password");
const fieldConfirmPassword = document.getElementById("confirm_password");

function validateField(e, message, condition) {
    const target = e.target;
    const errorDiv = target.nextElementSibling;

    if (condition) {
        errorDiv.textContent = message;
        errorDiv.classList.add("text-red-500");
    } else {
        errorDiv.textContent = "";
        errorDiv.classList.remove("text-red-500");
    }
}

function validateName(e) {
    const value = e.target.value.trim();
    validateField(
        e,
        "El nombre debe tener al menos 3 caracteres",
        value.length < 3
    );
}

function validateEmail(e) {
    const value = e.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(
        e,
        "Formato de email no válido",
        !emailRegex.test(value)
    );
}

function validatePassword(e) {
    const value = e.target.value.trim();
    validateField(
        e,
        "La contraseña debe tener al menos 6 caracteres",
        value.length < 6
    );
}

function validateConfirmPassword(e) {
    const value = e.target.value.trim();
    const passwordValue = fieldPassword.value.trim();
    validateField(
        e,
        "Las contraseñas no coinciden",
        value !== passwordValue
    );
}

fieldName?.addEventListener("blur", validateName);
fieldEmail?.addEventListener("blur", validateEmail);
fieldPassword?.addEventListener("blur", validatePassword);
fieldConfirmPassword?.addEventListener("blur", validateConfirmPassword);
