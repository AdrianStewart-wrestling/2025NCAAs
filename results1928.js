
window.resultData = {"year": 1928, "location": "Ames, IA", "team_champion": "Oklahoma State", "individual_champions": [{"weight_class": "115 lbs", "wrestler": "Harold DeMarsh", "school": "Oklahoma State"}, {"weight_class": "125 lbs", "wrestler": "Ralph Lupton", "school": "Northwestern"}, {"weight_class": "135 lbs", "wrestler": "Arthur Holding", "school": "Iowa State"}, {"weight_class": "145 lbs", "wrestler": "Melvin Clodfelter", "school": "Oklahoma State"}, {"weight_class": "158 lbs", "wrestler": "Leslie Beers", "school": "Iowa"}, {"weight_class": "175 lbs", "wrestler": "George Rule", "school": "Oklahoma State"}, {"weight_class": "UNL", "wrestler": "Earl McCready", "school": "Oklahoma State"}]};

window.displayResults= function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1928</h2>";
  html += "<p><strong>Location:</strong> Ames, IA</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>115 lbs: Harold DeMarsh (Oklahoma State)</li>';
      html += '<li>125 lbs: Ralph Lupton (Northwestern)</li>';
      html += '<li>135 lbs: Arthur Holding (Iowa State)</li>';
      html += '<li>145 lbs: Melvin Clodfelter (Oklahoma State)</li>';
      html += '<li>158 lbs: Leslie Beers (Iowa)</li>';
      html += '<li>175 lbs: George Rule (Oklahoma State)</li>';
      html += '<li>UNL: Earl McCready (Oklahoma State)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
}
