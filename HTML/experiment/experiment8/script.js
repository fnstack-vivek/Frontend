document.getElementById("btn2").addEventListener("click", function () {
    // Check if all fields are filled (optional validation)
    const name = document.getElementById("name").value.trim();
    const motto = document.getElementById("motto").value.trim();
    const url = document.getElementById("url").value.trim();

    if (name && motto && url) {
        // Create the message box
        const messageBox = document.createElement("div");
        messageBox.textContent = "✅ Successfully Submitted!";
        messageBox.style.position = "absolute";
        messageBox.style.top = "50px";
        messageBox.style.right = "20px";
        messageBox.style.padding = "10px 20px";
        messageBox.style.backgroundColor = "#d4edda";
        messageBox.style.color = "#155724";
    
        messageBox.style.borderRadius = "5px";
       
        messageBox.style.fontWeight = "bold";

        // Add to body
        document.body.appendChild(messageBox);

        // Remove after 3 seconds
        // setTimeout(() => {
        //     messageBox.remove();
        // }, 3000);
    } else {
        alert("Please fill all fields before submitting.");
    }
});
document.getElementById("btn1").addEventListener("click", function () {
    document.getElementById("name").value = "";
    document.getElementById("motto").value = "";
    document.getElementById("url").value = "";
});