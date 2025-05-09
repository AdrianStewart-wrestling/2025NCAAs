
window.resultData = {"year": 1932, "location": "Indiana", "team_champion": "Indiana", "team_points": 14, "individual_champions": [{"weight_class": "123 lbs", "wrestler": "Joe Puerta", "school": "Illinois"}, {"weight_class": "134 lbs", "wrestler": "Edwin Belshaw", "school": "Indiana"}, {"weight_class": "145 lbs", "wrestler": "Hardie Lewis", "school": "Oklahoma"}, {"weight_class": "158 lbs", "wrestler": "Carl Dougovito", "school": "Michigan"}, {"weight_class": "174 lbs", "wrestler": "Robert Hess", "school": "Iowa State"}, {"weight_class": "191 lbs", "wrestler": "Kermit Blosser", "school": "Ohio University"}, {"weight_class": "UNL", "wrestler": "Jack Riley", "school": "Northwestern"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1932</h2>";
  html += "<p><strong>Location:</strong> Indiana</p>";
  html += "<p><strong>Team Champion:</strong> Indiana – 14 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>123 lbs: Joe Puerta (Illinois)</li>';
      html += '<li>134 lbs: Edwin Belshaw (Indiana)</li>';
      html += '<li>145 lbs: Hardie Lewis (Oklahoma)</li>';
      html += '<li>158 lbs: Carl Dougovito (Michigan)</li>';
      html += '<li>174 lbs: Robert Hess (Iowa State)</li>';
      html += '<li>191 lbs: Kermit Blosser (Ohio University)</li>';
      html += '<li>UNL: Jack Riley (Northwestern)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
