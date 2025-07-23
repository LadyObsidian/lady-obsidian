// lady-timer.js
setTimeout(() => {
    const awayMessage = "💋 Lady Obsidian has slipped away into the shadows... Perhaps you've lingered too long without tribute. She always enjoys making an exit, tip to proceed.";
    const messageContainer = document.querySelector(".chat-container") || document.body;

    const msg = document.createElement("div");
    msg.className = "lady-away-message";
    msg.textContent = awayMessage;
    msg.style = "margin: 20px; font-style: italic; color: crimson; font-size: 1.1em;";

    messageContainer.appendChild(msg);
}, 135000); // 2 minutes 15 seconds in milliseconds
