<script>
import HeaderPublic from "../../../components/PublicHeader.vue";
import PublicFooters from "../../../components/PublicFooters.vue";

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
          <thead>
            <tr class="text-light bg-form">
              <th colspan="6 ">Bảng giá cả dịch vụ</th>
            </tr>
            <tr class="text-dark use-color">
              <th colspan="2" rowspan="2">Dịch vụ</th>
              <th colspan="4">Giá</th>
            </tr>
            <tr class="text-dark use-color">
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
        <div class="">
          <h6 class=""><b> Ghi chú:</b></h6>
          <textarea rows="3" cols="90" class="px-2"></textarea>
        </div>

        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary text-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Đăng ký dịch vụ
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-uppercase" id="exampleModalLabel">
                  Đăng ký dịch vụ
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <table>
                  <tr class="">
                    <td class="title-info">
                      Tên vật nuôi :
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td colspan="2">
                      <input
                        type="text"
                        class="form-control w-100"
                        id="formGroupExampleInput"
                        required
                        placeholder="Nhập vào tên vật nuôi"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td class="title-info">
                      Vật nuôi là:
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input border border-warning-subtle"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Chó
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input border border-warning-subtle"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Mèo
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="title-info">
                      Giới tính:
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input border border-warning-subtle"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Male
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input border border-warning-subtle"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Female
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr class="title-info ">

                    <td class="d-flex justify-content-start">
                      Dịch vụ đã chọn :
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input border border-warning-subtle"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Physical examination
                        </p>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input border border-warning-subtle"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Spa-Grooming
                        </p>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input border border-warning-subtle"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Hotel- service
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Thời gian đặt hẹn 
                      <span class="text-danger fw-bold">*:</span>
                    </td>
                    <td>
                      <input type="date" />
                    </td>
                  </tr>
                </table>
                <div class="form-group">
                  <div
                    class="box-timeslot"
                    style="margin-top: 20px; margin-bottom: 15px"
                  ></div>
                  <hr />
                  <h5 class="text-center modal-title text-uppercase mb-2">
                    Thông tin của bạn
                  </h5>
                  <div>
                    <form action="">
                      <div class="form-group">
                        <p class="">
                          Họ và tên của bạn :
                          <span class="text-danger fw-bold">*</span>
                        </p>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                      <div class="form-group">
                        <p class="">
                          Số điện thoại :
                          <span class="text-danger fw-bold">*</span>
                        </p>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                      <div class="form-group">
                        <p class="">
                          Địa chỉ : <span class="text-danger fw-bold">*</span>
                        </p>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                      <div class="form-group">
                        <p class="">
                          Email : <span class="text-danger fw-bold">*</span>
                        </p>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hủy
                </button>
                <button type="button" class="btn btn-primary">
                  Đặt lịch ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <public-footers />
</template>

<style scoped>
@import "./SpaRoom.module.css";
</style>
