const destinations = [
    {
      name: "Bali",
      image: "Images&Videos/Location_Bali_TanahLotTemple.jpg",
      description: "An iconic sea temple perched on a rocky outcrop, offering breathtaking sunset views.",
      region: "Asia",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Tanah Lot Temple",
    },
    {
      name: "Switzerland",
      image: "Images&Videos/Location_Switzerland_Jungfraujoch.jpg",
      description: "Known as the \"Top of Europe\", it's a high-altitude wonderland with glaciers and panoramic views.",
      region: "Europe",
      weather: "Cold",
      scenery: "Mountain",
      attraction: "Jungfraujoch",
    },
    {
      name: "Australia",
      image: "Images&Videos/Location_Australia_GreatBarrierReef.jpg",
      description: "The world's largest coral reef system, teeming with marine life, perfect for snorkeling and diving.",
      region: "Oceania",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Great Barrier Reef",
    },
    {
      name: "Iceland",
      image: "Images&Videos/Location_Iceland_BlueLagoon.jpg",
      description: "A geothermal spa with milky-blue waters surrounded by lava fields, offering relaxation and healing.",
      region: "Europe",
      weather: "Cold",
      scenery: "Scenic",
      attraction: "Blue Lagoon",
    },
    {
      name: "Hawaii",
      image: "Images&Videos/Location_Hawaii_WaikikiBeach.jpg",
      description: "A world-famous beach known for its gentle waves and vibrant atmosphere in Honolulu.",
      region: "North America",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Waikiki Beach",
    },
    {
      name: "Norway",
      image: "Images&Videos/Location_Norway_AuroraBorealis.jpg",
      description: "The Northern Lights dance across the Arctic sky, enchanting spectators with their vibrant colors.",
      region: "Europe",
      weather: "Cold",
      scenery: "Scenic",
      attraction: "Aurora Borealis",
    },
    {
      name: "Maldives",
      image: "Images&Videos/Location_Maldives_MaleAtoll.jpg",
      description: "A tropical paradise of overwater bungalows, crystal-clear waters, and colorful coral reefs.",
      region: "Asia",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Malé Atoll",
    },
    {
      name: "Canada",
      image: "Images&Videos/Location_Canada_MoraineLake.jpg",
      description: "A stunning glacial-fed lake with turquoise waters and the majestic Valley of the Ten Peaks.",
      region: "North America",
      weather: "Cold",
      scenery: "Scenic",
      attraction: "Moraine Lake",
    },
    {
      name: "Thailand",
      image: "Images&Videos/Location_Thailand_PhiPhiIsland.jpg",
      description: "A group of idyllic islands with limestone cliffs, clear waters, and vibrant marine life.",
      region: "Asia",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Phi Phi Islands",
    },
    {
      name: "New Zealand",
      image: "Images&Videos/Location_NewZealand_MilfordSound.jpg",
      description: "A breathtaking fjord with cascading waterfalls, lush rainforests, and abundant wildlife.",
      region: "Oceania",
      weather: "Warm",
      scenery: "Scenic",
      attraction: "Milford Sound",
    },
    {
      name: "Alaska",
      image: "Images&Videos/Location_Alaska_DenaliNationalPark.jpg",
      description: "Home to Mount Denali, North America's tallest peak, and diverse wildlife, including grizzlies and moose.",
      region: "North America",
      weather: "Cold",
      scenery: "Scenic",
      attraction: "Denali National Park",
    },
    {
      name: "Costa Rica",
      image: "Images&Videos/Location_CostaRica_MonteverdeCloudForest.jpg",
      description: "An enchanting cloud forest teeming with biodiversity, rare species, and suspended bridges.",
      region: "Central America",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Monteverde Cloud Forest",
    },
    {
      name: "Sweden",
      image: "Images&Videos/Location_Sweden_StockholmArchipelago.jpg",
      description: "A vast collection of islands, offering scenic boat tours, charming villages, and rich maritime history.",
      region: "Europe",
      weather: "Cold",
      scenery: "Scenic",
      attraction: "Stockholm Archipelago",
    },
    {
      name: "Brazil",
      image: "Images&Videos/Location_Brazil_ChristTheRedeemer.jpg",
      description: "The iconic statue of Jesus Christ, standing tall atop Corcovado Mountain, overlooking Rio de Janeiro.",
      region: "South America",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Christ the Redeemer",
    },
    {
      name: "Japan",
      image: "Images&Videos/Location_Japan_Tokyo.jpg",
      description: "A bustling metropolis blending modernity with tradition, featuring vibrant neighborhoods and historic temples.",
      region: "Asia",
      weather: "Warm",
      scenery: "City",
      attraction: "Tokyo",
    },
    {
      name: "Antarctica",
      image: "Images&Videos/Location_Antartica_PenguinColonies.jpg",
      description: "An opportunity to witness adorable penguin colonies in their natural habitat, surrounded by ice and wilderness.",
      region: "Antarctica",
      weather: "Cold",
      scenery: "Scenic",
      attraction: "Penguin Colonies",
    },
    {
      name: "Greece",
      image: "Images&Videos/Location_Greece_Santorini.jpg",
      description: "A captivating island with whitewashed buildings, blue-domed churches, and stunning sunsets over the Aegean Sea.",
      region: "Europe",
      weather: "Warm",
      scenery: "Scenic",
      attraction: "Santorini",
    },
    {
      name: "Mexico",
      image: "Images&Videos/Location_Mexico_ChichenItza.jpg",
      description: "A UNESCO World Heritage Site featuring the ancient Mayan ruins of a significant archaeological city.",
      region: "North America",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Chichen Itza",
    },
    {
      name: "Morocco",
      image: "Images&Videos/Location_Morocco_Marrakech.jpg",
      description: "A vibrant city with bustling souks, stunning palaces, and the iconic Jardin Majorelle.",
      region: "Africa",
      weather: "Warm",
      scenery: "Scenic",
      attraction: "Marrakech",
    },
    {
      name: "Dubai",
      image: "Images&Videos/Location_Dubai_BurjKhalifa.jpg",
      description: "The world's tallest building, offering panoramic views of Dubai's skyline and the surrounding desert.",
      region: "Middle East",
      weather: "Warm",
      scenery: "City",
      attraction: "Burj Khalifa",
    },
    {
      name: "Italy",
      image: "Images&Videos/Location_Italy_Colosseum.jpg",
      description: "A magnificent ancient amphitheater in Rome, symbolizing the grandeur of the Roman Empire.",
      region: "Europe",
      weather: "Warm",
      scenery: "City",
      attraction: "Colosseum",
    },
    {
      name: "Argentina",
      image: "Images&Videos/Location_Argentina_PeritoMorenoGlacier.jpg",
      description: "A stunning glacier in Patagonia, known for its towering ice formations and calving events.",
      region: "South America",
      weather: "Cold",
      scenery: "Mountain",
      attraction: "Perito Moreno Glacier",
    },
    {
      name: "Kenya",
      image: "Images&Videos/Location_Kenya_MaasaiMaraNationalReserve.jpg",
      description: "A wildlife-rich savannah, famous for the Great Migration and an incredible diversity of animals.",
      region: "Africa",
      weather: "Warm",
      scenery: "Scenic",
      attraction: "Maasai Mara National Reserve",
    },
    {
      name: "China",
      image: "Images&Videos/Location_China_ForbiddenCity.jpg",
      description: "A majestic palace complex in Beijing, once home to emperors, showcasing Chinese imperial architecture.",
      region: "Asia",
      weather: "Warm",
      scenery: "City",
      attraction: "Forbidden City",
    },
    {
      name: "France",
      image: "Images&Videos/Location_France_EiffelTower.jpg",
      description: "The iconic iron tower in Paris, a symbol of romance and a must-visit landmark.",
      region: "Europe",
      weather: "Warm",
      scenery: "City",
      attraction: "Eiffel Tower",
    },
    {
      name: "Canada",
      image: "Images&Videos/Location_Canada_Vancouver.jpg",
      description: "A vibrant coastal city surrounded by mountains, offering a blend of natural beauty and urban life.",
      region: "North America",
      weather: "Warm",
      scenery: "Scenic",
      attraction: "Vancouver",
    },
    {
      name: "Egypt",
      image: "Images&Videos/Location_Egypt_PyramidsOfGiza.jpg",
      description: "Ancient pyramids and the Sphinx, preserving the fascinating history of ancient Egypt.",
      region: "Africa",
      weather: "Warm",
      scenery: "Scenic",
      attraction: "Pyramids of Giza",
    },
    {
      name: "New York",
      image: "Images&Videos/Location_NewYork_StatueOFLiberty.jpg",
      description: "A symbol of freedom and democracy, located on Liberty Island in New York Harbor.",
      region: "North America",
      weather: "Cold",
      scenery: "City",
      attraction: "Statue of Liberty",
    },
    {
      name: "Malaysia",
      image: "Images&Videos/Location_Malaysia_PetronasTwinTowers.jpg",
      description: "A symbol of freedom and democracy, located on Liberty Island in New York Harbor.",
      region: "Asia",
      weather: "Warm",
      scenery: "Scenic",
      attraction: "Petronas Twin Towers",
    },
    {
      name: "Spain",
      image: "Images&Videos/Location_Spain_Barcelona.jpg",
      description: "A vibrant city known for its unique architecture, sandy beaches, and lively cultural scene.",
      region: "Europe",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Barcelona",
    },
    {
      name: "South Africa",
      image: "Images&Videos/Location_SouthAfrica_CapeTown.jpg",
      description: "A coastal gem nestled beneath the iconic Table Mountain, offering a harmonious blend of stunning beaches, diverse wildlife, and a rich cultural heritage.",
      region: "Africa",
      weather: "Warm",
      scenery: "Beach",
      attraction: "Cape Town",
    },
];
  
const searchForm = document.getElementById('searchForm');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get user input from the form
  const region = document.getElementById('region').value;
  const weather = document.getElementById('weather').value;
  const scenery = document.getElementById('scenery').value;

  // Filter destinations based on user input
  const filteredDestinations = destinations.filter(destination => {
    return (
      (region === '' || destination.region === region) &&
      (weather === '' || destination.weather === weather) &&
      (scenery === '' || destination.scenery === scenery)
    );
  });

  // Clear previous search results
  resultsContainer.innerHTML = '';

  // Display filtered destinations
  filteredDestinations.forEach(destination => {
    const destinationCard = createDestinationCard(destination);
    resultsContainer.appendChild(destinationCard);
  });
});

function createDestinationCard(destination) {
  const card = document.createElement('div');
  card.classList.add('destination-card');

  const image = document.createElement('img');
  image.src = destination.image;
  image.alt = destination.name;
  card.appendChild(image);

  const name = document.createElement('h3');
  name.textContent = destination.name;
  card.appendChild(name);

  const description = document.createElement('p');
  description.textContent = destination.description;
  card.appendChild(description);

  return card;
}
  