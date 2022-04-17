function oefening1() {
    let validatiebox = document.getElementById("validatieBox");
    let header = document.getElementById("headerValidatie");
    let text = document.getElementById("textValidatie");
    let container = document.getElementById("containerValidatie");

    //Validatie
    var foutmelding = "";
    document.getElementById("inputFirstName").value == "" ? foutmelding += "First name is required. <br>" : foutmelding += "";
    document.getElementById("inputLastName").value == "" ? foutmelding += "Name is required. <br>" : foutmelding += "";
    document.getElementById("exampleInputEmail1").value == "" ? foutmelding += "Email is required. <br>" : foutmelding += "";
    document.getElementById("exampleInputAdress1").value == "" ? foutmelding += "Adress is required. <br>" : foutmelding += "";
    document.getElementById("inputStateCountry").value == "Choose a country" ? foutmelding += "Counntry is required. <br>" : foutmelding += "";
    document.getElementById("inputStateProvince").value == "Choose a province" ? foutmelding += "Province is required. <br>" : foutmelding += "";
    document.getElementById("inputZip").value == "" ? foutmelding += "Postal code is required. <br>" : foutmelding += "";

    //verander de validatiebox
    if (foutmelding == "") {
      validatiebox.classList.remove("d-none");
      container.style.backgroundColor = "#D1E7DD"
      header.innerHTML = "Good Shit";
      header.style.color = "#2F5F3C";
      text.innerHTML = "You just successfully subscribed";
      text.style.color = "#2F5F3C";
    }
    else {
      validatiebox.classList.remove("d-none");
      container.style.backgroundColor = "#F8D7DA"
      header.innerHTML = "You messed up...";
      header.style.color = "#852029";
      text.innerHTML = foutmelding;
      text.style.color = "#852029";
      foutmelding = "";
    }

}
