export class MonAn {
    maMon = '';
    tenMon ='';
    loaiMon = '';
    giaMon = 0;
    khuyenMai =0;
    tinhTrang = false;
    hinhAnh = '';
    moTa = '';

    constructor () {

    }

    tinhGiaKhuyenMai = () =>{
                            //300      - ( 300   * 10/100) =270
        let giaKhuyenMai = this.giaMon -(this.maMon * this.khuyenMai/100);
        return giaKhuyenMai
    }

    hienThiThongTin = () => {
        return `
        <ul class="list-group mb-3">
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <img id="imgMonAn" src="${this.hinhAnh}" alt="hình món ăn" />
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6 class="my-0">Mã Món</h6>
                      </div>
                      <span name="maMon" id="spMa" class="text-muted" ${this.maMon}></span> 
                    </li>
                    <li 
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6 class="my-0">Tên Món</h6>
                      </div>
                      <span name="tenMon" id="spTenMon" class="text-muted" ${this.tenMon}></span>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6 class="my-0">Loại Món</h6>
                      </div>
                      <span name="loaiMon" id="spLoaiMon" class="text-muted" ${this.loaiMon}> </span>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6 class="my-0">Giá Món</h6>
                      </div>
                      <span name="giaMon" id="spGia" class="text-muted"${this.giaMon}> </span>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6 class="my-0">Khuyến Mãi</h6>
                      </div>
                      <span name="khuyenMai" id="spKM" class="text-muted" ${this.khuyenMai}> </span>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6 class="my-0">Giá KM</h6>
                      </div>
                      <span name="giaSauKhuyenMai" id="spGiaKM" class="text-muted" ${this.tinhGiaKhuyenMai()}> </span>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6 class="my-0">Tình Trạng</h6>
                      </div>
                      <span name='tinhTrang' id="spTT" class="text-muted" ${this.tinhTrang == '0' ? 'Hết' : 'Còn'}> </span>
                    </li>
                    <li
                      class="
                        list-group-item
                        d-flex
                        justify-content-between
                        lh-condensed
                      "
                    >
                      <div>
                        <h6>Mô tả</h6>

                        <p name="moTa" id="pMoTa" class="text-muted" ${this.moTa}></p>
                      </div>
                    </li>
                  </ul>
                  `
    }
}



// let mon = new MonAn(); //instance (đối tượng)