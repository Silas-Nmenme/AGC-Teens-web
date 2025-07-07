function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// Event Countdown
function updateCountdown() {
    const countdownEl = document.getElementById('event-countdown');
    if (!countdownEl) return;
    const now = new Date();
    let nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + ((8 - now.getDay()) % 7 || 7));
    nextMonday.setHours(17, 0, 0, 0);
    const diff = nextMonday - now;
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        countdownEl.textContent =
            `Next Teen Meeting: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownEl.textContent = "Teen Meeting is happening now!";
    }
}
setInterval(updateCountdown, 1000);
window.onload = updateCountdown;

// Newsletter form
function subscribeNewsletter(event) {
    event.preventDefault();
    document.getElementById('newsletter-message').textContent =
        "Thank you for subscribing!";
}
function submitPrayer(event) {
    event.preventDefault();
    document.getElementById('prayer-message').textContent =
        "Thank you! Your prayer request has been received.";
}
// 3D Cube Interactivity
const cube = document.getElementById('cube');
let spinning = true;
cube.addEventListener('click', () => {
  spinning = !spinning;
  cube.style.animationPlayState = spinning ? 'running' : 'paused';
});