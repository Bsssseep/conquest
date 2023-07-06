function robot(x, y) {
    let element = new Image();
    element.src = new URL("content/robot-1.png", window.location.href);
    element.style.zIndex = 1;
    element.style.position = "absolute";
    element.style.top = y + "px";
    element.style.left = x + "px";
    element.style.transform = "translate(-50%, -50%)";
    element.style.width = "44px";
  
    let direction = null;
  
    function moveRobot() {
      if (direction === "west") {
        x -= 1;
      }
      if (direction === "north") {
        y += 1;
      }
      if (direction === "east") {
        x += 1;
      }
      if (direction === "south") {
        y -= 1;
      }
      element.style.left = x + "px";
      element.style.bottom = y + "px";
    }
  
    setInterval(moveRobot, 1);
  
    function moveEast() {
      direction = "east";
    }
  
    function moveWest() {
      direction = "west";
    }
  
    function moveSouth(distance) {
      y -= distance;
    }
  
    function stop() {
      direction = null;
    }
  
    document.body.appendChild(element);
  
    return {
      element: element,
      moveWest: moveWest,
      moveEast: moveEast,
      moveSouth: moveSouth,
      stop: stop,
    };
  }
  
  const robots = [];
  
  robots.push(robot(100, 200));
  robots.push(robot(100, 250));
  robots.push(robot(100, 300));
  robots.push(robot(150, 200));
  robots.push(robot(150, 250));
  robots.push(robot(150, 300));
  robots.push(robot(200, 200));
  robots.push(robot(200, 250));
  robots.push(robot(200, 300));
  robots.push(robot(250, 200));
  robots.push(robot(250, 250));
  robots.push(robot(250, 300));
  
  // Setting parameters of inner window for robots
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  function moveAllRobotsEast() {
    for (let i = 0; i < robots.length; i++) {
      robots[i].moveEast();
    }
  }
  
  function moveAllRobotsWest() {
    for (let i = 0; i < robots.length; i++) {
      robots[i].moveWest();
    }
  }
  
  function moveAllRobotsSouth(distance) {
    for (let i = 0; i < robots.length; i++) {
      robots[i].moveSouth(distance);
    }
  }
  
  function stopAllRobots() {
    for (let i = 0; i < robots.length; i++) {
      robots[i].stop();
    }
  }
  
  // This async function helps the robots move side to side and south
  async function moveRobots() {
    while (true) {
      moveAllRobotsEast();
      await sleep(2000);
      moveAllRobotsSouth(50);
      moveAllRobotsWest();
      await sleep(2000);
      moveAllRobotsSouth(550);
    }
  }
  
  moveRobots();
  
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }