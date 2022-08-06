function layDanhSachProductApi () {
 
    var promise = axios({
        URL : 'https://shop.cyberlearn.vn/api/Product',
        Method: 'GET'
       })
       // xử lý thành công 
       promise.then(function(result) {
           console.log(result.data.content);
           //sau khi lấy dữ liệu từ BE về dùng dữ liệu đó tạo ra tr trên table 
           renderProductInfo(result.data.content);
       });
       //xử lý thất bại
       promise.catch(function(error) {
   
       });
   }
   // gọi hàm lấy dữ liệu từ sever khi trang web vừa load xong
   window.onload = function() {
        layDanhSachProductApi();
   }








function renderProductInfo(arrProductInfo) { //param : input :arr
    var html = ''; //output: string html 
    for (var i = 0; i < arrProductInfo.length; i++) {
    var pt = arrProductInfo[i]; //Mỗi lần duyệt lấy ra 1 object ProductInfo từ mảng 
        html += `
                <div class="product--card">
                <div class="card-top">
                  <img src="${pt.img}" class="img-fluid" alt="">
                </div>
                <div class="card-bottom">
                  <div class="card-title">
                    <h3>${pt.name}</h3>
                    <p>${pt.description}</p>
                  </div>
                  
                  <div class="d-flex">
                    <a href="./detail.html?product=${pt.id}" class="btn button flex-grow-1">Buy now</button></a>
                    <a href="#" class="btn button-price flex-grow-1">${pt.price}</a>
                  </div>
                </div>
    
              </div>
            `;
        }
        document.querySelector('#tblProduct').innerHTML = html;
}
