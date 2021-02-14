class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0;
    }
display(){
var x = 15 , y = 100;

for( var i = 0; i < this.foodStock; i++ ){
    if(i%10===0){
        x=15;
        y=y+60;
    }
    image(this.image, x,y,55,55);
    x = x+25;
    
}
}
updatefood(foodS){
this.foodStock = foodS;
}
}