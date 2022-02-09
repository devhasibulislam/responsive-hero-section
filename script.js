// action button 2
const imperialPrimerBG = document.getElementById('imperialPrimer');
imperialPrimerBG.onclick = imperialPrimer;
function imperialPrimer() {
    document.body.style.backgroundColor = '#222f3e';
}
// action button 3
function russianBlack() {
    document.body.style.backgroundColor = '#111827';
    window.alert("Your subscription done successfully :)");
}
// action button 4
// just mention the function name without parenthesis
// this indicates just call the function without execution
const aquaVelvetBG = document.getElementById('aquaVelvet');
aquaVelvetBG.onclick = function aquaVelvet() {
    document.body.style.backgroundColor = '#01a3a4';
}
// action button 5
// anonymous funciton
const doubleDragonSkinBG = document.getElementById('doubleDragonSkin');
doubleDragonSkinBG.onclick = function () {
    document.body.style.backgroundColor = '#ff9f43';
}
// action button 6
// addEventListener or direct shortcut or direct anonymous shortcut
/* const turkishAquaBG = document.getElementById('turkishAqua');
turkishAquaBG.addEventListener('click', turkishAqua);
function turkishAqua() {
    document.body.style.backgroundColor = '#EA2027';
} */

// or,

/* document.getElementById('turkishAqua').addEventListener('click', function turkishAqua() {
    document.body.style.backgroundColor = '#EA2027';
}); */

// or,

document.getElementById('turkishAqua').addEventListener('click', function () {
    document.body.style.backgroundColor = '#EA2027';
});

/* manage event action */
const clickButton = document.getElementById('blueBell');
const inputBox = document.getElementById('hero-field');
const textOutput = document.getElementById('text-output');
clickButton.addEventListener('click', function () {
    textOutput.innerText = inputBox.value;
    inputBox.value = '';
});

// const subtitleOutput = document.getElementById('subtitle-output');
const subtitleOutput = document.body.childNodes[1].childNodes[1].childNodes[3].childNodes[3];
// const acceptInput = document.getElementById('turkishAqua');
const acceptInput = document.getElementsByClassName('accept-input')[0];
// acceptInput.addEventListener('click', largeTextInput);
acceptInput.onclick = largeTextInput;
function largeTextInput() {
    const p = document.createElement('p');
    // subtitleOutput.innerText = inputBox.value;
    subtitleOutput.appendChild(p).setAttribute('class', 'remove-text');
    subtitleOutput.appendChild(p).innerText = inputBox.value;
};

const deleteBtn = document.getElementsByClassName('delete-btn')[0];
deleteBtn.addEventListener('click', function(){
    document.getElementsByClassName('remove-text')[0].style.display = 'none';
    // document.getElementById('subtitle-output').style.display = 'none';
});