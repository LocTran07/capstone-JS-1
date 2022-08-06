
function taoBang(mang) {
    var html = ''
    mang.forEach(function (a) {

        html += `
        <div class="col-md-4">
        <div class="card card1">
            <img src="${a.image}" alt="">
            <div class="card-body">
                <h4 class="card-title">${a.name}</h4>
                <p class="card-text">${a.description}</p>
            </div>
            <div class="row card-bottom">
                <div class="col-md-6 col-left">
                    <p>Buy now</p>
                </div>
                <div class="col-md-6 col-right">
                    <p>${a.price}</p>
                </div>
            </div>
        </div>
    </div>
`
    })
    document.querySelector('#danhsachdetail').innerHTML = html
}







function layDL() {
    var promise = axios({
        // url: 'http://svcy.myclass.vn/api/Product/GetAll',
        // method: 'GET'
        url : "https://shop.cyberlearn.vn/api/Product",
        Method: "GET",

    })
    promise.then(function (result) {
        taoBang(result.data.content)
    })
    promise.catch(function (err) {

    })
}
window.onload = function () {
    layDL()
}
