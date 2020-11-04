class slingShot{
    constructor(bodyA,boodyB){
        var options={
            bodyA: bodyA,
            boodyB:boodyB,
            stiffness:0.04,
            length:1
        }
        this.sling =Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA= null
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.body.position
            var pointB= this.boodyB
            strokeWeight(4)
            stroke("turquoise")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
}