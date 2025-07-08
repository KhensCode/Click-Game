// Element selectors
const target = document.getElementById("target");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score");
const themeToggle = document.getElementById("theme-toggle");

let score = 0;
let gameActive = false;
let timer;

// Helper to move the target randomly
function moveTarget() {
  const maxWidth = window.innerWidth - 60;  // target width
  const maxHeight = window.innerHeight - 60;

  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

// Start the game
function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  gameActive = true;
  target.style.display = "block";
  moveTarget();

  // End the game after 10 seconds
  timer = setTimeout(() => {
    gameActive = false;
    target.style.display = "none";
    alert("⏰ Time's up! Your score: " + score);
  }, 10000);
}

// When the target is clicked
target.addEventListener("click", () => {
  if (!gameActive) return;
  score++;
  scoreDisplay.textContent = score;
  moveTarget();
});

// Start button
startBtn.addEventListener("click", () => {
  clearTimeout(timer);
  startGame();
});

// Toggle theme (checked property)
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
