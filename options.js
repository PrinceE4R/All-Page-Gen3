const options = [
    { name: 'System', func: optionsCreator("system","20") },
    { name: 'Death', func: optionsCreator("death","20") },
    { name: 'Synthwave', func: optionsCreator("synthwave","18") },
    { name: 'Cyberpunk', func: optionsCreator("cyberpunk","18") },
    { name: 'Matrix', func: optionsCreator("matrix","20") },
    { name: 'Bladerunner', func: optionsCreator("bladerunner","16") },
    { name: 'Pink', func: optionsCreator("pink","20") },
    { name: 'Red', func: optionsCreator("red","20") },
    { name: 'Yellow', func: optionsCreator("yellow","20") },
    { name: 'Green', func: optionsCreator("green","20") },
    { name: 'Blue', func: optionsCreator("blue","20") },
    { name: 'Cyan', func: optionsCreator("cyan","20") },
    { name: 'Purple', func: optionsCreator("purple","20") }
];

// Function to generate the options list dynamically
function generateOptions() {
    const optionsList = document.getElementById('options-list');
   
    options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option.name;
        li.addEventListener('click', () => {
            option.func();
            // Save the selected theme in localStorage
            localStorage.setItem('selectedTheme', option.name);
        });
        optionsList.appendChild(li);
    });
}

// Define your option creator function
function optionsCreator(name, fontsize) {
    return function() {
        const systemNameElement = document.getElementById('systemName');
        const optBase = document.querySelector('.optbase span');
        const root = document.documentElement;
        const suggestionsContainer = document.querySelector('.suggestions-container');
        
        if (darkModeSelected) {
            root.style.setProperty('--colour1', `var(--${name}-light)`);
            root.style.setProperty('--colour2', `var(--${name}-dark)`);
        } else {
            root.style.setProperty('--colour1', `var(--${name}-dark)`);
            root.style.setProperty('--colour2', `var(--${name}-light)`);
        }
        const imgPath = `./images/${name}.jpg`;
        document.body.style.backgroundImage = `url(${imgPath})`;
        suggestionsContainer.style.color = `var(--${name}-light)`;
        optBase.style.fontSize = `${fontsize}px`;
        systemNameElement.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        toggleSwitch();
        toggleSwitch();
    }
}

// Function to load the theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        const themeOption = options.find(option => option.name === savedTheme);
        if (themeOption) {
            themeOption.func(); // Apply the saved theme
        }
    }
}

// Generate the options and load saved theme on page load
window.addEventListener('load', () => {
    generateOptions();
    loadTheme(); // Load the saved theme if it exists
});
