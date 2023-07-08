function shootLaser(element) {
  let laser = new Image();
  laser.src = new URL("content/laser.png", window.location.href);

  // Calculate initial position relative to the element
  laser.style.position = 'absolute';
  laser.style.top = '1000px';

  let elementRect = element.getBoundingClientRect();
  let laserLeft = elementRect.left + element.offsetWidth / 2;
  let laserTop = elementRect.top + 0;

  document.body.appendChild(laser);
  laser.style.left = `${laserLeft}px`;
  laser.style.top = `${laserTop}px`;
  laser.style.width = '10px';

  let laserTopPosition = laserTop;
  const laserSpeed = 5;

  const moveLaser = setInterval(() => {
    laserTopPosition -= laserSpeed;
    laser.style.top = `${laserTopPosition}px`;

    if (laserTopPosition < 0) {
      clearInterval(moveLaser);
      document.body.removeChild(laser);
    }

    checkCollision(laser);
  }, 10);
}

function checkCollision(laser) {
  const laserRect = laser.getBoundingClientRect();

  for (let i = 0; i < robots.length; i++) {
    const invaderRect = robots[i].invader.getBoundingClientRect();

    // Check for collision
    if (
      laserRect.top < invaderRect.bottom &&
      laserRect.bottom > invaderRect.top &&
      laserRect.left < invaderRect.right &&
      laserRect.right > invaderRect.left
    ) {
      // Collision detected
      document.body.removeChild(robots[i].invader);
      robots.splice(i, 1);
      break;
    }
  }
}





