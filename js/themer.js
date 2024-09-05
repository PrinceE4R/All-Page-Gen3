const options = ['System', 'option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7'];
        const optionsContainer = document.getElementById('optionsContainer');
        const systemName = document.getElementById('systemName');
        let selectedIndex = 0;

        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;

            optionElement.onclick = (e) => {
                e.stopPropagation(); // Prevent the click from collapsing the selector
                if (index !== selectedIndex) {
                    systemName.textContent = option; // Change the system name
                    selectedIndex = index;
                    // Call the appropriate function themerbased on the index
                    const changeFunction = window[`change${index}`];
                    if (typeof changeFunction === 'function') {
                        changeFunction();
                    } else {
                        console.log(`Change function for ${option} (index ${index}) not defined`);
                    }
                }
                expandSelector(); // Collapse the selector after selection
            };

            optionsContainer.appendChild(optionElement);
        });

        function expandSelector() {
            const themerbaseElement = document.querySelector('.themerbase');
            const optionsElement = document.querySelector('.options');
            const currentHeight = window.getComputedStyle(themerbaseElement).height;

            if (currentHeight === '200px') {
                themerbaseElement.style.height = '60px';
                optionsElement.style.display = 'none';
            } else {
                themerbaseElement.style.height = '200px';
                optionsElement.style.display = 'flex';
            }
        }