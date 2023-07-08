function robot(x, y) {
     //var x = 0;
    let invader = new Image();
    invader.src = new URL("content/robot-1.png", window.location.href);
    invader.style.zIndex = 1;
    invader.style.position = "absolute";
    invader.style.top = y + "px";
    invader.style.left = "2000px" + "px";
    invader.style.transform = "translate(-50%, -50%)";
    invader.style.width = "30px";
  
    let direction = null;
   //movement functions//invader
    function moveRobot() {
      if (direction === "west") {
        //if(x > -200 && x < 1200){
        //  console.log (x);
        x -= 1;
      }
    //}
      if (direction === "north") {
        y += 1;
      }
      if (direction === "east") {
      
        x += 1;
      
    }
      if (direction === "south") {
        y -= 1;
      }
      invader.style.left = x + "px";
      invader.style.bottom = y + "px";
    }
  
    setInterval(moveRobot, 1);
  
    function moveEast() {

      direction = "east";
    }
  
    function moveWest() {
      //if(x < 1000 ){
      direction = "west";
      }
    
  
    function moveSouth() {
      direction = "south"
    }
  
    function stop() {
      direction = null;
    }
  
    document.body.appendChild(invader);
  
    return {
      invader: invader,
      moveWest: moveWest,
      moveEast: moveEast,
      moveSouth: moveSouth,
      stop: stop,
    };
  }
  
  const robots = [];
  
  robots.push(robot(100, 300));
  robots.push(robot(100, 350));
  robots.push(robot(100, 400));
  robots.push(robot(150, 300));
  robots.push(robot(150, 350));
  robots.push(robot(150, 400));
  robots.push(robot(200, 200));
  robots.push(robot(200, 250));
  robots.push(robot(200, 300));
  robots.push(robot(250, 200));
  robots.push(robot(250, 250));
  robots.push(robot(250, 300));
  robots.push(robot(300, 200));
  robots.push(robot(300, 250));
  robots.push(robot(300, 300));
  robots.push(robot(350, 200));
  robots.push(robot(350, 250));
  robots.push(robot(350, 300));
  robots.push(robot(400, 200));
  robots.push(robot(400, 250));
  robots.push(robot(400, 300));
  robots.push(robot(450, 200));
  robots.push(robot(450, 250));
  robots.push(robot(450, 300));
  robots.push(robot(500, 300));
  robots.push(robot(500, 350));
  robots.push(robot(500, 400));
  robots.push(robot(550, 300));
  robots.push(robot(550, 350));
  robots.push(robot(550, 400));     
  
  // Setting parameters of inner window for robots
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  //the functions below help the robots move side by side//
  function moveAllRobotsEast() {
    for (let i = 0; i < robots.length; i++) {
      robots[i].moveEast();
      //robots[1].moveEast();
      //robots[2].moveEast();
    }
  }
  
  function moveAllRobotsWest() {
    for (let i = 0; i < robots.length; i++) {
      robots[i].moveWest();
      //robots[1].moveWest(x);
      //robots[2].moveWest(x);
    }
  }
  
  function moveAllRobotsSouth() {
    for (let i = 0; i < robots.length; i++) {    
        robots[i].moveSouth();
        console.log (moveAllRobotsSouth);
      }
    }
  
  
  function stopAllRobots() {
    for (let i = 0; i < robots.length; i++) {
      console.
      robots[i].stop();
    }
  }
  // This async function is making the robots move side to side and south
  async function moveRobots() {
    while (true) {
      moveAllRobotsEast();
      await sleep(500);
      moveAllRobotsSouth();
      await sleep(750);
      moveAllRobotsWest();
      await sleep(500);
      //moveAllRobotsSouth();
      //await sleep(750,600);
      moveAllRobotsEast();
      await sleep(900);
      //moveAllRobotsSouth();
      //await sleep(100,700);
      moveAllRobotsWest();
      await sleep(700);

    }
  }
  
  moveRobots();
  
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }




  //collision scope of laser and robot//


