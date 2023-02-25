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
  <!-- <HeaderPublic /> -->
  <main>
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../assets/images/bg-new-2.jpeg"
              class="d-block w-100"
              alt="Thumnail1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/images/bg-new1.jpg"
              class="d-block w-100"
              alt="Thumnail2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../assets/images/bg-new-4.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="py-5" style="background-color: #edf1d6">
      <h4 class="text-center text-uppercase fw-bold">explore our service</h4>
      <div class="d-flex justify-content-center mt-3">
        <button class="px-3 py-1 mx-4 btn-service">Physical examination</button>
        <button class="px-3 py-1 mx-4 btn-service">Spa- grooming</button>
        <button class="px-3 py-1 mx-4 btn-service">Hotel- service</button>
      </div>
    </div>

    <div class="row w-100 py-5">
      <div class="col-6 d-flex flex-column ps-5 align-self-center">
        <p class="fs-4 fw-bold">Find the Best Food for Your Dog or Cat</p>
        <p class="fs-5 fw-bold">
          Get your personalized pet food recommendation with the Pet Food Finder
          tool.
        </p>
        <div class="d-flex flex-row">
          <p
            to="/"
            class="border rounded-2 bg-danger text-white px-4 py-2 me-4"
          >
            Find my pet's food
          </p>
          <p to="/" class="border rounded-2 bg-danger text-white px-4 py-2">
            Learn more
          </p>
        </div>
      </div>
      <div class="col-5">
        <img
          src="https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_600/public/2022-04/PFF_PurinaHomepage_Module_ExpertSeal_2.png?itok=fh9z0hwv"
          alt="Banner"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <p class="fs-4 fw-bold">
          Life Happens. Joining CareClub® ensures you’re ready for it.
        </p>
        <p>
          Unlike an insurance plan that waits for something to go wrong,
          CareClub covers your pet’s yearly preventive care—with plenty of
          savings for you along the way.
        </p>
        <p>
          A CareClub membership is a made-for-real-life care package, including
          a personalized plan for your pet and exclusive member benefits for
          you—all for a convenient monthly membership fee.
        </p>
      </div>
      <div class="col-3">
        <img
          src="https://vcahospitals.com/-/media/2/vca/careclub/610x343_careclub_dachshund.ashx?h=343&iar=0&w=610&hash=F5DA168E529CCEF731A1BBABF9947C5D"
          alt="Banner1"
        />
      </div>
    </div>
    <!--
    <div class="container">

      <h4 class="text-center">What Guides Us</h4>
      <p class="text-center">
        We shape the future of Health and Well-being for pets & people through
        three simple pursuits.
      </p>

      <div class="row mt-4">
        <div class="col-lg-4 align-item-center">
          <div class="d-flex justify-content-center">
            <img
              class="rounded-circle"
              src="../../assets/images/guide-1.png"
              style="width: 90%"
              alt=""
            />
          </div>
          <p
            class="text-center d-flex justify-content-center align-items-center service-title mt-4"
          >
            Pets Are Our Passion
          </p>
          <p class="text-center">
            We are connecting pets and people. We are building strong
            communities. We are shaping a better world.
          </p>
        </div>
        <div class="col-lg-4 align-item-center">
          <div class="d-flex justify-content-center">
            <img
              class="rounded-circle"
              src="../../assets/images/guide-2.png"
              style="width: 90%"
              alt=""
            />
          </div>
          <p
            class="text-center d-flex justify-content-center align-items-center service-title mt-4"
          >
            Safety Is Our Promise
          </p>
          <p class="text-center">
            We are exceeding safety standards. We are committing to quality. We
            are leading the industry.
          </p>
        </div>
        <div class="col-lg-4 align-item-center">
          <div class="d-flex justify-content-center">
            <img
              class="rounded-circle"
              src="../../assets/images/guide-3.png"
              style="width: 90%"
              alt="123456"
            />
          </div>
          <p
            class="text-center d-flex justify-content-center align-items-center service-title mt-4"
          >
            Innovation Is Our Pledge
          </p>
          <p class="text-center">
            We are discovering new possibilities. We are making nutritional
            breakthroughs. We are advancing the lives of pets.
          </p>
        </div>
      </div>
    </div> -->
  </main>

  <PublicFooters />
</template>

<style>
@import "./Home.module.css";
</style>
