class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,45);

    
    
  }
  display(){
    var rand =Math.round(random(1,6));
    switch(rand) {
      case 1: fill("blue");
              break;
      case 2: fill("brown");
              break;
      case 3: fill("pink");
              break;
      case 4: fill("yellow");
              break;
      case 5: fill("red");
              break;
      case 6: fill("green");
              break;
      default: break;
    }

        //console.log(this.body.speed);
        if(this.body.speed < 3){
        super.display();
        }else{
          World.remove(world,this.body);
          push();
    
         // this.Visibility = this.Visibility -5;
         // tint(255,this.Visibility);
         // image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
    
    
    
  }

};
