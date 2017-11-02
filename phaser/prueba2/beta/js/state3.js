
demo.state3 = function() {};
demo.state3.prototype = {
	preload: function () {},
	create: function () {
		game.stage.backgroundColor  = '#7FC5E7';
		addChangeStateEventListener();
	},
	update: function () {}
};