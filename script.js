class Robot {
  constructor(bool) {
    this.sensors = bool;
  }
  greeting() {
    return "yolo les kikis!";
  }
}

const robot = new Robot(true);

console.log("yolo les kikis!");
console.log(5);
console.log(robot.sensors);
const leftEye = document.getElementById("eye-left");
leftEye.classList.add("eye-closed");
leftEye.style.backgroundColor = "black";

let ready = "yes";
let robotParts = 20;
let power;

power = "levelMax";

// 1️⃣  Contains a back‑tick, a double‑quote, and a single‑quote
const escapeFromDelimiters = `\`"\'`;

// 2️⃣  Contains a single back‑slash character
const escapeTheEscape = "\\";

// Verify
console.log(escapeFromDelimiters); // → `"'
console.log(escapeTheEscape); // → \

document.getElementById("speech").textContent = robot.greeting();
