

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const summary = document.getElementById("summary");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Instruction to Do not reload the page

    if (validateForm()) {
        displaySummary();
        form.reset(); // Instruction to Reset the form automatically after success
    }
});

// FUNCTION SHOW ERROR
function showError(elementId, message) {
    // Instruction to Show an error message in red
    const element = document.getElementById(elementId);
    element.innerText = message;
    element.style.color = "red";
}

// FUNCTION CLEAR ERROR
function showSuccess(elementId) {
    const element = document.getElementById(elementId);
    element.innerText = "";
}

// FORM VALIDATION
function validateForm() {

    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;
    const religion = document.getElementById("religion").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const sources = document.querySelectorAll('input[name="source"]:checked');

    let isValid = true;

    // Instruction to Stop the form submission
    if (fullName === "") {
        showError("fullnamefeedback", "Full Name cannot be empty");
        isValid = false;
    } else {
        showSuccess("fullnamefeedback");
    }

    if (dob === "") {
        showError("dobfeedback", "Date of Birth must be selected");
        isValid = false;
    } else {
        showSuccess("dobfeedback");
    }

    if (!gender) {
        showError("genderfeedback", "Gender must be selected");
        isValid = false;
    } else {
        showSuccess("genderfeedback");
    }

    if (religion === "") {
        showError("religionfeedback", "Religion must be selected");
        isValid = false;
    } else {
        showSuccess("religionfeedback");
    }

    if (sources.length === 0) {
        showError("sourcefeedback", "At least one checkbox must be selected");
        isValid = false;
    } else {
        showSuccess("sourcefeedback");
    }

    if (isValid) {
        // Instruction to Show a success message in green
        message.style.color = "green";
        message.textContent = "Registration Successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Please fill the form above";
        summary.innerHTML = "";
    }

    return isValid;
}

// DISPLAY SUMMARY
// Instruction to Display the registration summary below the form
function displaySummary() {

    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;
    const religion = document.getElementById("religion").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const sources = document.querySelectorAll('input[name="source"]:checked');

    let sourceList = "";

    sources.forEach(function(source) {
        sourceList += `<li>${source.value}</li>`;
    });

    summary.innerHTML = 
    `
        <div style="border:1px solid black; padding:10px; margin-top:10px; background:#f5f5f5;color:blue;">
            <h3>=== REGISTRATION DATA ===</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Religion:</strong> ${religion}</p>
            <p><strong>Information Source:</strong></p>
            <ul>${sourceList}</ul>
        </div>
    `;
}