function startSurvey() {
  document.getElementById("survey").style.display = "block";
}

function analyze() {
  let level = document.getElementById("stressLevel").value;
  let reason = document.getElementById("reason").value;

  let profile = "";
  let suggestion = "";

  // Stress Level Analysis
  if(level >= 8) {
    profile += "🔴 High Stress Level\n";
  } else if(level >= 5) {
    profile += "🟡 Moderate Stress Level\n";
  } else {
    profile += "🟢 Low Stress Level\n";
  }

  // Reason Mapping (BASED ON YOUR SURVEY DATA)
  if(reason === "exam") {
    profile += "📚 Type: Exam Pressure\n";
    suggestion = "Try breaking your study into smaller sessions and use a planner.";
  }
  else if(reason === "pressure") {
    profile += "😰 Type: Performance Anxiety\n";
    suggestion = "Take short breaks, avoid overthinking, and talk to someone.";
  }
  else if(reason === "time") {
    profile += "⏳ Type: Time Management Issue\n";
    suggestion = "Use a focus timer and prioritize important tasks.";
  }
  else {
    profile += "💭 Type: Emotional Stress\n";
    suggestion = "Practice breathing exercises and self-care.";
  }

  document.getElementById("survey").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("output").innerText = profile + "\n\n" + suggestion;
}

function restart() {
  document.getElementById("result").style.display = "none";
}
