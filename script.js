function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidMobileNumber(mobileNumber) {
    var mobileNumberPattern = /^\d{10}$/;
    return mobileNumberPattern.test(mobileNumber);
}

function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;
    var otherChecked = document.getElementById("other").checked;
    var firstTimeChecked = document.getElementById("firstTimeYes").checked || document.getElementById("firstTimeNo").checked;
    var suggestChecked = document.getElementById("suggestYes").checked || document.getElementById("suggestNo").checked;
    var satisfactionChecked = document.getElementById("satisfied").checked || document.getElementById("unsatisfied").checked || document.getElementById("partial").checked;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var suggestions = document.getElementById("suggestions").value;

    // Validation
    if (!firstName || !lastName || !dob || !country || (!maleChecked && !femaleChecked && !otherChecked) || !firstTimeChecked || !suggestChecked || 
        !satisfactionChecked || !email || !mobileNumber) {
        alert("Please fill out all the fields.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email address. Please enter a valid email.");
        return;
    }

    if (!isValidMobileNumber(mobileNumber)) {
        alert("Invalid mobile number. Please enter a 10-digit mobile number.");
        return;
    }

    var gender = maleChecked ? "Male" : (femaleChecked ? "Female" : "Other");
    var firstTime = document.getElementById("firstTimeYes").checked ? "Yes" : "No";
    var suggest = document.getElementById("suggestYes").checked ? "Yes" : "No";
    var satisfaction = document.getElementById("satisfied").checked ? "Satisfied" : (document.getElementById("unsatisfied").checked ? "Unsatisfied" : "Partially Satisfied");

    var popupMessage = `First time User? ${firstTime}\nSuggest to friends and colleagues? ${suggest}\nHow satisfied are you? ${satisfaction}\nSuggestions: ${suggestions}
                        \nUser: ${firstName} ${lastName}\nDate of Birth: ${dob} | Gender: ${gender} | Country: ${country}\nContact: ${email} | ${mobileNumber}`;
    alert(popupMessage);
    document.getElementById("surveyForm").reset();
}
