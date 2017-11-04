
//var index = 0;
var numberOfCases = 17;



//TODO: GET TEXT ROM TILE IN FOLDER
var text = "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring whi ch I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisit e sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a si ngle stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stal ks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel t he presence of the Almighty, who formed us in his own image, and the breath"

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
    if (index == numberOfCases -1) {
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

var index = parseInt(argument) - 1;

//We do not hide anything on default in case the user has disabled javascript in the browser
var container = document.getElementById("container");

for (var i = 1; i <= numberOfCases; i++){

    var hea = document.createElement("h1");
    hea.className = "pageTitle";
    hea.textContent = "Case " + i + " of " + numberOfCases;
    var article = document.createElement("div");
    article.className = "case";
    article.style.display = "none";


    var image = document.createElement("img");
    image.src = "./work/" + i + "/square.jpg";
    image.className = "workImgSquare";

    var paragraph = document.createElement("p");
    paragraph.innerHTML = text;

    article.appendChild(hea);
    article.appendChild(image);
    article.appendChild(paragraph);
    container.appendChild(article);
}
container.children[index].style.display = "block";
