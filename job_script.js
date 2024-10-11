document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const type = document.getElementById("type").value;
    const department = document.getElementById("department").value;
    const country = document.getElementById("country").value;
    const description = document.getElementById("description").value;
    const openingDate = document.getElementById("openingDate").value;
    
    // Validate fields are not blank
    if (!title || !type || !department || !country || !description || !openingDate) {
        alert("Please fill all required fields.");
        return;
    }
    
    // Validate the opening date is not greater than the current date
    const currentDate = new Date().toISOString().split("T")[0];
    if (openingDate > currentDate) {
        alert("Opening date cannot be greater than the current date.");
        return;
    }

    // Simulate a successful submission
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.textContent = `Job "${title}" has been successfully created!`;
    resultMessage.classList.remove("hidden");

    // Clear the form
    document.getElementById("jobForm").reset();
});
