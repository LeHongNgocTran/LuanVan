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
    <!-- <div class="w-100">
          <img  
          class="w-100 d-block"
            alt='Logo' 
            src="https://www.vippetcare.com/wp-content/uploads/2020/10/VIP_Homepage_Hero_1500w-tinypanda.jpg">
        </div> -->
    <div class="m-auto">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">

                    <img src="../../assets/images/bg-new-2.jpeg" class="d-block w-100" alt="Thumnail1">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/bg-new1.jpg" class="d-block w-100" alt="Thumnail2">
                </div>
                <div class="carousel-item">
                    <img src="../../assets/images/bg-new-4.jpg" class="d-block w-100" alt="...">
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
    </div>

    <div class="pt-4 pb-5">
      <h4 class="text-center text-uppercase">explore our service</h4>
      <div class="d-flex justify-content-center">
        <div class="pt-5">
          <button class="  px-3 py-1 mx-4 btn-service">Physical examination</button>
          <button class="  px-3 py-1 mx-4 btn-service">Spa- grooming</button>
          <button class="  px-3 py-1 mx-4 btn-service">Hotel- service</button>
        </div>
      </div>
    </div>
    <div class="pt-4 ">
        <div class="py-2 px-4">
      <div class="row ">
        <div class="col-6  container">
            <div class=" content-learnmore">
                <h3 >Find the Best Food for Your Dog or Cat</h3>
          <p>Get your personalized pet food recommendation with the Pet Food Finder tool.</p>
          <div>
            <button class="btn-learn_more">Find my shop</button>
            <button class="btn-learn_more ">Learn more</button>
          </div>


            </div>
          
        </div>
        <div class="col-6">
          <img src="../../assets/images/pate_cat.jpg " class="img-fluid w-100" alt="" id="">
          
        </div>
      </div>
    </div>
    </div>

    

    <div class="pt-4 pb-5 FAQ">
      <h3 class="text-center ">FAQs</h3>
      <p class="text-center ">Select a Topic </p>
      <div class="d-flex justify-content-center">
        <div class="pt-3">
          <button class="  px-3 py-1 mx-4 btn-FAQ">Dog products</button>
          <button class="  px-3 py-1 mx-4 btn-FAQ">Cat product</button>
          <button class="  px-3 py-1 mx-4 btn-FAQ">Contact us</button>
        </div>
      </div>
    </div>

    <div class="container">
        <!-- <h4 class="text-uppercase text-dark py-3 text-center m-auto w-25 ">Our Services</h4> -->

        <h4 class="text-center">What Guides Us</h4>
        <p class="text-center">We shape the future of Health and Well-being for pets & people through three simple pursuits.</p>
        
        <div class="row mt-4">
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center">
                    <img class="rounded-circle" src="../../assets/images/guide-1.png" style="width: 90%" alt="" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Pets Are Our Passion
                </p>
                <p class="text-center">We are connecting pets and people. We are building strong communities. We are shaping a better world.</p>
            </div>
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" >
                    <img class="rounded-circle " src="../../assets/images/guide-2.png" style="width: 90%" alt="" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Safety Is Our Promise
                </p>
                <p class="text-center">We are exceeding safety standards. We are committing to quality. We are leading the industry.  </p>
            </div>
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" >
                    <img class="rounded-circle  " src="../../assets/images/guide-3.png" style="width: 90%" alt="123456" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Innovation Is Our Pledge
                </p>
                <p class="text-center">We are discovering new possibilities. We are making nutritional breakthroughs. We are advancing the lives of pets.</p>
            </div>
       
        </div>
    </div>

    <!-- <div>
        <div>
            <div class="row mt-4">
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                    <img class="rounded-circle item-services d-block" src="../../assets/images/cat-house.jpg" style="width: 65%" alt="" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Nội trú
                </p>
            </div>
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                    <img class="rounded-circle item-services d-block" src="../../assets/images/pupple-dog.jpg" style="width: 65%" alt="" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Làm đẹp
                </p>
            </div>
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                    <img class="rounded-circle item-services d-block" src="../../assets/images/doctor-cat-dog.jpg" style="width: 65%" alt="123456" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Kiểm tra sức khỏe
                </p>
            </div>
       
        </div>
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
                    <img src="../../assets/images/home-doctor-with-cat.jpg" class="img-fluid" alt="ABC" />
                </div>
            </div>
        </div>
    </div> -->

    <hr />
    <!-- <div class="w-100">
        <h4 class="text-uppercase bg-dark text-white py-3 text-center m-auto w-25 ">Our Services</h4>
        <div class="row mt-4">
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                    <img class="rounded-circle item-services d-block" src="../../assets/images/cat-house.jpg" style="width: 65%" alt="" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Nội trú
                </p>
            </div>
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                    <img class="rounded-circle item-services d-block" src="../../assets/images/pupple-dog.jpg" style="width: 65%" alt="" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Làm đẹp
                </p>
            </div>
            <div class="col-lg-4 align-item-center">
                <div class="d-flex justify-content-center" style="height: 250px">
                    <img class="rounded-circle item-services d-block" src="../../assets/images/doctor-cat-dog.jpg" style="width: 65%" alt="123456" />
                </div>
                <p class="text-center d-flex justify-content-center align-items-center service-title mt-4">
                    Kiểm tra sức khỏe
                </p>
            </div>
       
        </div>
    </div> -->

</main>

<PublicFooters />
</template>

 
<style>
@import './Home.module.css';
</style>
