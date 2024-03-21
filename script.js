// Function to switch between calculator modes
function switchMode(mode) {
    // Hide all modes
    var modes = document.querySelectorAll('.mode');
    modes.forEach(function(mode) {
        mode.classList.remove('active');
    });

    // Show selected mode
    var selectedMode = document.getElementById('mode' + mode);
    selectedMode.classList.add('active');
}

// Function to calculate fuel needed and cost (Mode 1)
function calculateMode1() {
    var distance = parseFloat(document.getElementById('distance1').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency1').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice1').value);
    
    if (!isNaN(distance) && !isNaN(fuelEfficiency) && !isNaN(fuelPrice)) {
        var fuelNeeded = distance / fuelEfficiency;
        var fuelCost = fuelNeeded * fuelPrice;
        
        document.getElementById('fuelNeeded1').textContent = fuelNeeded.toFixed(2);
        document.getElementById('fuelCost1').textContent = fuelCost.toFixed(2);
    } else {
        document.getElementById('fuelNeeded1').textContent = 'Fill all three parameters';
        document.getElementById('fuelCost1').textContent = '';
    }
}

// Function to calculate distance and fuel you get (Mode 2)
function calculateMode2() {
    var money = parseFloat(document.getElementById('money2').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice2').value);
    var fuelEfficiency = parseFloat(document.getElementById('fuelEfficiency2').value);

    if (!isNaN(money) && !isNaN(fuelPrice) && !isNaN(fuelEfficiency)) {
        var distance = (money / fuelPrice) * fuelEfficiency;
        var fuelYouGet = money / fuelPrice;
        
        document.getElementById('distance2').textContent = distance.toFixed(2);
        document.getElementById('fuelYouGet').textContent = fuelYouGet.toFixed(2);
    } else {
        document.getElementById('distance2').textContent = 'Fill all three parameters';
        document.getElementById('fuelYouGet').textContent = '';
    }
}

// Function to calculate mileage and total cost (Mode 3)
function calculateMode3() {
    var option = document.getElementById('option').value;
    var cost = parseFloat(document.getElementById('cost3').value);
    var distance = parseFloat(document.getElementById('distance3').value);

    if (!isNaN(cost) && !isNaN(distance)) {
        if (option === 'refuel') {
            var mileage = distance / cost;
            var totalCost = cost * distance;
        } else if (option === 'totalFuel') {
            var mileage = distance / cost;
            var totalCost = cost;
        }

        document.getElementById('mileage').textContent = mileage.toFixed(2);
        document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    } else {
        document.getElementById('mileage').textContent = 'Fill both parameters';
        document.getElementById('totalCost').textContent = '';
    }
}
