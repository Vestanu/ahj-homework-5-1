if (typeof document !== 'undefined') {
  const button = document.getElementById('button');

  const createPopover = () => {
    const popover = `<div id="popover">
    <p class="title">Popover title</p>
    <p class="text">And here's some amazing content. It's very engaging. Right?</p>
    </div>"`;
    const popoverElement = document.createElement('div');
    popoverElement.innerHTML = popover;
    return popoverElement.firstChild;
  };

  button.addEventListener('click', () => {
    let popover = document.getElementById('popover');
    if (popover === null) {
      popover = createPopover();
      document.querySelector('body').appendChild(popover);
      popover.classList.add('hidden');
    }
    popover.classList.toggle('hidden');
    popover.style.bottom = `${button.offsetTop - 20}px`;
    popover.style.left = `${button.offsetLeft - (popover.offsetWidth - button.offsetWidth) / 2}px`;
  });
}
