
window.resultData = {"year": 1933, "location": "Lehigh", "team_champion": "Oklahoma State & Iowa State", "individual_champions": [{"weight_class": "118 lbs", "wrestler": "Rex Peery", "school": "Oklahoma State"}, {"weight_class": "126 lbs", "wrestler": "Ross Flood", "school": "Oklahoma State"}, {"weight_class": "135 lbs", "wrestler": "Patrick Devine", "school": "Indiana"}, {"weight_class": "145 lbs", "wrestler": "Alan Kelley", "school": "Oklahoma State"}, {"weight_class": "155 lbs", "wrestler": "Merrill Frevert", "school": "Iowa State"}, {"weight_class": "165 lbs", "wrestler": "George Martin", "school": "Iowa State"}, {"weight_class": "175 lbs", "wrestler": "Robert Hess", "school": "Iowa State"}, {"weight_class": "UNL", "wrestler": "Ralph Teague", "school": "Southwestern Oklahoma"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1933</h2>";
  html += "<p><strong>Location:</strong> Lehigh</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State & Iowa State</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>118 lbs: Rex Peery (Oklahoma State)</li>';
      html += '<li>126 lbs: Ross Flood (Oklahoma State)</li>';
      html += '<li>135 lbs: Patrick Devine (Indiana)</li>';
      html += '<li>145 lbs: Alan Kelley (Oklahoma State)</li>';
      html += '<li>155 lbs: Merrill Frevert (Iowa State)</li>';
      html += '<li>165 lbs: George Martin (Iowa State)</li>';
      html += '<li>175 lbs: Robert Hess (Iowa State)</li>';
      html += '<li>UNL: Ralph Teague (Southwestern Oklahoma)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
