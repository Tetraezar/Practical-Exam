

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const summary = document.getElementById("summary");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // VALIDATION
    validateForm();
    function showError(elementId, Message) {
        const Element = document.getElementById(elementId);
        Element.innerText = Message;
        Element.style.color = "red";
    }
    function showSuccess(elementId, Message) {
        const Element = document.getElementById(elementId);
        Element.innerText = Message;
        Element.style.color = "green";
    }
    function validateForm() {
        const fullName = document.getElementById("fullName").value.trim();
        const dob = document.getElementById("dob").value;
        const religion = document.getElementById("religion").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const sources = document.querySelectorAll('input[name="source"]:checked');  

        if (fullName == "") {
            showError("fullnamefeedback", "Full Name cannot be empty");
        } else {
            showSuccess("fullnamefeedback", "");
        }

        if (dob === "") {
            showError("dobfeedback", "Date of Birth must be selected");
        } else {
            showSuccess("dobfeedback", "");
        }

        if (!gender) {
            showError("genderfeedback", "Gender must be selected.");
        } else {
            showSuccess("genderfeedback", "");
        }

        if (religion === "") {
            showError("religionfeedback", "Religion must be selected.");
        } else {
            showSuccess("religionfeedback", "");
        }

        if (sources.length === 0) {
            showError("sourcefeedback", "At least one checkbox must be selected");
        } else {
            showSuccess("sourcefeedback", "");
        }

        if (fullName !== "" && dob !== "" && gender && religion !== "" && sources.length > 0) {
            message.style.color = "green";
            message.textContent = "Registration Successful!";
            return true;
        } 
    }

    // DISPLAY SUMMARY
    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value;
    const religion = document.getElementById("religion").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const sources = document.querySelectorAll('input[name="source"]:checked');
    let sourceList = "";
    sources.forEach(function(source) {
        sourceList += `<li>${source.value}</li>`;
    });

    summary.innerHTML = `
        <div style="border:1px solid black; padding:10px; margin-top:10px;">
            <h3>=== REGISTRATION DATA ===</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender.value}</p>
            <p><strong>Religion:</strong> ${religion}</p>
            <p><strong>Information Source:</strong></p>
            <ul>${sourceList}</ul>
        </div>
    `;

    // Bonus: Reset form
    document.getElementById("registrationForm").reset();
});