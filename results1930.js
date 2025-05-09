
window.resultData = {"year": 1930, "location": "Penn State", "team_champion": "Oklahoma State", "team_points": 27, "individual_champions": [{"weight_class": "115 lbs", "wrestler": "Joe Sapora", "school": "Illinois"}, {"weight_class": "125 lbs", "wrestler": "Laurance Mantooth", "school": "Oklahoma"}, {"weight_class": "135 lbs", "wrestler": "Hugh Linn", "school": "Iowa State"}, {"weight_class": "145 lbs", "wrestler": "Hardie Lewis", "school": "Oklahoma"}, {"weight_class": "155 lbs", "wrestler": "Otto Kelly", "school": "Michigan"}, {"weight_class": "165 lbs", "wrestler": "Jack VanBebber", "school": "Oklahoma State"}, {"weight_class": "175 lbs", "wrestler": "Conrad Caldwell", "school": "Oklahoma State"}, {"weight_class": "UNL", "wrestler": "Earl McCready", "school": "Oklahoma State"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1930</h2>";
  html += "<p><strong>Location:</strong> Penn State</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 27 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>115 lbs: Joe Sapora (Illinois)</li>';
      html += '<li>125 lbs: Laurance Mantooth (Oklahoma)</li>';
      html += '<li>135 lbs: Hugh Linn (Iowa State)</li>';
      html += '<li>145 lbs: Hardie Lewis (Oklahoma)</li>';
      html += '<li>155 lbs: Otto Kelly (Michigan)</li>';
      html += '<li>165 lbs: Jack VanBebber (Oklahoma State)</li>';
      html += '<li>175 lbs: Conrad Caldwell (Oklahoma State)</li>';
      html += '<li>UNL: Earl McCready (Oklahoma State)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
