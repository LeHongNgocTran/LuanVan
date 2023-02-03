<script>
import HeaderPublic from "../components/PublicHeader.vue";
import PublicFooters from "../components/PublicFooters.vue";

export default {
  components: {
    HeaderPublic,
    PublicFooters,
  },
};
</script>
<template>
  <header-public />
  <main>
    <div class="d-flex justify-content-center container">
      <div class="m-1 p-2">
        <table class="table table-hover text-center border border-primary">
          <thead class=" ">
            <tr class="text-light bg-form">
              <th colspan="6 ">Bảng giá cả dịch vụ</th>
            </tr>
            <tr class="text-dark use-color">
              <th colspan="2" rowspan="2">Dịch vụ</th>
              <th colspan="4">Giá</th>
            </tr>
            <tr class="text-dark use-color">
              <!-- <td scope="col" colspan="2">Tên dịch vụ</td> -->
              <td scope="col " colspan="2">Mèo</td>
              <td scope="col" colspan="2">Chó</td>
            </tr>
            <tr>
              <td colspan="2">Tắm</td>
              <td colspan="2">180.000</td>
              <td colspan="2">230.000</td>
            </tr>
            <tr>
              <td colspan="2">Cắt móng</td>
              <td colspan="2">180.000</td>
              <td colspan="2">230.000</td>
            </tr>
            <tr>
              <td colspan="2">Tạo kiểu</td>
              <td colspan="2">180.000</td>
              <td colspan="2">230.000</td>
            </tr>
            <tr>
              <td colspan="2">Tỉa lông</td>
              <td colspan="2">180.000</td>
              <td colspan="2">230.000</td>
            </tr>
            <tr>
              <td colspan="2">Nhuộm 2 tai</td>
              <td colspan="2">180.000</td>
              <td colspan="2">230.000</td>
            </tr>
            <tr>
              <td colspan="2">Nhuộm đuôi</td>
              <td colspan="2">180.000</td>
              <td colspan="2">230.000</td>
            </tr>
            <tr>
              <td colspan="2">Nhuộm 4 chân</td>
              <td colspan="2">180.000</td>
              <td colspan="2">230.000</td>
            </tr>
          </thead>
        </table>
        <div class="text-center">
          <h6 class="text-left"><b> Ghi chú:</b></h6>
          <textarea rows="3" cols="90" class="px-2">...</textarea>
        </div>

        <!-- Modal register -->
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Đăng ký dịch vụ
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
                <form>
                  <div class="form-group">
                    <label for="formGroupExampleInput">Tên vật nuôi</label>
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Nhập vào tên vật nuôi"
                    />
                  </div>
                  <div class="form-group ">
                    <label for="formGroupExampleInput2">Giới tính</label>
                    <div class="row pl-2">
                      <div class="form-check ml-2">
                      <input
                        class="form-check-input "
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label col" for="flexRadioDefault1">
                        male
                      </label>
                    </div>
                    <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label col" for="flexRadioDefault2">
                      female
                    </label>
                  </div>

                    </div>

                   
                  </div>

                  <div class="form-group ">
                    <label for="formGroupExampleInput2">Dịch vụ đã chọn:</label>
                    <div class="row pl-2">
                
                    <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label col" for="flexRadioDefault2">
                      Spa- grooming
                    </label>
                  </div>

                    </div>

                   
                  </div>
                  <div class="form-group ">
                    <label for="formGroupExampleInput2">Gói dịch vụ:</label>
                    <div class="row pl-2">
                
                    <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label col" for="flexRadioDefault2">
                      1

                    </label>
                  </div>
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label col" for="flexRadioDefault2">
                      2
                    </label>
                  </div>
                  <div class="form-check ">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label col" for="flexRadioDefault2">
                      3
                    </label>
                  </div>

                    </div>
                    <!-- Thông tin của sen -->
<b>Thông tin của sen...</b>

                   
                  </div>

                 
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- end modal -->





        <div class="text-center">
          <router-link
            class="btn btn-primary text-light"
            :to="{ name: 'DangKyXacNhan' }"
            >Đăng ký
          </router-link>
          <a class="btn btn-primary" href="#" role="button">Xóa</a>
        </div>
      </div>
    </div>
  </main>

  <public-footers />
</template>

<style scoped>
.loaiBieuMau {
  font-style: italic;
  text-decoration: none;
  list-style: none;
  font-weight: 100;
  border: double blue;
  padding-bottom: 5%;
  margin-top: 0;
}

.use-colorr {
  background-color: #dae9f3;
}
.use-color {
  background-color: #eef9ff;
}

.button-1 {
  background-color: #3872b2;
  border: 1px solid #80b5d7;
}

.table th,
.table td,
.table tr,
.table thead tr th,
.table tbody tr td {
  border: 1px solid #19a7ff;
}

.bg-form {
  background-color: #3456b4;
}
</style>
