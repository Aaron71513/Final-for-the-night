const screens = document.querySelectorAll('.screen');
let currentIndex = 0;

function showNextScreen() {
  screens.forEach(screen => screen.classList.remove('active'));
  screens[currentIndex].classList.add('active');
  currentIndex = (currentIndex + 1) % screens.length;
}
setInterval(showNextScreen, 7000);
showNextScreen();

function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('time').textContent = time;
}
updateTime();
setInterval(updateTime, 1000);

function updateQuote() {
  const quotes = [
    "I'm going to have to science the shit out of this.",
    "No storm lasts forever.",
    "Flow with the ocean, don’t fight it."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
}
updateQuote();

function fetchLocationAndWeather() {
  if (!navigator.geolocation) return;

  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    document.getElementById('location').textContent = `${latitude.toFixed(3)}, ${longitude.toFixed(3)}`;

    // Simulated weather for now
    document.getElementById('weather').textContent = "Sunny, 24°C";
  });
}
fetchLocationAndWeather();
