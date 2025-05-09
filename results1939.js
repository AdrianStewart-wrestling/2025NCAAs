
window.resultData = {"year": 1939, "location": "Franklin & Marshall", "team_champion": "Oklahoma State", "team_points": 33, "individual_champions": [{"weight_class": "121 lbs", "wrestler": "Joe McDaniel", "school": "Oklahoma State"}, {"weight_class": "128 lbs", "wrestler": "Dale Hanson", "school": "Minnesota"}, {"weight_class": "136 lbs", "wrestler": "Archie Deutschman", "school": "Illinois"}, {"weight_class": "145 lbs", "wrestler": "Harold Nichols", "school": "Michigan"}, {"weight_class": "155 lbs", "wrestler": "Stanley Henson", "school": "Oklahoma State"}, {"weight_class": "165 lbs", "wrestler": "Henry Matthes", "school": "Lehigh"}, {"weight_class": "175 lbs", "wrestler": "Chris Traicoff", "school": "Indiana"}, {"weight_class": "UNL", "wrestler": "Johnny Harrell", "school": "Oklahoma State"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1939</h2>";
  html += "<p><strong>Location:</strong> Franklin & Marshall</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 33 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>121 lbs: Joe McDaniel (Oklahoma State)</li>';
      html += '<li>128 lbs: Dale Hanson (Minnesota)</li>';
      html += '<li>136 lbs: Archie Deutschman (Illinois)</li>';
      html += '<li>145 lbs: Harold Nichols (Michigan)</li>';
      html += '<li>155 lbs: Stanley Henson (Oklahoma State)</li>';
      html += '<li>165 lbs: Henry Matthes (Lehigh)</li>';
      html += '<li>175 lbs: Chris Traicoff (Indiana)</li>';
      html += '<li>UNL: Johnny Harrell (Oklahoma State)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
