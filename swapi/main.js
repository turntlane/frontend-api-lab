const button = document.querySelector('button')




function buttonClicked() {
    button.style.display = 'none'
    axios.get(`https://swapi.dev/api/planets/2`)
    .then((res) => {
        let residents = res.data.residents
        for (let i = 0; i < residents.length; i++){
            axios.get(residents[i])
            .then((res) => {
                let text = document.querySelector('.new-tags')
                let content = document.createElement('h2')
                content.textContent = res.data.name

                text.appendChild(content)


                
            })
    
        }
 
    })
    button.addEventListener()
}

button.addEventListener('click', buttonClicked)
