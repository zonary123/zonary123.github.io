var r = document.querySelector(':root');

function myFunction_get() {
    var rs = getComputedStyle(r);
}


var checkbox = document.getElementById('sonmoon');
checkbox.addEventListener("change", validaCheckbox, true);

var x = 1;
function validaCheckbox() {
var checked = checkbox.checked;
if(checked) {
    
}
}

function setTheme() {
    if (document.getElementById("sonmoon").checked) {
        r.style.setProperty('--body-bg', '#000');
        var x = 1 + 1;
    } else {
        r.style.setProperty('--body-bg', '#000');
}
}

