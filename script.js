 // Attach the event listener directly to the button
    // Get the year entered by the user
    let year = document.querySelector(".year").value;

    // Convert input to a number
    let yearNumber = Number(year);

    // Check if the year is between 1960 and 1999
    if (yearNumber >= 1960 && yearNumber <= 1999) {
        // Redirect to the desired webpage
        window.location.href = "rands.html"; // Replace this with your actual URL
    } else {
        // Display an alert for invalid input
        alert("Please enter a year between 1960 and 1999!");
    }
};

// Directly bind the click event to the button
document.querySelector(".button").onclick = handleClick;
