//get the input element 
const input = document.getElementById('weight-input');

//add event listener 
input.addEventListener('input', (e) => {
    let kg = e.target.value;
    document.getElementById('pound').innerHTML = kg * 2.205;
    document.getElementById('gram').innerHTML = kg * 1000;
    document.getElementById('us').innerHTML = kg / 907.2;
    document.getElementById('ounce').innerHTML = kg * 35.274;
})

// clear the value on reload the page 
window.onload = () => {
    input.value = "";
}