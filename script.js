const sbmt = document.querySelector("#submit");
      sbmt.addEventListener('click', volume_sphere);

function volume_sphere(){

const volumeElement =  document.querySelector("#volume");
    var radius = document.getElementById("radius").value;
    console.log(`Rr-adius: ${radius}` );
        
    if (isNaN(radius)) {
        alert("Please enter a valid number for the radius.");
        return;
    }
    
    // Calculate the Volume of the sphere
    var vol = 4 * Math.PI * Math.pow(radius, 3)/3;
    
    // Display the result into volume box
    volumeElement.value =  vol.toFixed(2); 
}

//window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
