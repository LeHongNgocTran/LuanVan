
<template>

    <header>

        <!-- <div>
            <div class="pre-nav row text-center pre-nav m-0 " style="padding-top: 15px;">
                <div class="col-4">

                </div>
                <InputSearch v-model="searchText" />
                <div class="pre-nav row text-center pre-nav m-0 " >
                    <p class="col-6 row"></p>
                    <div class="row col-3 d-flex justify-content-end pe-5 pt-6">

                        <div v-if="taikhoan.user.TenTaiKhoan == null" class="">
                            <div class=" justify-content-end">

                                <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>

                            </div>
                        </div>
                        <div v-else class="user-login ">
                            <div class="row ">
                                <a class="col-3user-icon"><i class="fas fa-user text-dark "></i></a>
                                <span class="col-3 "><b>{{ taikhoan.user.TenTaiKhoan }}</b>
                                    </span>
                                    <a @click="logout()"><i
                                            class=" fa-solid fa-right-from-bracket text-danger"
                                            style="cursor: pointer"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div> -->
        <!-- <form role="search" class="search-form justify-content-end" action="/search_admin" name="search-form">
            <label>
                <input class="form-control justify-content-en" type="search" placeholder="Search"
                    v-model="this.searchText" @input="this.search()" aria-label="Search" name="search_admin">
            </label>
        </form> -->
        <div>
            <div class="pre-nav row text-center pre-nav m-0 " style="padding-top: 15px;">
                <div class="col-3">

                </div>
                <p class="col-6 row"></p>
                <div class="row col-3 d-flex justify-content-end pe-5 pt-6">

                    <div  class="col">
                        <div class=" justify-content-end">

                            <router-link class="nav-link text-dark" :to="{ name: 'Login' }">Đăng nhập</router-link>

                        </div>
                    </div>
                    <div >
                        <div class="row ">
                            <a class="user-icon"><i class="fas fa-user text-dark "></i></a>
                            <span class=""><a ><i
                                        class=" fa-solid fa-right-from-bracket text-danger"
                                        style="cursor: pointer"></i></a></span>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="navbar shadow navbar-expand-lg navbar-dark  row   " aria-label="Eighth navbar example">

        </div>
    </header>
</template>

