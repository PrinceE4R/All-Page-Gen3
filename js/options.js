const options = [
    { name: 'System', func: optionsCreator("system") },
    { name: 'Cyberpunk', func: optionsCreator("cyberpunk") },
    { name: 'Synthwave', func: optionsCreator("synthwave") },
    { name: 'Demon', func: optionsCreator("demon") },
    { name: 'Pink', func: optionsCreator("pink") },
    { name: 'Red', func: optionsCreator("red") },
    { name: 'Yellow', func: optionsCreator("yellow") },
    { name: 'Green', func: optionsCreator("green") },
    { name: 'Blue', func: optionsCreator("blue") },
    { name: 'Cyan', func: optionsCreator("cyan") },
    { name: 'Purple', func: optionsCreator("purple") }
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

// Define your option creator function
function optionsCreator(name) {
    return function() {
        const systemNameElement = document.getElementById('systemName');
        const root = document.documentElement;
        const suggestionsContainer = document.querySelector('.suggestions-container');
        if(darkModeSelected) {
            root.style.setProperty('--colour1', `var(--${name}-light)`);
            root.style.setProperty('--colour2', `var(--${name}-dark)`);
        }
        else {
            root.style.setProperty('--colour1', `var(--${name}-dark)`);
            root.style.setProperty('--colour2', `var(--${name}-light)`);
        }
        suggestionsContainer.style.color = `var(--${name}-light)`;
        systemNameElement.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        toggleSwitch();
        toggleSwitch();
    }
}
generateOptions();