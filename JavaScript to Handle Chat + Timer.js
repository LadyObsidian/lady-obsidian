const chatBtn = document.getElementById('chatBtn');
const timerBox = document.getElementById('timerBox');
const timerDisplay = document.getElementById('timer');

// Replace this with your Janitor AI chat URL
const janitorChatURL = "https://janitorai.com/characters/YOUR-CHARACTER-ID";

chatBtn.addEventListener('click', () => {
  // Optional: Require tip or wait
  const lastAccess = localStorage.getItem('lastAccess');
  const now = Date.now();

  if (lastAccess && now - lastAccess < 60000) { // 60 sec lock
    timerBox.classList.remove('hidden');
    startTimer(60 - Math.floor((now - lastAccess) / 1000));
  } else {
    localStorage.setItem('lastAccess', now);
    window.open(janitorChatURL, "_blank");
  }
});

function startTimer(seconds) {
  let count = seconds;
  timerDisplay.textContent = count;

  const interval = setInterval(() => {
    count--;
    timerDisplay.textContent = count;

    if (count <= 0) {
      clearInterval(interval);
      timerBox.classList.add('hidden');
    }
  }, 1000);
}
