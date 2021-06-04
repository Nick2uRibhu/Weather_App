const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
        fetch('http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query='+location).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error.info
                
            } else {
                messageOne.textContent = data.request.query
                messageTwo.textContent = 'Currently it is ' + data.current.temperature + ' deegres'
            }
        })
    })
})