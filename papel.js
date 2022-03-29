class papel
{
	constructor(x,y,r)
	{
        this.image=loadImage("paper.png")
        var options={
			isStatic:false,restitution:0.2,density:1		
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y,r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}