// Function to calculate fuel needed and cost
function calculateFuel() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);

    if (!isNaN(distance) && !isNaN(fuelEfficiency) && !isNaN(fuelPrice)) {
        var fuelNeeded = distance / fuelEfficiency;
        var fuelCost = fuelNeeded * fuelPrice;

        document.getElementById('fuelNeeded').textContent = fuelNeeded.toFixed(2) + ' litres';
        document.getElementById('fuelCost').textContent = 'Rs. ' + fuelCost.toFixed(2);
    } else {
        document.getElementById('fuelNeeded').textContent = 'Fill all parameters';
        document.getElementById('fuelCost').textContent = '';
    }
}
