document.querySelector('#btnuser').onclick = () => {
    let user = new User ()
    let inputs = document.querySelectorAll('.form input')
    inputs.forEach(a => {
        const {name,value} = a
    // console.log(name)
    // console.log(value)
        
        user[name] = value
    })
    console.log(user)
    
}