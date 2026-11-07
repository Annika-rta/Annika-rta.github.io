var img;
var img2; // Global variable declaration for the lumpia asset
var initials ='aww'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  // Local development file paths. 
  // IMPORTANT: Swap these local paths with your live 'https://github.io...' 
  // internet links right before pushing your final index.html file up to GitHub pages!
  img = loadImage('cat.jpeg');
  img2 = loadImage('lumpia.jpeg');
}

function setup() {
  createCanvas(600, 600);  // canvas size
  background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // The key mapping if statements that you can change to do anything you want.
  // Just make sure each key option has a stroke or fill and then what type of graphic function

  if (toolChoice == '1' ) {  // Tool 1: Soft Pink Cloud Wash (Base fabric dye)
    stroke(240, 90, 140, 12); // Translucent pink
    strokeWeight(60);
    line(mouseX, mouseY, pmouseX, pmouseY);
    ellipse(mouseX + random(-8, 8), mouseY + random(-8, 8), 30, 30);
    
  } else if (toolChoice == '2') { // Tool 2: Fluid Rainbow Dye Bleed (Warm spectrum)
    colorMode(HSB, 360, 100, 100, 100);
    let hueVal = (frameCount * 4) % 45; // Locks a rotating rainbow cycle between pinks, reds, and golds
    if (hueVal < 15) hueVal += 335; 
    stroke(hueVal, 80, 95, 15); // Translucent blending dye
    strokeWeight(70);
    line(mouseX, mouseY, pmouseX, pmouseY);
    colorMode(RGB, 255, 255, 255, 255); // Safety reset for other tools
    
  } else if (toolChoice == '3') { // Tool 3: Massive Deep Contrast Indigo (Negative spaces)
    stroke(30, 20, 40); // Deep background color
    strokeWeight(45);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') { // Tool 4: Sharp Indigo Resist Outline (Main borders & leaves)
    stroke(30, 20, 40);
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '5') { // Tool 5: Radiant Gold Line (Flora detailing)
    stroke(220, 160, 60); // Traditional batik gold
    strokeWeight(2.5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '6') { // Tool 6: Fine Crimson Red Shading Line
    stroke(180, 15, 50); // Rich red dye line
    strokeWeight(1.5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') { // Tool 7: Red & Gold Orchid Stamp (Click to place accent blooms)
    noStroke();
    fill(180, 15, 50); // Crimson petals
    for(let i = 0; i < 5; i++) {
      push(); translate(mouseX, mouseY); rotate(TWO_PI / 5 * i);
      ellipse(10, 0, 14, 9); pop();
    }
    fill(220, 160, 60); // Gold core
    ellipse(mouseX, mouseY, 6, 6);
    
  } else if (toolChoice == '8') { // Tool 8: Golden Wax Border Stamps (Diamonds)
    rectMode(CENTER);
    fill(220, 160, 60);
    stroke(250, 245, 235); // Fine white accent outline
    strokeWeight(1);
    push();
    translate(mouseX, mouseY);
    rotate(QUARTER_PI); // Rotates square into an ornamental diamond
    rect(0, 0, 12, 12);
    pop();
    
  } else if (toolChoice == '9') { // Tool 9: Tiny Wax-Droplet Cluster Background
    fill(240, 90, 140); // Pink micro dots
    noStroke();
    for (let i = 0; i < 4; i++) {
      ellipse(mouseX + random(-12, 12), mouseY + random(-12, 12), 3, 3);
    }
    
  } else if (toolChoice == '0') { // Tool 0: Crackle Wax Resist Finish (Draw over art for old-world cracks)
    stroke(250, 245, 235, 140); // Semi-transparent cloth fracture lines
    strokeWeight(random(0.5, 2));
    line(mouseX, mouseY, mouseX + random(-30, 30), mouseY + random(-30, 30));
    
  } else if (toolChoice == 'e' || toolChoice == 'E') { // Tool E: Background Color Eraser
    stroke(screenbg); // Seamlessly matches your background screen canvas setting
    strokeWeight(40); // Generous weight to clean mistakes easily
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == 'g' || toolChoice == 'G') { // Tool G: Centered Hello Kitty Stamp
    imageMode(CENTER);                                  
    image(img, mouseX, mouseY, 40, 50); // Proportional scale adjustments applied                
    imageMode(CORNER);                                  

  } else if (toolChoice == 'l' || toolChoice == 'L') { // Tool L: Centered Lumpia Stamp
    imageMode(CENTER);
    image(img2, mouseX, mouseY, 50, 50); // Uniform aspect footprint
    imageMode(CORNER);
  }
}
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}
