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