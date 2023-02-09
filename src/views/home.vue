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
  <main class="container-fluid">
    <div class="d-flex justify-content-center align-items-center">
      <img
        src="../assets/images/thumbnail.jpg"
        class="img-fluid "
        alt=""
      />
    </div>
    <hr />
    <div class="row py-5">
      <div class="col">
        <div class="px-5 pt-4">
          <h5 class="small-title">
            DỊCH VỤ THÚ Y CAO CẤP DÀNH CHO TẤT CẢ VẬT NUÔI VÀ CHỦ SỞ HỮU CỦA
            CHÚNG
          </h5>
          <div class="main-content ">
            <b class="content-title"> ANIMAL CLINIC </b>
            là một phòng khám thú y đầy đủ dịch vụ được thúc đẩy bởi niềm đam mê
            xuất sắc. Chúng tôi cung cấp dịch vụ chăm sóc lâm sàng nhân ái, công
            nghệ tiên tiến và bác sĩ thú y quốc tế có tay nghề cao để thực hiện
            lời hứa về dịch vụ đặc biệt và chăm sóc cá nhân cho thú cưng yêu quý
            của bạn. Toàn bộ nhân viên của chúng tôi cam kết duy trì các tiêu
            chuẩn quốc tế và đối xử với tất cả động vật bằng sự quan tâm yêu
            thương trong mỗi lần kiểm tra, thủ thuật hoặc phẫu thuật.
          </div>
        </div>
      </div>
      <div class="col">
        <img
          src="../assets/images/home-doctor-with-cat.jpg"
          class="img-fluid"
          alt=""
        />
      </div>
    </div>
    <!--  -->
<hr>
    <div class="container  col px-5">
      <div class="text-center">
        <h4 class="">OUR SERVICES</h4>
      </div>
      
      
    <div class="row container text-center ml-0">

       <div class="col-lg-4 align-item-cente ">
        <img class=" rounded-circle item-services text-center img-fluid" src="../assets/images/cat-house.jpg" width="65%" alt="">
        <div class="py-2">
          <p class=" text-center d-flex justify-content-center align-items-center service-title">Nội trú</p>
        </div>
       </div>

       <div class="col-lg-4 align-item-cente">
        <img class=" rounded-circle item-services text-center img-fluid" src="../assets/images/doctor-cat-dog.jpg" width="65%" alt="">
        <div class="py-2">
          <p class="text-center d-flex justify-content-center align-items-center service-title">Kiểm tra sức khỏe</p>
        </div>
       </div>
       <div class="col-lg-4 align-item-cente">
        <img class=" rounded-circle item-services text-center img-fluid" src="../assets/images/pupple-dog.jpg " width="65%" alt="">
        <div class="py-2">
          <p class="text-center d-flex justify-content-center align-items-center service-title">Làm đẹp</p>
        </div>
       </div>
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
b > .content-title {
  font-size: larger;
}
.main-content{
  font-size: 1.2rem;
}
.small-title {
  color: rgb(5, 5, 77) !important;
  font-weight: 700;
}

.item-services{
  border: solid 2px;
  border-color: rgb(63, 62, 62);
}
.service-title{
  font-size: 1.5rem;
  padding: 5px 2px;
  font-weight: 500;
}
.item-services:hover{
  transform: translate(5px,8px);
 
}
/* main bg */
mainn{
  background-color: #ece9e1;
}

</style>
