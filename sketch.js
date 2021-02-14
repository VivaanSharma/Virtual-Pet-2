//Create variables here
var database
var dog;
var dogImage;
var dogHappy;
var database
var foodS;
var foodStock;
var food1;
var feedButton;
var AddFood;
function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(350,300,350,5,5);
  dog.addImage(dogImage);
  dog.scale = 0.2
  
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);

  food1 = new Food();

  feedButton = createButton("Feed Dog");
  feedButton.mousePressed(feedDog);

  AddFood = createButton("Add Food");
  AddFood.mousePressed(FoodAdd);
  
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
  
    dog.addImage(dogHappy);
  }
  

  background(46, 139, 87);
  textSize(35);
  fill("yellow")
  text("FOOD REMAINING:"+ foodS, 75, 100);
  food1.display();
  drawSprites();





}

function readStock (data){
foodS = data.val();
food1.updatefood(foodS);
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1
}
 // x=x-1
  database.ref("/").update({

  Food : x
  })
}


function feedDog(){

  writeStock(foodS);

  dog.addImage(dogHappy);

}

function FoodAdd(){
  
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}