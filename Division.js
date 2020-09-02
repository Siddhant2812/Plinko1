class Division {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,5,300,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      noStroke();
      fill(255,255,255);
      rect(pos.x, pos.y, 5, 300);
    }
  }