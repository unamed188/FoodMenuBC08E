import { MonAn } from "./MonAn.js";

export class Menu {
    arrMonAn= []; //[{mon:1,tenMon:'ten mon',gia:''},{mon:2,tenMon...}]
    
    constructor () {

    }

    themMonAn = (monAn) => {
        this.arrMonAn.push(monAn);
    }

    layThongTinMonAn = (maMon) =>{
        //Tương tự hàm findindex => hàm find trả về đối tượng (phần tử) trong mảng thỏa điều kiện của arrow function
        //Tìm thấy trả về object đó, không tìm thấy trả về undefine
        //this.arrMonAn = [{mon:1,tenMon:'ten mon',gia''},{mon:2,tenMon:'goi',gia''}]
        let monAn = this.arrMonAn.find(objectMonAn => objectMonAn.maMon ===maMon);
        if(monAn){
            return monAn
        }
        return undefined
    }

    xoaMonAn = (maMon) =>{//maMon:1 hoặc 2
        //Muốn xóa 1 phần tử phải tìm ra index của phần tử đó
        //arr.splice(index,1)
        //[{mon:1,tenMon:'ten mon',gia''},{mon:2,tenMon:'goi',gia''}]
        //findIndex là hàm tìm vị trí của phần tử mảng thỏa điều kiện arrowFunction (tìm thấy trả về vị trí, không tìm thấy trả về -1)
        let index = this.arrMonAn.findIndex((monAn)=>monAn.maMon === maMon)
        //Nếu tìm thấy thì trả về vị trí, ngc lại không tìm thấy thì trả về -1
        if(index !== -1){
            this.arrMonAn.splice(index,1);
        }
    }

    chinhSuaMon =(ma,monAnCapNhat) => {

    }

    capNhatMonAn = (ma, monAnCapNhat) => {
        let monAn = this.arrMonAn.find(objectMonAn => objectMonAn.maMon=== ma);

        //Tìm thấy món ăn khớp vs mã trên popup
        if(monAn){
            //Cách 1 cập nhật từng giá trị
            // monAn.tenMon= monAnCapNhat.tenMon;
            // monAn.giaMon = monAnCapNhat.giaMon;
            //Cách 2duyệt thuộc tính es6
            for(let keyMonAn in monAn) {
                monAn[keyMonAn] = monAnCapNhat[keyMonAn];
            }
        
        }
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
                        <button onclick="xoaMonAn('${monAn.maMon}')">Xóa</button>
                        <button data-toggle="modal" data-target="#exampleModal" onclick="chinhSua('${monAn.maMon}')">Chỉnh sửa</button>
                    </td>
                </tr>        
            `
        })
        return arrResult;
    }

    renderMenu = (idTable) =>{


        let arrHtmlMenu = this.taoMenu(); //['<tr></tr>','<tr></tr>']
        //foreach(callback): Foreach nhận vào 1 callback có 2 tham số (phần tử của mảng, vị trí phần tử) hàm này sẽ chạy n lần dụa vào n phần tử của mảng
        let content = '';
        arrHtmlMenu.forEach((htmlTrMonAn,index)=>{
            content += htmlTrMonAn
        });
        document.getElementById(idTable).innerHTML = content;
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