let chooser = "solid";
const clearBtn = document.querySelector('#clearButton');
clearBtn.addEventListener("click", clearGrid)
let gridSize = document.querySelector("#size").value
createMyDivs(gridSize);
let color = document.querySelector("#color").value
console.log(color)

determineWhichRadio();

function determineWhichRadio(){
    let allRadioButtons = document.querySelectorAll('input[type=radio]')

    allRadioButtons.forEach(element => {
            element.addEventListener("click", determineColor);
    });
}
function teste(){
    console.log("teste")
}

function determineColor(){
    
    if (this.value == "solid" || this.type != "radio"){
        let radioSolid = document.querySelector("#solid")
        radioSolid.checked = true;
        color = document.querySelector("#color").value
        console.log("Changed - solid color")
        chooser = "solid"
    }
    else if(this.value == "randomColor"){
        chooser = "randomColor"
        console.log("Changed -- Random Color")
    }
    else if(this.value == "darken"){
        chooser = "darken"
    }
}

function changeColor(e){
    if (chooser == "solid"){
        e.target.setAttribute("style", "background-color:"+color+";")
    }
    else if (chooser == "randomColor"){
        color = "#"+Math.floor(Math.random()*16777215).toString(16);
        e.target.setAttribute("style", "background-color:"+color+";")
    }
    else if(chooser = "darken"){
        this.style.backgroundColor = "black";
        this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.2;
        console.log(this)
    }
}

function createMyDivs(number){
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")
    wrapper.classList.add("wrapper")
    document.body.appendChild(wrapper)

    for(let i = 0; i<number*number; i++){
        let boxDiv = document.createElement("div")
        boxDiv.classList.add("boxDiv")
        wrapper.appendChild(boxDiv)
        boxDiv.addEventListener("mouseenter", changeColor);
    }
    

    let size = 960/number;
    document.documentElement.style
    .setProperty('--size', size);

    let wrapperSize = 960+number*2;
    document.documentElement.style
    .setProperty('--wrapperSize', wrapperSize);
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