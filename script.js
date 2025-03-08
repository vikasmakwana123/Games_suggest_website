document.addEventListener('DOMContentLoaded', () => {
  const videoContainer = document.getElementById('video-container');
  const video = document.getElementById('intro-video');
  const mainContent = document.getElementById('main-content');
  const skipButton = document.getElementById('skip-button');

  // Make sure video is visible and plays
  video.style.display = 'block';
  video.play().catch(function (error) {
    console.log("Video play failed:", error);
    showMainContent(); // Fallback to main content if video fails
  });

  function showMainContent() {
    videoContainer.style.display = 'none';
    mainContent.style.display = 'block';
  }

  // When video ends, show the main content
  video.addEventListener('ended', showMainContent);

  // Skip button functionality
  skipButton.addEventListener('click', showMainContent);
});

// Sample data for popular games in the last week
const popularGames = [
  { imageUrl: "https://th.bing.com/th/id/OIP.MBm7UYm9qS8hJJ9uJtGSpgHaHa?rs=1&pid=ImgDetMain", name: "Minecraft", players: 500000, genre: "Sandbox" },
  { imageUrl: "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb", name: "Fortnite", players: 450000, genre: "Battle Royale" },
  { imageUrl: "https://th.bing.com/th/id/OIP.P6wX6LtF2B7JssJGVXWAdQHaEK?w=304&h=180&c=7&r=0&o=5&pid=1.7", name: "Among Us", players: 350000, genre: "Social Deduction" },
  { imageUrl: "https://th.bing.com/th/id/OIP.Qda3YyHVkxpBmA8bglFQWwHaEc?rs=1&pid=ImgDetMain", name: "League of Legends", players: 600000, genre: "MOBA" },
  { imageUrl: "https://wallpapers.com/images/hd/call-of-duty-warzone-4k-poster-jij79ziyns3oegfu.jpg", name: "Call of Duty: Warzone", players: 400000, genre: "Battle Royale" },
  { imageUrl: "https://global-img.gamergen.com/valorant-29-05-2020-key-art-1_0900953381.jpg", name: "Valorant", players: 550000, genre: "Tactical Shooter" },
];

// Function to display the games
function displayGames() {
  const gamesList = document.getElementById("games-list");
  gamesList.innerHTML = ""; // Clear existing list

  const gameUrls = {
    "Minecraft": "https://minecraft.net",
    "Fortnite": "https://fortnite.com",
    "Among Us": "https://innersloth.com/games/among-us",
    "League of Legends": "https://leagueoflegends.com",
    "Call of Duty: Warzone": "https://www.callofduty.com/warzone",
    "Valorant": "https://playvalorant.com"
  };

  popularGames.forEach(game => {
    const gameItem = document.createElement("li");

    // Create image element and set its height and width
    const image = document.createElement("img");
    image.src = game.imageUrl;
    image.alt = game.name;
    image.style.width = "100px";
    image.style.height = "100px";
    image.style.borderRadius = '15px';

    // Add the image and game details to the list item
    gameItem.innerHTML = `
      ${image.outerHTML}<br>
      <strong>${game.name}</strong><br>
      Players: ${game.players.toLocaleString()}<br>
      Genre: ${game.genre}
    `;

    // Add click event listener
    gameItem.style.cursor = 'pointer';
    gameItem.addEventListener('click', () => {
      window.open(gameUrls[game.name], '_blank');
    });

    gamesList.appendChild(gameItem);
  });
}

// Call the display function when the page loads
window.onload = displayGames;

// Skip button functionality
document.getElementById('skip-button').addEventListener('click', function () {
  var video = document.getElementById('intro-video');
  var mainContent = document.getElementById('main-content');
  video.style.display = 'none';  // Hide the video
  mainContent.style.display = 'block';  // Show the main content
  video.pause(); // Pause the video
});