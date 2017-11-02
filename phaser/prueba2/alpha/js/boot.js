// game = Object

var Boot = Boot || {};

// creaate clase Boot

Boot = {
	preload: function () {
		musicaBtn: '',
		game.load.image('tile', 'sprites/fondoInicio.png');
		game.load.spritesheet('boton', 'sprites/botones.png', 180 ,80);
		game.load.audio('musicaIni', 'audio/oedipus.mp3');
		game.load.audio('clickBtn', 'audio/ping.mp3');
	},
	create:function() {
		game.add.sprite(0,0, 'tile');
		var musica = game.add.audio('musicaIni');
		musica.play('',0 , 0.3, true);
		this.musicaBtn = game.add.audio('clickBtn');

		game.add.button(400,300, 'boton',this.iniciar , this , 2,1,0);
	},

	iniciar: function() {
		console.log('inicia videojuego');
		this.musicaBtn.play('',0,0.2);
	}
}
