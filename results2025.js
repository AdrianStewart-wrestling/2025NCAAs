
const resultData = [
  {
    winner: "Yianni Diakomihalis",
    loser: "Ridge Lovett",
    round: "Finals",
    weight: "149",
    school: "Cornell"
  },
  {
    winner: "Spencer Lee",
    loser: "Brandon Courtney",
    round: "Finals",
    weight: "125",
    school: "Iowa"
  }
];

console.log("results2025.js loaded!");

const resultsContainer = document.getElementById("resultsContainer");
resultsContainer.innerHTML = "";

resultData.forEach(match => {
  const matchHtml = `
    <div class="border-b py-2">
      <p class="font-semibold">${match.winner} def. ${match.loser}</p>
      <p class="text-sm text-gray-600">${match.round} | ${match.weight} | ${match.school}</p>
    </div>
  `;
  resultsContainer.innerHTML += matchHtml;
});
