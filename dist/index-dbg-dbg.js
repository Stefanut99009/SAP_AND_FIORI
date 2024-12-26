sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
    "use strict";

    sap.ui.getCore().attachInit(function () {
        // Create and place the ComponentContainer
        new ComponentContainer({
            name: "sap_and_fiori", // Namespace of your Component
            settings: {
                id: "sap_and_fiori"
            },
            async: true // Enables asynchronous loading
        }).placeAt("content");
    });
});
