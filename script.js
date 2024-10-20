document.getElementById("calculate").addEventListener("click", calculateDowry);

function calculateDowry() {
  let basePrice = 100;

  let education = parseFloat(document.getElementById("education").value);
  let networth = parseFloat(document.getElementById("networth").value);

  let skills = Array.from(document.querySelectorAll(".skill:checked"))
    .reduce((total, skill) => total + parseFloat(skill.value), 0);

  let reputationFactor = Array.from(document.querySelectorAll(".reputation:checked"))
    .reduce((factor, rep) => factor * parseFloat(rep.value), 1);

  let finalPrice = (basePrice + skills) * education * networth * reputationFactor;

  displayResult(finalPrice);
  generateSummary(finalPrice);
}

function displayResult(price) {
  let resultElement = document.getElementById("result");
  resultElement.textContent = `The final dowry price is: $${price.toFixed(2)}`;
  resultElement.classList.add("visible");
}

function generateSummary(price) {
  let summaryElement = document.getElementById("summary");
  let message;

  if (price > 500) {
    message = "🎉 Jackpot! You're getting a premium spouse!";
  } else if (price > 300) {
    message = "✨ A solid deal! Good luck on your journey!";
  } else {
    message = "💀 Uh-oh... you might need some negotiation skills.";
  }

  summaryElement.textContent = message;
}