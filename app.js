
function populateDropdowns(results) {
  const roundSelect = document.getElementById("roundSelect");
  const weightSelect = document.getElementById("weightSelect");
  const schoolSelect = document.getElementById("schoolSelect");
  const teamSelect = document.getElementById("teamSelect");

  const rounds = [...new Set(results.map(r => r.round).filter(Boolean))].sort();
  const weights = [...new Set(results.map(r => r.weight).filter(Boolean))].sort((a, b) => parseInt(a) - parseInt(b));

  const schools = new Set();
  results.forEach(match => {
    if (match.winner_school) schools.add(match.winner_school);
    if (match.loser_school) schools.add(match.loser_school);
  });
  const sortedSchools = Array.from(schools).sort();

  roundSelect.innerHTML = '<option value="All">All</option>' + rounds.map(r => `<option value="${r}">${r}</option>`).join("");
  weightSelect.innerHTML = '<option value="All">All</option>' + weights.map(w => `<option value="${w}">${w}</option>`).join("");
  schoolSelect.innerHTML = '<option value="All">All</option>' + sortedSchools.map(s => `<option value="${s}">${s}</option>`).join("");
  teamSelect.innerHTML = '<option value="All">Select a Team</option>' + sortedSchools.map(s => `<option value="${s}">${s}</option>`).join("");

  roundSelect.onchange = filterResults;
  weightSelect.onchange = filterResults;
  schoolSelect.onchange = filterResults;
  teamSelect.onchange = showTeamStats;

  // Hide match list by default
  document.getElementById("resultsContainer").innerHTML = "<em>Select filters above to view results.</em>";
}

function filterResults() {
  const round = document.getElementById("roundSelect").value;
  const weight = document.getElementById("weightSelect").value;
  const school = document.getElementById("schoolSelect").value;

  const filtered = resultData.filter(match => {
    const matchRound = round === "All" || match.round === round;
    const matchWeight = weight === "All" || match.weight === weight;
    const matchSchool = school === "All" ||
      match.winner_school === school ||
      match.loser_school === school;

    return matchRound && matchWeight && matchSchool;
  });

  if (round === "All" && weight === "All" && school === "All") {
    document.getElementById("resultsContainer").innerHTML = "<em>Select filters above to view results.</em>";
  } else {
    displayResults(filtered);
  }
}

function showTeamStats() {
  const selectedTeam = document.getElementById("teamSelect").value;
  const container = document.getElementById("teamStats");

  if (selectedTeam === "All") {
    container.innerHTML = "";
    return;
  }

  const stats = { wins: 0, falls: 0, techs: 0, majors: 0 };
  resultData.forEach(match => {
    if (match.winner_school === selectedTeam) {
      stats.wins++;
      if (/fall/i.test(match.result)) stats.falls++;
      else if (/tech|tf/i.test(match.result)) stats.techs++;
      else if (/md|major/i.test(match.result)) stats.majors++;
    }
  });

  container.innerHTML = `<h3>${selectedTeam} Stats</h3>
    ${stats.wins} Wins, ${stats.falls} Fall, ${stats.techs} TF, ${stats.majors} MD`;
}

function displayResults(results) {
  const container = document.getElementById("resultsContainer");
  container.innerHTML = results.map(match => {
    const winnerSchool = match.winner_school || "Unknown";
    const loserSchool = match.loser_school || "Unknown";
    return `<div>${match.bout}. ${match.winner} (${winnerSchool}) defeated ${match.loser} (${loserSchool}) [${match.result}]</div>`;
  }).join('');
}
