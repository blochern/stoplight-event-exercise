(function () {
  'use strict';

  // event handler function
  const eventHandler = (e) => {
    // filter for only buttons
    if (!e.target.classList.contains('button')) { return; }
    // grab the button's name by splitting the id with "B"
    const name = e.target.id.split("B")[0];
    // now use the name to access its corresponding light
    const light = document.querySelector(`#${name}Light`);
    // if the light's classList contains its name (if it's already on), log 'off' -- if not, log 'on'
    console.log(`${e.target.textContent} bulb ${light.classList.contains(name) ? `off` : `on`}`);
    // toggle the class list (to turn the bulb off or on)
    light.classList.toggle(name);
  }

  // add a DOM event listener for the window
  document.addEventListener('click', eventHandler);
})();
