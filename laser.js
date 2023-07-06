function shootLaser(element) {
    let laser = new Image();
    laser.src = new URL("content/laser.png", window.location.href);
    
    // Calculate initial position relative to the element

    laser.style.position = 'absolute';
    laser.style.top = '1000px';

    let elementRect = element.getBoundingClientRect();
    console.log (elementRect.left);
    let laserLeft = elementRect.left + element.offsetWidth / 2;
    console.log(laserLeft);
    let laserTop = elementRect.top + 20;
    console.log(laserTop);
    document.body.appendChild(laser);
    laser.style.left = `${laserLeft}px`;
    console.log (laser.style.left);
    laser.style.top = `${laserTop}px`;
    laser.style.width = '10px';
    //document.body.appendChild(laser);
    
    console.log(laser);
    
    let laserTopPosition = laserTop;
    const laserSpeed = 5;
  
    const moveLaser = setInterval(() => {
      laserTopPosition -= laserSpeed;
      laser.style.top = `${laserTopPosition}px`;
  
      if (laserTopPosition < 0) {
        clearInterval(moveLaser);
        document.body.removeChild(laser);
      }
    }, 10);
  }
  

  

  function moveLaser() {
    if(direction === 'north') {
        y + 20 
    }
    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
  }

  async function moveNorth(time) {
    direction = 'north'
    

  }
