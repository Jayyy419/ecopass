// Form submission
function planTrip(event) {
    event.preventDefault();

    // Get the form values
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;

    // Create an object to store the trip details
    const tripDetails = {
        origin,
        destination,
        departureDate,
        returnDate,
    };

    // Save the trip details in Local Storage
    saveTripDetails(tripDetails);

    // Display the trip details on the page
    displayTripDetails(tripDetails);
    
    // Clear the form fields
    document.getElementById("origin").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("departure-date").value = "";
    document.getElementById("return-date").value = "";

    // Update the header
    updateTripDetailsHeader();
}

// Function to save the trip details in Local Storage
function saveTripDetails(tripDetails) {
    // Check if Local Storage is available
    if (typeof Storage !== "undefined") {

        // Get the existing trip details or initialize an empty array if it's the first time
        let trips = JSON.parse(localStorage.getItem("trips")) || [];

        // Add the new trip to the array
        trips.push(tripDetails);

        // Save the updated array in Local Storage
        localStorage.setItem("trips", JSON.stringify(trips));
  }
}

// Display the trip details on the page
function displayTripDetails(tripDetails) {
    const tripContainer = document.getElementById("trip-container");
    const tripDetailsDiv = document.createElement("div");
    tripDetailsDiv.classList.add("trip-details", "fade-in"); // Add "fade-in" class

    tripDetailsDiv.innerHTML = `
        <h2>Trip Details</h2>
        <p>Origin: ${tripDetails.origin}</p>
        <p>Destination: ${tripDetails.destination}</p>
        <p>Departure Date: ${tripDetails.departureDate}</p>
        <p>Return Date: ${tripDetails.returnDate}</p>
    `;

    tripContainer.appendChild(tripDetailsDiv);
    tripDetailsDiv.addEventListener("animationend", () => {
        tripDetailsDiv.classList.remove("fade-in");
    });
}


// Add event listener to the form submission
const travelForm = document.querySelector("form");
travelForm.addEventListener("submit", planTrip);

// Clear trip details from Local Storage and reset displayed details
function clearTripDetails() {
    // Clear Local Storage
    localStorage.removeItem("trips");
  
    // Clear the displayed trip details
    const tripContainer = document.getElementById("trip-container");
    tripContainer.innerHTML = "";

    // Update the header
    updateTripDetailsHeader();
}

// Update the trip details header based on Local Storage data
function updateTripDetailsHeader() {
    const trips = getSavedTrips();
    const tripDetailsHeader = document.getElementById("trip-details-header");

    // If there are saved trips, show the header and update the displayed details
    if (trips && trips.length > 0) {
        tripDetailsHeader.style.display = "block";
        // Clear existing trip details divisions
        const tripContainer = document.getElementById("trip-container");
        tripContainer.innerHTML = "";
        // Create and append trip details divisions for all trips
        for (const trip of trips) {
            createTripDetailsDivision(trip);
        }
    } else {
        // If there are no saved trips, hide the header
        tripDetailsHeader.style.display = "none";
    }
}

// Get saved trips from Local Storage
function getSavedTrips() {
    if (typeof Storage !== "undefined") {
      const trips = JSON.parse(localStorage.getItem("trips")) || [];
      return trips;
    } else {
      return [];
    }
}
  
// Add event listener to the "Clear Trip Details" button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearTripDetails);

// Function to create and append a new trip details card to the container
function createTripDetailsCard(tripDetails) {
    const tripContainer = document.getElementById("trip-container");

    const tripCard = document.createElement("div");
    tripCard.classList.add("trip-card");

    tripCard.innerHTML = `
        <h2>Trip Details</h2>
        <p>Origin: ${tripDetails.origin}</p>
        <p>Destination: ${tripDetails.destination}</p>
        <p>Departure Date: ${tripDetails.departureDate}</p>
        <p>Return Date: ${tripDetails.returnDate}</p>
    `;

    tripContainer.appendChild(tripCard);
}
