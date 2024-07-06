function createMagicSquare() {
    let size = Number(document.getElementById("size").value);
    let magicSquare = document.getElementById("magic-square");

    // setGrid(size, magicSquare);

    if (size % 2 === 0) {
        createEvenSquare(size, magicSquare);
    }
    else {
        createOddSquare(size, magicSquare);
    }
}

function setGrid() {
    let size = Number(document.getElementById("size").value);
    let elem = document.getElementById("magic-square");

    let removingChildren = true;
    function removeChildrenLoop() {
        if (elem.firstChild) {
            elem.removeChild(elem.firstChild);
            requestAnimationFrame(removeChildrenLoop);
        }
        else {
            removingChildren = false;
        }
    }
    requestAnimationFrame(removeChildrenLoop);

    let y = 0;
    function loopY() {
        if (removingChildren) {
            return requestAnimationFrame(loopY);
        }
        let row = document.createElement("div");
        row.classList.add("row");
        elem.appendChild(row);

        let x = 0;
        function loopX() {
            let col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);

            x ++;
            if (x < size) {
                requestAnimationFrame(loopX);
            }
        }

        requestAnimationFrame(loopX);
        y ++;
        if (y < size) {
            requestAnimationFrame(loopY);
        }
    }

    requestAnimationFrame(loopY);
}

// 奇数
function createOddSquare(size, grid) {
    let cursorY = 0
    let cursorX = size / 2 | 0;
    let num = 1;
    function loop() {
        if (cursorX >= size && cursorY < 0) {
            cursorX --;
            cursorY += 2;
        }
        else if (cursorX >= size) {
            cursorX = 0;
        }
        else if (cursorY < 0) {
            cursorY = size - 1;
        }

        let elem = grid.children[cursorY].children[cursorX];

        if (elem.textContent !== "") {
            cursorX --;
            cursorY += 2;
            elem = grid.children[cursorY].children[cursorX];
        }

        let cursorNow = document.getElementsByClassName("cursor")[0];
        if (cursorNow !== undefined) {
            cursorNow.classList.add("filled");
            cursorNow.classList.remove("cursor");
        }

        elem.classList.add("cursor");
        elem.textContent = num.toString();

        cursorY --;
        cursorX ++;
        num ++;

        if (num <= size * size) {
            requestAnimationFrame(loop);
        }
    }
    requestAnimationFrame(loop);
}


// 偶数
function createEvenSquare(size, grid) {
    alert("Sorry! Even case is not supported yet.")
}