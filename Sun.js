class Sun{
    constructor(x,y,diameter){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,this.diameter,options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(255,249,23);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.diameter,this.diameter);
    }
}