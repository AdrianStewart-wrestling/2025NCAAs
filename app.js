let currentResults = [];

function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    (result[groupKey] = result[groupKey] || []).push(item);
    return result;
  }, {});
}

const roundOrder = [
  "Prelims", "ChampR1", "ChampR2", "ConsPrelims", "ConsR1",
  "QtrFinals", "ConsR2", "ConsR3", "SemiFinals", "ConsR4",
  "ConsQtr", "ConsSemi", "7thPlace", "5thPlace", "3rdPlace", "Finals"
];

function displayResults(results) {
  currentResults = results;
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  const grouped = groupBy(results, "round");
  const sortedRounds = Object.keys(grouped).sort((a, b) => {
    const aIndex = roundOrder.indexOf(a);
    const bIndex = roundOrder.indexOf(b);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  sortedRounds.forEach(round => {
    const roundHeader = document.createElement("h3");
    roundHeader.className = "text-base font-bold text-blue-800 mt-4 mb-1";
    roundHeader.textContent = round;
    container.appendChild(roundHeader);

    grouped[round]
      .sort((a, b) => parseInt(a.bout) - parseInt(b.bout))
      .forEach(match => {
        const line = `Bout ${match.bout}: ${match.weight} - ${match.winner} (${match.winnerSchool}) defeated ${match.loser} (${match.loserSchool}) ${match.result}`;
        const p = document.createElement("p");
        p.className = "text-sm ml-4";
        p.textContent = line;
        container.appendChild(p);
      });
  });

  document.querySelectorAll(".team-link").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const team = el.dataset.team;
      showTeamPage(team);
    });
  });
}

function displayTeamStats(schoolName) {
  const teamMatches = currentResults.filter(m =>
    m.winnerSchool === schoolName || m.loserSchool === schoolName
  );

  let wins = 0, losses = 0, falls = 0, techs = 0, majors = 0;

  teamMatches.forEach(match => {
    if (match.winnerSchool === schoolName) {
      wins++;
      if (match.result.includes("Fall")) falls++;
      else if (match.result.includes("TF")) techs++;
      else if (match.result.includes("MD")) majors++;
    } else if (match.loserSchool === schoolName) {
      losses++;
    }
  });

  const statsDiv = document.getElementById("teamStats");
  statsDiv.innerHTML = `🏆 Team Stats<br><br>${schoolName}: ${wins}W - ${losses}L, ${falls} falls, ${techs} techs, ${majors} majors`;
}

function showTeamPage(schoolName) {
  const waitForResults = () => {
    if (Array.isArray(currentResults) && currentResults.length > 0) {
      displayTeamStats(schoolName);
    } else {
      setTimeout(waitForResults, 50);
    }
  };
  waitForResults();
}

function filterResults() {
  const roundFilter = document.getElementById("roundFilter").value;
  const weightFilter = document.getElementById("weightFilter").value;
  const schoolFilter = document.getElementById("schoolFilter").value;
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  const filtered = currentResults.filter(match => {
    return (
      (roundFilter === "All" || match.round === roundFilter) &&
      (weightFilter === "All" || match.weight === weightFilter) &&
      (schoolFilter === "All" || match.winnerSchool === schoolFilter || match.loserSchool === schoolFilter) &&
      (match.winner.toLowerCase().includes(searchValue) ||
       match.loser.toLowerCase().includes(searchValue) ||
       match.bout.toLowerCase().includes(searchValue) ||
       match.weight.toLowerCase().includes(searchValue) ||
       match.winnerSchool.toLowerCase().includes(searchValue) ||
       match.loserSchool.toLowerCase().includes(searchValue))
    );
  });

  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  const grouped = groupBy(filtered, "round");

  const roundOrder = [
    "Prelims", "ChampR1", "ChampR2", "ConsPrelims", "ConsR1",
    "QtrFinals", "ConsR2", "ConsR3", "SemiFinals", "ConsR4",
    "ConsQtr", "ConsSemi", "7thPlace", "5thPlace", "3rdPlace", "Finals"
  ];

  const sortedRounds = roundOrder.filter(r => grouped[r]);
        

    const aIndex = roundOrder.indexOf(a);
    const bIndex = roundOrder.indexOf(b);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  sortedRounds.forEach(round => {
    const roundHeader = document.createElement("h3");
    roundHeader.className = "text-base font-bold text-blue-800 mt-4 mb-1";
    roundHeader.textContent = round;
    container.appendChild(roundHeader);

    grouped[round]
      .sort((a, b) => parseInt(a.bout) - parseInt(b.bout))
      .forEach(match => {
        const line = `Bout ${match.bout}: ${match.weight} - ${match.winner} (${match.winnerSchool}) defeated ${match.loser} (${match.loserSchool}) ${match.result}`;
        const p = document.createElement("p");
        p.className = "text-sm ml-4";
        p.textContent = line;
        container.appendChild(p);
      });
  });
}