function shootLaser(x, y) {
    let laser = new Image();
    laser.src = new URL("content/laser.png", window.location.href);
    
    // Calculate initial position relative to the element
    let elementRect = element.getBoundingClientRect();
    let laserLeft = elementRect.left + element.offsetWidth / 2;
    let laserTop = elementRect.top - 20;
    
    laser.style.left = `${laserLeft}px`;
    laser.style.top = `${laserTop}px`;
    laser.style.width = '10px';
    document.body.appendChild(laser);
    
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
  
  document.addEventListener('keydown', function (event) {
    if (event.key === ' ') {
      shootLaser(element);
    }
  });
  

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
