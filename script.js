

createMyDivs(20);
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

    let size = document.querySelector(".boxDiv").offsetHeight*number
    document.documentElement.style
    .setProperty('--size', size);
}

function changeColor(){
    this.setAttribute("style", "background-color:blue;")
}
