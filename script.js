
const clearBtn = document.querySelector('#clearButton');
clearBtn.addEventListener("click", clearGrid)
let gridSize = document.querySelector("#size").value
createMyDivs(gridSize);

function createMyDivs(number){
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")
    wrapper.classList.add("wrapper")
    document.body.appendChild(wrapper)

    for(let i = 0; i<number; i++){
        for(let j = 0; j<number; j++){
        let boxDiv = document.createElement("div")
        boxDiv.classList.add("boxDiv")
        wrapper.appendChild(boxDiv)
        boxDiv.addEventListener("mouseenter", changeColor);
    }
    }

    let size = 960/number;
    document.documentElement.style
    .setProperty('--size', size);

    let wrapperSize = 960+number*2;
    document.documentElement.style
    .setProperty('--wrapperSize', wrapperSize);
}

function changeColor(){
    this.setAttribute("style", "background-color:blue;")
}

function clearGrid(){
    let wrapper = document.querySelector(".wrapper")
    wrapper.remove()
    let gridSize = document.querySelector("#size").value
    if (gridSize > 100){
        gridSize == 100;
        alert("Max size is 100.")
        createMyDivs(gridSize)
        document.querySelector("#size").value = 100;
    }
    else{
        createMyDivs(gridSize)
    }
}