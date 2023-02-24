<template>
  <footer>
    <div class="py-5 px-5">
      <div class="row">
        <div class="col-5">
          <div class="d-flex flex-column justify-content-center px-5">
            <img
              src="../assets/images/clinic-logo-footer.jpg "
              width="20%"
              alt=""
            />
            <!-- <img
              src="../assets/images/header-logo.png "
              width="30%"
              alt=""
            /> -->
            <p class="title-footer">SUBSCRIBE TO OUR NEWSLETTER</p>
            <div>
              <form>
                <div class="form-row align-items-center">
                  <div class="col-auto">
                    <!-- <label class="sr-only border border-light" for="inlineFormInputGroup">Username</label> -->
                    <div class="input-group mb-2">
                      <input
                        type="text"
                        class="form-control border-submit"
                        id="inlineFormInputGroup"
                        placeholder="Nhập vào tên tài khoản"
                      />
                      <div class="">
                        <div class="submit-button">Subscribe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <p class="mt-2">Copyright &copy; 2023 VETERINARY CLINIC</p>
          </div>
        </div>
        <div class="col-4">
          <p class="title-footer">VIETNAM</p>
          <p>Hotline: 0389943552</p>
          <p>Email: minh@gmail.com</p>
          <p>
            Opening hours: 9 am – 7 pm (7 days) 24/7 emergency and critical care
          </p>
        </div>
        <div class="col-3">
          <div class="pl-4">
            <li class="p-2 effect-link">Trang chủ</li>
            <li class="p-2 effect-link">Giới thiệu</li>
            <li class="p-2 effect-link">Dịch vụ</li>
            <li class="p-2 effect-link">Liên hệ</li>
            <li class="p-2 effect-link">Đặt lịch</li>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
/* footer {
  background-color: #084d7b;
  color: white;
  font-size: 1rem;
} */

footer {
  background-color: #084d7b;
  color: white;
  font-size: 1rem;
}
.title-footer {
  font-weight: 720;
  margin-top: 20px;
}
.submit-button {
  background-color: red;
  border: none;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
/* .submit-button:before {
  background-color: red;
  color: white;
} */
.submit-button:hover {
  opacity: 0.9;
  border: none;
  background-color: red;
  cursor: pointer;
}
.effect-link:hover {
  color: wheat;
  font-weight: 700;
}
</style>
