
window.resultData = {"year": 1931, "location": "Brown", "team_champion": "Oklahoma State", "team_points": 29, "individual_champions": [{"weight_class": "118 lbs", "wrestler": "John Engel", "school": "Lehigh"}, {"weight_class": "126 lbs", "wrestler": "Bobby Pearce", "school": "Oklahoma State"}, {"weight_class": "135 lbs", "wrestler": "Richard Cole", "school": "Iowa State"}, {"weight_class": "145 lbs", "wrestler": "Bill Doyle", "school": "Kansas State"}, {"weight_class": "155 lbs", "wrestler": "LeRoy McGuirk", "school": "Oklahoma State"}, {"weight_class": "165 lbs", "wrestler": "Jack VanBebber", "school": "Oklahoma State"}, {"weight_class": "175 lbs", "wrestler": "Conrad Caldwell", "school": "Oklahoma State"}, {"weight_class": "UNL", "wrestler": "Jack Riley", "school": "Northwestern"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1931</h2>";
  html += "<p><strong>Location:</strong> Brown</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 29 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>118 lbs: John Engel (Lehigh)</li>';
      html += '<li>126 lbs: Bobby Pearce (Oklahoma State)</li>';
      html += '<li>135 lbs: Richard Cole (Iowa State)</li>';
      html += '<li>145 lbs: Bill Doyle (Kansas State)</li>';
      html += '<li>155 lbs: LeRoy McGuirk (Oklahoma State)</li>';
      html += '<li>165 lbs: Jack VanBebber (Oklahoma State)</li>';
      html += '<li>175 lbs: Conrad Caldwell (Oklahoma State)</li>';
      html += '<li>UNL: Jack Riley (Northwestern)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
