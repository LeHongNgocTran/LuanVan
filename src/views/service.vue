<script>

import HeaderPublic from "../components/PublicHeader.vue";
import PublicFooters from "../components/PublicFooters.vue";

export default {
    components: {
        HeaderPublic, PublicFooters
    }
}
</script>
<template>
    <HeaderPublic />
    <main>
        <p>
            <img class=" col-5 d-flex justify-content-center  offset-4" src="../assets/images/Banner_catdog.jpg" width="" alt="">
        </p>
        
        <p class="text-center m-0 p-0 title-service">Dịch vụ</p>
    </main>
    <div class="container">
        <div class=" row text-center">
            <div class="col rounded border border-dark container-icon col bg-cat_health_service  p-2">
                <p class="icon-highligh">
                    <i class="fa-solid fa-syringe"></i>
                </p>

                <h4><b>Physical examination</b></h4>
                <router-link class="" :to="{ name: 'PhysicalExamination' }"><img class=" col-5 d-flex justify-content-center  offset-4 " src="../assets/images/cat_health_service1.jpg" width="100px" alt=""></router-link>
                <!-- <img class=" col-5 d-flex justify-content-center  offset-4 " src="../assets/images/cat_health_service.jpg" width="" alt=""> -->
                <p>Click to see more details!
                </p>

            </div>
            <div class="col rounded border border-dark container-icon col  bg-cat_shower_service p-2">
                <!-- <i class="fa-solid fa-home   text-primary px-3 py-2 my-4 ms-3 
            "></i> -->
            <p class="icon-highligh">
                <i class="fa-solid fa-shower"></i>
                </p>
             
                <h4><b>Spa- grooming</b></h4>
                <img class=" col-5 d-flex justify-content-center  offset-4 bg-cat_shower_service" src="../assets/images/cat_shower_service.jpg" width="" alt="">
               
                <p>Click to see more details!
                </p>

            </div>
            <div class="col rounded border border-dark container-icon col bg-cat-service-hotel p-2">
                <!-- <i class="fa-solid fa-book-open-reader   text-primary px-3 py-2 my-4 ms-3 
                "></i> -->
                <p class="icon-highligh">
                    <i class="fa-solid fa-hotel"></i>
                </p>
             
                <h4><b>Hotel- service</b></h4>
                <img class=" col-5 d-flex justify-content-center  offset-4 cat-service-hotel" src="../assets/images/cat_hotel_service.jpg" width="" alt="">
                <p>Click to see more details!
                </p>

            </div>

        </div>

    </div>
    <PublicFooters />

</template>

<style>
h3{
    font-family: Arial, Helvetica, sans-serif;
}
li {
    list-style: none;
}

.link {
    text-decoration: underline;
}

.bg-form {
    background-color: #3456b4;
}
.bg-cat-service-hotel{
    background-color: #ffdd83;
}
.bg-cat_shower_service{
    background-color: #fee2e3;
}
.bg-cat_health_service{
    background-color: #b5e0e7;
}
.title-service{
    font-size: 200%;
    letter-spacing: 0ch;
    font-weight: 400;
}
</style>
