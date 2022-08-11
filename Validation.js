/**nhận vào 2 tham số 
 * value giá trị đầu vào 
 * selectorerror nơi in ra lỗi
 */


function kiemTraRong(value, selectorError, name) {
    // loại bỏ khoảng trống đầu và cuối của chuỗi, trim
    if (value.trim() !== '') {
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'không được bỏ trống'
    return false
}

function kiemTraChucVu(value, selectorError, name) {
    // loại bỏ khoảng trống đầu và cuối của chuỗi, trim
    if (value.trim() == 'Sếp' || value.trim() == 'Trưởng phòng' || value.trim() == 'Nhân viên') {
        document.querySelector(selectorError).innerHTML = ''
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'không được bỏ trống'
    return false
}
// kiem  passWordConfirm

function passWordConfirm(value1, value2, selectorError, name) {
    // loại bỏ khoảng trống đầu và cuối của chuỗi, trim
    if (value1.trim() === value2.trim()) {
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'không trùng khớp '
    return false
}

/**
 * 
 * @param {*} value 
 * @param {*} selectorError 
 * @param {*} name 
 */
function kiemTraTatCaLaKyTu(value, selectorError, name) {
    var regexLetter = /^[A-Za-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'phải là chữ'
    return false
}

// kiểm tra tất cả là số
function kiemTraTatCaLaSo(value, selectorError, name) {
    var regexLetter = /^[0-9]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'phải là số'
    return false
}

// kiemTraLaEmail
function kiemTraLaEmail(value, selectorError, name) {
    var regexLetter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'không đúng định dạng'
    return false
}
// kiểm tra MM//DD/YYYY
function kiemTraLaMMDDYYYY(value, selectorError, name) {
    var regexLetter = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'không đúng định dạng (phải gồm mm/dd/yyyy)'
    return false
}


// kiểm tra là password gồm ít nhất  1 số 1 chữ viết hoa và 1 ký tự đăc biệt
function kiemTraLaPassword(value, selectorError, name) {
    var regexLetter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'không đúng định dạng (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)'
    return false
}



function kiemTraLaDate(value, selectorError, name) {
    console.log(value)
    var regexLetter = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true
    }
    document.querySelector(selectorError).innerHTML = name + " " + 'không đúng'
    return false
}

// kiểm tra độ dài số 
function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    var lengthValue = value.length;
    if (lengthValue > maxLength || lengthValue < minLength) {
        document.querySelector(selectorError).innerHTML = name + " " + 'từ ' + minLength + " " + 'đến ' + " " + maxLength + " " + 'chữ số';
        return false
    }
    document.querySelector(selectorError).innerHTML = ''
    return true
}
// kiểm tra độ dài ký tự 
function kiemTraDoDai1(value, selectorError, name, minLength, maxLength) {
    var lengthValue = value.length;
    if (lengthValue > maxLength || lengthValue < minLength) {
        document.querySelector(selectorError).innerHTML = name + " " + 'từ ' + minLength + " " + 'đến ' + " " + maxLength + " " + 'ký tự ';
        return false
    }
    document.querySelector(selectorError).innerHTML = ''
    return true
}


// kiểm tra giá trị 
function kiemTraGiaTri(value, selectorError, name, minvalue, maxvalue) {

    var value1 = +value;
    console.log(value1)

    if (value1 > maxvalue || value1 < minvalue || value == '') {
        document.querySelector(selectorError).innerHTML = name + " " + 'từ ' + minvalue + " " + 'đến ' + " " + maxvalue;
        return false
    }
    document.querySelector(selectorError).innerHTML = ''
    return true
}

