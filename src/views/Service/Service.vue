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
  <main class="">
    
    
    <div>
        <div class="py-5">
        <p class="text-center title-service title-service  text-uppercase fw-bold text-center  border w-25  m-auto text-white bg-dark ">Dịch vụ</p>
    <div class=" container">
      <div class="row text-center">
        <div
          class="col rounded border border-dark container-icon col bg-cat_health_service kind-service"
        >
          <p class="icon-highligh">
            <i class="fa-solid fa-syringe icon-click"></i>
          </p>

          <h4><b>Physical examination</b></h4>
          <router-link class="" :to="{ name: 'PhysicalExamination' }"
            ><img
              class="col-5 d-flex justify-content-center offset-4"
              src="../../assets/images/cat_health_service1.jpg"
              width="100px"
              alt=""
          /></router-link>

          <p>Click to see more details!</p>
        </div>
        <div
          class="col rounded border border-dark container-icon col bg-cat_shower_service kind-service"
        >
          <p class="icon-highligh">
            <i class="fa-solid fa-shower icon-click"></i>
          </p>

          <h4><b>Spa- grooming</b></h4>
          <router-link class="" :to="{ name: 'SpaRoom' }"
            ><img
              class="col-5 d-flex justify-content-center offset-4"
              src="../../assets/images/cat_shower_service.jpg"
              width="100px"
              alt=""
          /></router-link>
          <p>Click to see more details!</p>
        </div>
        <div
          class="col rounded border border-dark container-icon col bg-cat-service-hotel kind-service"
        >
          <p class="icon-highligh">
            <i class="fa-solid fa-hotel icon-click"></i>
          </p>

          <h4><b>Hotel- service</b></h4>

          <router-link class="" :to="{ name: 'HotelRoom' }"
            ><img
            class="col-5 d-flex justify-content-center offset-4 cat-service-hotel"
            src="../../assets/images/cat_hotel_service.jpg"
            width=""
            alt=""
          /></router-link>
          
          <p>Click to see more details!</p>
        </div>
      </div>
    </div>

    </div>
   
    

    </div>
    
  </main>

  <PublicFooters />
</template>

<style>
@import'./Service.module.css'

</style>
