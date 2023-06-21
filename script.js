const switchDark = document.querySelector(".switch-dark"); 
const desktopBackground = document.querySelector(".bg-desktop"); 
const body = document.querySelector("body");
const listItems = document.querySelectorAll(".list-item");
const listGroup = document.querySelector(".list-group")
const inputTexts = document.querySelectorAll(".input-text")
const entry = document.querySelector(".entry"); 
const statusBar = document.querySelector(".status-bar")
const dragDropParagraph = document.querySelector(".drag-drop")
const mobileStatusBar = document.querySelector(".status.mobile")
const checkButtons = document.querySelectorAll("input[type='checkbox']")


function darkCheckMark() {
    checkButtons.forEach((element) => {
        element.classList.toggle("dark-check");
    })

}

function toggleDark() {
    const filePath = switchDark.getAttribute("src");
    if(filePath === "images/icon-moon.svg") {
        switchDark.src = "images/icon-sun.svg"; 
        desktopBackground.src = "images/bg-desktop-dark.jpg"
      
    } else {
        switchDark.src = "images/icon-moon.svg"; 
        desktopBackground.src = "images/bg-desktop-light.jpg";
    }
    body.classList.toggle("dark-background");
    listItems.forEach(element => {
        element.classList.toggle("dark-list-color");
    });

    inputTexts.forEach(element => {
        element.classList.toggle("dark-list-color");
    });

    checkButtons.forEach(element => {
        element.classList.toggle("dark-check");
    })
    listGroup.classList.toggle("dark-list-color");
    mobileStatusBar.classList.toggle("dark-list-color");
   
}

function addTodo(value) {
    // Create a Todo Element 

    // Div
    const listItem = document.createElement("div"); 
    listItem.classList.add("list-item")

    // Checkbox 
    const checkbox = document.createElement("input"); 
    checkbox.type = "checkbox"; 
    checkbox.name = "checkbox"
    checkbox.classList.add("checkbox");


    //Input 
    const inputEntry = document.createElement("input"); 
    inputEntry.type = "text";
    inputEntry.name = "text";
    inputEntry.value = value;
    inputEntry.classList.add("input-text")


    // Cross 
    const cross = document.createElement("img");
    cross.src = "images/icon-cross.svg";
    cross.style.display = "none";


    listItem.appendChild(checkbox); 
    listItem.appendChild(inputEntry);
    listItem.appendChild(cross);
    listGroup.insertBefore(listItem, statusBar);

    listGroup.style.display = "block";
    statusBar.style.display = "flex";
    dragDropParagraph.style.display = "block";
}

entry.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        addTodo(entry.value); 
    }
});

switchDark.addEventListener("click", toggleDark); 