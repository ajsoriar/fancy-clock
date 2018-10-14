/**
 * loading-layer
 * Pure javascript notifications plugin. No JQuery needed.
 * @version v0.0.1 - 2018-05-26
 * @link https://github.com/ajsoriar/loading-layer
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function() { // An immediately invoked function will wrap our code

    "use strict";

    // About this here: Our IIFE will be called globally, so this will be pointing at the window. 

    console.log("(1) Value of this:", this); // In the case of "use strict"; this will be undefined.
 
    window.LL = { // Use 'window' to share ny object in the global scope.

        //return {

            show: function(jsonConfig) {
                console.log("Loading Layer show()");

            },
        
            hide: function(jsonConfig) {
                console.log("Loading Layer hide()");

            }
        
        //}

    };

}());