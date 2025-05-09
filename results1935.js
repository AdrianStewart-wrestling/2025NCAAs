
window.resultData = {"year": 1935, "location": "Lehigh", "team_champion": "Oklahoma State", "team_points": 36, "individual_champions": [{"weight_class": "118 lbs", "wrestler": "Rex Peery", "school": "Oklahoma State"}, {"weight_class": "126 lbs", "wrestler": "Ross Flood", "school": "Oklahoma State"}, {"weight_class": "135 lbs", "wrestler": "Vernon Sisney", "school": "Oklahoma"}, {"weight_class": "145 lbs", "wrestler": "Wayne Martin", "school": "Oklahoma"}, {"weight_class": "155 lbs", "wrestler": "Frank Lewis", "school": "Oklahoma State"}, {"weight_class": "165 lbs", "wrestler": "Howard Johnston", "school": "Penn State"}, {"weight_class": "175 lbs", "wrestler": "Ralph Silverstein", "school": "Illinois"}, {"weight_class": "UNL", "wrestler": "Charles McDaniel", "school": "Indiana"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1935</h2>";
  html += "<p><strong>Location:</strong> Lehigh</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 36 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>118 lbs: Rex Peery (Oklahoma State)</li>';
      html += '<li>126 lbs: Ross Flood (Oklahoma State)</li>';
      html += '<li>135 lbs: Vernon Sisney (Oklahoma)</li>';
      html += '<li>145 lbs: Wayne Martin (Oklahoma)</li>';
      html += '<li>155 lbs: Frank Lewis (Oklahoma State)</li>';
      html += '<li>165 lbs: Howard Johnston (Penn State)</li>';
      html += '<li>175 lbs: Ralph Silverstein (Illinois)</li>';
      html += '<li>UNL: Charles McDaniel (Indiana)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
