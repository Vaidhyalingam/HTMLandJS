function loadDoc() {
  fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
  )
    .then((response) => response.json())
    .then((data) => appendData(data))
    .catch((error) => console.log(error));
}

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 1; i < data.length; i++) {
    var div = document.createElement("tr");
    var div2 = document.createElement("td");
    var div3 = document.createElement("td");
    var div4 = document.createElement("td");
    var div5 = document.createElement("td");
    var div6 = document.createElement("td");
    div2.innerHTML = data[i].title;
    div3.innerHTML = data[i].platform;
    div4.innerHTML = data[i].score;
    div5.innerHTML = data[i].genre;
    div6.innerHTML = data[i].editors_choice;
    div.appendChild(div2);
    div.appendChild(div3);
    div.appendChild(div4);
    div.appendChild(div5);
    div.appendChild(div6);
    mainContainer.appendChild(div);
  }
}
