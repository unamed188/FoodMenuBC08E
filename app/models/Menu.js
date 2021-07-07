import { MonAn } from "./MonAn.js";

export class Menu {
    arrMonAn= []; //[{mon:1,tenMon:'ten mon',gia:''},{mon:2,tenMon...}]
    
    constructor () {

    }

    themMonAn = (MonAn) => {

    }

    xoaMonAn = (MonAn) =>{

    }

    chinhSuaMon =(ma,monAnCapNhat) => {

    }

    taoMenu = () =>{
        //map: map là hàm dùng để tạo ra 1 mảng mới từ mảng ban đầu
        //[{mon:1,tenMon;'ten mon',gia:''}{mon:2,tenMon;'goi',gia:''},]
        //['<tr></tr>','<tr></tr>','<tr></tr>']

        let arrResult =this.arrMonAn.map((monAn,index)=>{
            return `
                <tr>
                    <td>${monAn.maMon}</td>
                    <td>${monAn.tenMon}</td>
                    <td>${monAn.loaiMon}</td>
                    <td>${monAn.giaMon}</td>
                    <td>${monAn.khuyenMai}</td>
                    <td>${monAn.tinhTrang}</td>
                    <td>
                        <button>Xóa</button>
                        <button>Chỉnh sửa</button>
                    </td>
                </tr>        
            `
        })
        return arrResult;
    }

    renderMenu = (idTable) =>{


        let arrHtmlMenu = this.taoMenu(); //['<tr></tr>','<tr></tr>']
        //foreach(callback): Foreach nhận vào 1 callback có 2 tham số (phần tử của mảng, vị trí phần tử) hàm này sẽ chạy n lần dụa vào n phần tử của mảng

        arrHtmlMenu.forEach((htmlTrMonAn,index)=>{
            document.getElementById(idTable).innerHTML += htmlTrMonAn
        })
    }

    luuStorage() {
        //biến dữ liệu arrMenu thành chuỗi
        let stringMenu = JSON.stringify(this.arrMonAn);
        //Lưu chuỗi vào localstorage
        localStorage.setItem('danhSachMonAn', stringMenu);
    }

    layStrorage(){
        //Kiiểm tratrong localstorage có dữ liệu thì lấy dữ liệu từ localstorage ra gán cho thuộc tính menu
        if(localStorage.getItem('danhSachMonAn')){

            let stringMenu = localStorage.getItem('danhSachMonAn');
            this.arrMonAn=JSON.parse(stringMenu);
        }
    }
}