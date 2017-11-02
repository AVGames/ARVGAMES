var demo = {};

demo.state0 = function() {};
demo.state0.prototype = {
	preload: function () {},
	create: function () {
		game.stage.backgroundColor = '#87E77F';
		addChangeStateEventListener();
		//game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState,null,null, 1);
		//game.input.keyboard.addKey(Phaser.Keyboard.TWo).onDown.add(changeState,null,null, 2);
	},
	update: function () {}
};

function changeState(i,stateNum){
	game.state.start('state' + stateNum);
	console.log('state' + stateNum);
}

function addKeyCallback(key,fn,args){
	game.input.keyboard.addKey(key).onDown.add(fn,null,null,args);
}

function addChangeStateEventListener() {
	addKeyCallback(Phaser.Keyboard.ZERO, changeState,0);
	addKeyCallback(Phaser.Keyboard.ONE, changeState,1);
	addKeyCallback(Phaser.Keyboard.TWO, changeState,2);
	addKeyCallback(Phaser.Keyboard.THREE, changeState,3);
	addKeyCallback(Phaser.Keyboard.FOUR, changeState,4);
	addKeyCallback(Phaser.Keyboard.FIVE, changeState,5);
	addKeyCallback(Phaser.Keyboard.SIX, changeState,6);
	addKeyCallback(Phaser.Keyboard.SEVEN, changeState,7);
	addKeyCallback(Phaser.Keyboard.EIGHT, changeState,8);
	addKeyCallback(Phaser.Keyboard.NINE, changeState,9);
}