class Rope {
	constructor(pointA,pointB,body1,body2)
	{


		this.pointA = pointA
		this.pointB = pointB

		var options = { 
			bodyA : body1,
			bodyB : body2,
            pointB: {x:this.pointA, y:this.pointB},



		}

		this.chain = Constraint.create(options)
		World.add(world,this.chain)
	//create rope constraint here
   




	}	

	    //create display() here 
		display(){
		var pointA = this.chain.bodyA.position
		var pointB = this.chain.bodyB.position
		line(pointA.x, pointA.y , pointB.x + this.pointA, pointB.y+this.pointB)
		}
}