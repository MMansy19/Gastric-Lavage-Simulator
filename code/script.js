// Add your simulation logic here using JavaScript

document.getElementById("startBtn").addEventListener("click", function () {
  // Add logic to start the simulation
  document.getElementById("status").innerText = "Running";
});

document.getElementById("stopBtn").addEventListener("click", function () {
  // Add logic to stop the simulation
  document.getElementById("status").innerText = "Idle";
});
