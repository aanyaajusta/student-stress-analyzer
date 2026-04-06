function startSurvey() {
  document.getElementById("survey").style.display = "block";
}

function selectMood(mood) {
  let message = "";

  if (mood === "Stressed") {
    message = "You may be experiencing academic pressure.";
  } 
  else if (mood === "Anxious") {
    message = "Try a short breathing exercise.";
  } 
  else if (mood === "Tired") {
    message = "Take a break and rest.";
  }

  document.getElementById("result").style.display = "block";
  document.getElementById("output").innerText = message;
}
