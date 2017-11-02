
demo.state4 = function() {};
demo.state4.prototype = {
	preload: function () {},
	create: function () {
		game.stage.backgroundColor  = '#8BC6C6';
		addChangeStateEventListener();
	},
	update: function () {}
};