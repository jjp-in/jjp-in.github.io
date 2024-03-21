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

// Function to calculate mileage and total cost (Mode 3)
function calculateMode3() {
    var option = document.querySelector('input[name="calcOption"]:checked').value;
    var value = parseFloat(document.getElementById('value3').value);
    var distance = parseFloat(document.getElementById('distance3').value);

    if (!isNaN(value) && !isNaN(distance)) {
        if (option === 'refuel') {
            var output1 = value / distance;
            var output2 = value * distance;
        } else if (option === 'totalFuel') {
            var output1 = value * distance;
            var output2 = value / distance;
        }

        document.getElementById('output1').textContent = output1.toFixed(2);
        document.getElementById('output2').textContent = output2.toFixed(2);
    } else {
        document.getElementById('output1').textContent = 'Fill both parameters';
        document.getElementById('output2').textContent = '';
    }
}
