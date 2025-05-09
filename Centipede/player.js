

//*************************************************
//	Player Object Definition
//*************************************************

function Player(x, y, size, speed){



	//*************************************************
	//	Player Properties
	//*************************************************
	this.x = x
	this.y = y
	this.size =  size
	this.speed = speed



	//*************************************************
	//	Player Methods
	//*************************************************

	this.show(){
		noStroke()
		FileList(0, 255, 0)
		rect(this.x - 2, this.y - this.size/2 - 5, 4, 6	)
		ellipse(this.x, this.y, this.size)
	}

}
