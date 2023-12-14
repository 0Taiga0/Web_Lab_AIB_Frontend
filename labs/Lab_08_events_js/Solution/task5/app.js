red.oninput = green.oninput = blue.oninput = fieldValidation;
generated = document.getElementById('generated');

fieldValidation();

function fieldValidation(gen) {
    let r = document.getElementById('red').value || 0;
    let g = document.getElementById('green').value || 0;
    let b = document.getElementById('blue').value || 0;

    r = (r >= 0 && r <= 255) && r !== "" ? r : 0;
    g = (g >= 0 && g <= 255) && g !== "" ? g : 0;
    b = (b >= 0 && b <= 255) && b !== "" ? b : 0;

    const rgb = `rgb(${r}, ${g}, ${b})`;

    gen != 'gen' ? swapColorContainer(rgb) : addColorBox(rgb);

}


function swapColorContainer(rgb) { 
    document.getElementById('color-container').style.backgroundColor = rgb;
}

function addColorBox(rgb) {
    const colorBox = document.createElement('div');
    colorBox.style.backgroundColor = rgb;
    colorBox.className = 'color-box';
    colorBox.id = 'colorBox';

    colorBox.onclick = function() {
        document.body.style.backgroundColor = colorBox.style.backgroundColor;
    }


    generated.appendChild(colorBox);
    overflow = document.getElementById('generated').childElementCount;
    overflow > 6 ? document.getElementById('scroller').style.display = 'flex' : 0;
}



function nextColorBox() {
    Boxes = document.getElementsByClassName('color-box');
    overflow = document.getElementById('generated').childElementCount;
    last = Boxes[overflow - 1].style.backgroundColor;
    t2 = Boxes[0].style.backgroundColor;
    for (let i = 0; i < overflow - 1; i++) {
        t1 = Boxes[i + 1].style.backgroundColor;
        Boxes[i + 1].style.backgroundColor = t2;
        t2 = t1;

    }
    Boxes[0].style.backgroundColor = last
}

function prevColorBox() {
    Boxes = document.getElementsByClassName('color-box');
    overflow = document.getElementById('generated').childElementCount;
    first = Boxes[0].style.backgroundColor;

    Boxes[1].style.backgroundColor = 'red'

    for (let i = 1; i <= overflow - 1; i++) {
        Boxes[i - 1].style.backgroundColor = Boxes[i].style.backgroundColor;
    }
    Boxes[overflow - 1].style.backgroundColor = first;
}
