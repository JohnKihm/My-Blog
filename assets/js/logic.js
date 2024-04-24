const lightSwitch = document.querySelector('#light-switch');
const bodyEl = document.querySelector('body');
let currentMode = bodyEl.getAttribute('class');

function switchMode() {
    if (currentMode === 'light-mode') {
        currentMode = 'dark-mode';
        bodyEl.setAttribute('class', currentMode);
        lightSwitch.textContent = '🌙';
    } else {
        currentMode = 'light-mode';
        bodyEl.setAttribute('class', currentMode);
        lightSwitch.textContent = '☀️';
    }
    saveMode(currentMode);
}

function saveMode(mode) {
    localStorage.setItem('mode', mode)
}

function loadMode() {
    const storedMode = localStorage.getItem('mode');
    if (storedMode !== currentMode) {
        switchMode();
    }
}

loadMode();
lightSwitch.addEventListener('click', switchMode);