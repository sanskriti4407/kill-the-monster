class Hero{
   constructor(x,y,r){
      var options = {
        'restitution' :0.8,
        'friction' :1,
        'density' :20
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x,y,r/2,options)
      World.add(world,this.body);
      this.image = loadImage("Superhero-02.png");
    }  
    display(){
      var paperpos = this.body.position;
      push();
      translate (paperpos.x , paperpos.y);
      imageMode(CENTER)
      scale (0.3);
      image (this.image,0,0,this.r,this.r);    
      pop();    
    }   
}