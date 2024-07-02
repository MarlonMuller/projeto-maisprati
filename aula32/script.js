// script.js
async function loadContent(section) {
    // Fetch the content from a JSON file
    const response = await fetch('content.json');
    const data = await response.json();

    // Get the content based on the button clicked
    const content = data[section];

    // Update the content div
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<ul>' + content.map(item => `<li>${item}</li>`).join('') + '</ul>';

    // Highlight the clicked button
    document.querySelectorAll('button').forEach(button => button.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

async function loadContent(section) {
    const response = await fetch('content.json')
    const data = await response.json()
}