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
    <div>
      <h2 class="fw-bold text-danger text-center mt-4">Giới thiệu</h2>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="row bg-ss1 rounded p-4">
              <h5>
                <i class="fa-solid fa-sack-dollar mr-2 "></i>Cung cấp sản phẩm
                với mức giá phải chăng
              </h5>
            </div>
            <div class="row mt-5 bg-ss1 rounded p-4">
              <h5>
                <i class="fa-solid fa-paw mr-2"></i> Nhân viên tư vấn nhiệt
                tình, hiểu rõ về vật nuôi
              </h5>
            </div>
          </div>

          <div class="col-4">
            <img
              src="../assets/images/cat_shower_service.jpg"
              class="img-fluid d-flex justify-content-center ml-5"
              alt=" "
              width="200px"
            />
          </div>

          <div class="col-4">
            <div class="row bg-ss1 rounded p-4">
              <h5>
                <i class="fa-solid fa-heart-pulse mt-1 mr-2"></i>
                Cung cấp sản phẩm chất lượng
              </h5>
            </div>
            <div class="row bg-ss1 rounded p-4 mt-5">
              <h5>
                <i class="fa-solid fa-house-chimney-medical mt-1 mr-2"></i>
                Cung cấp dịch vụ đa dạng với giá cả hợp lý
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>

    <div>
      <h3 class="text-center fw-bolder">Chi nhánh</h3>
      <div class="row ml-4 mr-4 pb-4">
        <div class="col-4 text-right"> Cần Thơ</div>
        <div class="col-4 text-center">Hồ Chí Minh</div>
        <div class="col-4 text-left">Vĩnh Long</div>
      </div>
      <hr>
    </div>
    <!-- <div>
      <h4 class="text-center">Phòng khám thú y Huế Minh</h4>
      <p class="col-9 offset-2">
        Tại phòng khám chúng tôi không chỉ chuẩn đoán, khám bệnh cho vật nuôi.
        Ngoài ra còn một số dịch vụ chăm sóc làm đẹp, dịch vụ giữ vật nuôi khi
        bạn bận đi công tác hoặc không có thời gian để bên cạnh chúng
      </p>
    </div> -->
    <h2 class="text-center">Một số hình ảnh đáng yêu</h2>
    <div class="row pt-2 m-3">
      <div class="col-8 border border-dange">
        <div class="row pt-4" ></div>
        <h5 class="text-center ">Một số hình ảnh vật nuôi của khách hàng</h5>
       
          <img
            src="../assets/images/cat_sky.jpg"
            class="img-fluid col"
            width="10%"
            alt=""
          />
          hhh
          <img
            src="../assets/images/cat_heart.jpg"
            class="img-fluid col"
            width="20%"
            alt=""
          />
          <img
            src="../assets/images/cat_bike.jpg"
            class="img-fluid col"
            width="20%"
            alt=""
          />
          <img
            src="../assets/images/cat_red_shirt.jpg"
            class="img-fluid col"
            width="20%"
            alt=""
          />
         
       
        <p class="col">
          Pate là loại thức ăn bổ sung dinh dưỡng cho mèo, giúp mèo cải thiện
          khẩu vị cho bữa ăn thường ngày thêm ngon miệng. Bên cạnh đó, loại thức
          ăn này còn giúp bạn tiết kiệm thời gian trong việc chế biến nhưng vẫn
          đảm bảo đủ dinh dưỡng cho bé mèo.
        </p>
        
      </div>

      <div class="col-4 pt-4">
        <h4>dịch vụ khác</h4>
        <img
            src="../assets/images/pate_cat.jpg"
            class="img-fluid col"
            width="20%"
            alt=""
          />
        <p>cfghschgcw</p>
      </div>
    </div>
  </main>

  <PublicFooters />
</template>
<style>
.bg-ss1{
  background-color: rgb(255, 250, 187);
 
}
</style>
