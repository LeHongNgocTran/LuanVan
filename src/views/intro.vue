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
      <h2 class="fw-bold text-danger text-center  title-page pt-5">Giới thiệu</h2>
      <div class="container">



        
        <div class="row">
          <div class="col-4">
            <div class="row bg-ss1 rounded p-4 mt-4">
              <h5>
                <i class="fa-solid fa-sack-dollar mr-2"></i>Cung cấp sản phẩm
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
              class="img-fluid d-block w-100"
              alt=" "
              width=""
            />
          </div>

          <div class="col-4 d-flex flex-column ">
            <div class=" bg-ss1 rounded p-4 mt-4">
              <h5>
                <i class="fa-solid fa-heart-pulse mt-1 mr-2"></i>
                Cung cấp sản phẩm chất lượng
              </h5>
            </div>
            <div class=" bg-ss1 rounded p-4 mt-5">
              <h5>
                <i class="fa-solid fa-house-chimney-medical mt-1 mr-2"></i>
                Cung cấp dịch vụ đa dạng với giá cả hợp lý
              </h5>
            </div>
          </div>
        </div>



      </div>
    </div>
    <hr />

    
    
    <!-- ss -->
    <div class="col">
      <div class="ss1">
        <h3 class="text-center py-4 mb-3">LIÊN QUAN</h3>
        <div class="row d-flex justify-content-around">
          <div class="col-4 ">
            <!-- <img src="../assets/images/dog-fever.jpg" width="60%" class="img-fluid text-right" alt="" /> -->
            <div class="card m-auto" style="width: 18rem" >
              <img
              src="../assets/images/dog-fever.jpg"
                width="100%"
                class="img-fluid w-100 d-block align-item-center  "
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                  <!-- <router-link>BỆNH SỐT Ở CHÓ? </router-link> -->
                  <p class="sick-title">BỆNH SỐT Ở CHÓ ?</p>
                  <p class="sick-content">Sốt ở chó là tình trạng mà rất nhiều người gặp khi nuôi chó. Có rất nhiều nguyên nhân[...]</p>
                  
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card m-auto" style="width: 18rem" >
              <img
                src="../assets/images/stress-cat.jpg"
                width="100%"
                class="img-fluid w-100 d-block align-item-center "
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                  <p class="sick-title">NHẬN BIẾT KHI MÈO GIÀ BỊ ĐAU ?</p>
                  <p class="sick-content">Cách nhận biết cơn đau ở mèo khi chúng già đi, chúng ta thường [...]</p>
                </p>
              </div>
            </div>
          </div>

          <div class="col-4">
            <!-- <img src="../assets/images/dog-fever.jpg" width="60%" class="img-fluid text-right" alt="" /> -->
            <div class="card m-auto " style="width: 18rem" >
              <img
                src="../assets/images/dangruff-cat.jpg"
                width="100%"
                class="img-fluid text-right"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                  <p class="sick-title">GIẢM CĂNG THẲNG CHO MÈO ?</p>
                  <p class="sick-content">Một số lời khuyên hữu ích giúp làm giảm căng thẳng khi đến [...]</p>
                </p>
              </div>
            </div>
            
          </div>
          <hr>
         
        </div>
      </div>

 

      <!-- <div class="row"></div>
      <div class="row"></div> -->
    </div>
    <hr>

    <div>
      <h3 class="text-center "><b>Chi nhánh</b></h3>
      <div class="row ml-4 mr-4 pb-4">
        <div class="col-4 text-right branch-position">Cần Thơ</div>
        <div class="col-4 text-center branch-position">Hồ Chí Minh</div>
        <div class="col-4 text-left branch-position">Vĩnh Long</div>
      </div>
      <hr />
    </div>
  </main>

  <PublicFooters />
</template>
<style>
.bg-ss1 {
  background-color: white;
  border: solid 1px gray;
}

.title-page{
  color: rgb(5, 5, 77) !important;
}
.card-text{
  font-size: 1.2rem;
}
.sick-title{
  font-weight: 700;
  font-size: 1.4rem;
  margin: auto;
}
.sick-content, .branch-position{
  font-size: 1.1rem;
}


</style>
