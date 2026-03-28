function showTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('live-clock').innerText = timeString;
}

setInterval(showTime, 1000);
showTime();





const dispatchBtn = document.getElementById('dispatch-btn');
const statusInput = document.getElementById('status');
const locationInput = document.getElementById('location');
const incidentList = document.getElementById('incident-list');


dispatchBtn.addEventListener('click', function() {



const status = statusInput.value;
const location = locationInput.value;


if (location === "") { alert("Please enter a location!"); return
 }

 const newItem = document.createElement('li');
 newItem.textContent = "[" + status + "] - Location: " + location;
incidentList.appendChild(newItem);
});

const addBtn = document.getElementById('addtoqueue-btn');

addBtn.addEventListener('click', function() {
    console.log("Button was clicked!");
});