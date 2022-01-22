window.onload = function() {
    // start

    // identify (create) the div
    let starterDiv = document.getElementById('starter-div');
    // made the div
    let firstHeading = document.createElement('h2');
    // linking & adding stylings and content to the div
    firstHeading.innerText = 'This is an H2 created with JS';
    firstHeading.classList.add('js-header');

    //  appending the content to the div
    starterDiv.appendChild(firstHeading);

    // identify another div and add stylings
    let secondHeading = document.createElement('h2');
    secondHeading.innerText = 'This is another H2 element with JS. Wow!';
    secondHeading.classList.add('js-header');
    secondHeading.id = 'second-h2';

    starterDiv.appendChild(secondHeading);
    // end
}


function showName(){
    console.log('showName');
    // start
    let name = document.getElementById('name').value;
    document.getElementById('greeting-text').innerText = 'Hi ' + name;
    // end
}

function changeColour(colour) {
    // start
    document.body.style.backgroundColor = colour;
    // end
}

function resetColour() {
    document.body.style.backgroundColor = '#FCE166';
}

function toggleLightbulb() {
    // start
    let lightbulb = document.getElementById('light');
    lightbulb.classList.toggle('on');
    // log how many clicks to the turn on the lightbulb
    console.log(lightbulb);
    // end
}
