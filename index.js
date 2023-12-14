(function () {
  'use strict';

  const eventHandler = (e) => {
    if (!e.target.classList.contains('button')) { return; }
    const name = e.target.id.split("B")[0];
    const light = document.querySelector(`#${name}Light`);
    console.log(`${e.target.textContent} bulb ${light.classList.contains(name) ? `off` : `on`}`);
    light.classList.toggle(name);
  }

  document.addEventListener('click', eventHandler);
})();
