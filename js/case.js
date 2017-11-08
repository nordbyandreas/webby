
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


