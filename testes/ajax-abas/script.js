document.addEventListener('DOMContentLoaded', function(){
    
    const buttons = document.querySelectorAll('.menu-btn')
    const contentDiv = document.getElementById('content')

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const contentUrl = this.getAttribute('data-content')
            
            fetch(contentUrl)
                .then(response => {
                    if(!response.ok) {
                        throw new Error ('Erro ao carregar o conteúdo')
                    }
                    return response.json()
                })
                    .then(data => {
                        contentDiv.innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`
                    })
                        .catch(error => {
                            contentDiv.innerHTML = `<p>Erro ao carregar o conteúdo</p>`
                        })
        })
    })
})