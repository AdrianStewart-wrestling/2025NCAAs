
window.resultData = {"year": 1937, "location": "Indiana State", "team_champion": "Oklahoma State", "team_points": 31, "individual_champions": [{"weight_class": "118 lbs", "wrestler": "Joe McDaniel", "school": "Oklahoma State"}, {"weight_class": "126 lbs", "wrestler": "Dale Brand", "school": "Cornell Iowa"}, {"weight_class": "135 lbs", "wrestler": "Ray Cheney", "school": "Northern Iowa"}, {"weight_class": "145 lbs", "wrestler": "Stanley Henson", "school": "Oklahoma State"}, {"weight_class": "155 lbs", "wrestler": "Bill Keas", "school": "Oklahoma"}, {"weight_class": "165 lbs", "wrestler": "Harvey Base", "school": "Oklahoma State"}, {"weight_class": "175 lbs", "wrestler": "John Whitaker", "school": "Minnesota"}, {"weight_class": "UNL", "wrestler": "Lloyd Ricks", "school": "Oklahoma State"}]};

window.displayResults = function(data) {
  const container = document.getElementById("resultsContainer");
  let html = "";
  html += "<div><h2 class='text-xl font-bold mb-2'>NCAA Wrestling 1937</h2>";
  html += "<p><strong>Location:</strong> Indiana State</p>";
  html += "<p><strong>Team Champion:</strong> Oklahoma State – 31 pts</p>";
  html += "<h3 class='mt-4 font-semibold'>Individual Champions:</h3>";
  html += "<ul class='list-disc pl-6'>";
      html += '<li>118 lbs: Joe McDaniel (Oklahoma State)</li>';
      html += '<li>126 lbs: Dale Brand (Cornell Iowa)</li>';
      html += '<li>135 lbs: Ray Cheney (Northern Iowa)</li>';
      html += '<li>145 lbs: Stanley Henson (Oklahoma State)</li>';
      html += '<li>155 lbs: Bill Keas (Oklahoma)</li>';
      html += '<li>165 lbs: Harvey Base (Oklahoma State)</li>';
      html += '<li>175 lbs: John Whitaker (Minnesota)</li>';
      html += '<li>UNL: Lloyd Ricks (Oklahoma State)</li>';
  html += "</ul></div>";
  container.innerHTML = html;
};
