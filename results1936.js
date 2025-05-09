
window.resultData = {"year": 1936, "location": "Washington & Lee", "team_champion": "Oklahoma", "team_points": 14, "individual_champions": [{"weight_class": "123 lbs", "wrestler": "Ted Anderson", "school": "Central Oklahoma"}, {"weight_class": "134 lbs", "wrestler": "Wayne Martin", "school": "Oklahoma"}, {"weight_class": "145 lbs", "wrestler": "Harley Strong", "school": "Oklahoma State"}, {"weight_class": "158 lbs", "wrestler": "Walter Jacob", "school": "Michigan State"}, {"weight_class": "174 lbs", "wrestler": "Harry Broadbent", "school": "Oklahoma"}, {"weight_class": "191 lbs", "wrestler": "Ray Clemons", "school": "Central Oklahoma"}, {"weight_class": "UNL", "wrestler": "Howell Scobey", "school": "Lehigh"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1936</h2>";
  html += "<p><strong>Location:</strong> Washington & Lee</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma – 14 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>123 lbs: Ted Anderson (Central Oklahoma)</li>';
      html += '<li>134 lbs: Wayne Martin (Oklahoma)</li>';
      html += '<li>145 lbs: Harley Strong (Oklahoma State)</li>';
      html += '<li>158 lbs: Walter Jacob (Michigan State)</li>';
      html += '<li>174 lbs: Harry Broadbent (Oklahoma)</li>';
      html += '<li>191 lbs: Ray Clemons (Central Oklahoma)</li>';
      html += '<li>UNL: Howell Scobey (Lehigh)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
