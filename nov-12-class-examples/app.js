const submitButton = document.getElementById('submitButton')
const container = document.getElementById('container')

submitButton.addEventListener('click', () => {
    const header = document.createElement('h1')
    header.innerText = 'Button was clicked'

    container.appendChild(header)


})