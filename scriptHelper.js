// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const destination = document.getElementByID("missionTarget");
    destination.innerHTML = `
   
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
    return destination.innerHTML;
   
}

function validateInput(testInput) {
   if (isNaN(testInput)) {return "Not a Number";}
   else if (testInput === "") {return "Empty";}
   else {return "Is a Number";}
   
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility = "hidden";
    const pilotStatus = document.getElementByID("pilotStatus");
    const copilotStatus = document.getElementByID("copilotStatus");
    const fuelStatus = document.getElementByID("fuelStatus");
    const cargoStatus = document.getElementByID("cargoStatus");
    const launchStatus = document.getElementByID("launchStatus");
    const faultyItems = document.getElementByID("faultyItems");

    // if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    //     alert("All fields are required!");
    //     return;
    // }
    

    if (validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && validateInput(fuelLevel) === "Is a Number" && validateInput(cargoLevel) === "Is a Number") {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        else {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }

        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }
        else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }

        if (cargoLevel > 10000) {
            cargoStatus.innerHTML = "Cargo mass too high for launch";
        }
        else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
        faultyItems.style.visibility = "visible";
    }
    
    else {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";

        if (validateInput(pilot) !== "Not a Number") {
            pilotStatus.innerHTML = "Pilot name is invalid!"
        }
        if (validateInput(copilot) !== "Not a Number") {
            copilotStatus.innerHTML = "Co-pilot name is invalid!"
        }
        if (validateInput(fuelLevel) !== "Is a Number") {
            fuelStatus.innerHTML = "Fuel level is invalid!"
        }
        if (validateInput(cargoLevel) !== "Is a Number") {
            cargoStatus.innerHTML = "Cargo Mass is invalid!"
        }
    }

   
}

async function myFetch() {
    let planetsReturned;
    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;