function toggleButton(){
    const trigger = document.getElementById("trigger");
    const dot = document.getElementById("dot");
    clickToGo.style.backgroundColor="rgba(15, 100, 15)";
    clickToGo.style.boxShadow="3px 0 3px rgba(15, 240, 15, .6),-3px 0 3px rgba(15, 240, 15, .6)";

    trigger.style.top="38%";

    dot.style.backgroundColor="rgba(15, 100, 15)";
    dot.style.boxShadow="3px 0 3px rgba(25, 240, 25, .35),-3px 0 3px rgba(25, 240, 25, .35)";
}

const clickToGo = document.getElementById("button");
clickToGo.addEventListener("click", toggleButton);