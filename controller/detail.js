const detail = (a) => {
    let html = `
 <div class="col-md-4">
 <img class="img-fluid" src="${a.image}" alt="">
</div>
<div class="col-md-8">
 <h5>${a.name}</h5>
 <p>${a.description}</p>
 <p>Available size</p>
 <a href="">38</a><a href="">39</a><a href="">40</a><a href="">41</a><a href="">42</a>
 <p>${a.price}$</p>
 <p><button>+</button><span>1</span><button>-</button></p>
 <button>Add to cart</button>
</div>
 `
 document.getElementById('demodetail').innerHTML = html
}

const laydetail = (id) => {
    promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
        method: "GET",
    })
    promise.then(function (result) {
        detail(result.data.content)
        console.log(result.data.content)
    })
    promise.catch(function (err) {

    })
}





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
        url: "https://shop.cyberlearn.vn/api/Product",
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
    const urlPararam = new URLSearchParams(window.location.search);
    console.log(urlPararam)
    const myPararam = urlPararam.get('product')
    console.log(myPararam)
    laydetail(myPararam)
}
