/*

clearly we need key-up key-down controls for scrolling, both on screen and here.


*/

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  switch ( keyName ){
      case 'a':
      case 'd':
        camera.scrollX= 0
        break
      case 'w':
      case 's':
          camera.scrollY = 0;
        break

          default:


  }

})


document.addEventListener('keydown', (event) => {
  const keyName = event.key;



  camera.follow=null;

  switch ( keyName ){
      case 'a':
        camera.scrollX= -2;
        break;
      case 'd':
        camera.scrollX= 2
        break
      case 'w':
        camera.scrollY  = -2;
        break
      case 's':
          camera.scrollY = 2;
        break

          default:


  }


  if ( camera.loop == false ) draw.draw();







  if (keyName === 'Control') {
    // do not alert when only Control key is pressed.
      console.log(keyName);
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the same time.
//    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
//    alert(`Key pressed ${keyName}`);
  }
}, false);



document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'Control') {
  //  alert('Control key was released');
  }
}, false);
