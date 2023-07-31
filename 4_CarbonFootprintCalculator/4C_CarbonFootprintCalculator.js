// Event listeners
document.getElementById("yesBtn").addEventListener("click", showUtilityCalculator);
document.getElementById("noBtn").addEventListener("click", showDefaultMessage);
document.getElementById("utilityForm").addEventListener("submit", calculateUtilityCO2);
document.getElementById("commuteForm").addEventListener("submit", calculateCommuteCO2);
document.getElementById("viewCarbonFootprintBtn").addEventListener("click", showCarbonFootprintSummary);

// Show the utility calculator
function showUtilityCalculator() {
    document.getElementById("utilityCalculator").style.display = "block";
    document.getElementById("defaultMessage").style.display = "none";
}

// Show the default message
function showDefaultMessage() {
    document.getElementById("utilityCalculator").style.display = "none";
    document.getElementById("defaultMessage").style.display = "block";
}

const emissionFactors = {
    electricity: 0.20,
    gas: 0.40,
    water: 0.3,
};

// Calclate CO2 emissions for Utility
function calculateUtilityCO2(event) {
  event.preventDefault();

  // Get user inputs for each utility
  const electricityValue = parseFloat(document.getElementById("electricity").value);
  const gasValue = parseFloat(document.getElementById("gas").value);
  const waterValue = parseFloat(document.getElementById("water").value);
  const householdSize = parseInt(document.getElementById("household").value);

  // Tariff rates (in cents/kWh for electricity and gas, in dollars/m³ for water)
  const tariffRates = {
      electricity: 0.20,
      gas: 0.40,
      water: 1.50,
  };

  // Calculate energy consumption in kWh equivalent for electricity and gas
  const electricityConsumption = electricityValue / (tariffRates.electricity / 100);
  const gasConsumption = gasValue / (tariffRates.gas / 100);

  // Calculate energy consumption in kWh equivalent for water
  const waterConsumption = waterValue / tariffRates.water;

  // Calculate CO2 emissions for each utility
  const electricityCO2 = electricityConsumption * emissionFactors.electricity;
  const gasCO2 = gasConsumption * emissionFactors.gas;
  const waterCO2 = waterConsumption * emissionFactors.water;

  // Calculate total CO2 emissions for utilities
  const totalUtilityCO2 = electricityCO2 + gasCO2 + waterCO2;

  // Calculate CO2 emissions per household member
  const perCapitaUtilityCO2 = totalUtilityCO2 / householdSize;

  sessionStorage.setItem("perCapitaUtilityCO2", perCapitaUtilityCO2);

  // Display the results
  const utilityResultDiv = document.getElementById("utilityResult");
  utilityResultDiv.innerHTML = `
    <p>Total CO2 emissions from Electricity: ${electricityCO2.toFixed(2)} kg</p>
    <p>Total CO2 emissions from Gas: ${gasCO2.toFixed(2)} kg</p>
    <p>Total CO2 emissions from Water: ${waterCO2.toFixed(2)} kg</p>
    <p>Total CO2 emissions for Utilities: ${totalUtilityCO2.toFixed(2)} kg</p>
    <p>Per Capita CO2 emissions for Utilities: ${perCapitaUtilityCO2.toFixed(2)} kg</p>
  `;

  utilityResultDiv.style.display = "block";
}

// Calculate CO2 emissions for Commute
function calculateCommuteCO2(event) {
    event.preventDefault();

    const mrtLrtMinutes = document.getElementById("mrtLrt").value || 0;
    const busMinutes = document.getElementById("bus").value || 0;
    const taxiMinutes = document.getElementById("taxi").value || 0;
    const carMinutes = document.getElementById("car").value || 0;
    const motorcycleMinutes = document.getElementById("motorcycle").value || 0;
    const carType = document.getElementById("carType").value;

    // CO2 emission values for each mode of transport (in kg CO2 per 1 minute)
    const co2Values = {
      mrtLrt: 0.3,
      bus: 1.2,
      taxi: 3.4,
      smallCar: 3.4,
      bigCar: 4.9,
      motorcycle: 3.0,
    };

    // Calculate total CO2 emissions
    let totalCO2 =
      mrtLrtMinutes * co2Values.mrtLrt +
      busMinutes * co2Values.bus +
      taxiMinutes * co2Values.taxi +
      motorcycleMinutes * co2Values.motorcycle;

    // Check if the user provided car minutes and a valid car type selection
    if (carMinutes > 0 && (carType === "smallCar" || carType === "bigCar")) {
      totalCO2 += carMinutes * co2Values[carType];
    }

    sessionStorage.setItem("commuteCO2", totalCO2);

    // Display the result for commute
    const commuteResultDiv = document.getElementById("commuteResult");
    commuteResultDiv.innerHTML = `<p>Total CO2 emissions: ${totalCO2.toFixed(1)} kg</p>`;
}

function showCarbonFootprintSummary() {
    // Get the stored utility CO2 emissions and commute CO2 emissions from session storage
    const utilityCO2 = parseFloat(sessionStorage.getItem("perCapitaUtilityCO2"));
    const commuteCO2 = parseFloat(sessionStorage.getItem("commuteCO2"));

    // Calculate the total CO2 emissions for everything
    const totalCO2 = utilityCO2 + commuteCO2;

    // Display the carbon footprint summary
    const carbonFootprintSummaryDiv = document.getElementById("carbonFootprintSummary");
    carbonFootprintSummaryDiv.innerHTML = `
      <h2>Carbon Footprint Summary</h2>
      <p>Total CO2 emissions from Utilities: ${utilityCO2.toFixed(2)} kg</p>
      <p>Total CO2 emissions from Commute: ${commuteCO2.toFixed(2)} kg</p>
      <p>Total CO2 emissions for everything: ${totalCO2.toFixed(2)} kg</p>
    `;
    carbonFootprintSummaryDiv.style.display = "block";
}

document.getElementById("car").addEventListener("input", function () {
    const car = document.getElementById("car").value;
    const carTypeSection = document.getElementById("carTypeSection");
    if (car > 0) {
      carTypeSection.style.display = "block";
    } else {
      carTypeSection.style.display = "none";
    }
});

function showUtilitiesPage() {
    document.getElementById('utilities').style.display = 'block';
    document.getElementById('commute').style.display = 'none';
    document.getElementById('final').style.display = 'none';
}

function showCommutePage() {
    document.getElementById('utilities').style.display = 'none';
    document.getElementById('commute').style.display = 'block';
    document.getElementById('final').style.display = 'none';
}

function showFinalPage() {
    document.getElementById('utilities').style.display = 'none';
    document.getElementById('commute').style.display = 'none';
    document.getElementById('finalPage').style.display = 'block';
    document.getElementById("viewCarbonFootprintBtn").style.display = "block";
    document.getElementById("showCommutePageBtn").style.display = "block";
    document.getElementById("carbonFootprintSummary").style.display = "none";

    const carbonFootprintSummaryDiv = document.getElementById("carbonFootprintSummary");
    if (carbonFootprintSummaryDiv.style.display !== "none") {
      carbonFootprintSummaryDiv.style.display = "none";
    }
}
