function calculateTraingleArea(){
//get traingle base value
    const baseField = document.getElementById('triangle-base');
    const baseFieldValueText = baseField.value;
    const base = parseFloat(baseFieldValueText);
// get traingle height value
    const heightField = document.getElementById('triangle-height');
    const heightFieldValueText = heightField.value;
    const height = parseFloat(heightFieldValueText);

    const area = 0.5 * base * height;
// show area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
// get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthFieldValueText = widthField.value;
    const width = parseFloat(widthFieldValueText);
    
// get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueText = lengthField.value;
    const length = parseFloat(lengthFieldValueText);
    const  area = width * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}