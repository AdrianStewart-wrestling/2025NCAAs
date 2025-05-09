
window.resultData = {"year": 1938, "location": "Penn State", "team_champion": "Oklahoma State", "team_points": 19, "individual_champions": [{"weight_class": "118 lbs", "wrestler": "Joe McDaniel", "school": "Oklahoma State"}, {"weight_class": "126 lbs", "wrestler": "Allen Sapora", "school": "Illinois"}, {"weight_class": "135 lbs", "wrestler": "David Matthews", "school": "Oklahoma"}, {"weight_class": "145 lbs", "wrestler": "Stanley Henson", "school": "Oklahoma State"}, {"weight_class": "155 lbs", "wrestler": "Dale Scrivens", "school": "Oklahoma State"}, {"weight_class": "165 lbs", "wrestler": "John Ginay", "school": "Illinois"}, {"weight_class": "175 lbs", "wrestler": "John Harkness", "school": "Harvard"}, {"weight_class": "UNL", "wrestler": "Charles McDaniel", "school": "Indiana"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1938</h2>";
  html += "<p><strong>Location:</strong> Penn State</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 19 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>118 lbs: Joe McDaniel (Oklahoma State)</li>';
      html += '<li>126 lbs: Allen Sapora (Illinois)</li>';
      html += '<li>135 lbs: David Matthews (Oklahoma)</li>';
      html += '<li>145 lbs: Stanley Henson (Oklahoma State)</li>';
      html += '<li>155 lbs: Dale Scrivens (Oklahoma State)</li>';
      html += '<li>165 lbs: John Ginay (Illinois)</li>';
      html += '<li>175 lbs: John Harkness (Harvard)</li>';
      html += '<li>UNL: Charles McDaniel (Indiana)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
