class Robot {
  constructor(bool) {
    this.sensors = bool;
  }
}

const robot = new Robot(true);

console.log("yolo les kikis!");
console.log(5);
console.log(robot.sensors);
const leftEye = document.getElementById("eye-left");
leftEye.classList.add("eye-closed");
leftEye.style.backgroundColor = "black";
