function calculate() {
    // Get input values
    let distance = parseFloat(document.getElementById('distance').value);
    let fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    let mileage = parseFloat(document.getElementById('mileage').value);

    // Calculate outputs
    let fuelNeeded = distance / mileage;
    let totalCost = fuelNeeded * fuelPrice;

    // Update output fields
    document.getElementById('fuelNeeded').value = fuelNeeded.toFixed(2);
    document.getElementById('totalCost').value = totalCost.toFixed(2);

    // Add event listeners to editable output fields
    document.getElementById('fuelNeeded').addEventListener('input', updateCalculations);
    document.getElementById('totalCost').addEventListener('input', updateCalculations);
}

function updateCalculations() {
    // Get edited output values
    let editedFuelNeeded = parseFloat(document.getElementById('fuelNeeded').value);
    let editedTotalCost = parseFloat(document.getElementById('totalCost').value);

    // Recalculate input values based on edited outputs
    let distance = parseFloat(document.getElementById('distance').value);
    let fuelPrice = editedTotalCost / editedFuelNeeded;
    let mileage = distance / editedFuelNeeded;

    // Update input fields with recalculated values
    document.getElementById('fuelPrice').value = fuelPrice.toFixed(2);
    document.getElementById('mileage').value = mileage.toFixed(2);
}
