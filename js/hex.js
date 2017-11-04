
function getHexWidth(){
    var container = document.getElementById("container");
    var computerStyle = window.getComputedStyle(container);
    var fontSize = parseInt(computerStyle.getPropertyValue('font-size'));
    var hWidth = (12+0.5)*parseInt(fontSize);
    return hWidth;
}


function screenIsWide(hWidth){
    var container = document.getElementById("container");
    var cWidth = container.offsetWidth;
    if (cWidth < 3*hWidth){
        return false;
    }
    return true;
}


function getHexInWidth(hWidth){
    var container = document.getElementById("container");
    var cWidth = container.offsetWidth;
    return Math.floor(cWidth/hWidth);
}


var hWidth = getHexWidth();
var hInWidth = getHexInWidth(hWidth);
var screenIsWide = screenIsWide(hWidth);

function scaleUpDown() {
    var container = document.getElementById("container");
    var cWidth = container.offsetWidth;

    if (cWidth < hWidth*hInWidth) {
        return -1
    }
    else if (hWidth*(1 + hInWidth) <= cWidth){
        return 1
    }
    else return 0
}


function setHexStyle(){
    var container = document.getElementById("container");
    for (i = 0; i < container.length; i++){

        var hex0 = container.children[i];
        var hex1 = hex0.firstChild;
        var hex2 = hex1.firstChild;

        hex0.className = "hex0_large";
        hex2.className = "hex1_large";
        hex2.className = "hex1_large";

    }
}


function set_square_style(){
    var hex0 = document.getElementsByClassName("hex0_large");
    var hex1 = document.getElementsByClassName("hex1_large");
    var hex2 = document.getElementsByClassName("hex2_large");

    for (i= 0; i < hex0.length; i++){
        hex0[i].className = "hex0_small";
    }
    for (i= 0; i < hex1.length; i++){
        hex1[i].className = "hex1_small";
    }
    for (i= 0; i < hex2.length; i++){
        hex2[i].className = "hex2_small";
    }
}


function new_hex(className, workNumber){
    var hex0 = document.createElement("div");
    var hex1 = document.createElement("div");
    var hex2 = document.createElement("div");

    var img = document.createElement("img");
    img.className = "galleryImage_" + className;
    img.src = "./work/" + workNumber + "/square.jpg";


    var link = document.createElement("a");
    link.href = "./case.html#" + workNumber;

    hex0.className = "hex0_" + className;
    hex1.className = "hex1_" + className;
    hex2.className = "hex2_" + className;


    link.appendChild(img);

    hex2.appendChild(link);
    hex1.appendChild(hex2);
    hex0.appendChild(hex1);


    return hex0
}


function clear_container(){
    var container = document.getElementById("container");
    var children = container.children;
    while(children.length > 0){
        children[0].parentNode.removeChild(children[0]);
    }
}


function fill_cont(className){
    for (i = 0; i <50; i++){
        var hex0 = new_hex(className, i%17 + 1); //change to file and folder number
        var container = document.getElementById("container");
        container.appendChild(hex0);
    }
}


function remove_elements_by_class(class_name){
    var elements = document.getElementsByClassName(class_name);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


function add_linebreak(index){
    var container = document.getElementById("container");
    var linebreak = document.createElement("br");
    linebreak.className = "breakline";
    container.insertBefore(linebreak, container.children[index]);
}


function addParagraphs(hInWidth){
    var container = document.getElementById("container");
    var i = hInWidth -1;

    while (i < container.childElementCount) {
        add_linebreak(i);
        i += hInWidth + 1;
        add_linebreak(i);
        i += hInWidth;
    }
}


function resize() {
    console.log("RESIZE");
    var scale = scaleUpDown();

    if (scale == 0){
        return
    }

    hInWidth += scale

    if (hInWidth <= 1 && 0 < scale){ //scale up from 1 or less than one
        return
    }
    else if(hInWidth == 1 && scale < 0){
        clear_container();
        fill_cont("tiny");
        return
    }
    else if (hInWidth == 2 && scale != 0) {  //scale up/down from 3
        clear_container();
        fill_cont("small");
        return
    }
    else if (hInWidth == 3 && scale > 0){ //scale up to three
        clear_container();
        fill_cont("large");
    }
    else{
        remove_elements_by_class("breakline");
    }
    addParagraphs(hInWidth);
}


var doit;
var onresize = function(e) {
    clearTimeout(doit);
    doit = setTimeout(resize, 5);
}


window.addEventListener("resize", onresize);


if (3 <= hInWidth){
    fill_cont("large");
    addParagraphs(hInWidth);
}


else{
    fill_cont("small");
}
