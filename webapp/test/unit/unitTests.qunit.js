/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comkiewit/gitdemo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
