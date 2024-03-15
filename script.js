function calculate() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    
    // Ensure at least three parameters are filled
    if (!isNaN(distance) && !isNaN(fuelEfficiency) && !isNaN(fuelPrice)) {
        // Calculate the missing parameter
        if (isNaN(distance)) {
            distance = parseFloat(document.getElementById('fuelNeeded').textContent);
        } else if (isNaN(fuelEfficiency)) {
            fuelEfficiency = parseFloat(document.getElementById('fuelNeeded').textContent);
        } else if (isNaN(fuelPrice)) {
            fuelPrice = parseFloat(document.getElementById('fuelNeeded').textContent);
        }

        // Calculate fuel needed and fuel cost
        var fuelNeeded = distance / fuelEfficiency;
        var fuelCost = fuelNeeded * fuelPrice;
        
        // Update outputs
        document.getElementById('fuelNeeded').textContent = fuelNeeded.toFixed(2);
        document.getElementById('fuelCost').textContent = fuelCost.toFixed(2);
    } else {
        // If less than three parameters are filled, show error
        document.getElementById('fuelNeeded').textContent = 'Fill at least three parameters';
        document.getElementById('fuelCost').textContent = '';
    }
}
