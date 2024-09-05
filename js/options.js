const options = [
    { name: 'System', func: system },
    { name: 'Cyberpunk', func: cyberpunk },
    { name: 'Synthwave', func: synthwave },
    { name: 'Demon', func: demon }
];

// Function to generate the options list dynamically
function generateOptions() {
    const optionsList = document.getElementById('options-list');
    
    options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option.name;
        li.addEventListener('click', option.func);
        optionsList.appendChild(li);
    });
}
// Define your option functions
function system() {
    const systemNameElement = document.getElementById('systemName');
    const root = document.documentElement;
    root.style.setProperty('--colour1', 'var(--system-light)'); // new value for --colour1
    root.style.setProperty('--colour2', 'var(--system-dark)'); // new value for --colour2
    systemNameElement.textContent = 'System';
    toggleSwitch();
}

function cyberpunk() {
    const systemNameElement = document.getElementById('systemName');
    const root = document.documentElement;
    root.style.setProperty('--colour1', 'var(--cyberpunk-light)');
    root.style.setProperty('--colour2', 'var(--cyberpunk-dark)');
    systemNameElement.textContent = 'Cyberpunk';
    toggleSwitch();
}

function synthwave() {
    const systemNameElement = document.getElementById('systemName');
    const root = document.documentElement;
    root.style.setProperty('--colour1', 'var(--synthwave-light)');
    root.style.setProperty('--colour2', 'var(--synthwave-dark)');
    systemNameElement.textContent = 'Synthwave';
    toggleSwitch();
}

function demon() {
    const systemNameElement = document.getElementById('systemName');
    const root = document.documentElement;
    root.style.setProperty('--colour1', 'var(--demon-light)');
    root.style.setProperty('--colour2', 'var(--demon-dark)');
    systemNameElement.textContent = 'Demon';
    toggleSwitch();
}

// Call the function to generate the options on page load
generateOptions();