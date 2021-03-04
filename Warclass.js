class War{
    constructor(x,y,w,h){
        var options ={
            isStatic:true
        }
        this.Body = Bodies.rectangle(x,y,this.w,this.h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("warImage.png");
        World.add(world,this.Body);
    }
    display(){
        var pos = this.Body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
            
    }
}