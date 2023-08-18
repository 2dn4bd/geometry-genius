function calculateTraingleArea(){
//get traingle base value
    const baseField = document.getElementById('triangle-base');
    const baseFieldValueText = baseField.value;
    const base = parseFloat(baseFieldValueText);
    if(isNaN(base)){
        alert('Triangle base input should be only number');
        return;
    }
// get traingle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldValueText = heightField.value;
    const height = parseFloat(heightFieldValueText);
    if(isNaN(height)){
        alert('Triangle height input should be only number');
        return;
    }
    const area = 0.5 * base * height;
// show area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea(){
// get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthFieldValueText = widthField.value;
    const width = parseFloat(widthFieldValueText);
    if(isNaN(width)){
        alert('Rectangle width input should be only number');
        return;
    }
    
// get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueText = lengthField.value;
    const length = parseFloat(lengthFieldValueText);
    if(isNaN(length)){
        alert('Rectangle lenght input should be only number');
        return;
    }
    const  area = width * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
    addToCalculationEntry('rectangle', area);
}

// reusable function  for reduce duplicate code
function colculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('please input number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area)

//add to calculation entry
    addToCalculationEntry('parallelogram', area);
}


function calculateEllipseArea(){
    const majorRadius = document.getInputValue('ellipse-major-radius');
    const mainorRedius = document.getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * mainorRedius;
    const areaToDechimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaToDechimal);
    addToCalculationEntry('ellipse-area', areaToDechimal);
}

//reusable function for get input field value in number
function getInputValue(fieldld){
    const inputField = document.getElementById(fieldld)
    const inputFieldValueText = inputField.value;
    const value = parseFloat(inputFieldValueText);
    return value;
}

// reusable set span, p, div etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
/*
1.get the element where your want to add the dynamic html
2.create an element you want to add
3.if needed add some class
4.set inner html it could be dynamic tamplate string
5.append the created element as a child of the parent
*/
function addToCalculationEntry(areaType, area){
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm <sup>2</sup>   <button class="btn btn-sm btn-success">Convert</button>`;
    calculationEntry.appendChild(p)
}