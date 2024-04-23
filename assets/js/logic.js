const lightSwitch = document.querySelector('#light-switch');
const bodyEl = document.querySelector('body');

function switchMode(event) {
    event.preventDefault();
    const currentMode = bodyEl.getAttribute('class');
    if (currentMode === 'light-mode') {
        bodyEl.setAttribute('class', 'dark-mode');
        lightSwitch.textContent = '🌙';
    } else {
        bodyEl.setAttribute('class', 'light-mode');
        lightSwitch.textContent = '☀️';
    }
}

lightSwitch.addEventListener('click', switchMode);