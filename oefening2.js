const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let oefening2 = () => {
// Maak hier oefening 2

        //maak rij met cellen aan
        var row = document.getElementById("tableRow");
        for (let i = 0; i < rainbow.length; i++) {
            var color = rainbow[i];
            var cell = row.insertCell(i);
            cell.innerHTML = color;
            cell.setAttribute("style","text-align:center");
            cell.setAttribute("id","originalRow");
        }
        //voeg hover effects toe
        for (let i = 0; i < rainbow.length; i++) {
            let cell = document.getElementsByTagName("td")[i];
            let color = cell.innerHTML;
            cell.addEventListener("mouseover", function(){
                cell.style.backgroundColor = color;
                cell.style.color = "white";
            })
            cell.addEventListener("mouseout", function(){
                cell.style.backgroundColor = "white";
                cell.style.color = "black";
            })
            //voeg click functie toe
            cell.addEventListener("click" , function(){
                var request = window.prompt(`At which position should I add it (1-${rainbow.length})`);
                let row = document.getElementById("tableBody").insertRow();
                for (let i = 0; i < rainbow.length; i++) {
                    var newcell = row.insertCell(i);
                    
                    if (i == request-1) {
                        newcell.innerHTML = color;
                        newcell.style.backgroundColor = color;
                        newcell.style.color = "white";
                        newcell.style.textAlign = "center";
                    }

                    ClickColorFunction(newcell);
                }         
            })
        }
        function ClickColorFunction(newcell) {
            newcell.addEventListener("click", function() {
                let request = window.prompt("Which color do you wish to add?");
                newcell.style.backgroundColor = request;
                newcell.style.color = "white";
                newcell.style.textAlign = "center"
                newcell.innerHTML = request;
            })
        }
}


