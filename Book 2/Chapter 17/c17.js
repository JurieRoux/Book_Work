// Array of weekdays
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Array of weather conditions
let weather = ["Sunny", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

// Maximum and minimum temperature values
let maxTemp = 100;
let minTemp = 0;

// Call the function to generate weather forecast
generateWeather();

// Function to generate weather forecast for each day
function generateWeather() {
  // Loop through each day in the days array
  for (let i = 0; i < days.length; i++) {
    // Get a random weather condition for the day
    let weatherToday = weather[Math.floor(Math.random() * weather.length)];

    // Get a random temperature for the day within the specified range
    let tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

    // Add the weather forecast information to the HTML
    document.getElementById("5DayWeather").innerHTML +=
      "<div id='" + days[i] + "' class='" + weatherToday +
      "'><b>Forecast for " + days[i] + ":</b><br><br>" +
      weatherToday + " with a temp of " + tempToday + " degrees.</div>";
  }
}
