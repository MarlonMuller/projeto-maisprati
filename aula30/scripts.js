document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.menu-btn');
    const contentDiv = document.getElementById('content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const contentUrl = this.getAttribute('data-content');

            // Fade out effect
            contentDiv.classList.add('hidden');

            // Fetch JSON content
            fetch(contentUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao carregar o conteúdo');
                    }
                    return response.json();
                })
                .then(data => {
                    // Processando o JSON retornado
                    contentDiv.innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`;
                    // Fade in effect
                    contentDiv.classList.remove('hidden');
                })
                .catch(error => {
                    contentDiv.innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
                    contentDiv.classList.remove('hidden');
                });
        });
    });

    // Load initial content
    buttons[0].click();
});
