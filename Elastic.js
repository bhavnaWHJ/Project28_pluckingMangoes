class Elastic{
    constructor(body1,point2){

        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.01,
            length : 1
        }
        this.pointA = body1;
        this.pointB = point2
        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);

    }
    attach(body1){

        this.elastic.bodyA = body1;
  
      }

    fly(){

        this.elastic.bodyA = null;
    }
    
    display(){
        if(this.elastic.bodyA){

        var pointA = this.elastic.bodyA.position;
        var pointB = this.pointB
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}