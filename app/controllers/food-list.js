import { Menu } from "../models/Menu.js"

let menu = new Menu;

// let arrMonAn = [];

// let getDataStorage = () => {


//     if(localStorage.getItem('danhSachMonAn')){

//         menu.arrMonAn=JSON.parse(localStorage.getItem('danhSachMonAn'))
//     }
// }

// getDataStorage();

// menu.renderMenu('tbodyFood');


// console.log('arr');
menu.layStrorage();
menu.renderMenu('tbodyFood');



window.xoaMonAn = function (maMon){
    menu.xoaMonAn(maMon);
    menu.renderMenu('tbodyFood');
    menu.luuStorage();
}

window.chinhSua = function (maMon){
    //Trong hàm này xử lý load thông tin món ăn có mã này lên giao diện
    let monAn = menu.layThongTinMonAn(maMon);
    if(monAn) {
        //Load dữ liệu lên các input của popup modal
        console.log('monAn',monAn)
        //{maMon:1,tenMon:'Cơm chiên',giaMon:''...}
        let arrInput = document.querySelectorAll('#foodForm input, #foodForm select, #foodForm textarea');

        for(let input of arrInput) {
            //{id,className,name,value}=input
            let name = input.getAttribute('name');
            let value = input.value;

            input.value = monAn[name];
        }
        
        
        console.log('arrInput',arrInput);
    }
}