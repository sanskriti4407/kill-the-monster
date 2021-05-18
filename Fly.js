class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.5,
            length: 350
        }
        this.pointB = pointB;
        this.Fly = Constraint.create(options);
        World.add(world, this.Fly);

    }

    attach(body){
        this.Fly.bodyA = body;
    }
    
    fly(){
        this.Fly.bodyA = null;
      }  

      
    display(){
        if(this.Fly.bodyA){
        var pointA = this.Fly.bodyA.position;
        var pointB = this.pointB;
        push()
        strokeWeight(4);
        stroke(48,22,8);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop()
        }
        }
}