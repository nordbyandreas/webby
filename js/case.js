
var index = 0;

function prev() {

    console.log("prev");
    console.log(index);

    if (index == 0) {
        return;
    }
    var container = document.getElementById("container");

    var oldCase = container.children[index];
    index -= 1;
    var newCase = container.children[index];
    newCase.style.display = "block";
    oldCase.style.display = "none";
}
function next() {

    console.log("next");
    console.log(index);
    if (index == 9) {
        return;
    }
    var container = document.getElementById("container");

    var oldCase = container.children[index];
    index += 1;
    var newCase = container.children[index];
    newCase.style.display = "block";
    oldCase.style.display = "none";
}

var nextButton = document.createElement("div");
var prevButton = document.createElement("div");

var nextArrow = document.createElement("img");
var prevArrow = document.createElement("img");


nextButton.id = "nextButton";
prevButton.id = "prevButton";

nextArrow.src = "img/triangleRightGray.png";
prevArrow.src = "img/triangleLeftGray.png";

nextArrow.style.maxWidth = "100%";
nextArrow.style.maxHeight = "100%";

prevArrow.style.maxWidth = "100%";
prevArrow.style.maxHeight = "100%";

nextButton.appendChild(nextArrow);
prevButton.appendChild(prevArrow);


nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

var content = document.getElementById("content");

content.insertBefore(nextButton, content.children[1]);
content.insertBefore(prevButton, nextButton);



//link to an article like this .../work.html#<number>
var url = window.location.href;
var argument = url.split("#")[1]; //if you break it: it's your own fault (no need to cast exceptions)

var index = parseInt(argument);

//We do not hide anything on default in case the user has disabled javascript in the browser
var container = document.getElementById("container");

var numberOfCases = container.children.length;

for (var i = 0; i < numberOfCases; i++){
    container.children[i].style.display = "none";
}
container.children[index].style.display = "block";
