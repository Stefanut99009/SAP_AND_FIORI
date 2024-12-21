sap.ui.getCore().attachInit(function () {
    "use strict";

    // Create a simple button
    new sap.m.Button({
        text: "Click Me",
        press: function () {
            sap.m.MessageToast.show("Hello, OpenUI5!");
        }
    }).placeAt("content");
});
