// Listen for clicks on the button
document.getElementById("get-random-game-button").addEventListener("click", function() {
  // Get a random game on the Roblox platform
  getRandomGame();
});

// Get a random game on the Roblox platform
function getRandomGame() {
  // Generate a random 9-10 digit number
  var gameId = Math.floor(100000000 + Math.random() * 900000000);

  // Open the game in the current tab
  browser.tabs.update({url: 'https://www.roblox.com/games/' + gameId});
}