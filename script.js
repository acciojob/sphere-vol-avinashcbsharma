function volume_sphere() {
    // Step 1: Retrieve the radius value entered by the user from the input field.
    const radiusInput = document.getElementById('radius');
    const resultField = document.getElementById('volume');

    // Step 2: Validate the input, ensuring the radius is a non-negative number.
    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius < 0) {
        // alert('Please enter a valid non-negative number for the radius.');
		resultField.value = 'NaN';
        return;
    }
   const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
   resultField.value = volume.toFixed(4);
}

//window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
