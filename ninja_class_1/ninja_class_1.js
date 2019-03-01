function ninjaConstructor(name){
  var self =this;
  // private variables
  var speed = 3; 
  var strength = 3;

  // private methods below. but on this exercise, No private method
  // ...

  // public attributes
  this.name = name;
  this.health = 100; 

  //public methods
  this.sayName = function(){
    console.log("The ninja's name is : "+this.name);
  }
  this.showStats = function(){
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength); //speed and strength don't need this because they are the private variables of the class
  }
  this.drinkSake = function(){
    this.health += 10;
    console.log("the new health of "+this.name+" is "+this.health)
  }
}

// the creation of the instances or objects
var ninja1 = new ninjaConstructor("Hyabusa");
ninja1.sayName();
ninja1.showStats();

