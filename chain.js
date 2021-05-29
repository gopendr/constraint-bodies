class chain{
    constructor(bodyA,bodyB){
    var options={
  bodyA:bodyA,
  bodyB:bodyB,
  stiffness:0.04,
  length:10

    }
  this.chain=Constraint.create(options)
  World.add(world,this.chain)
    }
    display(){
  push()         
  var trainA = this.chain.bodyA.position
  var trainB = this.chain.bodyB.position
  strokeWeight(4)
  stroke("magenta")
  line(trainA.x,trainA.y,trainB.x,trainB.y)
  pop()  


    }
}