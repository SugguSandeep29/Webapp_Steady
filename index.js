
sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/m/MessageToast"], function (XMLView, MessageToast) {
	"use strict";

	XMLView.create({viewName: "Quickstart.App"})
		   .then(function (oView) {
		oView.placeAt("content");
	});

	// new Button({
	// 	text: "Ready...",
	// 	press: function () {
	// 		MessageToast.show("Hello World!");
	// 	}
	// }).placeAt("content");

});