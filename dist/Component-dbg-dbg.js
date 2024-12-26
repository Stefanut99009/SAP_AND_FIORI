sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap_and_fiori.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // Set up the JSON model
            var oModel = new JSONModel({ message: "" });
            this.setModel(oModel); // Ensures the model is available globally

            // Set up the i18n model for translations
            var i18nModel = new ResourceModel({
                bundleName: "sap_and_fiori.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    });
});
