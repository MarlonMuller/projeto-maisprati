document.addEventListener('DOMContentLoaded', function(){
    
    const buttons = document.querySelectorAll('.btn-menu')
    const divContent = document.getElementById('content')

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            const contentUrl = this.getAttribute('data-content')
            
            fetch(contentUrl)
                .then(response => {
                    if(!response.ok) {
                        throw new Error ('Erro ao carregar o conteúdo')
                    }
                    return response.json()
                })
                    .then(data => {
                        divContent.innerHTML = `<h2>${data.title}</h2><p>${data.content}</p>`
                    })
                        .catch(error => {
                            divContent.innerHTML = `<p>Erro ao carregar o conteúdo</p>`
                        })
        })
    })
})