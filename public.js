// chat-timer.js

function startChatTimer(duration = 2 * 60 + 15) {
  let timer = duration;
  const chatBox = document.querySelector("#chat-messages");

  const interval = setInterval(() => {
    if (timer <= 0) {
      clearInterval(interval);
      chatBox.innerHTML += `
        <div class="bot-message">
          <p><em>Lady Obsidian has left the chat. Your time has expired. If you wish to summon her again, you know the cost…</em></p>
        </div>`;
      return;
    }

    timer--;
  }, 1000);
}
// stripe-checkout.js

const stripe = Stripe("YOUR_PUBLISHABLE_KEY_HERE");

document.querySelector("#pay-button").addEventListener("click", () => {
  stripe.redirectToCheckout({
    lineItems: [
      { price: "PRICE_ID_FROM_STRIPE", quantity: 1 }
    ],
    mode: "payment",
    successUrl: "https://yourdomain.com/chat?paid=true",
    cancelUrl: "https://yourdomain.com/chat",
  }).then((result) => {
    if (result.error) {
      alert(result.error.message);
    }
  });
});

