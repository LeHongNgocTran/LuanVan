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
          <textarea rows="3" cols="90" class="px-2">
...</textarea
          >
        </div>
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
