class Chain{
    constructor (b1,b2){
        var elastic = {
            bodyA:b1,bodyB:b2,stiffness:0.04,length:10
        
        }
        this.rope=Matter.Constraint.create(elastic)
        World.add(world,this.rope)
    }
connectivity (){
    line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
}
}