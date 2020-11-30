class paper {
    constructor(x,y,width,height){
        leftSprite=createSprite(boxposition,boxY,20,100);
   leftSprite.shapeColor="blue";
   leftBody=Bodies.rectangle(boxposition+20,boxY,20,100,{isStatic:true});
   World.add(world,leftBody);
   bottomSprite=createSprite(boxposition+100,boxY+40,200,20);
   bottomSprite.shapeColor="blue";
   bottomBody=Bodies.rectangle(boxposition+100,boxY+25,200,20,{isStatic:true});
   World.add(world,bottomBody);
   rightSprite=createSprite(boxposition+200,boxY,20,100);
   rightSprite.shapeColor="blue";
   rightBody=Bodies.rectangle(boxposition+180,boxY,20,100,{isStatic:true});
   World.add(world,rightBody)
    }
}