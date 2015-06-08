var ghost = require("ghost");
var express = require("express");
var path  = require("path");
var app = express();
var Url = require("url");

ghost({
	config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {

	var appHostname = Url.parse(ghostServer.config.url).hostname;

	app.use("/", ghostServer.rootApp);

   ghostServer.start(app);
});
