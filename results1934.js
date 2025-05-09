
window.resultData = {"year": 1934, "location": "Michigan", "team_champion": "Oklahoma State", "team_points": 29, "individual_champions": [{"weight_class": "118 lbs", "wrestler": "Rex Peery", "school": "Oklahoma State"}, {"weight_class": "126 lbs", "wrestler": "Ross Flood", "school": "Oklahoma State"}, {"weight_class": "135 lbs", "wrestler": "Wayne Martin", "school": "Oklahoma"}, {"weight_class": "145 lbs", "wrestler": "Alan Kelley", "school": "Oklahoma State"}, {"weight_class": "155 lbs", "wrestler": "Ben Bishop", "school": "Lehigh"}, {"weight_class": "165 lbs", "wrestler": "Marion Foreman", "school": "Oklahoma"}, {"weight_class": "175 lbs", "wrestler": "Richard Voliva", "school": "Indiana"}, {"weight_class": "UNL", "wrestler": "Ralph Teague", "school": "Southwestern Oklahoma"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1934</h2>";
  html += "<p><strong>Location:</strong> Michigan</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 29 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>118 lbs: Rex Peery (Oklahoma State)</li>';
      html += '<li>126 lbs: Ross Flood (Oklahoma State)</li>';
      html += '<li>135 lbs: Wayne Martin (Oklahoma)</li>';
      html += '<li>145 lbs: Alan Kelley (Oklahoma State)</li>';
      html += '<li>155 lbs: Ben Bishop (Lehigh)</li>';
      html += '<li>165 lbs: Marion Foreman (Oklahoma)</li>';
      html += '<li>175 lbs: Richard Voliva (Indiana)</li>';
      html += '<li>UNL: Ralph Teague (Southwestern Oklahoma)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
