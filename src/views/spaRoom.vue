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
  <main class="container">
    <!-- ss1 -->
    <div class="container ss1">
      <div class="row m-2">
        <div class="col-6">
        <img src="../assets/images/cat_bike.jpg" width="60%" alt="">
      </div>
      <div class="col-6">
        <h2 class="title ">SPA- GROOMING</h2>
      </div>

      </div>
    </div>
    <!-- ss2 -->
    <div class="container ss2">
      <div class="row">
        <div class="col-4">
          <img src="../assets" alt="">
        </div>
        <div class="col-8"></div>
      </div>

    </div>


  </main>

  <public-footers />
</template>
<style>
.title{
  font-size: 40px;
  padding-left: 50px;
}

</style>