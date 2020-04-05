class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 150
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.image = loadImage("box.png");
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
       
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}