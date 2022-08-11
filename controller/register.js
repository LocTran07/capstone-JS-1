document.querySelector('#btnuser').onclick = () => {
    let user = new User()
    let inputs = document.querySelectorAll('.form input')
    inputs.forEach(a => {
        const { name, value } = a
        user[name] = value
    })
    let checkbox = document.getElementsByName("gender");
    checkbox.forEach(a => {
        if (a.checked === true) {
            var bootlean = (a.value === "true")
            user["gender"] = bootlean;
        }
    })
    console.log(user)
    let pwcf = document.getElementById('pwcf').value

    let valid = true
    //bỏ trống 
    valid = kiemTraRong(user.email, '#valid-email-1', 'Email') & kiemTraLaEmail(user.email, '#valid-email-2', 'Email') & kiemTraRong(user.password, '#valid-pw-1', 'Password') & passWordConfirm(user.password,pwcf, '#valid-pwc-1', 'Password') & kiemTraRong(user.name,'#valid-name-1','Name') &  kiemTraTatCaLaKyTu(user.name,'#valid-name-2','Name') & kiemTraRong (user.phone,'#valid-phone-1','Phone') & kiemTraTatCaLaSo(user.phone,'#valid-phone-2','Phone' )
    console.log(valid)
    if (!valid) {
        return
    }
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: user
    })
    promise.then(function (result) {

    })
    promise.catch(function (err) {

    })
}

