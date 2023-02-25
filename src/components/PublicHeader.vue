<script>
// import { userAccStore } from "@/Store/userStore";

export default {
    // setup() {
    //   const taikhoan = userAccStore();
    //   return { taikhoan };
    // },
    // methods: {
    //   logout() {
    //     this.taikhoan.user = {};
    //     this.$router.push({ name: "Login" });
    //   },
    // },
};
</script>

<template>
<header>
    <div class="bg-light">
        <div class="container d-flex flex-row justify-content-end row-login py-2" style="height: 40px">
            <p class="fw-bold">
                <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>
            </p>
            <i class="fa-solid fa-bell border-start border-dark border-1 ps-2 pt-1"></i>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-header ftco-navbar-light" id="ftco-navbar">
        <!-- <b class="text-light ms-4 col-4 title-nav">VETERINARY CLINIC</b> -->
        <div class="logo">
            <!-- <img src="../assets/images/header-logo.png" class="w-50 " alt=""> -->
            <img src="../assets/images/clinic-logo-footer.jpg " style="width: 70px !important" alt="" />
        </div>
        <div class="container-fluid col-7">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="fa fa-bars"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav pb-3">
                    <li class="nav-item active">
                        <a href="#" class="">
                            <router-link class="nav-link text-light f page" :to="{ name: 'Home' }">Trang chủ
                            </router-link>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#">
                            <router-link class="nav-link text-light page" :to="{ name: 'About' }">Về chúng tôi</router-link>
                        </a>
                    </li>
                    <!-- <li class="nav-item">
              <a href="#">
                <router-link
                  class="nav-link text-light page"
                  :to="{ name: 'Service' }"
                  >Dịch vụ</router-link
                >
              </a>
            </li> -->
                    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul class="navbar-nav" style="margin-top: 20px; ">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <router-link class="nav-link text-light page fw-bold" :to="{ name: 'Service' }">Dịch vụ</router-link>
                                </a>
                                <ul class="dropdown-menu">
                                    <router-link class="dropdown-item" :to="{ name: 'PhysicalExamination' }">Physical examination</router-link>
                                    <router-link class="dropdown-item" :to="{ name: 'SpaRoom' }">Spa- grooming</router-link>
                                    <router-link class="dropdown-item" :to="{ name: 'HotelRoom' }">Hotel- service</router-link>
                                    <!-- <li><span class="dropdown-item-text">Dropdown item text</span></li>
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                                </ul>
                                <!-- <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <router-link class="dropdown-item" :to="{ name: 'PhysicalExamination' }">Physical examination</router-link>
            <router-link class="dropdown-item" :to="{ name: 'SpaRoom' }">Spa- grooming</router-link>
            <router-link class="dropdown-item" :to="{ name: 'HotelRoom' }">Hotel- service</router-link>
          </ul> -->
                            </li>
                        </ul>
                    </div>

                    <li class="nav-item active">
                        <a href="#" class="">
                            <router-link class="nav-link text-light page" :to="{ name: 'Contact' }">Liên hệ</router-link>
                        </a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="">
                            <router-link class="nav-link text-light page" :to="{ name: 'Booking' }">Đặt lịch</router-link>
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
