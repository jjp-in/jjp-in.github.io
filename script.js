function calculate() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuel').value);
    
    if (!isNaN(distance) && !isNaN(fuelEfficiency) && fuelEfficiency > 0) {
        var petrolNeeded = distance / fuelEfficiency;
        document.getElementById('result').textContent = petrolNeeded.toFixed(2);
    } else {
        document.getElementById('result').textContent = 'Invalid input';
    }
}
