function move(element, x, direction) {
    console.log (x)
    console.log(direction)
   // element.style.position = 'fixed';
  // element.style.left = '400px';
        
        if(direction === 'left'){
            if(x > 100)
            {
            x = x - 20
        }
        } else if(direction === 'right'){
            if(x < 1000){
           x = x + 20}
        } 
        element.style.left = x + 'px';
  
        window.x = x; 
        console.log ('moved'+ x)
        console.log (window.x)
        
    }          



   //this is where I can shoot lasers//
   
   



