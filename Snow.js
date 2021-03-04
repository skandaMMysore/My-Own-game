class Snow{
    constructor(x,y,diameter){
        var options ={
            restitution:1.0,
            density:20,
            friction:0.8
            
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.diameter,this.diameter);
    }
        
}