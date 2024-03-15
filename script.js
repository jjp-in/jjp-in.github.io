function calculate() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    
    if (!isNaN(distance) && !isNaN(fuelEfficiency) && fuelEfficiency > 0) {
        var fuelNeeded = distance / fuelEfficiency;
        var fuelCost = fuelNeeded * fuelPrice;
        
        document.getElementById('fuelNeeded').textContent = fuelNeeded.toFixed(2);
        document.getElementById('fuelCost').textContent = fuelCost.toFixed(2);
    } else {
        document.getElementById('fuelNeeded').textContent = 'Invalid input';
        document.getElementById('fuelCost').textContent = 'Invalid input';
    }
}

document.getElementById('fuelPrice').addEventListener('input', function() {
    document.getElementById('fuelPriceOutput').textContent = this.value;
});
