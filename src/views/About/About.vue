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
  <HeaderPublic />
  <main class="container-fluid">
   
    <!--  ABOUT US -->
    <div class="container">
      <div class="row py-5">
        <div class="col-6 title">ABOUT US</div>
        <div class="col-6">
          <img
            src="../../assets/images/cat-about.webp "
            class="img-fluid w-100"
            alt=""
          />
        </div>
      </div>
    </div>

    <div>
      <div class="row">
        <div class="col-4 about-detail pt-4 pl-2">
          <ul>
            <li class="btn btn-light text-danger button-style fs-5 fw-bold">
              Về chúng tôi
            </li>
            <li class="detail">Sự khác biệt</li>
            <li class="detail">Đội ngũ</li>
            <li class="detail">Các chương trình</li>
          </ul>
        </div>
        <div class="col-4">
          <h2 class="aboutus text-center pt-4 pb-2">VỀ CHÚNG TÔI</h2>
          <p class="text-center fw-bold mt-2" style="font-size: 30px; font-weight: bold;">BÁC SĨ ĐỘNG VẬT QUỐC TẾ</p>
          <div class="px-2 ">
            <p class="text-dark aboutus-detail " >
              
                Nằm ở cả trung tâm của Thành phố Hồ Chí Minh và Viêng Chăn, VETERINARY CLINIC cố gắng cung cấp các loại thuốc thú y 
              và
              phẫu thuật từ bi, có năng lực và chuyên nghiệp cao nhất cho tất cả
              thú cưng ở Việt Nam và Lào.
            </p>
            <p class="text-dark aboutus-detail">
              Từ việc đảm bảo tính nhất quán trong các tiêu chuẩn quốc tế, tìm
              nguồn cung ứng các đơn thuốc của bác sĩ chuyên khoa từ khắp nơi
              trên thế giới và đi khắp đất nước, Nhóm của chúng tôi làm việc
              không mệt mỏi để hỗ trợ khách hàng của mình bằng mọi cách có thể.
            </p>
            <p class="text-dark aboutus-detail">
              Chúng tôi tự hào có cơ hội làm việc cùng với những khách hàng
              tuyệt vời của chúng tôi (và chủ sở hữu của họ!) để tiếp tục hỗ trợ
              cuộc sống lâu dài, năng động và khỏe mạnh!
            </p>
          </div>
        </div>
        <div class="col-4 m-0">
          <img
            src="../../assets/images/dog-showing.jpg"
            class="w-100 d-block"
            alt="Cho"
          />
        </div>
      </div>
    </div>

    <hr />

    <!-- ss -->
    <div class="col">
      <div class="ss1">
        <div class="mt-2 mb-4">
          <h3 class="text-center title-relate">LIÊN QUAN</h3>
        </div>

        <div class="d-flex justify-content-around">
          <div class="col-4">
            <div class="card m-auto" style="width: 19rem">
              <img
                src="../../assets/images/dog-fever.jpg"
                width="100%"
                class="img-fluid w-100 d-block align-item-center"
                alt=""
              />
              <div class="card-body bg-white" style="height: 200px">
                <div class="card-text">
                  <router-link :to="{ name: 'FeverInDog' }" class="sick-title">
                    BỆNH SỐT Ở CHÓ ?
                  </router-link>
                  <p class="sick-content">
                    Sốt ở chó là tình trạng mà rất nhiều người gặp khi nuôi chó.
                    Có rất nhiều nguyên nhân [...]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4" style="height: 200px">
            <div class="card m-auto" style="width: 19rem">
              <img
                src="../../assets/images/stress-cat.jpg"
                width="100%"
                class="img-fluid w-100 d-block align-item-center"
                alt=""
              />
              <div class="card-body bg-white" style="height: 200px">
                <div class="card-text">
                  <router-link :to="{ name: 'StressCat' }" class="sick-title"
                    >GIẢM CĂNG THẲNG CHO MÈO ?</router-link
                  >
                  <p class="sick-content">
                    Một số lời khuyên hữu ích giúp làm giảm căng thẳng khi đến
                    [...]
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-4" style="height: 200px">
            <div class="card m-auto" style="width: 19rem">
              <img
                src="../../assets/images/dangruff-cat.jpg"
                width="100%"
                class="img-fluid w-100 d-block align-item-center"
                alt=""
              />
              <div class="card-body bg-white" style="height: 200px">
                <div class="card-text">
                  <router-link :to="{ name: 'StressCat' }" class="sick-title"
                    >GIẢM CĂNG THẲNG CHO MÈO ?</router-link
                  >
                  <p class="sick-content">
                    Một số lời khuyên hữu ích giúp làm giảm căng thẳng khi đến
                    [...]
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>

      <!-- <div class="row"></div>
      <div class="row"></div> -->
    </div>
    <hr />

    <div>
      <h3 class="text-center"><b>Chi nhánh</b></h3>
      <div class="row ml-4 mr-4 pb-4">
        <div class="col-4 text-right branch-position">Cần Thơ</div>
        <div class="col-4 text-center branch-position">Hồ Chí Minh</div>
        <div class="col-4 text-left branch-position">Vĩnh Long</div>
      </div>
      <hr />
    </div>
  </main>

  <PublicFooters />
</template>
<style>
@import './About.module.css';

</style>
