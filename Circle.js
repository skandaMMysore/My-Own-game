class Circle{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:1,
            friction:0
            
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.image = loadImage("Balloon.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.diameter,this.diameter);
    }
}