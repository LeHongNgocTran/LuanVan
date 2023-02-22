<script>
import HeaderPublic from "../../components/PublicHeader.vue";
import PublicFooters from "../../components/PublicFooters.vue";

export default {
  components: {
    HeaderPublic,
    PublicFooters,
  },
};
</script>

<template>
  <HeaderPublic />
  <main>
    <!--     
        <div class="m-auto">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          
          <img src="../../assets/images/thumbnail-1.webp" class="d-block w-100" alt="Thumnail1">
        </div>
        <div class="carousel-item">
          <img src="../../assets/images/thumbnail-2.webp" class="d-block w-100" alt="Thumnail2">
        </div>
        <div class="carousel-item">
          <img src="../../assets/images/bg-3.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        </div> -->
        <!-- <div class="pt-2 ">
          <div class="m-5">
            <div class="row">
              <div class="col-6">
                <div class="">
                  <h5 class="small-title">
                    DỊCH VỤ THÚ Y CAO CẤP DÀNH CHO TẤT CẢ VẬT NUÔI VÀ CHỦ SỞ HỮU CỦA
                    CHÚNG
                  </h5>
                  <div class="main-content">
                    <b class="content-title"> VETERINARY CLINIC </b>
                    là một phòng khám thú y đầy đủ dịch vụ được thúc đẩy bởi niềm
                    đam mê xuất sắc. Chúng tôi cung cấp dịch vụ chăm sóc lâm sàng
                    nhân ái, công nghệ tiên tiến và bác sĩ thú y quốc tế có tay nghề
                    cao để thực hiện lời hứa về dịch vụ đặc biệt và chăm sóc cá nhân
                    cho thú cưng yêu quý của bạn. Toàn bộ nhân viên của chúng tôi
                    cam kết duy trì các tiêu chuẩn quốc tế và đối xử với tất cả động
                    vật bằng sự quan tâm yêu thương trong mỗi lần kiểm tra, thủ
                    thuật hoặc phẫu thuật.
                  </div>
                </div>
              </div>
              <div class="col-6">
                <img
                  src="../../assets/images/home-doctor-with-cat.jpg"
                  class="img-fluid"
                  alt="ABC"
                />
              </div>
            </div>
          </div>
        </div> -->
    
        <hr />
        <div class="w-100">
          <h4 class="text-uppercase bg-dark text-white py-3 text-center m-auto w-25 ">Our Services</h4>
            <div class="row mt-4">
              <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                  <img
                    class="rounded-circle item-services d-block"
                    src="../../assets/images/cat-house.jpg"
                    style="width: 65%"
                    alt=""
                  />
                </div>
                <p
                  class="text-center d-flex justify-content-center align-items-center service-title mt-4"
                >
                  Nội trú
                </p>
              </div>
              <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                  <img
                    class="rounded-circle item-services d-block"
                    src="../../assets/images/pupple-dog.jpg"
                    style="width: 65%"
                    alt=""
                  />
                </div>
                <p
                  class="text-center d-flex justify-content-center align-items-center service-title mt-4"
                >
                  Làm đẹp
                </p>
              </div>
              <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                  <img
                    class="rounded-circle item-services d-block"
                    src="../../assets/images/doctor-cat-dog.jpg"
                    style="width: 65%"
                    alt="123456"
                  />
                </div>
                <p
                  class="text-center d-flex justify-content-center align-items-center service-title mt-4"
                >
                  Kiểm tra sức khỏe
                </p>
              </div>
            </div>
          </div>
    
      </main>

  <PublicFooters />
</template>
 <style>
@import './Home.module.css';</style>
 