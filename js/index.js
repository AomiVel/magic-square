/*
window.addEventListener("load", adjustTableSize);
window.addEventListener("resize", adjustTableSize);

function adjustTableSize() {
    let parentElem = document.getElementById("magic-square");
    let table = document.getElementById("magic-square-table");

    resetClassList(table);

    if (parentElem.offsetWidth < parentElem.offsetHeight) { table.classList.add("w"); }
    else { table.classList.add("h"); }
}

function resetClassList(elem) {
    elem.classList.remove("w");
    elem.classList.remove("h");
}*/
