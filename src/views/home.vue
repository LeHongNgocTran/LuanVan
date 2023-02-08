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
  <HeaderPublic />
  <main class="container">
    <div class="">
      <img
        src="../assets/images/clinic_background.jpg"
        class="img-fluid offset-3"
        alt=""
      />
    </div>
    <hr>
    <div class="row py-5">
      <div class="col">
        <div class="px-3">
          <b class="content-home"> PHÒNG KHÁM THÚ Y HM </b>là một phòng khám thú y đầy đủ dịch vụ
          được thúc đẩy bởi niềm đam mê xuất sắc. Chúng tôi cung cấp dịch vụ
          chăm sóc lâm sàng nhân ái, công nghệ tiên tiến và bác sĩ thú y quốc tế
          có tay nghề cao để thực hiện lời hứa về dịch vụ đặc biệt và chăm sóc
          cá nhân cho thú cưng yêu quý của bạn. Toàn bộ nhân viên của chúng tôi
          cam kết duy trì các tiêu chuẩn quốc tế và đối xử với tất cả động vật
          bằng sự quan tâm yêu thương trong mỗi lần kiểm tra, thủ thuật hoặc
          phẫu thuật. 

          
        </div>
      </div>
      <div class="col">
        <img src="../assets/images/home_cat.jpg" class="ml-4" width="80%" alt="">
      </div>
    </div>

    <!--  -->
    <div class="col">
      <div class="ss1">
        <h3 class="text-center">Bài viết nổi bật</h3>
        <div class="row">
          <div class="col">
            <img src="../assets/images/cat_bike.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col">
            <img src="../assets/images/cat_bike.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col">
            <img src="../assets/images/cat_bike.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col">
            <img src="../assets/images/cat_bike.jpg" class="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <!-- <div class="my-3 ss2">
        <h3 class="text-center">Tin tức</h3>
        <div class="row">
          <div class="row"></div>

          <div class="row">
            <img
              src="../assets/images/cat_red_shirt.jpg"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div> -->

      <div class="row"></div>
      <div class="row"></div>
    </div>
  </main>

  <PublicFooters />
</template>
<style>
.content-home{
  font-size: larger;
}
</style>
