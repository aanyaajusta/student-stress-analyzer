alert("JS Loaded");
function startSurvey() {
  document.getElementById("survey").style.display = "block";
}

function analyze() {

  let stress = parseInt(document.getElementById("stressLevel").value);
  let sleep = parseInt(document.getElementById("sleep").value);
  let focus = parseInt(document.getElementById("focus").value);
  let reason = document.getElementById("reason").value;

  // SCORING SYSTEM
  let score = stress + (4 - sleep) + focus;

  let level = "";
  if(score >= 12) {
    level = "🔴 High Stress";
  } else if(score >= 8) {
    level = "🟡 Moderate Stress";
  } else {
    level = "🟢 Low Stress";
  }

  let profile = "";
  let suggestion = "";
  let video = "";

  // PROFILE MAPPING
  if(reason === "exam") {
    profile = "📚 Exam Pressure";
    suggestion = "Use study planning and break tasks into smaller chunks.";
    video = "https://www.youtube.com/embed/IlU-zDU6aQ0";
  }
  else if(reason === "pressure") {
    profile = "😰 Performance Anxiety";
    suggestion = "Take breaks and reduce overthinking.";
    video = "https://www.youtube.com/embed/ZToicYcHIOU";
  }
  else if(reason === "time") {
    profile = "⏳ Time Management Issues";
    suggestion = "Use Pomodoro technique and plan your day.";
    video = "https://www.youtube.com/embed/mNBmG24djoY";
  }
  else {
    profile = "💭 Emotional Stress";
    suggestion = "Practice breathing exercises and self-care.";
    video = "https://www.youtube.com/embed/odADwWzHR24";
  }

  // SHOW RESULT
  document.getElementById("survey").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("output").innerText =
    "Stress Score: " + score + "\n" +
    "Level: " + level + "\n" +
    "Profile: " + profile + "\n\n" +
    suggestion;

  document.getElementById("videoFrame").src = video;
  // Stress percentage
let percent = (score / 15) * 100;

// Update bar
let bar = document.getElementById("stressBar");
bar.style.width = percent + "%";

// Change color dynamically
if(percent > 70) {
  bar.style.background = "red";
} else if(percent > 40) {
  bar.style.background = "orange";
} else {
  bar.style.background = "green";
}

// Show score text
document.getElementById("scoreText").innerText =
  "Stress Level: " + Math.round(percent) + "%";
}

  // Smart Mapping
  if(reason === "exam") {
    profile += "📚 Type: Exam Pressure\n";
    suggestion = "Break study into smaller sessions and follow a schedule.";
    video = "https://www.youtube.com/embed/IlU-zDU6aQ0";
  }
  else if(reason === "pressure") {
    profile += "😰 Type: Performance Anxiety\n";
    suggestion = "Take breaks and avoid overthinking.";
    video = "https://www.youtube.com/embed/ZToicYcHIOU";
  }
  else if(reason === "time") {
    profile += "⏳ Type: Time Management Issue\n";
    suggestion = "Use Pomodoro technique and prioritize tasks.";
    video = "https://www.youtube.com/embed/mNBmG24djoY";
  }
  else {
    profile += "💭 Type: Emotional Stress\n";
    suggestion = "Practice breathing exercises and relax your mind.";
    video = "https://www.youtube.com/embed/odADwWzHR24";
  }

  // Show result
  document.getElementById("survey").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("output").innerText = profile + "\n\n" + suggestion;
  document.getElementById("videoFrame").src = video;
}
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
