class Particle {
    constructor(x, y) {
      var options = {
        'restitution':0.4,
        'friction':0,
        'isStatic':false   
      }
      this.body = Bodies.circle(x, y,5,options);
      this.color = color(random(0,255),random(0,255),random(0,255));     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(this.color);
      circle(0,0,10);
      pop();
    }
  };