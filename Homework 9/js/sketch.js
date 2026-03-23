let idleAnimation;
let walkAnimation;
let dogImage;
let idlePaths = [];
let walkPaths = [];
let myAnimation;

function preload() {
    
    for(var i = 0; i < 10; i++)    {
        idlePaths[i] = 'assets/dogidle/' +  'frame' + i + '.png';
       
    }
    for(var j = 0; j < 8; j++)    {
        walkPaths[j] = 'assets/dogwalk/' +  'frame' + i + '.png';
       
    }

      
}

function setup() {
  
    new Canvas(600, 600);
    
    //compact way to add an image
  	dogImage = new Sprite();
	dogImage.image = 'assets/dog.png';
    dogImage.pos.x = 250;
    dogImage.pos.y = 200;
    //dogImage.scale = 0.05;
    dogImage.width = 100;
    dogImage.height = 100;
    dogImage.collider = 'rectangle';
    dogImage.debug = true;


    //myAnimation = new Sprite();
	//myAnimation.scale = 0.5;
    
 


   // idleAnimation = loadAni(idlePaths[0], idlePaths[1], idlePaths[2], idlePaths[3], 
   // idlePaths[4], idlePaths[5],idlePaths[6], idlePaths[7], idlePaths[8],
   // idlePaths[9], idlePaths[10], idlePaths[11], idlePaths[12], idlePaths[13], idlePaths[14]);
 
    //idleAnimation = loadAni('idle', idlePaths);
    //walkAnimation = loadAni('walk', walkPaths);
    
    //myAnimation.addAni('idle', idlePaths);
    //myAnimation.addAni('walk', walkPaths);
    //myAnimation.frameDelay = 20;
//myAnimation.frameDelay = 1;
    
    myAnimation = new animationImage(100,300, 150, 150);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.debug = true;
}
// display all the frames using the draw function as a loop
function update() 
{

    clear();

  //background
  background(163,212,255);
  
  //sun 
  noStroke();
  fill(237,165,103);
  circle(500, 250, 250)
  
  //grass
  noStroke();
  fill(92,184,122);
  rect(0, 250, width, height/2);
    
   // walkAnimation.scale = 0.5;
   // animation(idleAnimation, 250, 100);
    
    //walkAnimation.frameDelay = 5;
    //animation(walkAnimation, 250, 100);
    
   // myAnimation.changeAni('walk');
    //myAnimation.drawAnimation('idle');

    

    if(kb.pressing('d'))
    {
        
       //myAnimation.changeAni('walk');
       
       // myAnimation.vel.x = 2;
	//	myAnimation.scale.x = 0.5;
        
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        
        
        if(myAnimation.isColliding(dogImage))
        {
            dogImage.remove();     
        }     
    }
    else if(kb.pressing('a'))
    {
      //  myAnimation.changeAni('walk');
      //  myAnimation.vel.x = -2;
//		myAnimation.scale.x = -0.5;
        
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        
            
    }
    else if(kb.pressing('w'))
    {
      //  myAnimation.changeAni('walk');
      //  myAnimation.vel.x = -2;
//		myAnimation.scale.x = -0.5;
        
        myAnimation.updatePosition('up');
        myAnimation.drawAnimation('walk');
        
            
    }
    else if(kb.pressing('s'))
    {
      //  myAnimation.changeAni('walk');
      //  myAnimation.vel.x = -2;
//		myAnimation.scale.x = -0.5;
        
        myAnimation.updatePosition('down');
        myAnimation.drawAnimation('walk');
        
            
    }
    else
    {
        myAnimation.drawAnimation('idle');
        
  //      myAnimation.changeAni('idle');
    //    myAnimation.vel.x = 0;
		
    } 



}

