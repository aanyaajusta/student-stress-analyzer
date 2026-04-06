function startSurvey() {
  document.getElementById("survey").style.display = "block";
}

function analyze() {
  let level = document.getElementById("stressLevel").value;
  let reason = document.getElementById("reason").value;

  let result = "";

  if(level > 7) {
    result += "High stress level detected. ";
  } else {
    result += "Moderate stress level. ";
  }

  if(reason === "exam") {
    result += "Focus on structured study planning.";
  }
  else if(reason === "pressure") {
    result += "Take breaks and reduce performance anxiety.";
  }
  else if(reason === "time") {
    result += "Use time management techniques.";
  }
  else {
    result += "Take care of your mental well-being.";
  }

  document.getElementById("survey").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("output").innerText = result;
}

function restart() {
  document.getElementById("result").style.display = "none";
}
