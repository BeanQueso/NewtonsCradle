class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
    
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    
    
    }
    display(){
        stroke("red");
        strokeWeight(4);
        line(this.body.bodyA.position.x, this.body.bodyA.position.y, this.body.bodyB.position.x, this.body.bodyB.position.y);
    }
    
    
    }