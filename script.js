
    // Disable Right Click (Prevents "Save Image As")
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    // Disable Screenshot using PrintScreen Key
    document.addEventListener("keydown", function(event) {
        if (event.key === "PrintScreen") {
            alert("Screenshots are not allowed!");
            event.preventDefault();
        }
    });

    // Prevent Dragging of Images
    document.addEventListener("dragstart", function (event) {
        event.preventDefault();
    });

