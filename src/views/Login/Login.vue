

<script>
import HeaderPublic from "../../components/PublicHeader.vue";
import PublicFooters from "../../components/PublicFooters.vue";
import { userAccStore } from "@/Store/userStore";

export default {
  data() {
    const userStore = userAccStore();
    return {
      taikhoan: {
        tenTaiKhoan: "",
        matKhau: "",
      },
      result: {},
      userStore,
      error: false,
    };
  },
  methods: {
    async login(data) {
      try {
        this.result = await taiKhoanService.login(data);
        this.userStore.user = this.result;
        if (this.result.TenTaiKhoan) {
          this.error = false;
          if (this.result.TenTaiKhoan == "admin") {
            this.$router.push({
              name: "ADMIN",
            });
          }

          //  else { this.$router.push({ name: "Forms" }); }
          else {
            this.$router.push({
              name: "Home",
            });
          }
        } else {
          this.error = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    HeaderPublic,
    PublicFooters,
  },
};
</script>

<template>
  <HeaderPublic />
  <div class="container">
    <div>
      <div class="row">
        <div class="col-6 p-5 frame-image">
          <img
            src="../../assets/images/service-health.jpg"
            class="img-fluid"
            alt=""
          />
        </div>

        <div class="col-6">
          <div class="row justify-content-center border-dark">
            <div class="rounded frame-login col-9">
              <h2 class="text-center login-title">Đăng nhập</h2>
              <div class="justify-content-center">
                <div class="form-group mt-1 mb-3">
                  <label for="mssv " class="">Tên Tài khoản:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="mssv "
                    placeholder="Nhập vào tên tài khoản "
                    required
                    v-model="this.taikhoan.tenTaiKhoan"
                  />
                </div>
                <div class="form-group mt-1 mb-3">
                  <label for="pwd">Mật khẩu:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Nhập vào mật khẩu!"
                    v-model="this.taikhoan.matKhau"
                  />
                </div>
                <p v-if="error" class="text-danger">
                  Tên tài khoản hoặc mật khẩu không đúng
                </p>
                <div class="checkbox mt-3">
                  <label
                    ><input type="checkbox" class="fw-bolder" /> Nhớ tài khoản
                    này</label
                  >
                </div>
                <button
                  @click="login(this.taikhoan)"
                  class="btn btn-primary text-light btn-submit border border-white"
                >
                  Đăng nhập
                </button>

                <div>
                  <router-link
                    class="nav-link text-dark mb-2 pb-2 highli"
                    :to="{ name: 'Register' }"
                    >
                    <span class="account text-dark fw-bold">
                            Chưa có tài khoản?

                        </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PublicFooters />
</template>

<style>
@import './Login.module.css';

</style>