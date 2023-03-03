
sap.ui.define([
	"sap/ui/core/mvc/Controller",   // API Reference 
	"sap/m/MessageToast"

], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("Quickstart.App", {
		onPress : function () {                      // Performing Action
			MessageToast.show("Hello App!");
		}
	});

});