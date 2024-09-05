function expandSelector() {
    const themerBaseElement = document.querySelector('.optbase');
    const optionsElement = document.querySelector('.options');
    const currentHeight = window.getComputedStyle(themerBaseElement).height;
    
    if (currentHeight === '200px') {
        themerBaseElement.style.height = '60px';
        optionsElement.style.display = 'none';
    } else {
        themerBaseElement.style.height = '200px';
        
        // Add a delay of 500 milliseconds (0.5 seconds) before changing the display
        setTimeout(() => {
            optionsElement.style.display = 'flex';
        }, 180);  // Adjust the delay time as needed (500 ms in this case)
    }    
}
