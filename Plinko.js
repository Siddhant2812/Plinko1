class Plinko {
    constructor(x, y) {
      var options = {
        'restitution':0.4,
        'friction':0,
        'isStatic':true   
      }
      this.body = Bodies.circle(x, y,10,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(255);
      circle(0,0,10);
      pop();
    }
  };