
let currentResults = [];

function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    (result[groupKey] = result[groupKey] || []).push(item);
    return result;
  }, {});
}

function displayResults(results) {
  currentResults = results;
  const container = document.getElementById("resultsContainer");
  container.innerHTML = "";

  const grouped = groupBy(results, "round");
const roundOrder = [
  "Prelims",
  "ChampR1",
  "ChampR2",
  "ConsPrelims",
  "ConsR1",
  "QtrFinals",
  "ConsR2",
  "ConsR3",
  "SemiFinals",
  "ConsR4",
  "ConsQtr",
  "ConsSemi",
  "7thPlace",
  "5thPlace",
  "3rdPlace",
  "Finals"
];
    "Prelims", "ChampR1", "ChampR2", "ConsPrelims", "ConsR1",
    "QtrFinals", "ConsR2", "ConsR3", "SemiFinals", "ConsR4",
    "ConsQtr", "ConsSemi", "7thPlace", "5thPlace", "3rdPlace", "Finals"
  ];

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
        const line = "Bout " + match.bout + ": " + match.weight + " - " + match.winner + " (" + match.winnerSchool + ") defeated " + match.loser + " (" + match.loserSchool + ") " + match.result;
        const p = document.createElement("p");
        p.className = "text-sm ml-4";
        p.textContent = line;
        container.appendChild(p);
      });
  });
}