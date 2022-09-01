

window.addEventListener("load", function() {
    let document = window.document;
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems");
    const button = document.getElementById("formSubmit");
    const pilotname = document.querySelector("input[name=pilotName]");
    const copilotname = document.querySelector("input[name=copilotName]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");
    
    
    list.style.visibility = "hidden";
    // document.getElementById("pilotStatus").innerHTML = "Pilot Ready";
    // document.getElementById("copilotStatus").innerHTML = "Co-pilot Ready";    
    // document.getElementById("fuelStatus").innerHTML = "Fuel Level high enough for launch";
    // document.getElementById("cargoStatus").innerHTML = "Cargo Mass low enough for launch";
    
    form.addEventListener("submit", function(event) {
        if (pilotname.value === "" || copilotname.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
        }
        
        formSubmission(window.document, list, pilotname.value, copilotname.value, fuelLevel.value, cargoLevel.value);
        event.preventDefault();
    });
        
   





   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let myPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(window.document, myPlanet.name, myPlanet.diameter, myPlanet.star, myPlanet.distance, myPlanet.moons, myPlanet.image);
   });
   
});