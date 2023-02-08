

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
        }
    }
};
</script>


<template>
    <header>
        <div class="bg-header ">
            <!-- <router-link :to="{ name: 'Home' }">
                <img src="../assets/images/PhongCongTacSinhVien.png" height="" class="img-fluid mx-auto d-block "
                    alt="">

            </router-link> -->
            <p class="text-center pt-2 pb-2 text-light main-title">
                
                <b>PHÒNG KHÁM THÚ Y HUẾ MINH</b>
                
            </p>

        </div> 
        <div>
            <div class="pre-nav row text-center pre-nav m-0 " style="padding-top: 15px;">
                <div class="col-3">
                    <img src="../assets/images/logo_cat.jpg"  class="img-logo" alt="">
                </div>
                <p class="col-6 row"></p>
                <div class="row col-3 d-flex justify-content-end ">

                    <div v-if="taikhoan.user.TenTaiKhoan == null" class="col">
                        <div class=" justify-content-end row p-0">

                            <router-link class="nav-link text-dark col-5" :to="{ name: 'Login' }">Đăng nhập</router-link>| 
                            &nbsp  <i class="fa-solid fa-bell"></i>
                             <!-- <i class=" fa-solid fa-cart-shopping col-2"> </i> -->

                        </div>
                    </div>
                    <div v-else class="user-login ">
                        <div class="row ">
                            <a class="user-icon"><i class="fas fa-user text-dark "></i></a>
                            <span class="">{{ taikhoan.user.TenTaiKhoan }}<a @click="logout()"><i class=" fa-solid fa-right-from-bracket text-danger" style="cursor: pointer"></i></a></span>
                            
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="navbar navbar-expand-lg navbar-dark  row   " aria-label="Eighth navbar example">

        </div>

        

        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-header ftco-navbar-light" id="ftco-navbar">
            <div class="container-fluid ">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="fa fa-bars"></span> Menu
                </button>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item active"><a href="#" class="">
                                <router-link class="nav-link text-dark decorate" :to="{ name: 'Home' }">Trang chủ
                                </router-link>
                            </a></li>

                        <li class="nav-item"><a href="#">
                                <router-link class="nav-link text-dark" :to="{ name: 'Intro' }">Giới thiệu</router-link>
                            </a></li>
                        <li class="nav-item"><a href="#">
                                <router-link class="nav-link text-dark" :to="{ name: 'Service' }">Dịch vụ</router-link>
                            </a></li>
                        <li class="nav-item active"><a href="#" class="">
                                <router-link class="nav-link text-dark" :to="{ name: '' }">Liên hệ</router-link>
                            </a></li>
                            <li class="nav-item active"><a href="#" class="">
                                <router-link class="nav-link text-dark" :to="{ name: 'Booking' }">Đặt lịch</router-link>
                            </a></li>


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
.main-title{
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
.img-logo{
    height: 0px;
    margin-left: 10px;
   
}

.search-bg {
    background-color: #A7FFE4;
}

button {
    color: #000 !important;
}

.bg-header {
    background-color: #1887cd;
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
</style>

