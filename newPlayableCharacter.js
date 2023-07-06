   
    var element = new Image();
    element.src = new URL("content/space-craft.png", window.location.href);
    var x = 500; 
    element.style.zIndex = 1;
    element.style.position = 'absolute';
    element.style.top = '1000px';
    element.style.left = 500 + 'px';
    element.style.transform = 'translate(-50%, -50%)';
    element.style.width = '150px';

//console.log (element)

//move (element).withArrowKeys (500, 450);
    document.body.appendChild(element);





//this is the movement functions
//move (element).withArrowKeys (500, 450)

//element.style.top = '900px'



