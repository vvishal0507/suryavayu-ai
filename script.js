function updateDashboard() {
  const solar = Math.floor(Math.random() * 31) + 60;
  const wind = Math.floor(Math.random() * 41) + 35;
  const battery = Math.floor((solar + wind) / 2);

  document.getElementById("solarValue").innerText = solar + "%";
  document.getElementById("windValue").innerText = wind + "%";
  document.getElementById("batteryValue").innerText = battery + "%";

  document.getElementById("solarBar").style.width = solar + "%";
  document.getElementById("windBar").style.width = wind + "%";
  document.getElementById("batteryBar").style.width = battery + "%";

  let farmStatus = "Good";
  let suggestion = "";

  if (battery >= 75 && solar >= 70) {
    farmStatus = "Excellent";
    suggestion =
      "Energy level is high. This is a good time to run agriculture monitoring or irrigation support systems.";
  } else if (battery >= 55) {
    farmStatus = "Good";
    suggestion =
      "Energy level is stable. Continue storing renewable energy and monitor farm conditions regularly.";
  } else {
    farmStatus = "Moderate";
    suggestion =
      "Battery level is moderate. Save energy and wait for better solar or wind generation before using high-power devices.";
  }

  document.getElementById("farmValue").innerText = farmStatus;
  document.getElementById("aiSuggestion").innerText = suggestion;
}

updateDashboard();

setInterval(updateDashboard, 4000);