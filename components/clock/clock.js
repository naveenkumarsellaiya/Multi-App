  // Function to update the clock
  function updateClock() {
    const now = new Date();

    // Get current time components
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time to display 2 digits
    const formattedTime = [
        String(hours).padStart(2, '0'),
        String(minutes).padStart(2, '0'),
        String(seconds).padStart(2, '0'),
    ].join(':');

    // Update digital clock
    document.getElementById('clock').textContent = formattedTime;
}

// Initialize clock and set interval
setInterval(updateClock, 1000);
updateClock();

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});