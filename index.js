(function() {
  'use strict';

  // YOUR CODE HERE

  // query the document object for the stop button and its corresponding light
  const stopButton = document.querySelector('#stopButton');
  const stopLight = document.querySelector('#stopLight')
  // add a click event listener for the stop button
  stopButton.addEventListener('click', (e) => {
    // toggle the stop light's 'stop' class to change its color to red
    stopLight.classList.toggle('stop');
  });

  // query the DOM for the slow button/light
  const slowButton = document.querySelector('#slowButton');
  const slowLight = document.querySelector('#slowLight');
  // add a click event listener for the slow button
  slowButton.addEventListener('click', (e) => {
    // toggle the slow light's 'slow' class to change its color to yellow
    slowLight.classList.toggle('slow');
  });

  // go button/light
  const goButton = document.querySelector('#goButton');
  const goLight = document.querySelector('#goLight');
  goButton.addEventListener('click', (e) => {
    goLight.classList.toggle('go');
  });

  // handler function for the 'enter' event
  const handleEnter = (e) => {
    console.log(`Mouse entered the ${e.target.textContent} button`);
  }

  // handler function for the 'leave' event
  const handleLeave = (e) => {
    console.log(`Mouse left the ${e.target.textContent} button`);
  }

  // query the dom for all items with a class of '.button'
  const buttonList = document.querySelectorAll('.button');
  // loop over this list, adding event listeners to each of them
  for (let button of buttonList) {
    button.addEventListener('mouseenter', handleEnter);
    button.addEventListener('mouseleave', handleLeave);
  }


})();
