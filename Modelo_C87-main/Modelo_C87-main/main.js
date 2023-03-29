var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({top:block_y,left:block_x});
		canvas.add(block_image_object);
		});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '82') 
{
	block_x = 10;
	new_image('rr.jpg');
	console.log('R')
}
if(keyPressed == '71')
{
	block_x = 310;
	new_image('gr.png');
	console.log('G')
}

if(keyPressed == '89')
{
	block_x = 560;
	new_image('yr.png');
	console.log('Y')
}
if(keyPressed == '80')
{
	block_x = 880;
	new_image('pr.png');
	console.log('P')
}
if(keyPressed == '66')
{
	block_x = 1040;
	new_image('br.png');
	console.log('B')
}
	
}

