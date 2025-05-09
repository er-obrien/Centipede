
//*************************************************
//	Game Constants
//*************************************************

//*************************************************
//	Global Variables
//*************************************************

let gameWidth = window.innerWidth - 20
let gameHeight = window.innerHeight - 20
let cnv
let player

//*************************************************
//	p5 Canvas Setup
//*************************************************


function setup(){
	if (gameWidth > 700){
	    gameWidth = 700
	}

	cnv = createCanvase(gameWidth, gameHeight)
	centerCanvas()
	textAlign(CENTER, CENTER)
	noCursor()

	player = new player(width/2, 0.75 * height, 20, 1)
}

function centerCanvas(){
	let x = (windowWidth - width) / 2
	let y = (windowHeight - height) /2 
	cnv.postion(x,y)
}

//*************************************************
//	Scene Definitions
//*************************************************



//*************************************************
//	Animation Loop
//*************************************************

function draw(){
	background(0, 0, 0)
	player.show()
}



//*************************************************
//	Key Event Handlers
//*************************************************

