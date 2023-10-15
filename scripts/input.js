
function displayInput() {

    const inputText = document.getElementById("inputText").value;
    const inputUserName = document.getElementById("inputUserName").value;
    const outputDiv = document.getElementById("output");

    outputDiv.textContent = inputUserName + " : " + inputText;  
}