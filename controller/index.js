function renderProductInfo(arrProductInfo) {
    var html = ''
    arrProductInfo.forEach(function (pt) {
      html += `
      <div class="col-md-4">
                    <div class="card card1">
                        <img src="${pt.image}" alt="">
                        <div class="card-body">
                            <h4 class="card-title">${pt.name}</h4>
                            <p class="card-text">${pt.description}</p>
                        </div>
                        <div class="row card-bottom">
                            <div class="col-md-6 col-left">
                            <a href="./detail.html?product${pt.id}" class="btn button flex-grow-1">Buy now </a>
                            </div>
                            <div class="col-md-6 col-right">
                                <p>${pt.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
  `;
    })
  document.querySelector('#tblProduct').innerHTML = html;
}


const layDanhSachProductApi= ()=>{
    axios({
      url:"https://shop.cyberlearn.vn/api/Product",
      method:"GET"
    }).then((result)=>
      renderProductInfo(result.data.content)
    ). catch((error) =>{
        console.log(error)
    })
}
     // gọi hàm lấy dữ liệu từ sever khi trang web vừa load xong
     layDanhSachProductApi()
         

     