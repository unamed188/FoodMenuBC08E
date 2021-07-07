import { Menu } from "../models/Menu.js"
import { MonAn } from "../models/MonAn.js";


let menu = new Menu;

menu.layStrorage();

let arrMonAn = [];


document.querySelector("#btnThemMon").onclick = () => {
  //Tạo đối tượng chứa thông tin người dùng nhập vào giao diện
  let monAn = new MonAn();

  //Truy xuất đến tất cả các input.select, textarea để lấy thông tin ngườ dùng nhập từ giao diện
  let arrTagInput = document.querySelectorAll(
    "form input, form select, form textarea"
  );

  for (let input of arrTagInput) {
    let { name, value } = input;
    //Gán giá trị value dựa vào name (thuộc tính) cho object món ăn
    monAn[name] = value;
    //console.log(name,value)
  }

  console.log("arrTagInput", arrTagInput);
  console.log("monAn", MonAn);
  //Hiiển thị thông tin lên giao diện

  var arrTagOutput = document.querySelectorAll(
    ".list-group-item span, .list-group-item p"
  ); //các thẻ span và p ảnh hưởng bởi selector này
  //Đối với một số thẻ không có thuộc tính donm mà ta thêm vào
  //Cách 1 dùng queryselector all + name
//   for (let tag of arrTagOutput) {
//     let name = tag.getAttribute("name");
//     if (name === "giaSauKhuyenMai") {
//       tag.innerHTML = monAn.tinhGiaKhuyenMai();
//     }else if(name==='loaiMon'){
//         tag.innerHTML = monAn[name] === 'loai1' ? 'Chay' :'Mặn';
//     }else if (name==='tinhTrang'){
//         tag.innerHTML = monAn[name] === '0' ? 'Hết'  : 'Còn';
//     } 
    
//     else {
//       tag.innerHTML = monAn[name];
//     }
//   }

//   document.querySelector('#imgMonAn').src = monAn['hinhAnh']
// };

//Cách 2: Dùng oop

document.querySelector('.noiDungHienThi').innerHTML = monAn.hienThiThongTin();

//Thêm món ăn
menu.arrMonAn.push(monAn);
menu.luuStorage();
// localStorage.setItem('danhSachMonAn',JSON.stringify(arrMonAn));

};

// let sinhVien = {ma:1,ten:'A'};
// sinhVien.ten='B';
// sinhVien['ten'] = 'B';
// sinhVien = {...sinhVien,ten='B'}
// sinhVien = {...sinhVien,['ten']:'B'}ok
