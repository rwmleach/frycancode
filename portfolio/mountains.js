let mountains = [
  {
    name: "Mount Beebo",
    height: 1234,
    place: "Africa"
  },
  {
    name: "Mount Momo",
    height: 2345,
    place: "Asia"
  },
  {
    name: "Mount Blob",
    height: 789,
    place: "South America"
    }
]

let table = document.createElement("table");
let header = document.createElement("tr");
let keys = Object.keys(mountains[0]);

for (let key in keys) {
  let headerElement = document.createElement("th");
  let headline = document.createTextNode(keys[key].toUpperCase());
  headerElement.appendChild(headline);
  header.appendChild(headerElement);
}
table.appendChild(header);

for (let m in mountains) {
    mountain = mountains[m]
    let row = document.createElement("tr");   
    for (let key in mountain) {
        let cell = document.createElement("td");        
        let text = document.createTextNode(mountain[key]);
        cell.appendChild(text);
        if (key == "height") {
            cell.style.textAlign = "right";
        }
        
        row.appendChild(cell)
    }
    table.appendChild(row);
}


document.getElementById("mountains").appendChild(table);