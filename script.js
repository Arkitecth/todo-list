const switchDark = document.querySelector(".switch-dark"); 
const desktopBackground = document.querySelector(".bg-desktop"); 
const body = document.querySelector("body");
const listGroup = document.querySelector(".list-group")
const entry = document.querySelector(".entry"); 
const statusBar = document.querySelector(".status-bar")
const dragDropParagraph = document.querySelector(".drag-drop"); 
const mobileStatusBar = document.querySelector(".status.mobile"); 
let numElements = 0; 

function darkCheckMark() {
    checkButtons.forEach((element) => {
        element.classList.toggle("dark-check");
    })
}

function toggleDark() {
    const listItems = document.querySelectorAll(".list-item");
    const inputTexts = document.querySelectorAll(".input-text");
    let checkButtons = document.querySelectorAll("input[type='checkbox']");
    const filePath = switchDark.getAttribute("src");
    if(filePath === "images/icon-moon.svg") {
        switchDark.src = "images/icon-sun.svg"; 
        desktopBackground.src = "images/bg-desktop-dark.jpg";
      
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

function updateUI(listItem, inputText, checkbox) {
    const filePath = switchDark.getAttribute("src");
    if(filePath === "images/icon-moon.svg") {
        listItem.classList.remove("dark-list-color"); 
        inputText.classList.remove("dark-list-color");
        checkbox.classList.remove("dark-check");
    } else {
        listItem.classList.add("dark-list-color"); 
        inputText.classList.add("dark-list-color");
        checkbox.classList.add("dark-check");
    }
}


function deleteItem(listItem) {
    if(numElements === 1) {
        listGroup.style.display = "none";
        statusBar.style.display = "none";
        dragDropParagraph.style.display = "none";
    }
    numElements -= 1; 
    listItem.currentTarget.parentElement.remove();
    listItem.currentTarget.parentElement.removeEventListener("mouseover",showCross); 
    listItem.currentTarget.parentElement.removeEventListener("mouseout", hideCross)
}

function hideCross(listItem) {
    listItem.currentTarget.lastElementChild.style.display = "none";
}

function showCross(listItem) {
    listItem.currentTarget.lastElementChild.style.display = "inline";
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
    inputEntry.classList.add("input-text");

    // Cross 
    const cross = document.createElement("img");
    cross.src = "images/icon-cross.svg";
    cross.classList.add("cross");
    cross.style.display = "none";

    listItem.addEventListener("mouseover", showCross);
    listItem.addEventListener("mouseout", hideCross); 

    listItem.appendChild(checkbox); 
    listItem.appendChild(inputEntry);
    listItem.appendChild(cross);
    listGroup.insertBefore(listItem, statusBar);
    listGroup.style.display = "block";
    statusBar.style.display = "flex";
    dragDropParagraph.style.display = "block";
    numElements += 1;

    cross.addEventListener("click", deleteItem, listItem); 
    updateUI(listItem, inputEntry, checkbox);
}

function checkButtonHandler(element) {
    element.currentTarget.parentElement.classList.toggle("complete");
    element.currentTarget.nextElementSibling.classList.toggle("complete");
    element.currentTarget.nextElementSibling.toggleAttribute("disabled");
}

function onChecked() {
    const listCheckButtons = document.querySelectorAll(".list-group .list-item .checkbox");
    listCheckButtons.forEach((element) => {
        element.addEventListener("click", checkButtonHandler, element);
    })
}

entry.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        addTodo(entry.value);
        onChecked();
    }
});

switchDark.addEventListener("click", toggleDark); 