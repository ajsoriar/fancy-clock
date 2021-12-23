document.addEventListener(
    "keydown",
    function (ev) {
        switch (ev.keyCode) {
            case VK_LEFT:
                // Handle mandatory key ←
                changeColor(e);
                break;
            case VK_RIGHT:
                // Handle mandatory key →
                changeColor(e);
                break;
            case VK_UP:
                // Handle mandatory key ↑
                changeColor(e);
                break;
            case VK_DOWN:
                // Handle mandatory key ↓
                changeColor(e);
                break;
            case VK_ENTER:
                // Handle mandatory key Confirm / Select / OK
                changeColor(e);
                break;
            case VK_BACK_SPACE:
                // Handle mandatory key Back / Return
                console.log("Bye bye!");
                window.close();
                break;
        }
        // Block the browser from handling the keydown event.
        ev.preventDefault();
    },
    false
);
