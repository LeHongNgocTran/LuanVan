<script>
import { userAccStore } from "@/Store/userStore";

export default {
  setup() {
    const taikhoan = userAccStore();
    return { taikhoan };
  },
  methods: {
    logout() {
      this.taikhoan.user = {};
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<template>
  <header>
    <div
      class="bg-light d-flex flex-row justify-content-end row-login py-2"
      style="height: 40px"
    >
      <p class="fw-bold">
        <router-link class="nav-link text-dark" :to="{ name: 'Login' }"
          >Đăng nhập</router-link
        >
      </p>
      <i
        class="fa-solid fa-bell border-start border-dark border-1 ps-2 pt-1"
      ></i>
    </div>
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-header ftco-navbar-light"
      id="ftco-navbar"
    >
      <b class="text-light ms-4 col-4 title-nav"
        >VETERINARY CLINIC</b
      >
      <div class="container-fluid col-7">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span> Menu
        </button>
        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav pb-3">
            <li class="nav-item active">
              <a href="#" class="">
                <router-link
                  class="nav-link text-light f page"
                  :to="{ name: 'Home' }"
                  >Trang chủ
                </router-link>
              </a>
            </li>

            <li class="nav-item">
              <a href="#">
                <router-link
                  class="nav-link text-light page"
                  :to="{ name: 'About' }"
                  >Về chúng tôi</router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <router-link
                  class="nav-link text-light page"
                  :to="{ name: 'Service' }"
                  >Dịch vụ</router-link
                >
              </a>
            </li>
            <li class="nav-item active">
              <a href="#" class="">
                <router-link
                  class="nav-link text-light page"
                  :to="{ name: 'Contact' }"
                  >Liên hệ</router-link
                >
              </a>
            </li>
            <li class="nav-item active">
              <a href="#" class="">
                <router-link
                  class="nav-link text-light page"
                  :to="{ name: 'Booking' }"
                  >Đặt lịch</router-link
                >
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  </header>
</template>
<style>

@import "./PublicHeader.module.css";
</style>
