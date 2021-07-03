var redButton;
var greenButton;

function setup(){
  createCanvas(400,400);
  redButton =createButton('red');
  redButton.position(100,50);

  greenButton =createButton('green');
  greenButton.position(300,50);

}

function draw(){

  redButton.mousePressed(function(){
    background("red");
  });

  greenButton.mousePressed(function(){
    background("green");
  });
  
}