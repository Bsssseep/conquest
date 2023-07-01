function newPlayableCharacter(x, y) {
   
    const element = new Image();
    element.src = new URL("content/space-craft.png", window.location.href);
    element.style.zIndex = 1;
    element.style.position = 'absolute';
    element.style.top = '70%';
    element.style.left = '50%';
    element.style.transform = 'translate(-50%, -50%)';
    element.style.width = '100px';



    
    document.body.appendChild(element);
}

const playableCharacterX = window.innerWidth / 2;
const playableCharacterY = window.innerHeight * 0.7;

newPlayableCharacter();