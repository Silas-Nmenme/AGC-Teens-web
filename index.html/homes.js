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
function toggleChat() {
  const widget = document.getElementById('chat-widget');
  widget.classList.toggle('closed');
  if (widget.classList.contains('closed')) {
    widget.style.maxHeight = '40px';
  } else {
    widget.style.maxHeight = '400px';
  }
}
function sendChat(event) {
  event.preventDefault();
  const input = document.getElementById('chat-input-field');
  const chatBody = document.getElementById('chat-body');
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.textContent = input.value;
  chatBody.appendChild(userMsg);

  // Simple bot response
  const botMsg = document.createElement('div');
  botMsg.className = 'chat-message bot';
  if (input.value.toLowerCase().includes('faith')) {
    botMsg.textContent = "Faith means trusting God even when you can't see the whole path. 🙏";
  } else if (input.value.toLowerCase().includes('event')) {
    botMsg.textContent = "Our next event is on Monday at 5pm! Check the Events section for more.";
  } else {
    botMsg.textContent = "Thanks for reaching out! A leader will respond soon.";
  }
  setTimeout(() => chatBody.appendChild(botMsg), 600);
  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
}
function registerEvent(event) {
  event.preventDefault();
  document.getElementById('rsvp-message').textContent =
    "Thank you for registering! We'll see you at the event.";
}
function askNotificationPermission() {
  if ('Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification('AGC Teens', {
          body: 'Stay tuned for our next event!',
          icon: 'images/logo.png'
        });
      }
    });
  }
}
window.onload = function() {
  updateCountdown();
  askNotificationPermission();
};