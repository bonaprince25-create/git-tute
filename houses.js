let name = "Bonaventure";
let location = "California";
let price = 5000000;

function displayHouseInfo() {
    console.log(`House Name: ${name}`);
    console.log(`Location: ${location}`);
    console.log(`Price: $${price.toLocaleString()}`);
}

displayHouseInfo(); 