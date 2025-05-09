
window.resultData = {"year": 1929, "location": "Columbus, OH", "team_champion": "Oklahoma State", "team_points": 26, "individual_champions": [{"weight_class": "115 lbs", "wrestler": "Joe Sapora", "school": "Illinois"}, {"weight_class": "125 lbs", "wrestler": "Laurance Mantooth", "school": "Oklahoma"}, {"weight_class": "135 lbs", "wrestler": "George Minot", "school": "Illinois"}, {"weight_class": "145 lbs", "wrestler": "George Bancroft", "school": "Oklahoma State"}, {"weight_class": "155 lbs", "wrestler": "Jack VanBebber", "school": "Oklahoma State"}, {"weight_class": "165 lbs", "wrestler": "Conrad Caldwell", "school": "Oklahoma State"}, {"weight_class": "175 lbs", "wrestler": "Glenn Stafford", "school": "Cornell"}, {"weight_class": "UNL", "wrestler": "Earl McCready", "school": "Oklahoma State"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1929</h2>";
  html += "<p><strong>Location:</strong> Columbus, OH</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 26 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>115 lbs: Joe Sapora (Illinois)</li>';
      html += '<li>125 lbs: Laurance Mantooth (Oklahoma)</li>';
      html += '<li>135 lbs: George Minot (Illinois)</li>';
      html += '<li>145 lbs: George Bancroft (Oklahoma State)</li>';
      html += '<li>155 lbs: Jack VanBebber (Oklahoma State)</li>';
      html += '<li>165 lbs: Conrad Caldwell (Oklahoma State)</li>';
      html += '<li>175 lbs: Glenn Stafford (Cornell)</li>';
      html += '<li>UNL: Earl McCready (Oklahoma State)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
}
