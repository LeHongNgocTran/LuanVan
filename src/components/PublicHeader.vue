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
    <!-- <div class="bg-header">
      <p class="text-center pt-2 pb-2 text-light main-title">
        <b>VETERINARY CLINIC</b>
      </p>
    </div> -->

    <!-- <div>
      <div
        class="pre-nav row text-center pre-nav m-0"
        style="padding-top: 15px"
      >
        <div class="col-3">
          <img src="../assets/images/logo_cat.jpg" class="img-logo" alt="" />
        </div>
        <p class="col-6 row"></p>
        <div class="row col-3 d-flex justify-content-end">
          <div v-if="taikhoan.user.TenTaiKhoan == null" class="col">
            <div class="row p-0 d-flex flex-row">
              <div></div>
              <router-link
                class="nav-link text-dark col-5"
                :to="{ name: 'Login' }"
                >Đăng nhập</router-link
              >| &nbsp;
              <i class="fa-solid fa-bell"></i>
            </div>
          </div>
          <div v-else class="user-login">
            <div class="row">
              <a class="user-icon"><i class="fas fa-user text-dark"></i></a>
              <span class=""
                >{{ taikhoan.user.TenTaiKhoan
                }}<a @click="logout()"
                  ><i
                    class="fa-solid fa-right-from-bracket text-danger"
                    style="cursor: pointer"
                  ></i></a
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="bg-light d-flex flex-row justify-content-end ">
      
        <p class="pt-4  pl-3 pr-5 fw-bold">Đăng nhập</p>
        <p class="pt-4  pr-5 fw-bold"> |</p>
        <i class="fa-solid fa-bell pt-4 pr-5 "></i>
      
      
    </div>

    <div
      class="navbar navbar-expand-lg navbar-dark row"
      aria-label="Eighth navbar example"
    ></div>

    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-header ftco-navbar-light p-0 m-0"
      id="ftco-navbar"
    >
      <b class="text-light pl-5 text-center col-2  title-nav pl-3" >VETERINARY CLINIC</b>
      <div class="container-fluid col-10">
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
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a href="#" class="">
                <router-link
                  class="nav-link text-light decorate page"
                  :to="{ name: 'Home' }"
                  >Trang chủ
                </router-link>
              </a>
            </li>

            <li class="nav-item">
              <a href="#">
                <router-link
                  class="nav-link text-light page"
                  :to="{ name: 'AboutUs' }"
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

            <!-- <li class="nav-item active"><a href="#" class="">
                            <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>
                        </a>
                    </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
.space {
  margin: 1% 2% 0;
  padding: 0 1%;
}
.main-title {
  letter-spacing: 2px;
}

.nav {
  display: flex;
  background-color: #000;
  height: 60px;
  align-items: center;
  font-style: Monospace;
  font-size: 100%;
  font-weight: 100;
}

.bg-color {
  background-color: #000;
}
.img-logo {
  height: 0px;
  margin-left: 10px;
}

.search-bg {
  background-color: #a7ffe4;
}

button {
  color: #000 !important;
}

.bg-header {
  background-color: #084d7b;
}

.nav-item {
  font-size: 1rem;
  margin-bottom: 1%;
}

.nav-link {
  margin-bottom: 0%;
  padding: 0% !important;
}

a {
  margin-left: 10px;
  margin-right: 10px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 600;
}

a:hover {
  text-decoration: none !important;
}
.page {
  font-size: 1.2rem;
  color: white;
}
.title-nav{
  font-size: 1.4rem;
}
</style>
