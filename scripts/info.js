let petSaloon = {
    //attributes
    name:"The Fashion Pet",
    address:"Ave University 768",
    hours:{
        open:"9:00 am",
        close:"6:00 pm"
    }
}

function displayInfo(){
    document.getElementById("salonInfo").innerHTML=`<p>Welcome to the ${petSaloon.name} family. It is available at ${petSaloon.address} from ${petSaloon.hours.open} to ${petSaloon.hours.close}</p>`;
}

function init(){
    
    displayInfo();
  
    
}

window.onload=init;