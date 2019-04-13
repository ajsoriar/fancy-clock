init = function () {

    LL.show({
        bgColor: "black",
        opacity: 0.7,
        //shape: "CIRCLE", // CIRCLE, DOUBLE-CIRCLE, DOTS, ...
        shapeColor1: "#ff0000",
        shapeOpacity1: 0.5,
        shapeColor2: "#ff0000",
        shapeOpacity2: 0.5
        //maxTime: 10000, // Hide after ...
        //targetByTagName: "body",
        //targetByID: "main"
    });

    LL.hide();

    AS.init();

    AS.attachAnimation({
        stepsNum: 60,
        milisecondsStep: 100,
        func: function (_animation) {
            clock.tic();
            //clock.log();
            clock.refreshUI();
        },
        onStart: function () {

        },
        whenFinish: function () {

        }
    })

    clock.init();

};

window.onload = init;

// --- Keys ---

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
        changeColor(e);
    }
});

function changeColor(e) {
    toggleClass(document.body, "invert")
}

// --- Easter eggs ---

EasterEggs.show();
EasterEggs.addSequence(null, [51, 50, 49], function () {
    ajsrConsole.log("MATCH!!! 3,2,1");
    changeColor();
})

// --- Canvas ---

flyingCanvas.start({
    width: 100,
    height: 200,
    src: "./void.png",
    showWings: false,
    animation: true
});