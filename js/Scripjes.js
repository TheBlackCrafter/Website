var ival, imgname, total, steps, maxx, maxy, currentx, currenty, dx, dy;

function zoomImg(imgname, total, steps, maxx, maxy)	
{
	total = total * 1000;
	objref = eval("document.getElementById('"+imgname+"')");
	currentx = objref.width;
	currenty = objref.height;
	stepx = maxx / steps;
	stepy = maxy / steps;
	inttime = total / steps;
	functionRef = "resizeImg('"+imgname+"', "+stepx+", "+stepy+", "+maxx+", "+maxy+")";
	ival = setInterval(functionRef, inttime);
}
function resizeImg(imgname, dx, dy, maxx, maxy) 
{
	objref = eval("document.getElementById('"+imgname+"')");
	currentx = objref.width;
	currenty = objref.height;
	if ((currentx<maxx-dx) && (currenty<maxy-dy)) 
	{
		objref.height = currenty + dy;
		objref.width = currentx + dx;
	}
	else 
	{
		clearInterval(ival);
		objref.height = maxy;
		objref.width = maxx;
	}
}


