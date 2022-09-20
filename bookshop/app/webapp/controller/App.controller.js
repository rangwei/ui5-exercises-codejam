sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("sap.codejam.controller.App", {
		onInit: function () {
            alert("I am about to initialize the view.")
        },
		onSelect: function(oEvent) {
			// let oModel = this.getView().getModel();
			// let selectedModelPath = oEvent.getSource().getBindingContext().sPath;
			// let selectedModelData = oEvent.getSource().getModel().getProperty(selectedModelPath);
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			this.getView().byId("fbox").bindElement({path: sPath});

		}
	});
});