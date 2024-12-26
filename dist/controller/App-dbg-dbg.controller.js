sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap_and_fiori.controller.App", {
        onInit: function () {
            var oComponent = this.getOwnerComponent();
            var oResourceBundle = oComponent.getModel("i18n").getResourceBundle();
            var oModel = oComponent.getModel();

            // Check if models are correctly retrieved
            if (!oResourceBundle) {
                console.error("i18n Resource Bundle is not available.");
                return;
            }
            if (!oModel) {
                console.error("JSON Model is not available.");
                return;
            }

            // Set the translated text to the model
            var sMessage = oResourceBundle.getText("greetingMessage");
            oModel.setProperty("/message", sMessage);

            console.log("Message initialized:", sMessage);
        }
    });
});
