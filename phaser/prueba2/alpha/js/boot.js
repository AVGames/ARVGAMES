//Objeto balies 

var Boot = Boot || {};

//Crear clase Boot
Boot = {
	preload: function () {
		musicaBtn: '',
		balies.load.image('fondoIni', 'sprites/fondoInicio.png');
		balies.load.spritesheet('boton', 'sprites/botones.png', 180, 80);
		balies.load.audio('musicaIni', 'audio/oedipus.mp3');
		balies.load.audio('clicBtn', 'audio/ping.mp3');
		},
	create: function () {
		balies.add.sprite(0, 0, 'fondoIni');
		var musica = balies.add.audio('musicaIni');
		musica.play('', 0, 0.5, true);
		this.musicaBtn = balies.add.audio('clicBtn');
		
		balies.add.button(400, 300, 'boton', this.iniciar, this, 2, 1, 0);
		},
		iniciar: function () {
			this.musicaBtn.play();
			console.log('Inicia videojuego.');			
			}
}