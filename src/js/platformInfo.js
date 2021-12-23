function getSystemInfo() {
    try {
        if (typeof Hisense_GetDeviceID === "function")
            var deviceId = Hisense_GetDeviceID();
        //do something
        console.log("deviceId: " + deviceId);
    } catch (e) {
        /*do something*/
        console.log(
            "It looks like this App is in a standard browser, not on a real TV!"
        );
    }
}
