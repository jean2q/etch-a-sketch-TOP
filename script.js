
const clearBtn = document.querySelector('#clearButton');
clearBtn.addEventListener("click", clearGrid)
let gridSize = document.querySelector("#size").value
createMyDivs(gridSize);
let color = document.querySelector("#color").value
console.log(color)

determineWhichRadio();

function determineWhichRadio(){
    let allRadioButtons = document.querySelectorAll('input[type=radio]')
    console.log(allRadioButtons);

    allRadioButtons.forEach(element => {
            element.addEventListener("click", determineColor);
    });
}

function determineColor(e){
    if (this.value == "solid"){
        color = document.querySelector("#color").value
        
    }
    else if(this.value == "randomColor"){
        color = "#"+Math.floor(Math.random()*16777215).toString(16);
        console.log(color)
    }
    else if(this.value == "darken"){
        
    }
    console.log(e.target)
}

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

function changeColor(e){
    e.target.setAttribute("style", "background-color:"+color+";")
    console.log(e)
    console.log(this)
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